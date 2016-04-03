// define Hash table
function Hash() {
	this.length = 0;
	this.items = new Array();
	for (var i = 0; i < arguments.length; i += 2) {
		if (typeof (arguments[i + 1]) != 'undefined') {
			this.items[arguments[i]] = arguments[i + 1];
			this.length++;
		}
	}

	this.removeItem = function(in_key) {
		var tmp_previous;
		if (typeof (this.items[in_key]) != 'undefined') {
			this.length--;
			tmp_previous = this.items[in_key];
			delete this.items[in_key];
		}

		return tmp_previous;
	};

	this.getItem = function(in_key) {
		return this.items[in_key];
	};

	this.add = function(in_key, in_value) {
		var tmp_previous;
		if (typeof (in_value) != 'undefined') {
			if (typeof (this.items[in_key]) == 'undefined') {
				this.length++;
			} else {
				tmp_previous = this.items[in_key];
			}

			this.items[in_key] = in_value;
		}

		return tmp_previous;
	};

	this.hasItem = function(in_key) {
		return typeof (this.items[in_key]) != 'undefined';
	};

	this.clear = function() {
		for ( var i in this.items) {
			delete this.items[i];
		}

		this.length = 0;
	};
}

//////////////////////////////////////////////////////
// Class EmoEngine using Singleton Pattern

var EmoEngine = new function EmoEngine() {
	if (EmoEngine.initialized)
		throw new Error('You may not instantiate EmoEngine');

	var aInstance = this;
	EmoEngine.instance = function() {
		return aInstance;
	};
	return EmoEngine;
};

EmoEngine.initialized = true;
//EmoEngine.prototype.hEvent;// = EdkDll.EE_EmoEngineEventCreate();
//EmoEngine.prototype.hData;
EmoEngine.prototype.ES_List = new Hash();

EmoEngine.prototype.ProcessEvents = function() {
	ProcessEvents(0);
};

/**
 * Get next event and check type of event. After that trigger event.
 */
EmoEngine.prototype.ProcessEvents = function(maxTimeMilliseconds) {
	var start = new Date();

	while (EdkDll.EE_EngineGetNextEvent() == EdkDll.EDK_OK) //edit remove this.hEvent
	{
		var stop = new Date();
		if (maxTimeMilliseconds != 0) {
			var elapsedMilliseconds = stop.getTime() - start.getTime();
			if (elapsedMilliseconds >= maxTimeMilliseconds) {
				break;
			}
		}
		var userId;
		userId = EdkDll.EE_EmoEngineEventGetUserId(); //edit remove this.hEvent
		var eventType = EdkDll.EE_EmoEngineEventGetType(); //edit remove this.hEvent

		switch (eventType) {
		case EdkDll.EE_Event_t.EE_UserAdded:
			this.OnUserAdded(userId);
			break;
		case EdkDll.EE_Event_t.EE_UserRemoved:
			this.OnUserRemoved(userId);
			break;
		case EdkDll.EE_Event_t.EE_EmoStateUpdated:
			var curEmoState = new EmoState(); //Create a object EmoState ()
			EdkDll.EE_EmoEngineEventGetEmoState(); //edit remove this.hEvent ...
			EmoEngine.errorHandler(EdkDll.EE_GetError()); //errorhandler
			this.OnEmoStateUpdated(userId, curEmoState);
			this.OnEmoEngineEmoStateUpdated(userId, curEmoState);
			if (!curEmoState.EmoEngineEqual()) {
				this.OnEmoEngineEmoStateUpdated(userId, curEmoState);
			}
			if (!curEmoState.ExpressivEqual()) {
				this.OnExpressivEmoStateUpdated(userId, curEmoState);
			}
			if (!curEmoState.AffectivEqual()) {
				this.OnAffectivEmoStateUpdated(userId, curEmoState);
			}
			if (!curEmoState.CognitivEqual()) {
				this.OnCognitivEmoStateUpdated(userId, curEmoState);
			}
			break;
		case EdkDll.EE_Event_t.EE_CognitivEvent:
			var cogType = EdkDll.EE_CognitivEventGetType(); //remove this.hEvent
			switch (cogType) {
			case EdkDll.EE_CognitivEvent_t.EE_CognitivTrainingStarted:
				this.OnCognitivTrainingStarted(userId);
				break;
			case EdkDll.EE_CognitivEvent_t.EE_CognitivTrainingSucceeded:
				this.OnCognitivTrainingSucceeded(userId);
				break;
			case EdkDll.EE_CognitivEvent_t.EE_CognitivTrainingFailed:
				this.OnCognitivTrainingFailed(userId);
				break;
			case EdkDll.EE_CognitivEvent_t.EE_CognitivTrainingCompleted:
				this.OnCognitivTrainingCompleted(userId);
				break;
			case EdkDll.EE_CognitivEvent_t.EE_CognitivTrainingDataErased:
				this.OnCognitivTrainingDataErased(userId);
				break;
			case EdkDll.EE_CognitivEvent_t.EE_CognitivTrainingRejected:
				this.OnCognitivTrainingRejected(userId);
				break;
			case EdkDll.EE_CognitivEvent_t.EE_CognitivTrainingReset:
				this.OnCognitivTrainingReset(userId);
				break;
			case EdkDll.EE_CognitivEvent_t.EE_CognitivAutoSamplingNeutralCompleted:
				this.OnCognitivAutoSamplingNeutralCompleted(userId);
				break;
			case EdkDll.EE_CognitivEvent_t.EE_CognitivSignatureUpdated:
				this.OnCognitivSignatureUpdated(userId);
				break;
			default:
				break;
			}
			break;
		case EdkDll.EE_Event_t.EE_ExpressivEvent:
			var expEvent = EdkDll.EE_ExpressivEventGetType(); //remove this.hEvent
			switch (expEvent) {
			case EdkDll.EE_ExpressivEvent_t.EE_ExpressivTrainingStarted:
				this.OnExpressivTrainingStarted(userId);
				break;
			case EdkDll.EE_ExpressivEvent_t.EE_ExpressivTrainingSucceeded:
				this.OnExpressivTrainingSucceeded(userId);
				break;
			case EdkDll.EE_ExpressivEvent_t.EE_ExpressivTrainingFailed:
				this.OnExpressivTrainingFailed(userId);
				break;
			case EdkDll.EE_ExpressivEvent_t.EE_ExpressivTrainingCompleted:
				this.OnExpressivTrainingCompleted(userId);
				break;
			case EdkDll.EE_ExpressivEvent_t.EE_ExpressivTrainingDataErased:
				this.OnExpressivTrainingDataErased(userId);
				break;
			case EdkDll.EE_ExpressivEvent_t.EE_ExpressivTrainingRejected:
				this.OnExpressivTrainingRejected(userId);
				break;
			case EdkDll.EE_ExpressivEvent_t.EE_ExpressivTrainingReset:
				this.OnExpressivTrainingReset(userId);
				break;
			default:
				break;
			}
			break;
		case EdkDll.EE_Event_t.EE_InternalStateChanged:
			this.OnInternalStateChanged(userId);
			break;
		default:
			break;
		}
	}
};

/**
 * Get insight next event and check type of event. After that trigger event.
 */
EmoEngine.prototype.IProcessEvents = function(maxTimeMilliseconds) {
	var start = new Date();

	while (EdkDll.IEE_EngineGetNextEvent() == EdkDll.EDK_OK) //edit remove this.hEvent
	{
		var stop = new Date();
		if (maxTimeMilliseconds != 0) {
			var elapsedMilliseconds = stop.getTime() - start.getTime();
			if (elapsedMilliseconds >= maxTimeMilliseconds) {
				break;
			}
		}
		var userId;
		userId = EdkDll.IEE_EmoEngineEventGetUserId(); //edit remove this.hEvent
		var eventType = EdkDll.IEE_EmoEngineEventGetType(); //edit remove this.hEvent

		switch (eventType) {
		case EdkDll.IEE_Event_t.IEE_UserAdded:
			this.OnUserAdded(userId);
			break;
		case EdkDll.IEE_Event_t.IEE_UserRemoved:
			this.OnUserRemoved(userId);
			break;
		case EdkDll.IEE_Event_t.IEE_EmoStateUpdated:
			var curEmoState = new EmoState(); //Create a object EmoState ()
			EdkDll.IEE_EmoEngineEventGetEmoState(); //edit remove this.hEvent ...
			EmoEngine.errorHandler(EdkDll.EE_GetError()); //errorhandler
			this.OnEmoStateUpdated(userId, curEmoState);
			this.OnEmoEngineEmoStateUpdated(userId, curEmoState);
			if (!curEmoState.IS_EmoEngineEqual()) {
				this.OnEmoEngineEmoStateUpdated(userId, curEmoState);
			}
			if (!curEmoState.IS_FacialExpressionEqual()) {
				this.OnExpressivEmoStateUpdated(userId, curEmoState);
			}
			if (!curEmoState.IS_PerformanceMetricEqual()) {
				this.OnAffectivEmoStateUpdated(userId, curEmoState);
			}
			if (!curEmoState.IS_MentalCommandEqual()) {
				this.OnCognitivEmoStateUpdated(userId, curEmoState);
			}
			break;
		case EdkDll.IEE_Event_t.IEE_MentalCommandEvent:
			var cogType = EdkDll.IEE_MentalCommandEventGetType(); //remove this.hEvent
			switch (cogType) {
			case EdkDll.IEE_MentalCommandEvent_t.IEE_MentalCommandTrainingStarted:
				this.OnCognitivTrainingStarted(userId);
				break;
			case EdkDll.IEE_MentalCommandEvent_t.IEE_MentalCommandTrainingSucceeded:
				this.OnCognitivTrainingSucceeded(userId);
				break;
			case EdkDll.IEE_MentalCommandEvent_t.IEE_MentalCommandTrainingFailed:
				this.OnCognitivTrainingFailed(userId);
				break;
			case EdkDll.IEE_MentalCommandEvent_t.IEE_MentalCommandTrainingCompleted:
				this.OnCognitivTrainingCompleted(userId);
				break;
			case EdkDll.IEE_MentalCommandEvent_t.IEE_MentalCommandTrainingDataErased:
				this.OnCognitivTrainingDataErased(userId);
				break;
			case EdkDll.IEE_MentalCommandEvent_t.IEE_MentalCommandTrainingRejected:
				this.OnCognitivTrainingRejected(userId);
				break;
			case EdkDll.IEE_MentalCommandEvent_t.IEE_MentalCommandTrainingReset:
				this.OnCognitivTrainingReset(userId);
				break;
			case EdkDll.IEE_MentalCommandEvent_t.IEE_MentalCommandAutoSamplingNeutralCompleted:
				this.OnCognitivAutoSamplingNeutralCompleted(userId);
				break;
			case EdkDll.IEE_MentalCommandEvent_t.IEE_MentalCommandSignatureUpdated:
				this.OnCognitivSignatureUpdated(userId);
				break;
			default:
				break;
			}
			break;
		case EdkDll.IEE_Event_t.IEE_FacialExpressionEvent:
			var expEvent = EdkDll.IEE_FacialExpressionEventGetType(); //remove this.hEvent
			switch (expEvent) {
			case EdkDll.IEE_FacialExpressionEvent_t.IEE_FacialExpressionTrainingStarted:
				this.OnExpressivTrainingStarted(userId);
				break;
			case EdkDll.IEE_FacialExpressionEvent_t.IEE_FacialExpressionTrainingSucceeded:
				this.OnExpressivTrainingSucceeded(userId);
				break;
			case EdkDll.IEE_FacialExpressionEvent_t.IEE_FacialExpressionTrainingFailed:
				this.OnExpressivTrainingFailed(userId);
				break;
			case EdkDll.IEE_FacialExpressionEvent_t.IEE_FacialExpressionTrainingCompleted:
				this.OnExpressivTrainingCompleted(userId);
				break;
			case EdkDll.IEE_FacialExpressionEvent_t.IEE_FacialExpressionTrainingDataErased:
				this.OnExpressivTrainingDataErased(userId);
				break;
			case EdkDll.IEE_FacialExpressionEvent_t.IEE_FacialExpressionTrainingRejected:
				this.OnExpressivTrainingRejected(userId);
				break;
			case EdkDll.IEE_FacialExpressionEvent_t.IEE_FacialExpressionTrainingReset:
				this.OnExpressivTrainingReset(userId);
				break;
			default:
				break;
			}
			break;
		case EdkDll.IEE_Event_t.IEE_InternalStateChanged:
			this.OnInternalStateChanged(userId);
			break;
		default:
			break;
		}
	}
};

/**
 * Trigger event user added.
 */
EmoEngine.prototype.OnUserAdded = function(userId) {
	//ELSPlugin().ELS_ES_GetEmoStateDefault();
	var es = new EmoState();
	this.ES_List.add(userId, es);
	// Trigger 'UserAdded' event with one param : 'userId' is integer
	$(document).trigger('UserAdded', [ userId ]);
};

/**
 * Trigger event user removed.
 */
EmoEngine.prototype.OnUserRemoved = function(userId) {
	this.ES_List.removeItem(userId);
	// Trigger 'UserRemoved' event with one param :'userId' is integer
	$(document).trigger('UserRemoved', [ userId ]);
};

/**
 * Trigger event emostate updated.
 */
EmoEngine.prototype.OnEmoStateUpdated = function(userId, curEmoState) {
	// Trigger 'EmoStateUpdated' event with two params :'userId' is Int  and 'curEmoState' is an object of EmoState
	$(document).trigger('EmoStateUpdated', [ userId, curEmoState ]);
};

/**
 * Trigger event emoengine emostate updated.
 */
EmoEngine.prototype.OnEmoEngineEmoStateUpdated = function(userId, es) {
	// Trigger 'EmoEngineEmoStateUpdated' event with two params:'userId' is integer and 'es' is an object of EmoState
	$(document).trigger('EmoEngineEmoStateUpdated', [ userId, es ]);
};

/**
 * Trigger event affectiv emostate updated.
 */
EmoEngine.prototype.OnAffectivEmoStateUpdated = function(userId, es) {
	// Trigger 'AffectivEmoStateUpdated' event with two params:'userId' is integer and 'es' is an object of EmoState
	$(document).trigger('AffectivEmoStateUpdated', [ userId, es ]);
};

/**
 * Trigger event cognitiv emostate updated.
 */
EmoEngine.prototype.OnCognitivEmoStateUpdated = function(userId, es) {
	// Trigger 'CognitivEmoStateUpdated' event with two params:'userId' is integer and 'es' is an object of EmoState
	$(document).trigger('CognitivEmoStateUpdated', [ userId, es ]);
};

/**
 * Trigger event expressiv emostate updated.
 */
EmoEngine.prototype.OnExpressivEmoStateUpdated = function(userId, es) {
	// Trigger 'ExpressivEmoStateUpdated' event with two params:'userId' is integer and 'es' is an object of EmoState
	$(document).trigger('ExpressivEmoStateUpdated', [ userId, es ]);
};

/**
 * Trigger event cognitiv training started.
 */
EmoEngine.prototype.OnCognitivTrainingStarted = function(userId) {
	// Trigger 'CognitivTrainingStarted' event with one param :'userId' is integer
	$(document).trigger('CognitivTrainingStarted', [ userId ]);
};

/**
 * Trigger event cognitiv training succeeded.
 */
EmoEngine.prototype.OnCognitivTrainingSucceeded = function(userId) {
	// Trigger 'CognitivTrainingSucceeded' event with one param :'userId' is integer
	$(document).trigger('CognitivTrainingSucceeded', [ userId ]);
};

/**
 * Trigger event cognitiv training failed.
 */
EmoEngine.prototype.OnCognitivTrainingFailed = function(userId) {
	// Trigger 'CognitivTrainingFailed' event with one param :'userId' is integer
	$(document).trigger('CognitivTrainingFailed', [ userId ]);
};

/**
 * Trigger event cognitiv training completed.
 */
EmoEngine.prototype.OnCognitivTrainingCompleted = function(userId) {
	// Trigger 'CognitivTrainingCompleted' event with one param :'userId' is integer
	$(document).trigger('CognitivTrainingCompleted', [ userId ]);
};

/**
 * Trigger event cognitiv training data erased.
 */
EmoEngine.prototype.OnCognitivTrainingDataErased = function(userId) {
	// Trigger 'CognitivTrainingDataErased' event with one param :'userId' is integer
	$(document).trigger('CognitivTrainingDataErased', [ userId ]);
};

/**
 * Trigger event cognitiv training rejected.
 */
EmoEngine.prototype.OnCognitivTrainingRejected = function(userId) {
	// Trigger 'CognitivTrainingRejected' event with one param :'userId' is integer
	$(document).trigger('CognitivTrainingRejected', [ userId ]);
};

/**
 * Trigger event cognitiv training reset.
 */
EmoEngine.prototype.OnCognitivTrainingReset = function(userId) {
	// Trigger 'CognitivTrainingReset' event with one param :'userId' is integer
	$(document).trigger('CognitivTrainingReset', [ userId ]);
};

/**
 * Trigger event Cognitiv Auto Sampling Neutral Completed.
 */
EmoEngine.prototype.OnCognitivAutoSamplingNeutralCompleted = function(userId) {
	// Trigger 'CognitivAutoSamplingNeutralCompleted' event with one param :'userId' is integer
	$(document).trigger('CognitivAutoSamplingNeutralCompleted', [ userId ]);
};

/**
 * Trigger event Cognitiv signature updated.
 */
EmoEngine.prototype.OnCognitivSignatureUpdated = function(userId) {
	// Trigger 'CognitivSignatureUpdated' event with one param :'userId' is integer
	$(document).trigger('CognitivSignatureUpdated', [ userId ]);
};

/**
 * Trigger event expressiv training started.
 */
EmoEngine.prototype.OnExpressivTrainingStarted = function(userId) {
	// Trigger 'ExpressivTrainingStarted' event with one param :'userId' is integer
	$(document).trigger('ExpressivTrainingStarted', [ userId ]);
};

/**
 * Trigger event expressiv training succeeded.
 */
EmoEngine.prototype.OnExpressivTrainingSucceeded = function(userId) {
	// Trigger 'ExpressivTrainingSucceeded' event with one param :'userId' is integer
	$(document).trigger('ExpressivTrainingSucceeded', [ userId ]);
};

/**
 * Trigger event expressiv training failed.
 */
EmoEngine.prototype.OnExpressivTrainingFailed = function(userId) {
	// Trigger 'ExpressivTrainingFailed' event with one param :'userId' is integer
	$(document).trigger('ExpressivTrainingFailed', [ userId ]);
};

/**
 * Trigger event expressiv training completed.
 */
EmoEngine.prototype.OnExpressivTrainingCompleted = function(userId) {
	// Trigger 'ExpressivTrainingCompleted' event with one param :'userId' is integer
	$(document).trigger('ExpressivTrainingCompleted', [ userId ]);
};

/**
 * Trigger event expressiv training data erased.
 */
EmoEngine.prototype.OnExpressivTrainingDataErased = function(userId) {
	// Trigger 'ExpressivTrainingDataErased' event with one param :'userId' is integer
	$(document).trigger('ExpressivTrainingDataErased', [ userId ]);
};

/**
 * Trigger event expressiv training rejected.
 */
EmoEngine.prototype.OnExpressivTrainingRejected = function(userId) {
	// Trigger 'ExpressivTrainingRejected' event with one param :'userId' is integer
	$(document).trigger('ExpressivTrainingRejected', [ userId ]);
};

/**
 * Trigger event expressiv training reset.
 */
EmoEngine.prototype.OnExpressivTrainingReset = function(userId) {
	// Trigger 'ExpressivTrainingReset' event with one param :'userId' is integer
	$(document).trigger('ExpressivTrainingReset', [ userId ]);
};

/**
 * Trigger event internal stated changed.
 */
EmoEngine.prototype.OnInternalStateChanged = function(userId) {
	// Trigger 'InternalStateChanged' event with one param :'userId' is integer
	$(document).trigger('InternalStateChanged', [ userId ]);
};

/**
 * Trigger event emoengine connected.
 */
EmoEngine.prototype.OnEmoEngineConnected = function() {
	this.ES_List.clear();
	// Trigger 'EmoEngineConnected' event with one param :'userId' is integer
	$(document).trigger('EmoEngineConnected');
};

/**
 * Trigger event emoengine disconnected.
 */
EmoEngine.prototype.OnEmoEngineDisconnected = function() {
	this.ES_List.clear();
	// Trigger 'EmoEngineDisconnected' event with one param :'userId' is integer
	$(document).trigger('EmoEngineDisconnected');
};

/**
 * Handler error that returned from EE_GetError function.
 */
EmoEngine.errorHandler = function(errorCode) {
	if (errorCode == EdkDll.EDK_OK)
		return;

	var errorStr = "";
	switch (errorCode) {
	case EdkDll.EDK_INVALID_PROFILE_ARCHIVE:
		errorStr = "Invalid profile archive";
		break;
	case EdkDll.EDK_NO_USER_FOR_BASEPROFILE:
		errorStr = "The base profile does not have a user ID";
		break;
	case EdkDll.EDK_CANNOT_ACQUIRE_DATA:
		errorStr = "EmoEngine is unable to acquire EEG input data";
		break;
	case EdkDll.EDK_BUFFER_TOO_SMALL:
		errorStr = "A supplied buffer is not large enough";
		break;
	case EdkDll.EDK_OUT_OF_RANGE:
		errorStr = "Parameter is out of range";
		break;
	case EdkDll.EDK_INVALID_PARAMETER:
		errorStr = "Parameter is invalid";
		break;
	case EdkDll.EDK_PARAMETER_LOCKED:
		errorStr = "Parameter is locked";
		break;
	case EdkDll.EDK_INVALID_USER_ID:
		errorStr = "User ID supplied to the function is invalid";
		break;
	case EdkDll.EDK_EMOENGINE_UNINITIALIZED:
		errorStr = "EmoEngine has not been initialized";
		break;
	case EdkDll.EDK_EMOENGINE_DISCONNECTED:
		errorStr = "Connection with remote instance of EmoEngine has been lost";
		break;
	case EdkDll.EDK_EMOENGINE_PROXY_ERROR:
		$(document).trigger('EmoEngineErrorRemote');
		errorStr = "Unable to establish connection with remote instance of EmoEngine.";
		break;
	case EdkDll.EDK_NO_EVENT:
		errorStr = "There are no new EmoEngine events at this time.";
		break;
	case EdkDll.EDK_GYRO_NOT_CALIBRATED:
		errorStr = "The gyro could not be calibrated.  The headset must remain still for at least 0.5 secs.";
		break;
	case EdkDll.EDK_OPTIMIZATION_IS_ON:
		errorStr = "The requested operation failed due to optimization settings.";
		break;
	case EdkDll.EDK_UNKNOWN_ERROR:
		errorStr = "Unknown error";
		break;
	default:
		$(document).trigger('EmoEngineUnknownError');
		errorStr = "Unknown error";
		break;
	}
	throw errorStr;
};

/**
 * Initializes the connection to EmoEngine. This function should be called at the beginning of programs that make use of EmoEngine, most probably in initialization routine or constructor.
 * Trigger event EmoEngine Connected if successful.
 */
EmoEngine.prototype.Connect = function() {
	//this.errorHandler(EdkDll.EE_EngineConnect());
	this.k = EdkDll.EE_EngineConnect();
	//this.hEvent = EdkDll.EE_EmoEngineEventCreate(); //remove this.hEvent
	//alert("hEvent ="+this.hEvent);
	this.OnEmoEngineConnected();
};

/**
 * Initializes the connection to a remote instance of EmoEngine.
 * Trigger event EmoEngine Connected if remote connect successfully.
 */
EmoEngine.prototype.RemoteConnect = function() {
	EmoEngine.errorHandler(EdkDll.EE_EngineRemoteConnect()); //remove ip,port params
	this.OnEmoEngineConnected();
};

/**
 * Terminates the connection to EmoEngine. This function should be called at the end of programs which make use of EmoEngine, most probably in clean up routine or destructor.
 * Trigger event emoengine disconnected if successful.
 */
EmoEngine.prototype.Disconnect = function() {
	EmoEngine.errorHandler(EdkDll.EE_EngineDisconnect());
	this.OnEmoEngineDisconnected();
};

/**
 * Retrieves number of active users connected to the EmoEngine.
 * @Return number of users.
 */
EmoEngine.prototype.EngineGetNumUser = function() {
	var EngineGetNumUser = EdkDll.EE_EngineGetNumUser();
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return EngineGetNumUser;
};

/**
 * Returns the current hardware version of the headset and dongle for a particular user
 * @param userId - EmoEngine user ID
 * @returns long - hardware version
 */
EmoEngine.prototype.HardwareGetVersion = function(userId) {
	var HardwareGetVersion = EdkDll.EE_HardwareGetVersion(userId);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return HardwareGetVersion;
};

//EmoEngine.prototype.SetHardwarePlayerDisplay = function(playerNum) {
//	EmoEngine.errorHandler(EdkDll.EE_SetHardwarePlayerDisplay(playerNum));
//};


/* EmoEngine.prototype.SetUserProfile(profileBuffer, length)
{
}*/
/*
 public Profile GetUserProfile(UInt32 userId)
 {
 } */

 /**
 * Loads a user profile from disk and assigns it to the specified user.
 * @params userID - int: ID of current user.
			szInputFilename - string: filename to load profile.
 * @return EDK_ERROR_CODE
                 - EDK_ERROR_CODE = EDK_OK if successful.
 */
 EmoEngine.prototype.EE_LoadUserProfile = function(userId, szInputFilename)
{
	var EE_LoadUserProfile = EdkDll.EE_LoadUserProfile(userID, szInputFilename);
	EmoEngine.errorHandler(EE_LoadUserProfile);
	return EE_LoadUserProfile;
};

/**
 * Saves a user profile for specified user to disk.
 * @params userID - int: ID of current user
			szOutputFilename - string: filename to save profile.
 * @return EDK_ERROR_CODE
                 - EDK_ERROR_CODE = EDK_OK if successful.
 */
 EmoEngine.prototype.EE_SaveUserProfile = function(userID, szOutputFilename)
 {
	var EE_SaveUserProfile = EdkDll.EE_SaveUserProfile(userID, szOutputFilename);
	EmoEngine.errorHandler(EE_SaveUserProfile);
	return EE_SaveUserProfile;
 };

/**
 * Set threshold for Expressiv algorithms.
 * @params userId - int: ID of current user.
			algoName - EE_ExpressivAlgo_t: Expressiv action to set threshold.
			thresholdName - EE_ExpressivThreshold_t: threshold type to set.
			value - int: threshold value will be set to.
 * @return EDK_ERROR_CODE
                 - EDK_ERROR_CODE = EDK_OK if successful.
 */
EmoEngine.prototype.ExpressivSetThreshold = function(userId, algoName, thresholdName, value)
{
	var ExpressivSetThreshold = EdkDll.EE_ExpressivSetThreshold(userId, algoName, thresholdName, value);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return ExpressivSetThreshold;
};

/**
 * Returns the delta of the movement of the gyro since the previous call for a particular user.
 * @param userId - user ID for query.
 * @return array - pXOut: horizontal displacement, pYOut: vertical displacment.
 */
EmoEngine.prototype.HeadsetGetGyroDelta = function(userId)
{
	HeadsetGetGyroDelta = EdkDll.EE_HeadsetGetGyroDelta(userId);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return HeadsetGetGyroDelta; //remove ,size param
};

//////////////////////////////////////////////////////////////////////////////////////

/**
 * Get threshold from Expressiv algorithms.
 * @params userId - int: ID of current user.
			algoName - EE_ExpressivAlgo_t: Expressiv action to get threshold.
			thresholdName - EE_ExpressivThreshold_t: threshold type to get.
 * @returns int - threshold value.
 */
EmoEngine.prototype.ExpressivGetThreshold = function(userId, algoName, thresholdName)
{
	var ExpressivGetThreshold = EdkDll.EE_ExpressivGetThreshold(userId, algoName, thresholdName);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return ExpressivGetThreshold;
};

/**
 * Set the current facial expression for Expressiv training.
 * @params userId - int: ID of current user.
			action - EE_ExpressivAlgo_t: Expressiv action to set training.
 * @return EDK_ERROR_CODE
                 - EDK_ERROR_CODE = EDK_OK if successful.
 */
EmoEngine.prototype.ExpressivSetTrainingAction = function(userId, action)
{
	var ExpressivSetTrainingAction = EdkDll.EE_ExpressivSetTrainingAction(userId, action);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return ExpressivSetTrainingAction;
};

/**
 * Set the control flag for Expressiv training.
 * @params userId - int: ID of current user.
			control - EE_ExpressivTrainingControl_t: Expressiv control for training.
 * @returns EDK_ERROR_CODE
                 - EDK_ERROR_CODE = EDK_OK if successful.
 */
EmoEngine.prototype.ExpressivSetTrainingControl = function(userId, control)
{
	var ExpressivSetTrainingControl = EdkDll.EE_ExpressivSetTrainingControl(userId, control);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return ExpressivSetTrainingControl;
};

/**
 * Gets the expression currently selected for Expressiv training.
 * @params userId - int: ID of current user.
 * @returns EE_ExpressivAlgo_t - current training expressiv action.
 */
EmoEngine.prototype.ExpressivGetTrainingAction = function(userId)
{
	var ExpressivGetTrainingAction = EdkDll.EE_ExpressivGetTrainingAction(userId);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return ExpressivGetTrainingAction;
};

/**
 * Return the duration of a Expressiv training session.
 * @params userId - int: ID of current user.
 * @returns int - time training in second.
 */
EmoEngine.prototype.ExpressivGetTrainingTime = function(userId)
{
	var ExpressivGetTrainingTime = EdkDll.EE_ExpressivGetTrainingTime(userId);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return ExpressivGetTrainingTime;
};

/**
 * Gets a list of the actions that have been trained by the user.
 * @params userId - int: ID of current user.
 * @returns long - actions that have been trained, in EE_ExpressivAlgo_t.
 */
EmoEngine.prototype.ExpressivGetTrainedSignatureActions = function(userId)
{
	var ExpressivGetTrainedSignatureActions = EdkDll.EE_ExpressivGetTrainedSignatureActions(userId);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return ExpressivGetTrainedSignatureActions;
};

/**
 * Gets a flag indicating if the user has trained sufficient actions to activate a trained signature.
 * @params userId - int: ID of current user.
 * @returns int - receives an int that is non-zero if a trained signature can be activated.
 */
EmoEngine.prototype.ExpressivGetTrainedSignatureAvailable = function(userId)
{
	var ExpressivGetTrainedSignatureAvailable = EdkDll.EE_ExpressivGetTrainedSignatureAvailable(userId);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return ExpressivGetTrainedSignatureAvailable;
};

/**
 * Configures the Expressiv suite to use either the built-in, universal signature or a personal, trained signature.
 * @params userId - int: ID of current user.
			sigType - EE_ExpressivSignature_t: signature type to set.
 * @return EDK_ERROR_CODE
                 - EDK_ERROR_CODE = EDK_OK if successful.
 */
EmoEngine.prototype.ExpressivSetSignatureType = function(userId, sigType)
{
	var ExpressivSetSignatureType = EdkDll.EE_ExpressivSetSignatureType(userId, sigType);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return ExpressivSetSignatureType;
};

/**
 * Indicates whether the Expressiv suite is currently using either the built-in, universal signature or a trained signature.
 * @params userId - int: ID of current user.
 * @returns EE_ExpressivSignature_t - signature type.
 */
EmoEngine.prototype.ExpressivGetSignatureType = function(userId)
{
	var ExpressivGetSignatureType = EdkDll.EE_ExpressivGetSignatureType(userId);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return ExpressivGetSignatureType;
};

/**
 * Set the current Cognitiv active action types.
 * @params userId - int: ID of current user.
			activeActions - a bit vector composed of EE_CognitivAction_t contants.
 * @returns EDK_ERROR_CODE
                 - EDK_ERROR_CODE = EDK_OK if successful.
 */
EmoEngine.prototype.CognitivSetActiveActions = function(userId, activeActions)
{
	var CognitivSetActiveActions = EdkDll.EE_CognitivSetActiveActions(userId, activeActions);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return CognitivSetActiveActions;
};

/**
 * Get the current Cognitiv active action types.
 * @params userId - int: ID of current user.
 * @returns activeActions - a bit vector composed of EE_CognitivAction_t contants.
 */
EmoEngine.prototype.CognitivGetActiveActions = function(userId)
{
	var CognitivGetActiveActions = EdkDll.EE_CognitivGetActiveActions(userId);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return CognitivGetActiveActions;
};

/**
 * Set cognitiv action to enable or disable, true is enable, false is disable, number of actions to enable is not exceed 4.
 * @params cognitivAction - a bit vector composed of EE_CognitivAction_t contants.
			cogBool - true is enable, false is disable
 * @returns int = 0 if ok, -1 if not ok.
 */
EmoEngine.prototype.EnableCognitivAction = function(cognitivAction, cogBool)
{
	var EnableCognitivAction = EdkDll.EE_EnableCognitivAction(cognitivAction, cogBool);
	EmoEngine.errorHandler(EnableCognitivAction);
	return EnableCognitivAction;
};

/**
 * All action that is set to enable will be set active through this function (number of enabled actions is not exceed 4).
 * @params userId - ID of current user.
 * @returns EDK_ERROR_CODE
                 - EDK_ERROR_CODE = EDK_OK if successful.
 */
EmoEngine.prototype.EnableCognitivActionsList = function(userId)
{
	var EnableCognitivActionsList = EdkDll.EE_EnableCognitivActionsList(userId);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return EnableCognitivActionsList;
};

/**
 * Get cognitiv actions that is set to active.
 * @params userId - ID of current user.
 * @returns array - cognitiv actions.
 */
EmoEngine.prototype.CognitivGetActionsEnabled = function(userId)
{
	var CognitivGetActionsEnabled = EdkDll.EE_CognitivGetActionsEnabled(userId);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return CognitivGetActionsEnabled;
};

/**
 * Return the duration of a Cognitiv training session.
 * @params userId - ID of current user.
 * @returns receive the training time in ms.
 */
EmoEngine.prototype.CognitivGetTrainingTime = function(userId)
{
	var CognitivGetTrainingTime = EdkDll.EE_CognitivGetTrainingTime(userId);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return CognitivGetTrainingTime;
};

/**
 * Set the training control flag for Cognitiv training.
 * @params userId - ID of current user.
			control - EE_CognitivTrainingControl_t pre-defined Cognitiv training control.
 * @returns EDK_ERROR_CODE
                - EDK_ERROR_CODE = EDK_OK if successful.
 */
EmoEngine.prototype.CognitivSetTrainingControl = function(userId, control)
{
	var CognitivSetTrainingControl = EdkDll.EE_CognitivSetTrainingControl(userId, control);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return CognitivSetTrainingControl;
};

/**
 * Set the type of Cognitiv action to be trained.
 * @params userId - ID of current user.
			action - EE_CognitivAction_t which action would like to be trained.
 * @returns EDK_ERROR_CODE
                - EDK_ERROR_CODE = EDK_OK if successful.			
 */
EmoEngine.prototype.CognitivSetTrainingAction = function(userId, action)
{
	var CognitivSetTrainingAction = EdkDll.EE_CognitivSetTrainingAction(userId, action);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return CognitivSetTrainingAction;
};

//EmoEngine.prototype.CognitivGetTrainingAction = function(userId) {
//};

/**
 * Gets a list of the Cognitiv actions that have been trained by the user.
 * @params userId - ID of current user.
 * @returns long - list of the Cognitiv actions that have been trained by the user.
 */
EmoEngine.prototype.CognitivGetTrainedSignatureActions = function(userId)
{
	var CognitivGetTrainedSignatureActions = EdkDll.EE_CognitivGetTrainedSignatureActions(userId);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return CognitivGetTrainedSignatureActions;
};

/**
 * Gets the current overall skill rating of the user in Cognitiv.
 * @params userId - ID of current user.
 * @returns float - receives the overall skill rating [from 0.0 to 1.0].
 */
EmoEngine.prototype.CognitivGetOverallSkillRating = function(userId)
{
	var CognitivGetOverallSkillRating = EdkDll.EE_CognitivGetOverallSkillRating(userId);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return CognitivGetOverallSkillRating;
};

/**
 * Gets the current skill rating for particular Cognitiv actions of the user.
 * @params userId - ID of current user.
			action - EE_CognitivAction_t a particular action of EE_CognitivAction_t contant
 * @returns float - receives the action skill rating [from 0.0 to 1.0].
 */
EmoEngine.prototype.CognitivGetActionSkillRating = function(userId, action)
{
	var CognitivGetActionSkillRating = EdkDll.EE_CognitivGetActionSkillRating(userId, action);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return CognitivGetActionSkillRating;
};

/**
 * Set the overall sensitivity for all Cognitiv actions.
 * @params userId - ID of current user.
			level - sensitivity level of all actions (lowest: 1, highest: 7)
 * @returns EDK_ERROR_CODE
                - EDK_ERROR_CODE = EDK_OK if successful.
 */
EmoEngine.prototype.CognitivSetActivationLevel = function(userId, level)
{
	var CognitivSetActivationLevel = EdkDll.EE_CognitivSetActivationLevel(userId, level);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return CognitivSetActivationLevel;
};

/**
 * Set the sensitivity of Cognitiv actions.
 * @params userId - ID of current user.
			action1Sensitivity - sensitivity of action 1 (min: 1, max: 10)
			action2Sensitivity - sensitivity of action 2 (min: 1, max: 10)
			action3Sensitivity - sensitivity of action 3 (min: 1, max: 10)
			action4Sensitivity - sensitivity of action 4 (min: 1, max: 10)
 * @returns EDK_ERROR_CODE
                - EDK_ERROR_CODE = EDK_OK if successful.
 */
EmoEngine.prototype.CognitivSetActionSensitivity = function(userId,
		action1Sensitivity, action2Sensitivity, action3Sensitivity,
		action4Sensitivity)
{
	var CognitivSetActionSensitivity = EdkDll.EE_CognitivSetActionSensitivity(userId,
			action1Sensitivity, action2Sensitivity, action3Sensitivity, action4Sensitivity);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return CognitivSetActionSensitivity;
};

/**
 * Get the overall sensitivity for all Cognitiv actions.
 * @params userId - ID of current user.
 * @returns int - sensitivity level of all actions (min: 1, max: 10).
 */
EmoEngine.prototype.CognitivGetActivationLevel = function(userId)
{
	var CognitivGetActivationLevel = EdkDll.EE_CognitivGetActivationLevel(userId);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return CognitivGetActivationLevel;
};

/**
 * Query the sensitivity of Cognitiv actions.
 * @params userId - ID of current user.
 * @returns array - contains sensitivity for actions: pAction1SensitivityOut, pAction2SensitivityOut, pAction3SensitivityOut, pAction4SensitivityOut.
 * @returns EDK_ERROR_CODE
                - EDK_ERROR_CODE = EDK_OK if successful.
 */
EmoEngine.prototype.CognitivGetActionSensitivity = function(userId)
{
	var CognitivGetActionSensitivity = EdkDll.EE_CognitivGetActionSensitivity(userId);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return CognitivGetActionSensitivity;
};

//EmoEngine.prototype.CognitivStartSamplingNeutral = function(userId) {
	//EmoEngine.errorHandler(EdkDll.EE_CognitivStartSamplingNeutral(userId));
//};

//EmoEngine.prototype.CognitivStopSamplingNeutral = function(userId) {
	//EmoEngine.errorHandler(EdkDll.EE_CognitivStopSamplingNeutral(userId));
//};

/**
 * Enable or disable signature caching in Cognitiv.
 * @params userId - ID of current user.
			enabled - flag to set status of caching (1: enable, 0: disable)
 * @returns EDK_ERROR_CODE
                - EDK_ERROR_CODE = EDK_OK if successful.
 */
EmoEngine.prototype.CognitivSetSignatureCaching = function(userId, enabled)
{
	var CognitivSetSignatureCaching = EdkDll.EE_CognitivSetSignatureCaching(userId, enabled);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return CognitivSetSignatureCaching;
};

/**
 * Query the status of signature caching in Cognitiv.
 * @params userId - ID of current user.
 * @returns int - flag to get status of caching (1: enable, 0: disable).
 */
EmoEngine.prototype.CognitivGetSignatureCaching = function(userId)
{
	var CognitivGetSignatureCaching = EdkDll.EE_CognitivGetSignatureCaching(userId);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return CognitivGetSignatureCaching;
};

/**
 * Set the cache size for the signature caching in Cognitiv.
 * @params userId - ID of current user.
			size   - int number of signatures to be kept in the cache (0: unlimited)
 * @returns EDK_ERROR_CODE
                - EDK_ERROR_CODE = EDK_OK if successful.
 */
EmoEngine.prototype.CognitivSetSignatureCacheSize = function(userId, size)
{
	var CognitivSetSignatureCacheSize = EdkDll.EE_CognitivSetSignatureCacheSize(userId, size);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return CognitivSetSignatureCacheSize;
};

/**
 * Get the current cache size for the signature caching in Cognitiv.
 * @params userId - ID of current user.
 * @returns int - number of signatures to be kept in the cache (0: unlimited).
 */
EmoEngine.prototype.CognitivGetSignatureCacheSize = function(userId)
{
	var CognitivGetSignatureCacheSize = EdkDll.EE_CognitivGetSignatureCacheSize(userId);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return CognitivGetSignatureCacheSize;
};


/**
 * Returns a array containing details about sensor location and other info
 * @param channelId - EE_InputChannels_t epoc channel identifier has values in EE_InputChannels_t
 * @returns InputSensorDescriptor_t - detailed sensor location and other info
 */
EmoEngine.prototype.HeadsetGetSensorDetails = function(channelId)
{
	var HeadsetGetSensorDetails = EdkDll.EE_HeadsetGetSensorDetails(channelId);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return HeadsetGetSensorDetails;
}

/**
 * Returns the current hardware version of the headset and dongle for a particular user
 * @param userId - user ID for query
 * @return unsigned long - hardware version for the user headset/dongle pair. hiword is headset version, loword is dongle version.
 * ex: with result = 0x1E001FFF, Headset version is 1E00 (check EdkDll.EE_HeadsetVersion_t for version of headset) and dongle version is 1FFF.
 */
EmoEngine.prototype.HardwareGetVersion = function(userId)
{
	var HardwareGetVersion = EdkDll.EE_HardwareGetVersion(userId);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return HardwareGetVersion;
};

/**
 * Returns the current version of the Emotiv SDK software.
 * @param nVersionChars - Length of char buffer pointed to by pszVersion argument.
 * @return array - pszVersionOut - SDK software version in X.X.X.X format. Note: current beta releases have a major version of 0.
					Build number.  Unique for each release.
 */
EmoEngine.prototype.SoftwareGetVersion = function(nVersionChars)
{
	var SoftwareGetVersion = EdkDll.EE_SoftwareGetVersion(nVersionChars);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return SoftwareGetVersion;
}

/**
 * Returns the delta of the movement of the gyro since the previous call for a particular user.
 * @param userId - user ID for query.
 * @return array - pXOut: horizontal displacement, pYOut: vertical displacment.
 */
EmoEngine.prototype.HeadsetGetGyroDelta = function(userId)
{
	var HeadsetGetGyroDelta = EdkDll.EE_HeadsetGetGyroDelta(userId);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return HeadsetGetGyroDelta;
};

/**
 * Re-zero the gyro for a particular user.
 * @param userId - user ID for query.
 * @returns EDK_ERROR_CODE
                - EDK_ERROR_CODE = EDK_OK if successful.
 */
EmoEngine.prototype.HeadsetGyroRezero = function(userId)
{
	var HeadsetGyroRezero = EdkDll.EE_HeadsetGyroRezero(userId);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return HeadsetGyroRezero;
};
/*  
//EmoEngine.prototype.OptimizationEnable  = function( param)
//{
//}

//public Boolean OptimizationIsEnabled()
//{
//}

//EmoEngine.prototype.OptimizationDisable()
//{
//}

//public OptimizationParam OptimizationGetParam()
//{
//}

//EmoEngine.prototype.ResetDetection(UInt32 userId, EdkDll.EE_EmotivSuite_t suite, UInt32 detectionBitVector)
//{
	//errorHandler(EdkDll.EE_ResetDetection(userId, suite, detectionBitVector));
//}
 */

/**
 * Insight functions
 */
/**
 * Connect to Insight Headset.
 * 
 * Trigger emoengine connected event.
 */     
EmoEngine.prototype.IConnect = function()
{
	this.k = EdkDll.IEE_EngineConnect();
	this.OnEmoEngineConnected();
};

/**
 * Connect to Insight Composer.
 * 
 * Trigger emoengine connected event.
 */
EmoEngine.prototype.IRemoteConnect = function()
{
	EmoEngine.errorHandler(EdkDll.IEE_EngineRemoteConnect());
	this.OnEmoEngineConnected();
};

/**
 * Retrieves the next EmoEngine event.
 * 
 * Trigger emoengine disconnected event.
 */
EmoEngine.prototype.IDisconnect = function()
{
	EmoEngine.errorHandler(EdkDll.IEE_EngineDisconnect());
	this.OnEmoEngineDisconnected();
};

/**
 * Retrieves number of active users connected to the EmoEngine.
 * 
 * @returns number of users.
 */
EmoEngine.prototype.IEngineGetNumUser = function()
{
	var IEngineGetNumUser = EdkDll.IEE_EngineGetNumUser();
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return IEngineGetNumUser;
};

/**
 * Returns the current hardware version of the headset and dongle for a particular user.
 * @param userId - user ID for query.
 * @return unsigned long - hardware version for the user headset/dongle pair. hiword is headset version, loword is dongle version.
 * ex: with result = 0x1E001FFF, Headset version is 1E00 (check EdkDll.IEE_HeadsetVersion_t for version of headset) and dongle version is 1FFF.
 */
EmoEngine.prototype.IHardwareGetVersion = function(userId)
{
	var IHardwareGetVersion = EdkDll.IEE_HardwareGetVersion(userId);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return IHardwareGetVersion;
};

//EmoEngine.prototype.SetHardwarePlayerDisplay = function(playerNum) {
	//EmoEngine.errorHandler(EdkDll.EE_SetHardwarePlayerDisplay(playerNum));
//};

/**
 * Set threshold for FacialExpression algorithms.
 * 
 * @param userId -
 *            user ID.
 * @param algoName -
 *            IEE_FacialExpressionAlgo_t: FacialExpression algorithm type.
 * @param thresholdName -
 *            IEE_FacialExpressionThreshold_t: FacialExpression threshold type.
 * @param value: -
 *            threshold value (min: 0 max: 1000).
 * @returns EDK_ERROR_CODE
                - EDK_ERROR_CODE = EDK_OK if successful.
 */
EmoEngine.prototype.FacialExpressionSetThreshold = function(userId, algoName,
		thresholdName, value)
{
	var FacialExpressionSetThreshold = EdkDll.IEE_FacialExpressionSetThreshold(userId, algoName, thresholdName, value);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return FacialExpressionSetThreshold;
};

/**
 * Returns the delta of the movement of the gyro since the previous call for a
 * particular user
 * 
 * @param userId -
 *            user ID for query
 * @returns: array of positions (pXOut, pYOut)
 */
EmoEngine.prototype.IHeadsetGetGyroDelta = function(userId, size)
{
	var IHeadsetGetGyroDelta = EdkDll.IEE_HeadsetGetGyroDelta(userId);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return IHeadsetGetGyroDelta; //remove ,size param
};

//////////////////////////////////////////////////////////////////////////////////////

/**
 * Get threshold from FacialExpression algorithms.
 * 
 * @param userId-
 *            user ID.
 * @param algoName -
 *            IEE_FacialExpressionAlgo_t: FacialExpression algorithm type.
 * @param thresholdName -
 *            IEE_FacialExpressionThreshold_t: FacialExpression threshold type.
 * @returns: int - threshold value.
 */
EmoEngine.prototype.FacialExpressionGetThreshold = function(userId, algoName,
		thresholdName)
{
	var FacialExpressionGetThreshold = EdkDll.IEE_FacialExpressionGetThreshold(userId, algoName,
			thresholdName);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return FacialExpressionGetThreshold;
};

/**
 * Set the current facial expression for FacialExpression training.
 * 
 * @param userId -
 *            user ID.
 * @param action -
 *            IEE_FacialExpressionAlgo_t: which facial expression would like to be trained/
 * @returns EDK_ERROR_CODE
                - EDK_ERROR_CODE = EDK_OK if successful.
 */
EmoEngine.prototype.FacialExpressionSetTrainingAction = function(userId, action)
{
	var FacialExpressionSetTrainingAction = EdkDll.IEE_FacialExpressionSetTrainingAction(userId, action);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return FacialExpressionSetTrainingAction;
};

/**
 * Set the control flag for FacialExpression training.
 * 
 * @param userId -
 *            user ID.
 * @param control -
 *            IEE_FacialExpressionTrainingControl_t: pre-defined control command.
 * @returns EDK_ERROR_CODE
                - EDK_ERROR_CODE = EDK_OK if successful.
 */
EmoEngine.prototype.FacialExpressionSetTrainingControl = function(userId, control)
{
	var FacialExpressionSetTrainingControl = EdkDll.IEE_FacialExpressionSetTrainingControl(userId, control);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return FacialExpressionSetTrainingControl;
};

//EmoEngine.prototype.FacialExpressionGetTrainingAction = function(userId) {
//};

//EmoEngine.prototype.FacialExpressionGetTrainingTime = function(userId) {
//};

/**
 * Gets a list of the actions that have been trained by the user.
 * 
 * @param userId -
 *            user ID.
 * @returns: a bit vector composed of IEE_FacialExpressionAlgo_t contants.
 */
EmoEngine.prototype.FacialExpressionGetTrainedSignatureActions = function(userId)
{
	var FacialExpressionGetTrainedSignatureActions = EdkDll.IEE_FacialExpressionGetTrainedSignatureActions(userId);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return FacialExpressionGetTrainedSignatureActions;
};

/**
 * Gets a flag indicating if the user has trained sufficient actions to activate
 * a trained signature.
 * 
 * @param userId -
 *            user ID.
 * @returns: int that is non-zero if a trained signature can be activated.
 */
EmoEngine.prototype.FacialExpressionGetTrainedSignatureAvailable = function(userId)
{
	var FacialExpressionGetTrainedSignatureAvailable = EdkDll.IEE_FacialExpressionGetTrainedSignatureAvailable(userId);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return FacialExpressionGetTrainedSignatureAvailable;
};

/**
 * Configures the FacialExpression suite to use either the built-in, universal
 * signature or a personal, trained signature.
 * 
 * @param userId -
 *            user ID.
 * @param sigType -
 *            IEE_FacialExpressionSignature_t: signature type to use.
 * @returns EDK_ERROR_CODE
                - EDK_ERROR_CODE = EDK_OK if successful.
 */
EmoEngine.prototype.FacialExpressionSetSignatureType = function(userId, sigType)
{
	var FacialExpressionSetSignatureType = EdkDll.IEE_FacialExpressionSetSignatureType(userId, sigType);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return FacialExpressionSetSignatureType;
};

/**
 * Indicates whether the FacialExpression suite is currently using either the
 * built-in, universal signature or a trained signature.
 * 
 * @param userId -
 *            user ID.
 * @returns: int - the signature type currently in use.
 */
EmoEngine.prototype.FacialExpressionGetSignatureType = function(userId)
{
	var FacialExpressionGetSignatureType = EdkDll.IEE_FacialExpressionGetSignatureType(userId);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return FacialExpressionGetSignatureType;
};

/**
 * Set the current MentalCommand active action types.
 * 
 * @param userId -
 *            user ID.
 * @param activeActions -
 *            long: a bit vector composed of IEE_MentalCommandAction_t contants.
 * @returns EDK_ERROR_CODE
                - EDK_ERROR_CODE = EDK_OK if successful.
 */
EmoEngine.prototype.MentalCommandSetActiveActions = function(userId, activeActions)
{
	var MentalCommandSetActiveActions = EdkDll.IEE_MentalCommandSetActiveActions(userId, activeActions);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return MentalCommandSetActiveActions;
};

/**
 * Get the current MentalCommand active action types.
 * 
 * @param userId -
 *            user ID.
 * @returns: a bit vector composed of IEE_MentalCommandAction_t contants.
 */
EmoEngine.prototype.MentalCommandGetActiveActions = function(userId)
{
	var MentalCommandGetActiveActions = EdkDll.IEE_MentalCommandGetActiveActions(userId);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return MentalCommandGetActiveActions;
};

/**
 * Add a MentalCommand action to action list before it is enabled with
 * IEE_EnableMentalCommandActionsList function (do not exceed 4 action in list to enable).
 * 
 * @param mentalCommandAction: IEE_MentalCommandAction_t - action is added to list.
 * @param cogBool: bool - true is enable, false is disable.
 * @return EDK_ERROR_CODE = 0 if ok, -1 if not ok.
 */
EmoEngine.prototype.EnableMentalCommandAction = function(cognitivAction, cogBool)
{
	var EnableMentalCommandAction = EdkDll.IEE_EnableMentalCommandAction(cognitivAction, cogBool);
	EmoEngine.errorHandler(EnableMentalCommandAction);
	return EnableMentalCommandAction;
};

/**
 * Enable mentalcommand action list (actions were added in
 * IEE_EnableMentalCommandAction function).
 * 
 * @param userId.
 * @returns EDK_ERROR_CODE
                - EDK_ERROR_CODE = EDK_OK if successful.
 */
EmoEngine.prototype.EnableMentalCommandActionsList = function(userId)
{
	var EnableMentalCommandActionsList = EdkDll.IEE_EnableMentalCommandActionsList(userId);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return EnableMentalCommandActionsList;
};

/**
 * Get the current enabled MentalCommand action types.
 * 
 * @param userId -
 *            user ID.
 * @returns: a bit vector composed of IEE_MentalCommandAction_t contants.
 */
EmoEngine.prototype.MentalCommandGetActionsEnabled = function(userId)
{
	var MentalCommandGetActionsEnabled = EdkDll.IEE_MentalCommandGetActionsEnabled(userId);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return MentalCommandGetActionsEnabled;
};

//EmoEngine.prototype.MentalCommandGetTrainingTime = function(userId) {
//};

/**
 * Set the training control flag for MentalCommand training.
 * 
 * @param userId -
 *            user ID.
 * @param control -
 *            IEE_MentalCommandTrainingControl_t: pre-defined MentalCommand training control.
 * @returns EDK_ERROR_CODE. If the query is
 *           successful, EDK_ERROR_CODE = OK
 */
EmoEngine.prototype.MentalCommandSetTrainingControl = function(userId, control)
{
	var MentalCommandSetTrainingControl = EdkDll.IEE_MentalCommandSetTrainingControl(userId, control);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return MentalCommandSetTrainingControl;
};

/**
 * Set the type of MentalCommand action to be trained.
 * 
 * @param userId -
 *            user ID.
 * @param action -
 *            IEE_MentalCommandAction_t: which action would like to be trained.
 * @returns EDK_ERROR_CODE. If the query is
 *           successful, EDK_ERROR_CODE = OK
 */
EmoEngine.prototype.MentalCommandSetTrainingAction = function(userId, action)
{
	var MentalCommandSetTrainingAction = EdkDll.IEE_MentalCommandSetTrainingAction(userId, action);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return MentalCommandSetTrainingAction;
};

//EmoEngine.prototype.MentalCommandGetTrainingAction = function(userId) {
//};

/**
 * Gets a list of the MentalCommand actions that have been trained by the user.
 * 
 * @param userId -
 *            user ID.
 * @returns: a bit vector composed of IEE_MentalCommandAction_t contants.
 */
EmoEngine.prototype.MentalCommandGetTrainedSignatureActions = function(userId)
{
	var MentalCommandGetTrainedSignatureActions = EdkDll.IEE_MentalCommandGetTrainedSignatureActions(userId);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return MentalCommandGetTrainedSignatureActions;
};

/**
 * Gets the current overall skill rating of the user in MentalCommand.
 * 
 * @param userId -
 *            user ID.
 * @returns: the overall skill rating [from 0.0 to 1.0].
 */
EmoEngine.prototype.MentalCommandGetOverallSkillRating = function(userId)
{
	var MentalCommandGetOverallSkillRating = EdkDll.IEE_MentalCommandGetOverallSkillRating(userId);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return MentalCommandGetOverallSkillRating;
};

/**
 * Gets the current skill rating for particular MentalCommand actions of the
 * user.
 * 
 * @param userId -
 *            user ID.
 * @param action -
 *            IEE_MentalCommandAction_t: a particular action of IEE_MentalCommandAction_t contant.
 * @returns: the action skill rating [from 0.0 to 1.0].
 */
EmoEngine.prototype.MentalCommandGetActionSkillRating = function(userId, action)
{
	var MentalCommandGetActionSkillRating = EdkDll.IEE_MentalCommandGetActionSkillRating(userId, action);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return MentalCommandGetActionSkillRating;
};

/**
 * Set the overall sensitivity for all MentalCommand actions.
 * 
 * @param userId -
 *            user ID.
 * @param level -
 *            int: sensitivity level of all actions (lowest: 1, highest: 7).
 * @returns EDK_ERROR_CODE. If the query is
 *           successful, EDK_ERROR_CODE = OK
 */
EmoEngine.prototype.MentalCommandSetActivationLevel = function(userId, level)
{
	var MentalCommandSetActivationLevel = EdkDll.IEE_MentalCommandSetActivationLevel(userId, level);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return MentalCommandSetActivationLevel;
};

/**
 * Set the sensitivity of MentalCommand actions
 * 
 * @param userId -
 *            user ID.
 * @param action1Sensitivity -
 *            int: sensitivity of action 1 (min: 1, max: 10).
 * @param action2Sensitivity -
 *            int: sensitivity of action 2 (min: 1, max: 10).
 * @param action3Sensitivity -
 *            int: sensitivity of action 3 (min: 1, max: 10).
 * @param action4Sensitivity -
 *            int: sensitivity of action 4 (min: 1, max: 10).
 * @returns EDK_ERROR_CODE. If the query is
 *           successful, EDK_ERROR_CODE = OK
 */
EmoEngine.prototype.MentalCommandSetActionSensitivity = function(userId,
		action1Sensitivity, action2Sensitivity, action3Sensitivity,
		action4Sensitivity)
{
	var MentalCommandSetActionSensitivity = EdkDll.IEE_MentalCommandSetActionSensitivity(userId,
			action1Sensitivity, action2Sensitivity, action3Sensitivity, action4Sensitivity);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return MentalCommandSetActionSensitivity;
};

/**
 * Get the overall sensitivity for all MentalCommand actions.
 * 
 * @param userId -
 *            user ID.
 * @returns - sensitivity level of all actions (min: 1, max: 10).
 */
EmoEngine.prototype.MentalCommandGetActivationLevel = function(userId)
{
	var MentalCommandGetActivationLevel = EdkDll.IEE_MentalCommandGetActivationLevel(userId);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return MentalCommandGetActivationLevel;
};

/**
 * Query the sensitivity of MentalCommand actions.
 * 
 * @param userId -
 *            user ID.
 * @returns: array sensitivity of actions.
 */
EmoEngine.prototype.MentalCommandGetActionSensitivity = function(userId)
{
	var MentalCommandGetActionSensitivity = EdkDll.IEE_MentalCommandGetActionSensitivity(userId);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return MentalCommandGetActionSensitivity;
};

//EmoEngine.prototype.MentalCommandStartSamplingNeutral = function(userId) {
	//EmoEngine.errorHandler(EdkDll.EE_CognitivStartSamplingNeutral(userId));
//};

//EmoEngine.prototype.MentalCommandStopSamplingNeutral = function(userId) {
	//EmoEngine.errorHandler(EdkDll.EE_CognitivStopSamplingNeutral(userId));
//};

/**
 * Enable or disable signature caching in MentalCommand.
 * 
 * @param userId -
 *            user ID.
 * @param enabled -
 *            bool: flag to set status of caching (1: enable, 0: disable).
 * @returns EDK_ERROR_CODE. If the query is
 *           successful, EDK_ERROR_CODE = OK
 */
EmoEngine.prototype.MentalCommandSetSignatureCaching = function(userId, enabled)
{
	var MentalCommandSetSignatureCaching = EdkDll.IEE_MentalCommandSetSignatureCaching(userId, enabled);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return MentalCommandSetSignatureCaching;
};

/**
 * Query the status of signature caching in MentalCommand.
 * 
 * @param userId -
 *            user ID.
 * @returns: status of caching (1: enable, 0: disable).
 */
EmoEngine.prototype.MentalCommandGetSignatureCaching = function(userId)
{
	var MentalCommandGetSignatureCaching = EdkDll.IEE_MentalCommandGetSignatureCaching(userId);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return MentalCommandGetSignatureCaching;
};

/**
 * Set the cache size for the signature caching in MentalCommand.
 * 
 * @param userId -
 *            user ID.
 * @param size -
 *            int: number of signatures to be kept in the cache (0: unlimited).
 */
EmoEngine.prototype.MentalCommandSetSignatureCacheSize = function(userId, size)
{
	var MentalCommandSetSignatureCacheSize = EdkDll.IEE_MentalCommandSetSignatureCacheSize(userId, size);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return MentalCommandSetSignatureCacheSize;
};

/**
 * Get the current cache size for the signature caching in MentalCommand.
 * 
 * @param userId -
 *            user ID.
 * @returns: number of signatures to be kept in the cache (0: unlimited).
 */
EmoEngine.prototype.MentalCommandGetSignatureCacheSize = function(userId)
{
	var MentalCommandGetSignatureCacheSize = EdkDll.IEE_MentalCommandGetSignatureCacheSize(userId);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return MentalCommandGetSignatureCacheSize;
};

/**
 * Returns a array containing details about sensor location and other info.
 * @param channelId - IEE_InputChannels_t: insight channel identifier has values in IEE_InputChannels_t.
 * @return IInputSensorDescriptor_t - provides detailed sensor location and other info.
 */
EmoEngine.prototype.IHeadsetGetSensorDetails = function(channelId)
{
	var IHeadsetGetSensorDetails = EdkDll.IEE_HeadsetGetSensorDetails(channelId);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return IHeadsetGetSensorDetails;
}

/**
 * Returns the delta of the movement of the gyro since the previous call for a
 * particular user
 * 
 * @param userId -
 *            user ID for query
 * @returns: array of positions (pXOut, pYOut)
 */
EmoEngine.prototype.IHeadsetGetGyroDelta = function(userId)
{
	var IHeadsetGetGyroDelta = EdkDll.IEE_HeadsetGetGyroDelta(userId);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return IHeadsetGetGyroDelta;
};

/**
 * Re-zero the gyro for a particular user
 * 
 * @param userId -
 *            user ID for query
 * @returns EDK_ERROR_CODE. If the query is
 *           successful, EDK_ERROR_CODE = OK
 */
EmoEngine.prototype.IHeadsetGyroRezero = function(userId)
{
	var IHeadsetGyroRezero = EdkDll.IEE_HeadsetGyroRezero(userId);
	EmoEngine.errorHandler(EdkDll.EE_GetError());
	return IHeadsetGyroRezero;
};
