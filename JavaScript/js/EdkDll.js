function EdkDll() {
	eObj = document.getElementById('ElsPlugin');
}

EdkDll.eObj;

EdkDll.DebugLog = false;
// EdkDll.eEvent;
// EdkDll.hEvent;
EdkDll.version;
EdkDll.EDK_OK = 0x0000;
EdkDll.EDK_UNKNOWN_ERROR = 0x0001;
EdkDll.EDK_INVALID_PROFILE_ARCHIVE = 0x0101;
EdkDll.EDK_NO_USER_FOR_BASEPROFILE = 0x0102;
EdkDll.EDK_CANNOT_ACQUIRE_DATA = 0x0200;
EdkDll.EDK_BUFFER_TOO_SMALL = 0x0300;
EdkDll.EDK_OUT_OF_RANGE = 0x0301;
EdkDll.EDK_INVALID_PARAMETER = 0x0302;
EdkDll.EDK_PARAMETER_LOCKED = 0x0303;
EdkDll.EDK_COG_INVALID_TRAINING_ACTION = 0x0304;
EdkDll.EDK_COG_INVALID_TRAINING_CONTROL = 0x0305;
EdkDll.EDK_COG_INVALID_ACTIVE_ACTION = 0x0306;
EdkDll.EDK_COG_EXCESS_MAX_ACTIONS = 0x0307;
EdkDll.EDK_EXP_NO_SIG_AVAILABLE = 0x0308;
EdkDll.EDK_FILESYSTEM_ERROR = 0x0309;
EdkDll.EDK_INVALID_USER_ID = 0x0400;
EdkDll.EDK_EMOENGINE_UNINITIALIZED = 0x0500;
EdkDll.EDK_EMOENGINE_DISCONNECTED = 0x0501;
EdkDll.EDK_EMOENGINE_PROXY_ERROR = 0x0502;
EdkDll.EDK_NO_EVENT = 0x0600;
EdkDll.EDK_GYRO_NOT_CALIBRATED = 0x0700;
EdkDll.EDK_OPTIMIZATION_IS_ON = 0x0800;
EdkDll.EDK_RESERVED1 = 0x0900;

/**
 * Headset version type
 */
EdkDll.EE_HeadsetVersion_t = {
	EE_EPOC_EEG : 0x0565,
	EE_EPOC_NOEEG1 : 0x1000,
	EE_EPOC_NOEEG2 : 0x1E00,
	EE_INSIGHT_EEG_OLD : 0x0170,
	EE_INSIGHT_NOEEG1_OLD : 0x17B0,
	EE_INSIGHT_NOEEG2_OLD: 0x0810,
	EE_INSIGHT_EEG1_NEW: 0x08,
	EE_INSIGHT_EEG2_NEW: 0x09,
	EE_INSIGHT_NOEEG1_NEW: 0x50,
	EE_INSIGHT_NOEEG2_NEW: 0x90,
	EE_EPOC_PLUS_EEG1: 0x06,
	EE_EPOC_PLUS_EEG2: 0x07,
	EE_EPOC_PLUS_NOEEG1: 0x30,
	EE_EPOC_PLUS_NOEEG2: 0x70
};

/**
 * Expressiv Suite threshold type enumerator
 */
EdkDll.EE_ExpressivThreshold_t = {
	EXP_SENSITIVITY : 0
};

/**
 * Expressiv Suite training control enumerator
 */
EdkDll.EE_ExpressivTrainingControl_t = {
	EXP_NONE : 0,
	EXP_START : 1,
	EXP_ACCEPT : 2,
	EXP_REJECT : 3,
	EXP_ERASE : 4,
	EXP_RESET : 5
};

/**
 * Expressiv Suite signature type enumerator
 */
EdkDll.EE_ExpressivSignature_t = {
	EXP_SIG_UNIVERSAL : 0,
	EXP_SIG_TRAINED : 1
};

/**
 * Cognitiv Suite training control enumerator
 */
EdkDll.EE_CognitivTrainingControl_t = {
	COG_NONE : 0,
	COG_START : 1,
	COG_ACCEPT : 2,
	COG_REJECT : 3,
	COG_ERASE : 4,
	COG_RESET : 5
};

/**
 * EmoEngine event types
 */
EdkDll.EE_Event_t = {
	EE_UnknownEvent : 0x0000,
	EE_EmulatorError : 0x0001,
	EE_ReservedEvent : 0x0002,
	EE_UserAdded : 0x0010,
	EE_UserRemoved : 0x0020,
	EE_EmoStateUpdated : 0x0040,
	EE_ProfileEvent : 0x0080,
	EE_CognitivEvent : 0x0100,
	EE_ExpressivEvent : 0x0200,
	EE_InternalStateChanged : 0x0400,
};

/**
 * Expressiv-specific event types
 */
EdkDll.EE_ExpressivEvent_t = {
	EE_ExpressivNoEvent : 0,
	EE_ExpressivTrainingStarted : 1,
	EE_ExpressivTrainingSucceeded : 2,
	EE_ExpressivTrainingFailed : 3,
	EE_ExpressivTrainingCompleted : 4,
	EE_ExpressivTrainingDataErased : 5,
	EE_ExpressivTrainingRejected : 6,
	EE_ExpressivTrainingReset : 7
};

/**
 * Cognitiv-specific event types
 */
EdkDll.EE_CognitivEvent_t = {
	EE_CognitivNoEvent : 0,
	EE_CognitivTrainingStarted : 1,
	EE_CognitivTrainingSucceeded : 2,
	EE_CognitivTrainingFailed : 3,
	EE_CognitivTrainingCompleted : 4,
	EE_CognitivTrainingDataErased : 5,
	EE_CognitivTrainingRejected : 6,
	EE_CognitivTrainingReset : 7,
	EE_CognitivAutoSamplingNeutralCompleted : 8,
	EE_CognitivSignatureUpdated : 9
};

/**
 * electrode channel enumerator
 */
EdkDll.EE_DataChannel_t = {
	ED_COUNTER : 0,
	ED_INTERPOLATED : 1,
	ED_RAW_CQ : 2,
	ED_AF3 : 3,
	ED_F7 : 4,
	ED_F3 : 5,
	ED_FC5 : 6,
	ED_T7 : 7,
	ED_P7 : 8,
	ED_O1 : 9,
	ED_O2 : 10,
	ED_P8 : 11,
	ED_T8 : 12,
	ED_FC6 : 13,
	ED_F4 : 14,
	ED_F8 : 15,
	ED_AF4 : 16,
	ED_GYROX : 17,
	ED_GYROY : 18,
	ED_TIMESTAMP : 19,
	ED_ES_TIMESTAMP : 20,
	ED_FUNC_ID : 21,
	ED_FUNC_VALUE : 22,
	ED_MARKER : 23,
	ED_SYNC_SIGNAL : 24
};

/**
 * electrode motion channel enumerator
 */
EdkDll.EE_MotionDataChannel_t = {
	MD_COUNTER : 0,
	MD_GYROX : 1,
	MD_GYROY : 2,
	MD_GYROZ : 3,
	MD_ACCX : 4,
	MD_ACCY : 5,
	MD_ACCZ : 6,
	MD_MAGX : 7,
	MD_MAGY : 8,
	MD_MAGZ : 9,
	MD_TIMESTAMP : 10,
};

/**
 * Emotiv Detection Suite enumerator
 */
EdkDll.EE_EmotivSuite_t = {
	EE_EXPRESSIV : 0,
	EE_AFFECTIV : 1,
	EE_COGNITIV : 2
};

/**
 * Expressiv facial expression type enumerator
 */
EdkDll.EE_ExpressivAlgo_t = {
	EXP_NEUTRAL : 0x0001,
	EXP_BLINK : 0x0002,
	EXP_WINK_LEFT : 0x0004,
	EXP_WINK_RIGHT : 0x0008,
	EXP_HORIEYE : 0x0010,
	EXP_EYEBROW : 0x0020,
	EXP_FURROW : 0x0040,
	EXP_SMILE : 0x0080,
	EXP_CLENCH : 0x0100,
	EXP_LAUGH : 0x0200,
	EXP_SMIRK_LEFT : 0x0400,
	EXP_SMIRK_RIGHT : 0x0800
};

/**
 * Affectiv emotional type enumerator
 */
EdkDll.EE_AffectivAlgo_t = {
	AFF_EXCITEMENT : 0x0001,
	AFF_MEDITATION : 0x0002,
	AFF_FRUSTRATION : 0x0004,
	AFF_ENGAGEMENT_BOREDOM : 0x0008
};

/**
 * Cognitiv action type enumerator
 */
EdkDll.EE_CognitivAction_t = {
	COG_NEUTRAL : 0x0001,
	COG_PUSH : 0x0002,
	COG_PULL : 0x0004,
	COG_LIFT : 0x0008,
	COG_DROP : 0x0010,
	COG_LEFT : 0x0020,
	COG_RIGHT : 0x0040,
	COG_ROTATE_LEFT : 0x0080,
	COG_ROTATE_RIGHT : 0x0100,
	COG_ROTATE_CLOCKWISE : 0x0200,
	COG_ROTATE_COUNTER_CLOCKWISE : 0x0400,
	COG_ROTATE_FORWARDS : 0x0800,
	COG_ROTATE_REVERSE : 0x1000,
	COG_DISAPPEAR : 0x2000
};

/**
 * Wireless Signal Strength enumerator
 */
EdkDll.EE_SignalStrength_t = {
	NO_SIGNAL : 0,
	BAD_SIGNAL : 1,
	GOOD_SIGNAL : 2
};

/**
 * Logical input channel identifiers
 */
EdkDll.EE_InputChannels_t = {
	EE_CHAN_CMS : 0,
	EE_CHAN_DRL : 1,
	EE_CHAN_FP1 : 2,
	EE_CHAN_AF3 : 3,
	EE_CHAN_F7 : 4,
	EE_CHAN_F3 : 5,
	EE_CHAN_FC5 : 6,
	EE_CHAN_T7 : 7,
	EE_CHAN_P7 : 8,
	EE_CHAN_O1 : 9,
	EE_CHAN_O2 : 10,
	EE_CHAN_P8 : 11,
	EE_CHAN_T8 : 12,
	EE_CHAN_FC6 : 13,
	EE_CHAN_F4 : 14,
	EE_CHAN_F8 : 15,
	EE_CHAN_AF4 : 16,
	EE_CHAN_FP2 : 17
};

/**
 * EEG Electrode Contact Quality enumeration
 */
EdkDll.EE_EEG_ContactQuality_t = {
	EEG_CQ_NO_SIGNAL : 0,
	EEG_CQ_VERY_BAD : 1,
	EEG_CQ_POOR : 2,
	EEG_CQ_FAIR : 3,
	EEG_CQ_GOOD : 4
};

/**
 * Headset version type
 */
EdkDll.IEE_HeadsetVersion_t = {
	IEE_EPOC_EEG : 0x0565,
	IEE_EPOC_NOEEG1 : 0x1000,
	IEE_EPOC_NOEEG2 : 0x1E00,
	IEE_INSIGHT_EEG_OLD : 0x0170,
	IEE_INSIGHT_NOEEG1_OLD : 0x17B0,
	IEE_INSIGHT_NOEEG2_OLD: 0x0810,
	IEE_INSIGHT_EEG1_NEW: 0x08,
	IEE_INSIGHT_EEG2_NEW: 0x09,
	IEE_INSIGHT_NOEEG1_NEW: 0x50,
	IEE_INSIGHT_NOEEG2_NEW: 0x90,
	IEE_EPOC_PLUS_EEG1: 0x06,
	IEE_EPOC_PLUS_EEG2: 0x07,
	IEE_EPOC_PLUS_NOEEG1: 0x30,
	IEE_EPOC_PLUS_NOEEG2: 0x70
};

/**
 * FacialExpression Suite threshold type enumerator
 */
EdkDll.IEE_FacialExpressionThreshold_t = {
	FE_SENSITIVITY : 0
};

/**
 * FacialExpression Suite training control enumerator
 */
EdkDll.IEE_FacialExpressionTrainingControl_t = {
	FE_NONE : 0,
	FE_START : 1,
	FE_ACCEPT : 2,
	FE_REJECT : 3,
	FE_ERASE : 4,
	FE_RESET : 5
};

/**
 * FacialExpression Suite signature type enumerator
 */
EdkDll.IEE_FacialExpressionSignature_t = {
	FE_SIG_UNIVERSAL : 0,
	FE_SIG_TRAINED : 1
};

/**
 * MentalCommand Suite training control enumerator
 */
EdkDll.IEE_MentalCommandTrainingControl_t = {
	MC_NONE : 0,
	MC_START : 1,
	MC_ACCEPT : 2,
	MC_REJECT : 3,
	MC_ERASE : 4,
	MC_RESET : 5
};

/**
 * EmoEngine event types
 */
EdkDll.IEE_Event_t = {
	IEE_UnknownEvent : 0x0000,
	IEE_EmulatorError : 0x0001,
	IEE_ReservedEvent : 0x0002,
	IEE_UserAdded : 0x0010,
	IEE_UserRemoved : 0x0020,
	IEE_EmoStateUpdated : 0x0040,
	IEE_ProfileEvent : 0x0080,
	IEE_MentalCommandEvent : 0x0100,
	IEE_FacialExpressionEvent : 0x0200,
	IEE_InternalStateChanged : 0x0400,
	IEE_AllEvent : (0x0010 | 0x0020 | 0x0040 | 0x0080 | 0x0100 | 0x0200 | 0x0400)
};

/**
 * FacialExpression-specific event types
 */
EdkDll.IEE_FacialExpressionEvent_t = {
	IEE_FacialExpressionNoEvent : 0,
	IEE_FacialExpressionTrainingStarted : 1,
	IEE_FacialExpressionTrainingSucceeded : 2,
	IEE_FacialExpressionTrainingFailed : 3,
	IEE_FacialExpressionTrainingCompleted : 4,
	IEE_FacialExpressionTrainingDataErased : 5,
	IEE_FacialExpressionTrainingRejected : 6,
	IEE_FacialExpressionTrainingReset : 7
};

/**
 * MentalCommand-specific event types
 */
EdkDll.IEE_MentalCommandEvent_t = {
	IEE_MentalCommandNoEvent : 0,
	IEE_MentalCommandTrainingStarted : 1,
	IEE_MentalCommandTrainingSucceeded : 2,
	IEE_MentalCommandTrainingFailed : 3,
	IEE_MentalCommandTrainingCompleted : 4,
	IEE_MentalCommandTrainingDataErased : 5,
	IEE_MentalCommandTrainingRejected : 6,
	IEE_MentalCommandTrainingReset : 7,
	IEE_MentalCommandAutoSamplingNeutralCompleted : 8,
	IEE_MentalCommandSignatureUpdated : 9
};

/**
 * Insight Electrode Channel enumerator
 */
EdkDll.IEE_DataChannel_t = {
	IED_COUNTER : 0,
	IED_INTERPOLATED : 1,
	IED_RAW_CQ : 2,
	IED_AF3 : 3,
	IED_T7 : 7,
	IED_Pz : 9,
	IED_T8 : 12,
	IED_AF4 : 16,
	IED_TIMESTAMP : 19,
	IED_ES_TIMESTAMP : 20,
	IED_FUNC_ID : 21,
	IED_FUNC_VALUE : 22,
	IED_MARKER : 23,
	IED_SYNC_SIGNAL : 24
};

/**
 * electrode motion channel enumerator
 */
EdkDll.IEE_MotionDataChannel_t = {
	IMD_COUNTER : 0,
	IMD_GYROX : 1,
	IMD_GYROY : 2,
	IMD_GYROZ : 3,
	IMD_ACCX : 4,
	IMD_ACCY : 5,
	IMD_ACCZ : 6,
	IMD_MAGX : 7,
	IMD_MAGY : 8,
	IMD_MAGZ : 9,
	IMD_TIMESTAMP : 10,
};

/**
 * Emotiv enumerator
 */
EdkDll.IEE_EmotivSuite_t = {
	IEE_FACIALEXPRESSION : 0,
	IEE_PERFORMANCEMETRIC : 1,
	IEE_MENTALCOMMAND : 2
};

/**
 * FacialExpression facial expression type enumerator
 */
EdkDll.IEE_FacialExpressionAlgo_t = {
	FE_NEUTRAL : 0x0001,
	FE_BLINK : 0x0002,
	FE_WINK_LEFT : 0x0004,
	FE_WINK_RIGHT : 0x0008,
	FE_HORIEYE : 0x0010,
	FE_SURPRISE : 0x0020,
	FE_FROWN : 0x0040,
	FE_SMILE : 0x0080,
	FE_CLENCH : 0x0100
};

/**
 * PerformanceMetric emotional type enumerator
 */
EdkDll.IEE_PerformanceMetricAlgo_t = {
	PM_EXCITEMENT : 0x0001,
	PM_RELAXATION : 0x0002,
	PM_STRESS : 0x0004,
	PM_ENGAGEMENT : 0x0008,
	PM_INTEREST : 0x0010
};

/**
 * MentalCommand action type enumerator
 */
EdkDll.IEE_MentalCommandAction_t = {
	MC_NEUTRAL : 0x0001,
	MC_PUSH : 0x0002,
	MC_PULL : 0x0004,
	MC_LIFT : 0x0008,
	MC_DROP : 0x0010,
	MC_LEFT : 0x0020,
	MC_RIGHT : 0x0040,
	MC_ROTATE_LEFT : 0x0080,
	MC_ROTATE_RIGHT : 0x0100,
	MC_ROTATE_CLOCKWISE : 0x0200,
	MC_ROTATE_COUNTER_CLOCKWISE : 0x0400,
	MC_ROTATE_FORWARDS : 0x0800,
	MC_ROTATE_REVERSE : 0x1000,
	MC_DISAPPEAR : 0x2000
};

/**
 * Wireless Signal Strength enumerator
 */
EdkDll.IEE_SignalStrength_t = {
	NO_SIG : 0,
	BAD_SIG : 1,
	GOOD_SIG : 2
};

/**
 * Logical input channel identifiers
 */
EdkDll.IEE_InputChannels_t = {
	IEE_CHAN_CMS : 0,
	IEE_CHAN_DRL : 0,
	IEE_CHAN_AF3 : 3,
	IEE_CHAN_T7 : 7,
	IEE_CHAN_Pz : 9,
	IEE_CHAN_T8 : 12,
	IEE_CHAN_AF4 : 16
};

/**
 * EEG Electrode Contact Quality enumeration
 */
EdkDll.IEE_EEG_ContactQuality_t = {
	IEEG_CQ_NO_SIGNAL : 0,
	IEEG_CQ_VERY_BAD : 1,
	IEEG_CQ_POOR : 2,
	IEEG_CQ_FAIR : 3,
	IEEG_CQ_GOOD : 4
};

/**
 * WindowingTypes
 */
EdkDll.WindowingTypes = {
	HANNING : 0,
	HAMMING : 1,
	HANN : 2,
	BLACKMAN : 3,
	RECTANGLE : 4
};

/*
 * [StructLayout(LayoutKind.Sequential)] public class InputSensorDescriptor_t {
 * public EE_InputChannels_t channelId; // logical channel id public fExists; //
 * does this sensor exist on this headset model public pszLabel; // text label
 * identifying this sensor public Double xLoc; // x coordinate from center of
 * head towards nose public Double yLoc; // y coordinate from center of head
 * towards ears public Double zLoc; // z coordinate from center of head toward
 * top of skull }
 */

// EdkDll.version = ELSPlugin().version;
// Main
// EdkDll.EE_EngineConnect();
// hEvent = EE_EmoEngineEventCreate();
// ///////////////////////////////////////////////////////
// function EngineConnect return 0 if successful
EdkDll.addEvent = function(obj, name, func) {
	if (EdkDll.DebugLog) {
		console.log("EdkDll.addEvent()");
	}
	if (obj.attachEvent) {
		obj.attachEvent("on" + name, func);
	} else {
		obj.addEventListener(name, func, false);
	}
};

/**
 * Check url is valid license, call event when success
 * 
 * @returns {*}
 * @constructor
 */
EdkDll.ELS_ValidLicense = function() {
	var ELS_ValidLicense = ELSPlugin().ELS_CheckEDKLicense();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.ELS_ValidLicense()");
		console.log(ELS_ValidLicense);
	}
	return ELS_ValidLicense;
};

/**
 * Initializes EmoEngine instance which reads EEG data from EPOC. This function should be called at the beginning of programs that make use of EmoEngine, most probably in initialization routine or constructor.
 * 
 * @returns EDK_ERROR_CODE
                - EDK_ERROR_CODE = EDK_OK if a connection is established
 * @constructor
 */
EdkDll.EE_EngineConnect = function() {
	var EE_EngineConnect = ELSPlugin().ELS_EE_EngineConnect();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_EngineConnect()");
		console.log(EE_EngineConnect);
	}
	return EE_EngineConnect;
};

/**
 * Get Security Code
 * 
 * @returns security code: id code from EDK
 */
EdkDll.EE_GetSecurityCode = function() {
	var EE_GetSecurityCode = ELSPlugin().ELS_EE_GetSecurityCode();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_GetSecurityCode()");
		console.log(EE_GetSecurityCode);
	}
	return EE_GetSecurityCode;
};

/**
 * Check Security Code
 * 
 * @returns EDK_ERROR_CODE
                - EDK_ERROR_CODE = EDK_OK if check security code successfully
 */
EdkDll.EE_CheckSecurityCode = function(x) {
	var EE_CheckSecurityCode = ELSPlugin().ELS_EE_CheckSecurityCode(x);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_CheckSecurityCode(" + x + ")");
		console.log(EE_CheckSecurityCode);
	}
	return EE_CheckSecurityCode;
}

/**
 * Receive errors after call a function.
 * 
 * @returns EDK_ERROR_CODE
                - EDK_ERROR_CODE = EDK_OK if have no errors.
 */
EdkDll.EE_GetError = function() {
	var EE_GetError = ELSPlugin().ELS_EE_GetError();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_GetError()");
		console.log(EE_GetError);
	}
	return EE_GetError;
};

/**
 * Initializes the connection to a remote instance of EmoEngine.
 * 
 * @returns EDK_ERROR_CODE
                - EDK_ERROR_CODE = EDK_OK if a connection is established
 */
EdkDll.EE_EngineRemoteConnect = function() {
	var EE_EngineRemoteConnect = ELSPlugin().ELS_EE_EngineRemoteConnect();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_EngineRemoteConnect()");
		console.log(EE_EngineRemoteConnect);
	}
	return EE_EngineRemoteConnect;
};

/**
 * Terminates the connection to EmoEngine. This function should be called at the end of programs which make use of EmoEngine, most probably in clean up routine or destructor.
 * 
 * @returns EDK_ERROR_CODE
                - EDK_ERROR_CODE = EDK_OK if disconnection is achieved
 */
EdkDll.EE_EngineDisconnect = function() {
	var EE_EngineDisconnect = ELSPlugin().ELS_EE_EngineDisconnect();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_EngineDisconnect()");
		console.log(EE_EngineDisconnect);
	}
	return EE_EngineDisconnect;
};

/**
 * Returns the event type for an event already retrieved using EE_EngineGetNextEvent.
 * 
 * @returns EE_Event_t data
 */
EdkDll.EE_EmoEngineEventGetType = function() {
	var EE_EmoEngineEventGetType = ELSPlugin().ELS_EE_EmoEngineEventGetType();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_EmoEngineEventGetType()");
		console.log(EE_EmoEngineEventGetType);
	}
	return EE_EmoEngineEventGetType;
};

/**
 * Returns the Cognitiv-specific event type for an EE_CognitivEvent event already retrieved using EE_EngineGetNextEvent.
 * 
 * @returns EE_CognitivEvent_t data
 */
EdkDll.EE_CognitivEventGetType = function() {
	var EE_CognitivEventGetType = ELSPlugin().ELS_EE_CognitivEventGetType();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_CognitivEventGetType()");
		console.log(EE_CognitivEventGetType);
	}
	return EE_CognitivEventGetType;
};

/**
 * Returns the Expressiv-specific event type for an EE_ExpressivEvent event already retrieved using EE_EngineGetNextEvent.
 * 
 * @returns EE_ExpressivEvent_t data
 */
EdkDll.EE_ExpressivEventGetType = function() {
	var EE_ExpressivEventGetType = ELSPlugin().ELS_EE_ExpressivEventGetType();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_ExpressivEventGetType()");
		console.log(EE_ExpressivEventGetType);
	}
	return EE_ExpressivEventGetType;
};

/**
 * Retrieves the user ID for EE_UserAdded and EE_UserRemoved events.
 * 
 * @returns int - user ID associated with the current event
 */
EdkDll.EE_EmoEngineEventGetUserId = function() {
	var EE_EmoEngineEventGetUserId = ELSPlugin().ELS_EE_EmoEngineEventGetUserId();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_EmoEngineEventGetUserId()");
		console.log(EE_EmoEngineEventGetUserId);
	}
	return EE_EmoEngineEventGetUserId;
};

/**
 * Copies an EmoState returned with a EE_EmoStateUpdate event to memory referenced by an EmoStateHandle.
 * 
 * @returns EDK_ERROR_CODE
                - EDK_ERROR_CODE = EDK_OK if successful.
 */
EdkDll.EE_EmoEngineEventGetEmoState = function() {
	var EE_EmoEngineEventGetEmoState = ELSPlugin()
			.ELS_EE_EmoEngineEventGetEmoState();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_EmoEngineEventGetEmoState()");
		console.log(EE_EmoEngineEventGetEmoState);
	}
	return EE_EmoEngineEventGetEmoState;
};

/**
 * Retrieves the next EmoEngine event.
 * 
 * @returns EDK_ERROR_CODE
                - EDK_ERROR_CODE = EDK_OK if successful.
 */
EdkDll.EE_EngineGetNextEvent = function() {
	var EE_EngineGetNextEvent = ELSPlugin().ELS_EE_EngineGetNextEvent();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_EngineGetNextEvent()");
		console.log(EE_EngineGetNextEvent);
	}
	return EE_EngineGetNextEvent;
};


// not used
//EdkDll.EE_EngineClearEventQueue = function(eventTypes) {
//};

/**
 * Retrieves number of active users connected to the EmoEngine.
 * 
 * @returns int - number of users.
 */
EdkDll.EE_EngineGetNumUser = function() {
	var EE_EngineGetNumUser = ELSPlugin().ELS_EE_EngineGetNumUser();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_EngineGetNumUser()");
		console.log(EE_EngineGetNumUser);
	}
	return EE_EngineGetNumUser;
};

// not used
//EdkDll.EE_SetHardwarePlayerDisplay = function(playerNum) {
//};

// not used
//EdkDll.EE_SetUserProfile = function(profileBuffer, length) {
//};

// not used
//EdkDll.EE_GetUserProfile = function(userId) {
//};

/**
 * Returns a serialized user profile for a default user in a synchronous manner. Profile will be updated to hProfile.
   Fills in the event referred to by hEvent with an EE_ProfileEvent event that contains the profile data for the default user.
 * 
 * @returns EDK_ERROR_CODE
                 - EDK_ERROR_CODE = EDK_OK if successful.
 */
EdkDll.EE_GetBaseProfile = function() {
	var EE_GetBaseProfile = ELSPlugin().ELS_EE_GetBaseProfile();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_GetBaseProfile()");
		console.log(EE_GetBaseProfile);
	}
	return EE_GetBaseProfile;
};

/**
 * Loads an default profile for the specified user.
 * @params userId - int: ID of current user.
 * @returns EDK_ERROR_CODE
                 - EDK_ERROR_CODE = EDK_OK if successful.
 */
EdkDll.EE_SetBaseProfile = function(userId) {
	var EE_SetBaseProfile = ELSPlugin().ELS_EE_SetBaseProfile(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_SetBaseProfile(" + userId + ")");
		console.log(EE_SetBaseProfile);
	}
	return EE_SetBaseProfile;
};

// not used
//EdkDll.EE_GetUserProfileSize = function() {
//};

/*
 * EdkDll.EE_GetUserProfileBytes = function( hEvt, Byte[] destBuffer, U length) { }
 */

/**
 * Loads a user profile from disk and assigns it to the specified user.
 * @params userID - int: ID of current user.
			szInputFilename - string: filename to load profile.
 * @returns EDK_ERROR_CODE
                 - EDK_ERROR_CODE = EDK_OK if successful.
 */
EdkDll.EE_LoadUserProfile = function(userID, szInputFilename) {
	var EE_LoadUserProfile = ELSPlugin().ELS_LoadUserProfile(userID,
			szInputFilename);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_LoadUserProfile(" + userID + ","
				+ szInputFilename + ")");
		console.log(EE_LoadUserProfile);
	}
	return EE_LoadUserProfile;
};

/**
 * Saves a user profile for specified user to disk.
 * @params userID - int: ID of current user
			szOutputFilename - string: filename to save profile.
 * @returns EDK_ERROR_CODE
                 - EDK_ERROR_CODE = EDK_OK if successful.
 */
EdkDll.EE_SaveUserProfile = function(userID, szOutputFilename) {
	var EE_SaveUserProfile = ELSPlugin().ELS_SaveUserProfile(userID,
			szOutputFilename);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_SaveUserProfile(" + userID + ","
				+ szOutputFilename + ")");
		console.log(EE_SaveUserProfile);
	}
	return EE_SaveUserProfile;
};

/**
 * Get local app data path where contains saved profiles.
 * 
 * @returns string - path to local app data folder.
 */
EdkDll.EE_GetLocalAppDataPath = function() {
	var EE_GetLocalAppDataPath = ELSPlugin().ELS_GetLocalAppDataPath();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_GetLocalAppDataPath()");
		console.log(EE_GetLocalAppDataPath);
	}
	return EE_GetLocalAppDataPath;
};

/**
 * Set threshold for Expressiv algorithms.
 * @params userId - int: ID of current user.
			algoName - EE_ExpressivAlgo_t: Expressiv action to set threshold.
			thresholdName - EE_ExpressivThreshold_t: threshold type to set.
			value - int: threshold value will be set to.
 * @returns EDK_ERROR_CODE
                - EDK_ERROR_CODE = EDK_OK if successful.
 */
EdkDll.EE_ExpressivSetThreshold = function(userId, algoName, thresholdName,
		value) {
	var EE_ExpressivSetThreshold = ELSPlugin().ELS_EE_ExpressivSetThreshold(
			userId, algoName, thresholdName, value);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_ExpressivSetThreshold(" + userId + ","
				+ algoName + "," + thresholdName + "," + value + ")");
		console.log(EE_ExpressivSetThreshold);
	}
	return EE_ExpressivSetThreshold;
};

/**
 * Get threshold from Expressiv algorithms.
 * @params userId - int: ID of current user.
			algoName - EE_ExpressivAlgo_t: Expressiv action to get threshold.
			thresholdName - EE_ExpressivThreshold_t: threshold type to get.
 * @returns int - threshold value.
 */
EdkDll.EE_ExpressivGetThreshold = function(userId, algoName, thresholdName) {
	var EE_ExpressivGetThreshold = ELSPlugin().ELS_EE_ExpressivGetThreshold(
			userId, algoName, thresholdName);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_ExpressivGetThreshold(" + userId + ","
				+ algoName + "," + thresholdName + ")");
		console.log(EE_ExpressivGetThreshold);
	}
	return EE_ExpressivGetThreshold;
};

/**
 * Set the current facial expression for Expressiv training.
 * @params userId - int: ID of current user.
			action - EE_ExpressivAlgo_t: Expressiv action to set training.
 * @returns EDK_ERROR_CODE - current status of EmoEngine. If the query is successful, EDK_ERROR_CODE = OK.
 */
EdkDll.EE_ExpressivSetTrainingAction = function(userId, action) {
	var EE_ExpressivSetTrainingAction = ELSPlugin()
			.ELS_EE_ExpressivSetTrainingAction(userId, action);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_ExpressivSetTrainingAction(" + userId + ","
				+ action + ")");
		console.log(EE_ExpressivSetTrainingAction);
	}
	return EE_ExpressivSetTrainingAction;
};

/**
 * Set the control flag for Expressiv training.
 * @params userId - int: ID of current user.
			control - EE_ExpressivTrainingControl_t: Expressiv control for training.
 * @returns EDK_ERROR_CODE - current status of EmoEngine. If the query is successful, EDK_ERROR_CODE = OK.
 */
EdkDll.EE_ExpressivSetTrainingControl = function(userId, control) {
	var EE_ExpressivSetTrainingControl = ELSPlugin()
			.ELS_EE_ExpressivSetTrainingControl(userId, control);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_ExpressivSetTrainingControl(" + userId + ","
				+ control + ")");
		console.log(EE_ExpressivSetTrainingControl);
	}
	return EE_ExpressivSetTrainingControl;
};

/**
 * Gets the expression currently selected for Expressiv training.
 * @params userId - int: ID of current user.
 * @returns EE_ExpressivAlgo_t - current training expressiv action.
 */
EdkDll.EE_ExpressivGetTrainingAction = function(userId) {
	var EE_ExpressivGetTrainingAction = ELSPlugin()
			.ELS_EE_ExpressivGetTrainingAction(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_ExpressivGetTrainingAction(" + userId + ")");
		console.log(EE_ExpressivGetTrainingAction);
	}
	return EE_ExpressivGetTrainingAction;
};

/**
 * Return the duration of a Expressiv training session.
 * @params userId - int: ID of current user.
 * @returns int - time training in second.
 */
EdkDll.EE_ExpressivGetTrainingTime = function(userId) {
	var EE_ExpressivGetTrainingTime = ELSPlugin()
			.ELS_EE_ExpressivGetTrainingTime(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_ExpressivGetTrainingTime(" + userId + ")");
		console.log(EE_ExpressivGetTrainingTime);
	}
	return EE_ExpressivGetTrainingTime;
};

/**
 * Gets a list of the actions that have been trained by the user.
 * @params userId - int: ID of current user.
 * @returns long - actions that have been trained, in EE_ExpressivAlgo_t.
 */
EdkDll.EE_ExpressivGetTrainedSignatureActions = function(userId) {
	var EE_ExpressivGetTrainedSignatureActions = ELSPlugin()
			.ELS_EE_ExpressivGetTrainedSignatureActions(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_ExpressivGetTrainedSignatureActions(" + userId
				+ ")");
		console.log(EE_ExpressivGetTrainedSignatureActions);
	}
	return EE_ExpressivGetTrainedSignatureActions;
};

/**
 * Gets a flag indicating if the user has trained sufficient actions to activate a trained signature.
 * @params userId - int: ID of current user.
 * @returns int - receives an int that is non-zero if a trained signature can be activated.
 */
EdkDll.EE_ExpressivGetTrainedSignatureAvailable = function(userId) {
	var EE_ExpressivGetTrainedSignatureAvailable = ELSPlugin()
			.ELS_EE_ExpressivGetTrainedSignatureAvailable(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_ExpressivGetTrainedSignatureAvailable(" + userId
				+ ")");
		console.log(EE_ExpressivGetTrainedSignatureAvailable);
	}
	return EE_ExpressivGetTrainedSignatureAvailable;
};

/**
 * Configures the Expressiv suite to use either the built-in, universal signature or a personal, trained signature.
 * @params userId - int: ID of current user.
			sigType - EE_ExpressivSignature_t: signature type to set.
 * @returns EDK_ERROR_CODE - current status of EmoEngine. If the query is successful, EDK_ERROR_CODE = OK.
 */
EdkDll.EE_ExpressivSetSignatureType = function(userId, sigType) {
	var EE_ExpressivSetSignatureType = ELSPlugin()
			.ELS_EE_ExpressivSetSignatureType(userId, sigType);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_ExpressivSetSignatureType(" + userId + ","
				+ sigType + ")");
		console.log(EE_ExpressivSetSignatureType);
	}
	return EE_ExpressivSetSignatureType;
};

/**
 * Indicates whether the Expressiv suite is currently using either the built-in, universal signature or a trained signature.
 * @params userId - int: ID of current user.
 * @returns EE_ExpressivSignature_t - signature type.
 */
EdkDll.EE_ExpressivGetSignatureType = function(userId) {
	var EE_ExpressivGetSignatureType = ELSPlugin()
			.ELS_EE_ExpressivGetSignatureType(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_ExpressivGetSignatureType(" + userId + ")");
		console.log(EE_ExpressivGetSignatureType);
	}
	return EE_ExpressivGetSignatureType;
};

/**
 * Set the current Cognitiv active action types.
 * @params userId - int: ID of current user.
			activeActions - a bit vector composed of EE_CognitivAction_t contants.
 * @returns EDK_ERROR_CODE
                - EDK_ERROR_CODE = EDK_OK if successful.
 */
EdkDll.EE_CognitivSetActiveActions = function(userId, activeActions) {
	var EE_CognitivSetActiveActions = ELSPlugin().ELS_EE_CognitivSetActiveActions(
			userId, activeActions);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_CognitivSetActiveActions(" + userId + ","
				+ activeActions + ")");
		console.log(EE_CognitivSetActiveActions);
	}
	return EE_CognitivSetActiveActions;
};

/**
 * Get the current Cognitiv active action types.
 * @params userId - int: ID of current user.
 * @returns activeActions - a bit vector composed of EE_CognitivAction_t contants.
 */
EdkDll.EE_CognitivGetActiveActions = function(userId) {
	var EE_CognitivGetActiveActions = ELSPlugin().ELS_EE_CognitivGetActiveActions(
			userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_CognitivGetActiveActions(" + userId + ")");
		console.log(EE_CognitivGetActiveActions);
	}
	return EE_CognitivGetActiveActions;
};

/**
 * Set cognitiv action to enable or disable, true is enable, false is disable, number of actions to enable is not exceed 4.
 * @params cognitivAction - a bit vector composed of EE_CognitivAction_t contants.
			cogBool - true is enable, false is disable
 * @returns int = 0 if ok.
 */
EdkDll.EE_EnableCognitivAction = function(cognitivAction, cogBool) {
	var EE_EnableCognitivAction = ELSPlugin().ELS_EnableCognitivAction(
			cognitivAction, cogBool);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_EnableCognitivAction(" + cognitivAction + ","
				+ cogBool + ")");
		console.log(EE_EnableCognitivAction);
	}
	return EE_EnableCognitivAction;
};

/**
 * All action that is set to enable will be set active through this function (number of enabled actions is not exceed 4).
 * @params userId - ID of current user.
 * @returns int = 0 if ok.
 */
EdkDll.EE_EnableCognitivActionsList = function(userId) {
	var EnableCognitivActionsList = ELSPlugin().ELS_EnableCognitivActionsList(
			userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_EnableCognitivActionsList(" + userId + ")");
		console.log(EnableCognitivActionsList);
	}
	return EnableCognitivActionsList;
};

/**
 * Get cognitiv actions that is set to active.
 * @params userId - ID of current user.
 * @returns array - cognitiv actions.
 */
EdkDll.EE_CognitivGetActionsEnabled = function(userId) {
	var EE_CognitivGetActionsEnabled = ELSPlugin()
			.ELS_EE_CognitivGetActionsEnabled(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_CognitivGetActionsEnabled(" + userId + ")");
		console.log(EE_CognitivGetActionsEnabled);
	}
	return EE_CognitivGetActionsEnabled;
};

/**
 * Return the duration of a Cognitiv training session.
 * @params userId - ID of current user.
 * @returns receive the training time in ms.
 */
EdkDll.EE_CognitivGetTrainingTime = function(userId) {
	var EE_CognitivGetTrainingTime = ELSPlugin()
			.ELS_EE_CognitivGetTrainingTime(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_CognitivGetTrainingTime(" + userId + ")");
		console.log(EE_CognitivGetTrainingTime);
	}
	return EE_CognitivGetTrainingTime;
};

/**
 * Set the training control flag for Cognitiv training.
 * @params userId - ID of current user.
			control - EE_CognitivTrainingControl_t pre-defined Cognitiv training control.
 * @returns EDK_ERROR_CODE
                - EDK_ERROR_CODE = EDK_OK if successful.
 */
EdkDll.EE_CognitivSetTrainingControl = function(userId, control) {
	var EE_CognitivSetTrainingControl = ELSPlugin()
			.ELS_EE_CognitivSetTrainingControl(userId, control);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_CognitivSetTrainingControl(" + userId + ","
				+ control + ")");
		console.log(EE_CognitivSetTrainingControl);
	}
	return EE_CognitivSetTrainingControl;
};

/**
 * Set the type of Cognitiv action to be trained.
 * @params userId - ID of current user.
			action - EE_CognitivAction_t which action would like to be trained.
 * @returns EDK_ERROR_CODE
                - EDK_ERROR_CODE = EDK_OK if successful.
 */
EdkDll.EE_CognitivSetTrainingAction = function(userId, action) {
	var EE_CognitivSetTrainingAction = ELSPlugin()
			.ELS_EE_CognitivSetTrainingAction(userId, action);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_CognitivSetTrainingAction(" + userId + ","
				+ action + ")");
		console.log(EE_CognitivSetTrainingAction);
	}
	return EE_CognitivSetTrainingAction;
};

// not used
//EdkDll.EE_CognitivGetTrainingAction = function(userId) {
//};

/**
 * Gets a list of the Cognitiv actions that have been trained by the user.
 * @params userId - ID of current user.
 * @returns long - list of the Cognitiv actions that have been trained by the user.
 */
EdkDll.EE_CognitivGetTrainedSignatureActions = function(userId) {
	var EE_CognitivGetTrainedSignatureActions = ELSPlugin()
			.ELS_EE_CognitivGetTrainedSignatureActions(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_CognitivGetTrainedSignatureActions(" + userId
				+ ")");
		console.log(EE_CognitivGetTrainedSignatureActions);
	}
	return EE_CognitivGetTrainedSignatureActions;
};

/**
 * Gets the current overall skill rating of the user in Cognitiv.
 * @params userId - ID of current user.
 * @returns float - receives the overall skill rating [from 0.0 to 1.0].
 */
EdkDll.EE_CognitivGetOverallSkillRating = function(userId) {
	var EE_CognitivGetOverallSkillRating = ELSPlugin()
			.ELS_EE_CognitivGetOverallSkillRating(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_CognitivGetOverallSkillRating(" + userId + ")");
		console.log(EE_CognitivGetOverallSkillRating);
	}
	return EE_CognitivGetOverallSkillRating;
};

/**
 * Gets the current skill rating for particular Cognitiv actions of the user.
 * @params userId - ID of current user.
			action - EE_CognitivAction_t a particular action of EE_CognitivAction_t contant
 * @returns float - receives the action skill rating [from 0.0 to 1.0].
 */
EdkDll.EE_CognitivGetActionSkillRating = function(userId, action) {
	var CognitivGetActionSkillRating = ELSPlugin()
			.ELS_EE_CognitivGetActionSkillRating(userId, action);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_CognitivGetActionSkillRating(" + userId + ","
				+ action + ")");
		console.log(CognitivGetActionSkillRating);
	}
	return CognitivGetActionSkillRating;
};

/**
 * Set the overall sensitivity for all Cognitiv actions.
 * @params userId - ID of current user.
			level - sensitivity level of all actions (lowest: 1, highest: 7)
 * @returns EDK_ERROR_CODE
                - EDK_ERROR_CODE = EDK_OK if successful.
 */
EdkDll.EE_CognitivSetActivationLevel = function(userId, level) {
	var EE_CognitivSetActivationLevel = ELSPlugin()
			.ELS_EE_CognitivSetActivationLevel(userId, level);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_CognitivSetActivationLevel(" + userId + ","
				+ level + ")");
		console.log(EE_CognitivSetActivationLevel);
	}
	return EE_CognitivSetActivationLevel;
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
EdkDll.EE_CognitivSetActionSensitivity = function(userId, action1Sensitivity,
		action2Sensitivity, action3Sensitivity, action4Sensitivity) {
	var EE_CognitivSetActionSensitivity = ELSPlugin()
			.ELS_EE_CognitivSetActionSensitivity(userId, action1Sensitivity,
					action2Sensitivity, action3Sensitivity, action4Sensitivity);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_CognitivSetActionSensitivity(" + userId + ","
				+ action1Sensitivity + "," + action2Sensitivity + ","
				+ action3Sensitivity + "," + action4Sensitivity + ")");
		console.log(EE_CognitivSetActionSensitivity);
	}
	return EE_CognitivSetActionSensitivity;
};

/**
 * Get the overall sensitivity for all Cognitiv actions.
 * @params userId - ID of current user.
 * @returns int - sensitivity level of all actions (min: 1, max: 10).
 */
EdkDll.EE_CognitivGetActivationLevel = function(userId) {
	var EE_CognitivGetActivationLevel = ELSPlugin()
			.ELS_EE_CognitivGetActivationLevel(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_CognitivGetActivationLevel(" + userId + ")");
		console.log(EE_CognitivGetActivationLevel);
	}
	return EE_CognitivGetActivationLevel;
};

/**
 * Query the sensitivity of Cognitiv actions.
 * @params userId - ID of current user.
 * @returns array - contains sensitivity for actions: pAction1SensitivityOut, pAction2SensitivityOut, pAction3SensitivityOut, pAction4SensitivityOut.
 */
EdkDll.EE_CognitivGetActionSensitivity = function(userId) {
	var EE_CognitivGetActionSensitivity = ELSPlugin()
			.ELS_EE_CognitivGetActionSensitivity(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_CognitivGetActionSensitivity(" + userId + ")");
		console.log(EE_CognitivGetActionSensitivity);
	}
	return EE_CognitivGetActionSensitivity;
};

// not used
//EdkDll.EE_CognitivStartSamplingNeutral = function(userId) {
//};
/**
 * Start Sampling Neutral.
 * @params userId - ID of current user.
 * @returns EDK_ERROR_CODE
                - EDK_ERROR_CODE = EDK_OK if successful.
 */
EdkDll.EE_CognitivStartSamplingNeutral = function(userId) {
	var EE_CognitivStartSamplingNeutral = ELSPlugin()
			.ELS_EE_CognitivStartSamplingNeutral(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_CognitivStartSamplingNeutral(" + userId + ")");
		console.log(EE_CognitivStartSamplingNeutral);
	}
	return EE_CognitivStartSamplingNeutral;
};

// not used
//EdkDll.EE_CognitivStopSamplingNeutral = function(userId) {
//};

/**
 * Stop Sampling Neutral.
 * @params userId - ID of current user.
 * @returns EDK_ERROR_CODE
                - EDK_ERROR_CODE = EDK_OK if successful.
 */
EdkDll.EE_CognitivStopSamplingNeutral = function(userId) {
	var EE_CognitivStopSamplingNeutral = ELSPlugin()
			.ELS_EE_CognitivStopSamplingNeutral(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_CognitivStopSamplingNeutral(" + userId + ")");
		console.log(EE_CognitivStopSamplingNeutral);
	}
	return EE_CognitivStopSamplingNeutral;
};

/**
 * Enable or disable signature caching in Cognitiv.
 * @params userId - ID of current user.
			enabled - flag to set status of caching (1: enable, 0: disable)
 * @returns EDK_ERROR_CODE
                - EDK_ERROR_CODE = EDK_OK if successful.
 */
EdkDll.EE_CognitivSetSignatureCaching = function(userId, enabled) {
	var EE_CognitivSetSignatureCaching = ELSPlugin()
			.ELS_EE_CognitivSetSignatureCaching(userId, enabled);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_CognitivSetSignatureCaching(" + userId + ","
				+ enabled + ")");
		console.log(EE_CognitivSetSignatureCaching);
	}
	return EE_CognitivSetSignatureCaching;
};

/**
 * Query the status of signature caching in Cognitiv.
 * @params userId - ID of current user.
 * @returns int - flag to get status of caching (1: enable, 0: disable).
 */
EdkDll.EE_CognitivGetSignatureCaching = function(userId) {
	var EE_CognitivGetSignatureCaching = ELSPlugin()
			.ELS_EE_CognitivGetSignatureCaching(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_CognitivGetSignatureCaching(" + userId + ")");
		console.log(EE_CognitivGetSignatureCaching);
	}
	return EE_CognitivGetSignatureCaching;
};

/**
 * Set the cache size for the signature caching in Cognitiv.
 * @params userId - ID of current user.
			size   - int number of signatures to be kept in the cache (0: unlimited)
 * @returns EDK_ERROR_CODE
                - EDK_ERROR_CODE = EDK_OK if successful.
 */
EdkDll.EE_CognitivSetSignatureCacheSize = function(userId, size) {
	var EE_CognitivSetSignatureCacheSize = ELSPlugin()
			.ELS_EE_CognitivSetSignatureCacheSize(userId, size);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_CognitivSetSignatureCacheSize(" + userId + ","
				+ size + ")");
		console.log(EE_CognitivSetSignatureCacheSize);
	}
	return EE_CognitivSetSignatureCacheSize;
};

/**
 * Get the current cache size for the signature caching in Cognitiv.
 * @params userId - ID of current user.
 * @returns int - number of signatures to be kept in the cache (0: unlimited).
 */
EdkDll.EE_CognitivGetSignatureCacheSize = function(userId) {
	var EE_CognitivGetSignatureCacheSize = ELSPlugin()
			.ELS_EE_CognitivGetSignatureCacheSize(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_CognitivGetSignatureCacheSize(" + userId + ")");
		console.log(EE_CognitivGetSignatureCacheSize);
	}
	return EE_CognitivGetSignatureCacheSize;
};

/**
 * Returns a array containing details about sensor location and other info
 * @param channelId - EE_InputChannels_t epoc channel identifier has values in EE_InputChannels_t
 * @returns InputSensorDescriptor_t - detailed sensor location and other info
 */
EdkDll.EE_HeadsetGetSensorDetails = function(channelId) {
	var EE_HeadsetGetSensorDetails = ELSPlugin()
			.ELS_EE_HeadsetGetSensorDetails(channelId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_HeadsetGetSensorDetails(" + channelId + ")");
		console.log(EE_HeadsetGetSensorDetails);
	}
	return EE_HeadsetGetSensorDetails;
};

/**
 * Returns the current hardware version of the headset and dongle for a particular user
 * @param userId - user ID for query
 * @return unsigned long - hardware version for the user headset/dongle pair. hiword is headset version, loword is dongle version.
 * ex: with result = 0x1E001FFF, Headset version is 1E00 (check EdkDll.EE_HeadsetVersion_t for version of headset) and dongle version is 1FFF.
 */
EdkDll.EE_HardwareGetVersion = function(userId) {
	var EE_HardwareGetVersion = ELSPlugin().ELS_EE_HardwareGetVersion(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_HardwareGetVersion(" + userId + ")");
		console.log(EE_HardwareGetVersion);
	}
	return EE_HardwareGetVersion;
};

/**
 * Returns the current version of the Emotiv SDK software.
 * @param nVersionChars - Length of char buffer pointed to by pszVersion argument.
 * @return array - pszVersionOut - SDK software version in X.X.X.X format. Note: current beta releases have a major version of 0.
					Build number.  Unique for each release.
 */
EdkDll.EE_SoftwareGetVersion = function(nVersionChars) {
	var EE_SoftwareGetVersion = ELSPlugin().ELS_EE_SoftwareGetVersion(nVersionChars);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_SoftwareGetVersion(" + nVersionChars + ")");
		console.log(EE_SoftwareGetVersion);
	}
	return EE_SoftwareGetVersion;
};

/**
 * Returns the delta of the movement of the gyro since the previous call for a particular user.
 * @param userId - user ID for query.
 * @return array - pXOut: horizontal displacement, pYOut: vertical displacment.
 */
EdkDll.EE_HeadsetGetGyroDelta = function(userId) {
	var EE_HeadsetGetGyroDelta = ELSPlugin().ELS_EE_HeadsetGetGyroDelta(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_HeadsetGetGyroDelta(" + userId + ")");
		console.log(EE_HeadsetGetGyroDelta);
	}
	return EE_HeadsetGetGyroDelta;
};

/**
 * Re-zero the gyro for a particular user.
 * @param userId - user ID for query.
 * @return EDK_ERROR_CODE
                - EDK_ERROR_CODE = EDK_OK if successful.
 */
EdkDll.EE_HeadsetGyroRezero = function(userId) {
	var EE_HeadsetGyroRezero = ELSPlugin().ELS_EE_HeadsetGyroRezero(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_HeadsetGyroRezero(" + userId + ")");
		console.log(EE_HeadsetGyroRezero);
	}
	return EE_HeadsetGyroRezero;
};

// not used
//EdkDll.EE_OptimizationParamCreate = function() {
//};

// not used
//EdkDll.EE_OptimizationParamFree = function(hParam) {
//};

// not used
//EdkDll.EE_OptimizationEnable = function(hParam) {
//};

// not used
//EdkDll.EE_OptimizationIsEnabled = function() {
//};

// not used
//EdkDll.EE_OptimizationDisable = function() {
//};

// not used
//EdkDll.EE_OptimizationGetParam = function(hParam) {
//};

// not used
//EdkDll.EE_OptimizationGetVitalAlgorithm = function(hParam, suite) {
//};

// not used
//EdkDll.EE_OptimizationSetVitalAlgorithm = function(hParam, suite,
		//vitalAlgorithmBitVector) {
//};

// not used
//EdkDll.EE_ResetDetection = function(userId, suite, detectionBitVector) {
//};

// not supported
//EdkDll.ES_Create = function() {
//};

// not supported
//EdkDll.ES_Free = function() {
//};

// not supported
//EdkDll.ES_Init = function() {
//};

/**
 * Return the time since EmoEngine has been successfully connected to the headset
	If the headset is disconnected from EmoEngine due to low battery or weak
        wireless signal, the time will be reset to zero.
 * @return float - time in second.
 */
EdkDll.ES_GetTimeFromStart = function() {
	var ES_GetTimeFromStart = ELSPlugin().ELS_ES_GetTimeFromStart();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.ES_GetTimeFromStart()");
		console.log(ES_GetTimeFromStart);
	}
	return ES_GetTimeFromStart;
};

/**
 * Return whether the headset has been put on correctly or not.
 * @return int - (1: On, 0: Off).
 */
EdkDll.ES_GetHeadsetOn = function() {
	var ES_GetHeadsetOn = ELSPlugin().ELS_ES_GetHeadsetOn();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.ES_GetHeadsetOn()");
		console.log(ES_GetHeadsetOn);
	}
	return ES_GetHeadsetOn;
};

// not used
//EdkDll.ES_GetNumContactQualityChannels = function() {
//};

/**
 * Query the contact quality of all the electrodes in one single call.
 * @return Array - list contact quality of all the electrodes.
 */
EdkDll.ES_GetContactQualityFromAllChannels = function() {
	var ES_GetContactQualityFromAllChannels = ELSPlugin()
			.ELS_ES_GetContactQualityFromAllChannels();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.ES_GetContactQualityFromAllChannels()");
		console.log(ES_GetContactQualityFromAllChannels);
	}
	return ES_GetContactQualityFromAllChannels;
};

/**
 * Controls acquisition of data from EmoEngine (which is off by default).
 * @param userId - user ID for query.
			enable - bool: If true, then enables data acquisition
							If false, then disables data acquisition.
 * @return EDK_ERROR_CODE
                - EDK_ERROR_CODE = EDK_OK if the command succeeded.
 */
EdkDll.EE_DataAcquisitionEnable = function(userId, enable) {
	var EE_DataAcquisitionEnable = ELSPlugin().ELS_EE_DataAcquisitionEnable(
			userId, enable);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_DataAcquisitionEnable(" + userId + "," + enable
				+ ")");
		console.log(EE_DataAcquisitionEnable);
	}
	return EE_DataAcquisitionEnable;
};

/**
 * Sets marker
 * @param userId - user ID for query.
			marker - int: value of the marker
 * @return EDK_ERROR_CODE
                - EDK_ERROR_CODE = EDK_OK if the command succeeded.
 */
EdkDll.EE_DataSetMarker = function(userId, marker) {
	var EE_DataSetMarker = ELSPlugin().ELS_EE_DataSetMarker(
			userId, marker);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_DataSetMarker(" + userId + "," + marker
				+ ")");
		console.log(EE_DataSetMarker);
	}
	return EE_DataSetMarker;
};

/**
 * Gets sampling rate
 * @param userId - user ID for query.
 * @return samplingRateOut - int: receives the sampling rate
 */
EdkDll.EE_DataGetSamplingRate = function(userId) {
	var EE_DataGetSamplingRate = ELSPlugin().ELS_EE_DataGetSamplingRate(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_DataGetSamplingRate(" + userId + ")");
		console.log(EE_DataGetSamplingRate);
	}
	return EE_DataGetSamplingRate;
};

/**
 * Sets the size of the data buffer. The size of the buffer affects how frequent EE_DataUpdateHandle() needs to be called to prevent data loss.
 * @param bufferSizeInSec - float: buffer size in second.
 * @return EDK_ERROR_CODE
                - EDK_ERROR_CODE = EDK_OK if successful.
 */
EdkDll.EE_DataSetBufferSizeInSec = function(bufferSizeInSec) {
	var EE_DataSetBufferSizeInSec = ELSPlugin().ELS_EE_DataSetBufferSizeInSec(
			bufferSizeInSec);
	if (EdkDll.DebugLog) {
		console
				.log("EdkDll.EE_DataSetBufferSizeInSec(" + bufferSizeInSec
						+ ")");
		console.log(EE_DataSetBufferSizeInSec);
	}
	return EE_DataSetBufferSizeInSec;
};

/**
 * Get the size of the data buffer. The size of the buffer affects how frequent EE_DataUpdateHandle() needs to be called to prevent data loss.
 * @return bufferSizeInSec - float: buffer size in second.
 */
EdkDll.EE_DataGetBufferSizeInSec = function() {
	var EE_DataGetBufferSizeInSec = ELSPlugin().ELS_EE_DataGetBufferSizeInSec();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_DataGetBufferSizeInSec()");
		console.log(EE_DataGetBufferSizeInSec);
	}
	return EE_DataGetBufferSizeInSec;
};

/**
 * Updates the content of the data handle to point to new data since the last call.
 * @param userId - user ID for query.
 * @return EDK_ERROR_CODE
                - EDK_ERROR_CODE = EDK_OK if successful.
 */
EdkDll.EE_DataUpdateHandle = function(userId) {
	var EE_DataUpdateHandle = ELSPlugin().ELS_EE_DataUpdateHandle(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_DataUpdateHandle(" + userId + ")");
		console.log(EE_DataUpdateHandle);
	}
	return EE_DataUpdateHandle;
};

/**
 * Extracts data of a particulat channel from the data handle.
 * @return two dimensional array - one dimension is channel, another dimension is data of channel.
 */
EdkDll.EE_DataGet = function() {
	var EE_DataGet = ELSPlugin().ELS_EE_DataGet();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_DataGet()");
		console.log(EE_DataGet);
	}
	return EE_DataGet;
};

/**
 * Sets the size of the motion data buffer. The size of the buffer affects how frequent
 * EE_MotionDataUpdateHandle() needs to be called to prevent data loss.
 * 
 * @param bufferSizeInSec -
 *            float: buffer size in second
 * @returns: EDK_ERROR_CODE - EDK_ERROR_CODE = EDK_OK if successful
 */
EdkDll.EE_MotionDataSetBufferSizeInSec = function(bufferSizeInSec) {
	var EE_MotionDataSetBufferSizeInSec = ELSPlugin()
			.ELS_EE_MotionDataSetBufferSizeInSec(bufferSizeInSec);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_MotionDataSetBufferSizeInSec(" + bufferSizeInSec
				+ ")");
		console.log(EE_MotionDataSetBufferSizeInSec);
	}
	return EE_MotionDataSetBufferSizeInSec;
};

/**
 * Get the size of the motion data buffer. The size of the buffer affects how frequent
 * EE_MotionDataUpdateHandle() needs to be called to prevent data loss.
 * @returns: bufferSizeInSec - float: buffer size in second
 */
EdkDll.EE_MotionDataGetBufferSizeInSec = function() {
	var EE_MotionDataGetBufferSizeInSec = ELSPlugin().ELS_EE_MotionDataGetBufferSizeInSec();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_MotionDataGetBufferSizeInSec()");
		console.log(EE_MotionDataGetBufferSizeInSec);
	}
	return EE_MotionDataGetBufferSizeInSec;
};

/**
 * Gets sampling rate of motion data
 * @param userId - user ID for query.
 * @return samplingRateOut - int: receives the sampling rate
 */
EdkDll.EE_MotionDataGetSamplingRate = function(userId) {
	var EE_MotionDataGetSamplingRate = ELSPlugin().ELS_EE_MotionDataGetSamplingRate(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_MotionDataGetSamplingRate(" + userId + ")");
		console.log(EE_MotionDataGetSamplingRate);
	}
	return EE_MotionDataGetSamplingRate;
};

/**
 * Updates the content of the motion data handle to point to new data since the last
 * call
 * 
 * @param userId -
 *            user ID
 * @returns: EDK_ERROR_CODE - EDK_ERROR_CODE = EDK_OK if successful
 */
EdkDll.EE_MotionDataUpdateHandle = function(userId) {
	var EE_MotionDataUpdateHandle = ELSPlugin().ELS_EE_MotionDataUpdateHandle(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_MotionDataUpdateHandle(" + userId + ")");
		console.log(EE_MotionDataUpdateHandle);
	}
	return EE_MotionDataUpdateHandle;
};

/**
 * Returns number of sample of motion data stored in the motion data handle
 * 
 * @returns: number of sample of data stored in the data handle
 */
EdkDll.EE_MotionDataGetNumberOfSample = function() {
	var EE_MotionDataGetNumberOfSample = ELSPlugin().ELS_EE_MotionDataGetNumberOfSample();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_MotionDataGetNumberOfSample()");
		console.log(EE_MotionDataGetNumberOfSample);
	}
	return EE_MotionDataGetNumberOfSample;
};

/**
 * Extracts motion data of a particular channel from the data handle
 * 
 * @returns: array EEG Motion Data (is used for EEG License); two dimensional array
 */
EdkDll.EE_MotionDataGet = function() {
	var EE_MotionDataGet = ELSPlugin().ELS_EE_MotionDataGet();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.EE_MotionDataGet()");
		console.log(EE_MotionDataGet);
	}
	return EE_MotionDataGet;
};

/**
 * Query the contact quality of a specific EEG electrode.
 * @params electroIdx - int: location of electrode to get contact quality.
 * @return EE_EEG_ContactQuality_t - contact quality of the electrode.
 */
EdkDll.ES_GetContactQuality = function(electroIdx) {
	var ES_GetContactQuality = ELSPlugin().ELS_ES_GetContactQuality(electroIdx);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.ES_GetContactQuality()");
		console.log(ES_GetContactQuality);
	}
	return ES_GetContactQuality;
};

/**
 * Query whether the user is blinking at the time the EmoState is captured.
 * @return blink status (1: blink, 0: not blink).
 */
EdkDll.ES_ExpressivIsBlink = function() {
	var ES_ExpressivIsBlink = ELSPlugin().ELS_ES_ExpressivIsBlink();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.ES_ExpressivIsBlink()");
		console.log(ES_ExpressivIsBlink);
	}
	return ES_ExpressivIsBlink;
};

/**
 * Query whether the user is winking left at the time the EmoState is captured.
 * @return left wink status (1: wink, 0: not wink).
 */
EdkDll.ES_ExpressivIsLeftWink = function() {
	var ES_ExpressivIsLeftWink = ELSPlugin().ELS_ES_ExpressivIsLeftWink();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.ES_ExpressivIsLeftWink()");
		console.log(ES_ExpressivIsLeftWink);
	}
	return ES_ExpressivIsLeftWink;
};

/**
 * Query whether the user is winking right at the time the EmoState is captured.
 * @return right wink status (1: wink, 0: not wink).
 */
EdkDll.ES_ExpressivIsRightWink = function() {
	var ES_ExpressivIsRightWink = ELSPlugin().ELS_ES_ExpressivIsRightWink();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.ES_ExpressivIsRightWink()");
		console.log(ES_ExpressivIsRightWink);
	}
	return ES_ExpressivIsRightWink;
};

/**
 * Query whether the eyes of the user are opened at the time the EmoState is captured.
 * @return eye open status (1: eyes open, 0: eyes closed).
 */
EdkDll.ES_ExpressivIsEyesOpen = function() {
	var ES_ExpressivIsEyesOpen = ELSPlugin().ELS_ES_ExpressivIsEyesOpen();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.ES_ExpressivIsEyesOpen()");
		console.log(ES_ExpressivIsEyesOpen);
	}
	return ES_ExpressivIsEyesOpen;
};

/**
 * Query whether the user is looking up at the time the EmoState is captured.
 * @return eyes position (1: looking up, 0: not looking up).
 */
EdkDll.ES_ExpressivIsLookingUp = function() {
	var ES_ExpressivIsLookingUp = ELSPlugin().ELS_ES_ExpressivIsLookingUp();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.ES_ExpressivIsLookingUp()");
		console.log(ES_ExpressivIsLookingUp);
	}
	return ES_ExpressivIsLookingUp;
};

/**
 * Query whether the user is looking down at the time the EmoState is captured.
 * @return eyes position (1: looking down, 0: not looking down).
 */
EdkDll.ES_ExpressivIsLookingDown = function() {
	var ES_ExpressivIsLookingDown = ELSPlugin().ELS_ES_ExpressivIsLookingDown();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.ES_ExpressivIsLookingDown()");
		console.log(ES_ExpressivIsLookingDown);
	}
	return ES_ExpressivIsLookingDown;
};

/**
 * Query whether the user is looking left at the time the EmoState is captured.
 * @return eye position (1: looking left, 0: not looking left).
 */
EdkDll.ES_ExpressivIsLookingLeft = function() {
	var ES_ExpressivIsLookingLeft = ELSPlugin().ELS_ES_ExpressivIsLookingLeft();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.ES_ExpressivIsLookingLeft()");
		console.log(ES_ExpressivIsLookingLeft);
	}
	return ES_ExpressivIsLookingLeft;
};

/**
 * Query whether the user is looking right at the time the EmoState is captured.
 * @return eye position (1: looking right, 0: not looking right).
 */
EdkDll.ES_ExpressivIsLookingRight = function() {
	var ES_ExpressivIsLookingRight = ELSPlugin().ELS_ES_ExpressivIsLookingRight();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.ES_ExpressivIsLookingRight()");
		console.log(ES_ExpressivIsLookingRight);
	}
	return ES_ExpressivIsLookingRight;
};

// not used
//EdkDll.ES_ExpressivGetEyelidState = function(state, size) {
//};

// not used
//EdkDll.ES_ExpressivGetEyeLocation = function(state, size) {
//};

/**
 * Returns the eyebrow extent of the user (Obsolete function).
 * @return eyebrow extent value (0.0 to 1.0).
 */
EdkDll.ES_ExpressivGetEyebrowExtent = function() {
	var ES_ExpressivGetEyebrowExtent = ELSPlugin().ELS_ES_ExpressivGetEyebrowExtent();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.ES_ExpressivGetEyebrowExtent()");
		console.log(ES_ExpressivGetEyebrowExtent);
	}
	return ES_ExpressivGetEyebrowExtent;
};

/**
 * Returns the smile extent of the user (Obsolete function).
 * @return smile extent value (0.0 to 1.0).
 */
EdkDll.ES_ExpressivGetSmileExtent = function() {
	var ES_ExpressivGetSmileExtent = ELSPlugin().ELS_ES_ExpressivGetSmileExtent();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.ES_ExpressivGetSmileExtent()");
		console.log(ES_ExpressivGetSmileExtent);
	}
	return ES_ExpressivGetSmileExtent;
};

/**
 * Returns the clench extent of the user (Obsolete function).
 * @return clench extent value (0.0 to 1.0).
 */
EdkDll.ES_ExpressivGetClenchExtent = function() {
	var ES_ExpressivGetClenchExtent = ELSPlugin()
			.ELS_ES_ExpressivGetClenchExtent();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.ES_ExpressivGetClenchExtent()");
		console.log(ES_ExpressivGetClenchExtent);
	}
	return ES_ExpressivGetClenchExtent;
};

/**
 * Returns the detected upper face Expressiv action of the user.
 * @return EE_ExpressivAlgo_t - pre-defined Expressiv action types.
 */
EdkDll.ES_ExpressivGetUpperFaceAction = function() {
	var ES_ExpressivGetUpperFaceAction = ELSPlugin()
			.ELS_ES_ExpressivGetUpperFaceAction();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.ES_ExpressivGetUpperFaceAction()");
		console.log(ES_ExpressivGetUpperFaceAction);
	}
	return ES_ExpressivGetUpperFaceAction;
};

/**
 * Returns the detected upper face Expressiv action power of the user.
 * @return power value (0.0 to 1.0).
 */
EdkDll.ES_ExpressivGetUpperFaceActionPower = function() {
	var ES_ExpressivGetUpperFaceActionPower = ELSPlugin()
			.ELS_ES_ExpressivGetUpperFaceActionPower();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.ES_ExpressivGetUpperFaceActionPower()");
		console.log(ES_ExpressivGetUpperFaceActionPower);
	}
	return ES_ExpressivGetUpperFaceActionPower;
};

/**
 * Returns the detected lower face Expressiv action of the user.
 * @return EE_ExpressivAlgo_t - pre-defined Expressiv action types.
 */
EdkDll.ES_ExpressivGetLowerFaceAction = function() {
	var ES_ExpressivGetLowerFaceAction = ELSPlugin()
			.ELS_ES_ExpressivGetLowerFaceAction();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.ES_ExpressivGetLowerFaceAction()");
		console.log(ES_ExpressivGetLowerFaceAction);
	}
	return ES_ExpressivGetLowerFaceAction;
};

/**
 * Returns the detected lower face Expressiv action power of the user.
 * @return power value (0.0 to 1.0).
 */
EdkDll.ES_ExpressivGetLowerFaceActionPower = function() {
	var ES_ExpressivGetLowerFaceActionPower = ELSPlugin()
			.ELS_ES_ExpressivGetLowerFaceActionPower();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.ES_ExpressivGetLowerFaceActionPower()");
		console.log(ES_ExpressivGetLowerFaceActionPower);
	}
	return ES_ExpressivGetLowerFaceActionPower;
};

// not used
//EdkDll.ES_ExpressivIsActive = function(state, type) {
//};

/**
 * Returns the long term excitement level of the user.
 * @return excitement level (0.0 to 1.0).
 */
EdkDll.ES_AffectivGetExcitementLongTermScore = function() {
	var ES_AffectivGetExcitementLongTermScore = ELSPlugin()
			.ELS_ES_AffectivGetExcitementLongTermScore();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.ES_AffectivGetExcitementLongTermScore()");
		console.log(ES_AffectivGetExcitementLongTermScore);
	}
	return ES_AffectivGetExcitementLongTermScore;
};

/**
 * Returns short term excitement level of the user.
 * @return excitement level (0.0 to 1.0).
 */
EdkDll.ES_AffectivGetExcitementShortTermScore = function() {
	var ES_AffectivGetExcitementShortTermScore = ELSPlugin()
			.ELS_ES_AffectivGetExcitementShortTermScore();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.ES_AffectivGetExcitementShortTermScore()");
		console.log(ES_AffectivGetExcitementShortTermScore);
	}
	return ES_AffectivGetExcitementShortTermScore;
};

// not used
//EdkDll.ES_AffectivIsActive = function(state, type) {
//};

/**
 * Returns meditation level of the user.
 * @return meditation level (0.0 to 1.0).
 */
EdkDll.ES_AffectivGetMeditationScore = function() {
	var ES_AffectivGetMeditationScore = ELSPlugin()
			.ELS_ES_AffectivGetMeditationScore();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.ES_AffectivGetMeditationScore()");
		console.log(ES_AffectivGetMeditationScore);
	}
	return ES_AffectivGetMeditationScore;
};

/**
 * Returns frustration level of the user.
 * @return frustration level (0.0 to 1.0).
 */
EdkDll.ES_AffectivGetFrustrationScore = function() {
	var ES_AffectivGetFrustrationScore = ELSPlugin()
			.ELS_ES_AffectivGetFrustrationScore();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.ES_AffectivGetFrustrationScore()");
		console.log(ES_AffectivGetFrustrationScore);
	}
	return ES_AffectivGetFrustrationScore;
};

/**
 * Returns engagement/boredom level of the user.
 * @return engagement/boredom level (0.0 to 1.0).
 */
EdkDll.ES_AffectivGetEngagementBoredomScore = function() {
	var ES_AffectivGetEngagementBoredomScore = ELSPlugin()
			.ELS_ES_AffectivGetEngagementBoredomScore();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.ES_AffectivGetEngagementBoredomScore()");
		console.log(ES_AffectivGetEngagementBoredomScore);
	}
	return ES_AffectivGetEngagementBoredomScore;
};

/**
 * Returns valence level of the user.
 * @return valence level (0.0 to 1.0).
 */
EdkDll.ES_AffectivGetValenceScore = function() {
	var ES_AffectivGetValenceScore = ELSPlugin().ELS_ES_AffectivGetValenceScore();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.ES_AffectivGetValenceScore()");
		console.log(ES_AffectivGetValenceScore);
	}
	return ES_AffectivGetValenceScore;
};

/**
 * Returns Affectiv raw value: excitement raw, meditation raw, engagement raw, frustration raw, valence raw.
 * @return two dimensional array: one dimension is excitement, meditation ..., another dimension is raw value of excitement ...
 */
EdkDll.ES_AffectivRawValueGet = function() {
	var ES_AffectivRawValueGet = ELSPlugin().ELS_ES_AffectivRawValueGet();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.ES_AffectivRawValueGet()");
		console.log(ES_AffectivRawValueGet);
	}
	return ES_AffectivRawValueGet;
};

/**
 * Returns the detected Cognitiv action of the user.
 * @return EE_CognitivAction_t - Cognitiv action type.
 */
EdkDll.ES_CognitivGetCurrentAction = function() {
	var ES_CognitivGetCurrentAction = ELSPlugin()
			.ELS_ES_CognitivGetCurrentAction();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.ES_CognitivGetCurrentAction()");
		console.log(ES_CognitivGetCurrentAction);
	}
	return ES_CognitivGetCurrentAction;
};

/**
 * Returns the detected Cognitiv action power of the user.
 * @return Cognitiv action power (0.0 to 1.0).
 */
EdkDll.ES_CognitivGetCurrentActionPower = function() {
	var ES_CognitivGetCurrentActionPower = ELSPlugin()
			.ELS_ES_CognitivGetCurrentActionPower();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.ES_CognitivGetCurrentActionPower()");
		console.log(ES_CognitivGetCurrentActionPower);
	}
	return ES_CognitivGetCurrentActionPower;
};

// not used
//EdkDll.ES_CognitivIsActive = function(state) {
//};

/**
 * Query of the current wireless signal strength.
 * @return wireless signal strength [No Signal, Bad, Fair, Good, Excellent] - 0,1,2,3,4.
 */
EdkDll.ES_GetWirelessSignalStatus = function() {
	var ES_GetWirelessSignalStatus = ELSPlugin().ELS_ES_GetWirelessSignalStatus();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.ES_GetWirelessSignalStatus()");
		console.log(ES_GetWirelessSignalStatus);
	}
	return ES_GetWirelessSignalStatus;
};

// not used
//EdkDll.ES_Copy = function() {
//};

/**
 * Check whether two states are with identical 'emotiv' state.
 * @return 1: Equal, 0: Different.
 */
EdkDll.ES_AffectivEqual = function() {
	var ES_AffectivEqual = ELSPlugin().ELS_ES_AffectivEqual();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.ES_AffectivEqual()");
		console.log(ES_AffectivEqual);
	}
	return ES_AffectivEqual;
};

/**
 * Check whether two states are with identical Expressiv state, i.e. are both state representing the same facial expression.
 * @return 1: Equal, 0: Different.
 */
EdkDll.ES_ExpressivEqual = function() {
	var ES_ExpressivEqual = ELSPlugin().ELS_ES_ExpressivEqual();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.ES_ExpressivEqual()");
		console.log(ES_ExpressivEqual);
	}
	return ES_ExpressivEqual;
};

/**
 * Check whether two states are with identical Cognitiv state.
 * @return 1: Equal, 0: Different.
 */
EdkDll.ES_CognitivEqual = function() {
	var ES_CognitivEqual = ELSPlugin().ELS_ES_CognitivEqual();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.ES_CognitivEqual()");
		console.log(ES_CognitivEqual);
	}
	return ES_CognitivEqual;
};

/**
 * Check whether two states are with identical EmoEngine state.
 * @return 1: Equal, 0: Different.
 */
EdkDll.ES_EmoEngineEqual = function() {
	var ES_EmoEngineEqual = ELSPlugin().ELS_ES_EmoEngineEqual();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.ES_EmoEngineEqual()");
		console.log(ES_EmoEngineEqual);
	}
	return ES_EmoEngineEqual;
};

// not used
//EdkDll.ES_Equal = function(a, b) {
//};

/**
 * Get the level of charge remaining in the headset battery.
 * @return array: chargeLevel        - the current level of charge in the headset battery
					maxChargeLevel    - the maximum level of charge in the battery
 */
EdkDll.ES_GetBatteryChargeLevel = function() {
	var ES_GetBatteryChargeLevel = ELSPlugin().ELS_ES_GetBatteryChargeLevel();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.ES_GetBatteryChargeLevel()");
		console.log(ES_GetBatteryChargeLevel);
	}
	return ES_GetBatteryChargeLevel;
};

/*******************************************************************************
 * Insight functions
 */

/**
 * Connect to Insight Headset
 * 
 * @returns: 0 if ok, -1 if not
 */
EdkDll.IEE_EngineConnect = function() {
	var IEngineConnect = ELSPlugin().ELS_IEE_EngineConnect();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_EngineConnect()");
		console.log(IEngineConnect);
	}
	return IEngineConnect;
};

/**
 * Connect to Insight Composer
 * 
 * @returns: 0 if ok, -1 if not
 */
EdkDll.IEE_EngineRemoteConnect = function() {
	var IEE_EngineRemoteConnect = ELSPlugin().ELS_IEE_EngineRemoteConnect();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_EngineRemoteConnect()");
		console.log(IEE_EngineRemoteConnect);
	}
	return IEE_EngineRemoteConnect;
};

/**
 * Get Security Code
 * 
 * @returns security code: id code from EDK
 */
EdkDll.IEE_GetSecurityCode = function() {
	var IEE_GetSecurityCode = ELSPlugin().ELS_IEE_GetSecurityCode();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_GetSecurityCode()");
		console.log(IEE_GetSecurityCode);
	}
	return IEE_GetSecurityCode;
};

/**
 * Check Security Code
 * 
 * @returns EDK_ERROR_CODE
                - EDK_ERROR_CODE = EDK_OK if check security code successfully
 */
EdkDll.IEE_CheckSecurityCode = function(x) {
	var IEE_CheckSecurityCode = ELSPlugin().ELS_IEE_CheckSecurityCode(x);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_CheckSecurityCode(" + x + ")");
		console.log(IEE_CheckSecurityCode);
	}
	return IEE_CheckSecurityCode;
}

/**
 * Retrieves the next EmoEngine event
 * 
 * @returns EDK_ERROR_CODE = EDK_OK if a new event has been retrieved
 *          EDK_ERROR_CODE = EDK_NO_EVENT if no new events have been generated
 *          by EmoEngine
 */
EdkDll.IEE_EngineGetNextEvent = function() {
	var IEE_EngineGetNextEvent = ELSPlugin().ELS_IEE_EngineGetNextEvent();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_EngineGetNextEvent()");
		console.log(IEE_EngineGetNextEvent);
	}
	return IEE_EngineGetNextEvent;
};

/**
 * Copies an EmoState returned with a IEE_EmoStateUpdate event to memory
 * referenced by an EmoStateHandle.
 * 
 * @returns return EDK_ERROR_CODE - EDK_ERROR_CODE = EDK_OK if successful.
 */
EdkDll.IEE_EmoEngineEventGetEmoState = function() {
	var IEE_EmoEngineEventGetEmoState = ELSPlugin()
			.ELS_IEE_EmoEngineEventGetEmoState();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_EmoEngineEventGetEmoState()");
		console.log(IEE_EmoEngineEventGetEmoState);
	}
	return IEE_EmoEngineEventGetEmoState;
};

/**
 * Returns the event type for an event already retrieved using
 * IEE_EngineGetNextEvent.
 * 
 * @returns: IEE_Event_t value
 */
EdkDll.IEE_EmoEngineEventGetType = function() {
	var IEE_EmoEngineEventGetType = ELSPlugin().ELS_IEE_EmoEngineEventGetType();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_EmoEngineEventGetType()");
		console.log(IEE_EmoEngineEventGetType);
	}
	return IEE_EmoEngineEventGetType;
};

/**
 * Retrieves the user ID for IEE_UserAdded and IEE_UserRemoved events.
 * 
 * @returns return EDK_ERROR_CODE - EDK_ERROR_CODE = EDK_OK if successful.
 */
EdkDll.IEE_EmoEngineEventGetUserId = function() {
	var IEE_EmoEngineEventGetUserId = ELSPlugin()
			.ELS_IEE_EmoEngineEventGetUserId();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_EmoEngineEventGetUserId()");
		console.log(IEE_EmoEngineEventGetUserId);
	}
	return IEE_EmoEngineEventGetUserId;
};

/**
 * Retrieves number of active users connected to the EmoEngine.
 * 
 * @returns number of user.
 */
EdkDll.IEE_EngineGetNumUser = function() {
	var IEE_EngineGetNumUser = ELSPlugin().ELS_IEE_EngineGetNumUser();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_EngineGetNumUser()");
		console.log(IEE_EngineGetNumUser);
	}
	return IEE_EngineGetNumUser;
};

/**
 * Terminates the connection to EmoEngine. This function should be called at the
 * end of programs which make use of EmoEngine, most probably in clean up
 * routine or destructor.
 * 
 * @returns return EDK_ERROR_CODE - EDK_ERROR_CODE = EDK_OK if disconnection is
 *          achieved
 */
EdkDll.IEE_EngineDisconnect = function() {
	var IEE_EngineDisconnect = ELSPlugin().ELS_IEE_EngineDisconnect();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_EngineDisconnect()");
		console.log(IEE_EngineDisconnect);
	}
	return IEE_EngineDisconnect;
};

/**
 * Returns the current hardware version of the headset and dongle for a particular user.
 * @param userId - user ID for query.
 * @return unsigned long - hardware version for the user headset/dongle pair. hiword is headset version, loword is dongle version.
 * ex: with result = 0x1E001FFF, Headset version is 1E00 (check EdkDll.IEE_HeadsetVersion_t for version of headset) and dongle version is 1FFF.
 */
EdkDll.IEE_HardwareGetVersion = function(userId) {
	var IEE_HardwareGetVersion = ELSPlugin().ELS_IEE_HardwareGetVersion(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_HardwareGetVersion(" + userId + ")");
		console.log(IEE_HardwareGetVersion);
	}
	return IEE_HardwareGetVersion;
};

/**
 * Returns the current version of the Emotiv SDK software.
 * @param nVersionChars - Length of char buffer pointed to by pszVersion argument.
 * @return array - pszVersionOut - SDK software version in X.X.X.X format. Note: current beta releases have a major version of 0.
					Build number.  Unique for each release.
 */
EdkDll.IEE_SoftwareGetVersion = function(nVersionChars) {
	var IEE_SoftwareGetVersion = ELSPlugin().ELS_IEE_SoftwareGetVersion(nVersionChars);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_SoftwareGetVersion(" + nVersionChars + ")");
		console.log(IEE_SoftwareGetVersion);
	}
	return IEE_SoftwareGetVersion;
};

/**
 * Return the time since EmoEngine has been successfully connected to the
 * headset If the headset is disconnected from EmoEngine due to low battery or
 * weak wireless signal, the time will be reset to zero.
 * 
 * @returns: float - time in second
 */
EdkDll.IS_GetTimeFromStart = function() {
	var IS_GetTimeFromStart = ELSPlugin().ELS_IS_GetTimeFromStart();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IS_GetTimeFromStart()");
		console.log(IS_GetTimeFromStart);
	}
	return IS_GetTimeFromStart;
};

/**
 * Return whether the headset has been put on correctly or not.
 * @return int - (1: On, 0: Off).
 */
EdkDll.IS_GetHeadsetOn = function() {
	var IS_GetHeadsetOn = ELSPlugin().ELS_IS_GetHeadsetOn();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IS_GetHeadsetOn()");
		console.log(IS_GetHeadsetOn);
	}
	return IS_GetHeadsetOn;
};

/**
 * Query of the current wireless signal strength.
 * 
 * @returns: int - 0,1,2,3,4 according to wireless signal strength [No Signal,
 *           Bad, Fair, Good, Excellent].
 */
EdkDll.IS_GetWirelessSignalStatus = function() {
	var IS_GetWirelessSignalStatus = ELSPlugin()
			.ELS_IS_GetWirelessSignalStatus();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IS_GetWirelessSignalStatus()");
		console.log(IS_GetWirelessSignalStatus);
	}
	return IS_GetWirelessSignalStatus;
};

/**
 * Get the level of charge remaining in the headset battery.
 * 
 * @returns param chargeLevel - the current level of charge in the headset
 *          battery param maxChargeLevel - the maximum level of charge in the
 *          battery.
 */
EdkDll.IS_GetBatteryChargeLevel = function() {
	var IS_GetBatteryChargeLevel = ELSPlugin().ELS_IS_GetBatteryChargeLevel();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IS_GetBatteryChargeLevel()");
		console.log(IS_GetBatteryChargeLevel);
	}
	return IS_GetBatteryChargeLevel;
};

/**
 * Query the contact quality of all the electrodes in one single call.
 * 
 * @returns param contactQuality - array of 32-bit float of size numChannels
 *          param numChannels - size (number of floats) of the input array
 *          return Number of signal quality values copied to the contactQuality
 *          array.
 */
EdkDll.IS_GetContactQualityFromAllChannels = function() {
	var IS_GetContactQualityFromAllChannels = ELSPlugin()
			.ELS_IS_GetContactQualityFromAllChannels();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IS_GetContactQualityFromAllChannels()");
		console.log(IS_GetContactQualityFromAllChannels);
	}
	return IS_GetContactQualityFromAllChannels;
};

/**
 * Query the contact quality of a specific EEG electrode.
 * @param: electroIdx - int: The index of the electrode for query.
 * @return: IEE_EEG_ContactQuality_t - Enumerated value that characterizes the EEG electrode contact for the specified input channel.
 */
EdkDll.IS_GetContactQuality = function(electroIdx) {
	var IS_GetContactQuality = ELSPlugin()
			.ELS_IS_GetContactQuality(electroIdx);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IS_GetContactQuality("+electroIdx+")");
		console.log(IS_GetContactQuality);
	}
	return IS_GetContactQuality;
};

/**
 * Query the contact quality for five EEG electrode: AF3, AF4, Pz, T8, AF4.
 * @return: array of IEE_EEG_ContactQuality_t  - Enumerated value that characterizes the EEG electrode contact for the specified input channel.
 * AF3 = 0, T7 = 1, Pz = 2, T8 = 3, AF4 = 4;
 */
EdkDll.IS_GetContactQualities = function() {
	var IS_GetContactQualities = ELSPlugin()
			.ELS_IS_GetContactQualities();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IS_GetContactQualities()");
		console.log(IS_GetContactQualities);
	}
	return IS_GetContactQualities;
};

/**
 * Query whether the user is blinking at the time the EmoState is captured.
 * 
 * @returns: blink status (1: blink, 0: not blink).
 */
EdkDll.IS_FacialExpressionIsBlink = function() {
	var IS_FacialExpressionIsBlink = ELSPlugin()
			.ELS_IS_FacialExpressionIsBlink();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IS_FacialExpressionIsBlink()");
		console.log(IS_FacialExpressionIsBlink);
	}
	return IS_FacialExpressionIsBlink;
};

/**
 * Query whether the eyes of the user are opened at the time the EmoState is
 * captured.
 * 
 * @returns: eye open status (1: eyes open, 0: eyes closed).
 */
EdkDll.IS_FacialExpressionIsEyesOpen = function() {
	var IS_FacialExpressionIsEyesOpen = ELSPlugin()
			.ELS_IS_FacialExpressionIsEyesOpen();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IS_FacialExpressionIsEyesOpen()");
		console.log(IS_FacialExpressionIsEyesOpen);
	}
	return IS_FacialExpressionIsEyesOpen;
};

/**
 * Query whether the user is winking left at the time the EmoState is captured.
 * 
 * @returns: left wink status (1: wink, 0: not wink).
 */
EdkDll.IS_FacialExpressionIsLeftWink = function() {
	var IS_FacialExpressionIsLeftWink = ELSPlugin()
			.ELS_IS_FacialExpressionIsLeftWink();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IS_FacialExpressionIsLeftWink()");
		console.log(IS_FacialExpressionIsLeftWink);
	}
	return IS_FacialExpressionIsLeftWink;
};

/**
 * Query whether the user is winking right at the time the EmoState is captured.
 * 
 * @returns: right wink status (1: wink, 0: not wink).
 */
EdkDll.IS_FacialExpressionIsRightWink = function() {
	var IS_FacialExpressionIsRightWink = ELSPlugin()
			.ELS_IS_FacialExpressionIsRightWink();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IS_FacialExpressionIsRightWink()");
		console.log(IS_FacialExpressionIsRightWink);
	}
	return IS_FacialExpressionIsRightWink;
};

/**
 * Query whether the user is looking up at the time the EmoState is captured.
 * 
 * @returns: eyes position (1: looking up, 0: not looking up).
 */
EdkDll.IS_FacialExpressionIsLookingUp = function() {
	var IS_FacialExpressionIsLookingUp = ELSPlugin()
			.ELS_IS_FacialExpressionIsLookingUp();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IS_FacialExpressionIsLookingUp()");
		console.log(IS_FacialExpressionIsLookingUp);
	}
	return IS_FacialExpressionIsLookingUp;
};

/**
 * Query whether the user is looking down at the time the EmoState is captured.
 * 
 * @returns:eyes position (1: looking down, 0: not looking down).
 */
EdkDll.IS_FacialExpressionIsLookingDown = function() {
	var IS_FacialExpressionIsLookingDown = ELSPlugin()
			.ELS_IS_FacialExpressionIsLookingDown();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IS_FacialExpressionIsLookingDown()");
		console.log(IS_FacialExpressionIsLookingDown);
	}
	return IS_FacialExpressionIsLookingDown;
};

/**
 * Returns the eyebrow extent of the user (Obsolete function).
 * 
 * @return: eyebrow extent value (0.0 to 1.0).
 */
EdkDll.IS_FacialExpressionGetEyebrowExtent = function() {
	var IS_FacialExpressionGetEyebrowExtent = ELSPlugin()
			.ELS_IS_FacialExpressionGetEyebrowExtent();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IS_FacialExpressionGetEyebrowExtent()");
		console.log(IS_FacialExpressionGetEyebrowExtent);
	}
	return IS_FacialExpressionGetEyebrowExtent;
};

/**
 * Returns the clench extent of the user (Obsolete function).
 * 
 * @returns: clench extent value (0.0 to 1.0).
 */
EdkDll.IS_FacialExpressionGetClenchExtent = function() {
	var IS_FacialExpressionGetClenchExtent = ELSPlugin()
			.ELS_IS_FacialExpressionGetClenchExtent();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IS_FacialExpressionGetClenchExtent()");
		console.log(IS_FacialExpressionGetClenchExtent);
	}
	return IS_FacialExpressionGetClenchExtent;
};

/**
 * Returns the smile extent of the user (Obsolete function).
 * 
 * @returns: smile extent value (0.0 to 1.0).
 */
EdkDll.IS_FacialExpressionGetSmileExtent = function() {
	var IS_FacialExpressionGetSmileExtent = ELSPlugin()
			.ELS_IS_FacialExpressionGetSmileExtent();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IS_FacialExpressionGetSmileExtent()");
		console.log(IS_FacialExpressionGetSmileExtent);
	}
	return IS_FacialExpressionGetSmileExtent;
};

/**
 * Returns the detected lower face FacialExpression action of the user.
 * 
 * @returns: pre-defined FacialExpression action types.
 */
EdkDll.IS_FacialExpressionGetLowerFaceAction = function() {
	var IS_FacialExpressionGetLowerFaceAction = ELSPlugin()
			.ELS_IS_FacialExpressionGetLowerFaceAction();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IS_FacialExpressionGetLowerFaceAction()");
		console.log(IS_FacialExpressionGetLowerFaceAction);
	}
	return IS_FacialExpressionGetLowerFaceAction;
};

/**
 * Returns the detected lower face FacialExpression action power of the user.
 * 
 * @return power value (0.0 to 1.0).
 */
EdkDll.IS_FacialExpressionGetLowerFaceActionPower = function() {
	var IS_FacialExpressionGetLowerFaceActionPower = ELSPlugin()
			.ELS_IS_FacialExpressionGetLowerFaceActionPower();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IS_FacialExpressionGetLowerFaceActionPower()");
		console.log(IS_FacialExpressionGetLowerFaceActionPower);
	}
	return IS_FacialExpressionGetLowerFaceActionPower;
};

/**
 * Returns the detected upper face FacialExpression action of the user.
 * 
 * @returns: return pre-defined FacialExpression action types.
 */
EdkDll.IS_FacialExpressionGetUpperFaceAction = function() {
	var IS_FacialExpressionGetUpperFaceAction = ELSPlugin()
			.ELS_IS_FacialExpressionGetUpperFaceAction();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IS_FacialExpressionGetUpperFaceAction()");
		console.log(IS_FacialExpressionGetUpperFaceAction);
	}
	return IS_FacialExpressionGetUpperFaceAction;
};

/**
 * Returns the detected upper face FacialExpression action power of the user.
 * 
 * @returns: power value (0.0 to 1.0).
 */
EdkDll.IS_FacialExpressionGetUpperFaceActionPower = function() {
	var IS_FacialExpressionGetUpperFaceActionPower = ELSPlugin()
			.ELS_IS_FacialExpressionGetUpperFaceActionPower();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IS_FacialExpressionGetUpperFaceActionPower()");
		console.log(IS_FacialExpressionGetUpperFaceActionPower);
	}
	return IS_FacialExpressionGetUpperFaceActionPower;
};

/**
 * Returns engagement/boredom level of the user.
 * 
 * @returns: engagement/boredom level (0.0 to 1.0).
 */
EdkDll.IS_PerformanceMetricGetEngagementBoredomScore = function() {
	var IS_PerformanceMetricGetEngagementBoredomScore = ELSPlugin()
			.ELS_IS_PerformanceMetricGetEngagementBoredomScore();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IS_PerformanceMetricGetEngagementBoredomScore()");
		console.log(IS_PerformanceMetricGetEngagementBoredomScore);
	}
	return IS_PerformanceMetricGetEngagementBoredomScore;
};

/**
 * Returns the long term excitement level of the user.
 * 
 * @returns: excitement level (0.0 to 1.0).
 */
EdkDll.IS_PerformanceMetricGetExcitementLongTermScore = function() {
	var IS_PerformanceMetricGetExcitementLongTermScore = ELSPlugin()
			.ELS_IS_PerformanceMetricGetExcitementLongTermScore();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IS_PerformanceMetricGetExcitementLongTermScore()");
		console.log(IS_PerformanceMetricGetExcitementLongTermScore);
	}
	return IS_PerformanceMetricGetExcitementLongTermScore;
};

/**
 * Returns short term excitement level of the user.
 * 
 * @returns: excitement level (0.0 to 1.0).
 */
EdkDll.IS_PerformanceMetricGetInstantaneousExcitementScore = function() {
	var IS_PerformanceMetricGetInstantaneousExcitementScore = ELSPlugin()
			.ELS_IS_PerformanceMetricGetInstantaneousExcitementScore();
	if (EdkDll.DebugLog) {
		console
				.log("EdkDll.IS_PerformanceMetricGetInstantaneousExcitementScore()");
		console.log(IS_PerformanceMetricGetInstantaneousExcitementScore);
	}
	return IS_PerformanceMetricGetInstantaneousExcitementScore;
};

/**
 * Returns frustration (stress) level of the user.
 * 
 * @returns: frustration level (0.0 to 1.0).
 */
EdkDll.IS_PerformanceMetricGetStressScore = function() {
	var IS_PerformanceMetricGetStressScore = ELSPlugin()
			.ELS_IS_PerformanceMetricGetStressScore();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IS_PerformanceMetricGetStressScore()");
		console.log(IS_PerformanceMetricGetStressScore);
	}
	return IS_PerformanceMetricGetStressScore;
};

/**
 * Returns meditation (relax) level of the user.
 * 
 * @returns: meditation level (0.0 to 1.0).
 */
EdkDll.IS_PerformanceMetricGetRelaxationScore = function() {
	var IS_PerformanceMetricGetRelaxationScore = ELSPlugin()
			.ELS_IS_PerformanceMetricGetRelaxationScore();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IS_PerformanceMetricGetRelaxationScore()");
		console.log(IS_PerformanceMetricGetRelaxationScore);
	}
	return IS_PerformanceMetricGetRelaxationScore;
};

/**
 * Returns valence (interest) level of the user.
 * 
 * @returns: valence level (0.0 to 1.0).
 */
EdkDll.IS_PerformanceMetricGetInterestScore = function() {
	var IS_PerformanceMetricGetInterestScore = ELSPlugin()
			.ELS_IS_PerformanceMetricGetInterestScore();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IS_PerformanceMetricGetInterestScore()");
		console.log(IS_PerformanceMetricGetInterestScore);
	}
	return IS_PerformanceMetricGetInterestScore;
};

/**
 * Returns focus level of the user.
 * 
 * @returns: focus level (0.0 to 1.0).
 */
EdkDll.IS_PerformanceMetricGetFocusScore = function() {
	var IS_PerformanceMetricGetFocusScore = ELSPlugin()
			.ELS_IS_PerformanceMetricGetFocusScore();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IS_PerformanceMetricGetFocusScore()");
		console.log(IS_PerformanceMetricGetFocusScore);
	}
	return IS_PerformanceMetricGetFocusScore;
};

/**
 * Returns raw model parameters.
 * 
 * @return: array of scores.
 */
EdkDll.IS_PerformanceMetricRawValueGet = function() {
	var IS_PerformanceMetricRawValueGet = ELSPlugin()
			.ELS_IS_PerformanceMetricRawValueGet();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IS_PerformanceMetricRawValueGet()");
		console.log(IS_PerformanceMetricRawValueGet);
	}
	return IS_PerformanceMetricRawValueGet;
};

/**
 * Returns the detected MentalCommand action of the user.
 * 
 * @returns: MentalCommand action type.
 */
EdkDll.IS_MentalCommandGetCurrentAction = function() {
	var IS_MentalCommandGetCurrentAction = ELSPlugin()
			.ELS_IS_MentalCommandGetCurrentAction();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IS_MentalCommandGetCurrentAction()");
		console.log(IS_MentalCommandGetCurrentAction);
	}
	return IS_MentalCommandGetCurrentAction;
};

/**
 * Returns the detected MentalCommand action power of the user.
 * 
 * @returns: MentalCommand action power (0.0 to 1.0).
 */
EdkDll.IS_MentalCommandGetCurrentActionPower = function() {
	var IS_MentalCommandGetCurrentActionPower = ELSPlugin()
			.ELS_IS_MentalCommandGetCurrentActionPower();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IS_MentalCommandGetCurrentActionPower()");
		console.log(IS_MentalCommandGetCurrentActionPower);
	}
	return IS_MentalCommandGetCurrentActionPower;
};

/**
 * Check whether current and default states are with identical EmoEngine state.
 * 
 * @returns: 1: Equal, 0: Different.
 */
EdkDll.IS_EmoEngineEqual = function() {
	var IS_EmoEngineEqual = ELSPlugin().ELS_IS_EmoEngineEqual();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IS_EmoEngineEqual()");
		console.log(IS_EmoEngineEqual);
	}
	return IS_EmoEngineEqual;
};

/**
 * Check whether current and default states are with identical MentalCommand
 * state.
 * 
 * @returns: 1: Equal, 0: Different.
 */
EdkDll.IS_MentalCommandEqual = function() {
	var IS_MentalCommandEqual = ELSPlugin().ELS_IS_MentalCommandEqual();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IS_MentalCommandEqual()");
		console.log(IS_MentalCommandEqual);
	}
	return IS_MentalCommandEqual;
};

/**
 * Check whether current and default states are with identical FacialExpression
 * state, i.e. are both state representing the same facial expression.
 * 
 * @returns: 1: Equal, 0: Different.
 */
EdkDll.IS_FacialExpressionEqual = function() {
	var IS_FacialExpressionEqual = ELSPlugin().ELS_IS_FacialExpressionEqual();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IS_FacialExpressionEqual()");
		console.log(IS_FacialExpressionEqual);
	}
	return IS_FacialExpressionEqual;
};

/**
 * Check whether current and default states are with identical 'emotiv' state.
 * 
 * @returns: 1: Equal, 0: Different.
 */
EdkDll.IS_PerformanceMetricEqual = function() {
	var IS_PerformanceMetricEqual = ELSPlugin().ELS_IS_PerformanceMetricEqual();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IS_PerformanceMetricEqual()");
		console.log(IS_PerformanceMetricEqual);
	}
	return IS_PerformanceMetricEqual;
};

/**
 * Returns the FacialExpression-specific event type for an
 * IEE_FacialExpressionEvent event already retrieved using
 * IEE_EngineGetNextEvent.
 * 
 * @returns: IEE_FacialExpressionEvent_t.
 */
EdkDll.IEE_FacialExpressionEventGetType = function() {
	var IEE_FacialExpressionEventGetType = ELSPlugin()
			.ELS_IEE_FacialExpressionEventGetType();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_FacialExpressionEventGetType()");
		console.log(IEE_FacialExpressionEventGetType);
	}
	return IEE_FacialExpressionEventGetType;
};

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
EdkDll.IEE_FacialExpressionGetThreshold = function(userId, algoName,
		thresholdName) {
	var IEE_FacialExpressionGetThreshold = ELSPlugin()
			.ELS_IEE_FacialExpressionGetThreshold(userId, algoName,
					thresholdName);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_FacialExpressionGetThreshold(" + userId + ","
				+ algoName + "," + thresholdName + ")");
		console.log(IEE_FacialExpressionGetThreshold);
	}
	return IEE_FacialExpressionGetThreshold;
};

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
 * @returns EDK_ERROR_CODE. If the query is
 *           successful, EDK_ERROR_CODE = OK
 */
EdkDll.IEE_FacialExpressionSetThreshold = function(userId, algoName,
		thresholdName, value) {
	var IEE_FacialExpressionSetThreshold = ELSPlugin()
			.ELS_IEE_FacialExpressionSetThreshold(userId, algoName,
					thresholdName, value);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_FacialExpressionSetThreshold(" + userId + ","
				+ algoName + "," + thresholdName + "," + value + ")");
		console.log(IEE_FacialExpressionSetThreshold);
	}
	return IEE_FacialExpressionSetThreshold;
};

/**
 * Configures the FacialExpression suite to use either the built-in, universal
 * signature or a personal, trained signature.
 * 
 * @param userId -
 *            user ID.
 * @param sigType -
 *            IEE_FacialExpressionSignature_t: signature type to use.
 * @returns: EDK_ERROR_CODE - current status of EmoEngine. If the query is
 *           successful, EDK_ERROR_CODE = OK.
 */
EdkDll.IEE_FacialExpressionSetSignatureType = function(userId, sigType) {
	var IEE_FacialExpressionSetThreshold = ELSPlugin()
			.ELS_IEE_FacialExpressionSetSignatureType(userId, sigType);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_FacialExpressionSetThreshold(" + userId + ","
				+ sigType + ")");
		console.log(IEE_FacialExpressionSetThreshold);
	}
	return IEE_FacialExpressionSetThreshold;
};

/**
 * Indicates whether the FacialExpression suite is currently using either the
 * built-in, universal signature or a trained signature.
 * 
 * @param userId -
 *            user ID.
 * @returns: int - the signature type currently in use.
 */
EdkDll.IEE_FacialExpressionGetSignatureType = function(userId) {
	var IEE_FacialExpressionGetSignatureType = ELSPlugin()
			.ELS_IEE_FacialExpressionGetSignatureType(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_FacialExpressionGetSignatureType(" + userId
				+ ")");
		console.log(IEE_FacialExpressionGetSignatureType);
	}
	return IEE_FacialExpressionGetSignatureType;
};

/**
 * Set the current facial expression for FacialExpression training.
 * 
 * @param userId -
 *            user ID.
 * @param action -
 *            IEE_FacialExpressionAlgo_t: which facial expression would like to be trained/
 * @returns: EDK_ERROR_CODE - current status of EmoEngine. If the query is
 *           successful, EDK_ERROR_CODE = OK.
 */
EdkDll.IEE_FacialExpressionSetTrainingAction = function(userId, action) {
	var IEE_FacialExpressionSetTrainingAction = ELSPlugin()
			.ELS_IEE_FacialExpressionSetTrainingAction(userId, action);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_FacialExpressionSetTrainingAction(" + userId
				+ "," + action + ")");
		console.log(IEE_FacialExpressionSetTrainingAction);
	}
	return IEE_FacialExpressionSetTrainingAction;
};

/**
 * Set the control flag for FacialExpression training.
 * 
 * @param userId -
 *            user ID.
 * @param control -
 *            IEE_FacialExpressionTrainingControl_t: pre-defined control command.
 * @returns: EDK_ERROR_CODE - If the query is
 *           successful, EDK_ERROR_CODE = OK.
 */
EdkDll.IEE_FacialExpressionSetTrainingControl = function(userId, control) {
	var IEE_FacialExpressionSetTrainingControl = ELSPlugin()
			.ELS_IEE_FacialExpressionSetTrainingControl(userId, control);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_FacialExpressionSetTrainingControl(" + userId
				+ "," + control + ")");
		console.log(IEE_FacialExpressionSetTrainingControl);
	}
	return IEE_FacialExpressionSetTrainingControl;
};

/**
 * Gets the expression currently selected for Expressiv training.
 * @params userId - int: ID of current user.
 * @returns EE_ExpressivAlgo_t - current training expressiv action.
 */
EdkDll.IEE_FacialExpressionGetTrainingAction = function(userId) {
	var IEE_FacialExpressionGetTrainingAction = ELSPlugin()
			.ELS_IEE_FacialExpressionGetTrainingAction(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_FacialExpressionGetTrainingAction(" + userId + ")");
		console.log(IEE_FacialExpressionGetTrainingAction);
	}
	return IEE_FacialExpressionGetTrainingAction;
};

/**
 * Return the duration of a Expressiv training session.
 * @params userId - int: ID of current user.
 * @returns int - time training in second.
 */
EdkDll.IEE_FacialExpressionGetTrainingTime = function(userId) {
	var IEE_FacialExpressionGetTrainingTime = ELSPlugin()
			.ELS_IEE_FacialExpressionGetTrainingTime(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_FacialExpressionGetTrainingTime(" + userId + ")");
		console.log(IEE_FacialExpressionGetTrainingTime);
	}
	return IEE_FacialExpressionGetTrainingTime;
};

/**
 * Gets a list of the actions that have been trained by the user.
 * 
 * @param userId -
 *            user ID.
 * @returns: a bit vector composed of IEE_FacialExpressionAlgo_t contants.
 */
EdkDll.IEE_FacialExpressionGetTrainedSignatureActions = function(userId) {
	var IEE_FacialExpressionGetTrainedSignatureActions = ELSPlugin()
			.ELS_IEE_FacialExpressionGetTrainedSignatureActions(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_FacialExpressionGetTrainedSignatureActions("
				+ userId + ")");
		console.log(IEE_FacialExpressionGetTrainedSignatureActions);
	}
	return IEE_FacialExpressionGetTrainedSignatureActions;
};

/**
 * Gets a flag indicating if the user has trained sufficient actions to activate
 * a trained signature.
 * 
 * @param userId -
 *            user ID.
 * @returns: int that is non-zero if a trained signature can be activated.
 */
EdkDll.IEE_FacialExpressionGetTrainedSignatureAvailable = function(userId) {
	var IEE_FacialExpressionGetTrainedSignatureAvailable = ELSPlugin()
			.ELS_IEE_FacialExpressionGetTrainedSignatureAvailable(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_FacialExpressionGetTrainedSignatureAvailable("
				+ userId + ")");
		console.log(IEE_FacialExpressionGetTrainedSignatureAvailable);
	}
	return IEE_FacialExpressionGetTrainedSignatureAvailable;
};

/**
 * Returns the MentalCommand-specific event type for an IEE_MentalCommandEvent.
 * event already retrieved using IEE_EngineGetNextEvent.
 * 
 * @returns: IEE_MentalCommandEvent_t.
 */
EdkDll.IEE_MentalCommandEventGetType = function() {
	var IEE_MentalCommandEventGetType = ELSPlugin()
			.ELS_IEE_MentalCommandEventGetType();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_MentalCommandEventGetType()");
		console.log(IEE_MentalCommandEventGetType);
	}
	return IEE_MentalCommandEventGetType;
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
EdkDll.IEE_MentalCommandGetActionSkillRating = function(userId, action) {
	var IEE_MentalCommandGetActionSkillRating = ELSPlugin()
			.ELS_IEE_MentalCommandGetActionSkillRating(userId, action);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_MentalCommandGetActionSkillRating(" + userId
				+ "," + action + ")");
		console.log(IEE_MentalCommandGetActionSkillRating);
	}
	return IEE_MentalCommandGetActionSkillRating;
};

/**
 * Gets the current overall skill rating of the user in MentalCommand.
 * 
 * @param userId -
 *            user ID.
 * @returns: the overall skill rating [from 0.0 to 1.0].
 */
EdkDll.IEE_MentalCommandGetOverallSkillRating = function(userId) {
	var IEE_MentalCommandGetOverallSkillRating = ELSPlugin()
			.ELS_IEE_MentalCommandGetOverallSkillRating(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_MentalCommandGetOverallSkillRating(" + userId
				+ ")");
		console.log(IEE_MentalCommandGetOverallSkillRating);
	}
	return IEE_MentalCommandGetOverallSkillRating;
};

/**
 * Gets a list of the MentalCommand actions that have been trained by the user.
 * 
 * @param userId -
 *            user ID.
 * @returns: a bit vector composed of IEE_MentalCommandAction_t contants.
 */
EdkDll.IEE_MentalCommandGetTrainedSignatureActions = function(userId) {
	var IEE_MentalCommandGetTrainedSignatureActions = ELSPlugin()
			.ELS_IEE_MentalCommandGetTrainedSignatureActions(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_MentalCommandGetTrainedSignatureActions("
				+ userId + ")");
		console.log(IEE_MentalCommandGetTrainedSignatureActions);
	}
	return IEE_MentalCommandGetTrainedSignatureActions;
};

/**
 * Get the current MentalCommand active action types.
 * 
 * @param userId -
 *            user ID.
 * @returns: a bit vector composed of IEE_MentalCommandAction_t contants.
 */
EdkDll.IEE_MentalCommandGetActiveActions = function(userId) {
	var IEE_MentalCommandGetActiveActions = ELSPlugin()
			.ELS_IEE_MentalCommandGetActiveActions(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_MentalCommandGetActiveActions(" + userId + ")");
		console.log(IEE_MentalCommandGetActiveActions);
	}
	return IEE_MentalCommandGetActiveActions;
};

/**
 * Get the current enabled MentalCommand action types.
 * 
 * @param userId -
 *            user ID.
 * @returns: a bit vector composed of IEE_MentalCommandAction_t contants.
 */
EdkDll.IEE_MentalCommandGetActionsEnabled = function(userId) {
	var IEE_MentalCommandGetActionsEnabled = ELSPlugin()
			.ELS_IEE_MentalCommandGetActionsEnabled(userId);
	if (EdkDll.DebugLog) {
		console
				.log("EdkDll.IEE_MentalCommandGetActionsEnabled(" + userId
						+ ")");
		console.log(IEE_MentalCommandGetActionsEnabled);
	}
	return IEE_MentalCommandGetActionsEnabled;
};

/**
 * Return the duration of a Mentalcommand training session.
 * @params userId - ID of current user.
 * @returns receive the training time in ms.
 */
EdkDll.IEE_MentalCommandGetTrainingTime = function(userId) {
	var IEE_MentalCommandGetTrainingTime = ELSPlugin()
			.ELS_IEE_MentalCommandGetTrainingTime(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_MentalCommandGetTrainingTime(" + userId + ")");
		console.log(IEE_MentalCommandGetTrainingTime);
	}
	return IEE_MentalCommandGetTrainingTime;
};

/**
 * Set the current MentalCommand active action types.
 * 
 * @param userId -
 *            user ID.
 * @param activeActions -
 *            long: a bit vector composed of IEE_MentalCommandAction_t contants.
 * @returns: EDK_ERROR_CODE - EDK_ERROR_CODE = EDK_OK if successful.
 */
EdkDll.IEE_MentalCommandSetActiveActions = function(userId, activeActions) {
	var IEE_MentalCommandSetActiveActions = ELSPlugin()
			.ELS_IEE_MentalCommandSetActiveActions(userId, activeActions);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_MentalCommandSetActiveActions(" + userId + ","
				+ activeActions + ")");
		console.log(IEE_MentalCommandSetActiveActions);
	}
	return IEE_MentalCommandSetActiveActions;
};

/**
 * Add a MentalCommand action to action list before it is enabled with
 * IEE_EnableMentalCommandActionsList function (do not exceed 4 action in list to enable).
 * 
 * @param mentalCommandAction: IEE_MentalCommandAction_t - action is added to list.
 * @param cogBool: bool - true is enable, false is disable.
 * @returns: true if ok, -1 if not.
 */
EdkDll.IEE_EnableMentalCommandAction = function(mentalCommandAction, cogBool) {
	var IEE_EnableMentalCommandAction = ELSPlugin()
			.ELS_EnableMentalCommandAction(mentalCommandAction, cogBool);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_EnableMentalCommandAction("
				+ mentalCommandAction + "," + cogBool + ")");
		console.log(IEE_EnableMentalCommandAction);
	}
	return IEE_EnableMentalCommandAction;
};

/**
 * Enable mentalcommand action list (actions were added in
 * IEE_EnableMentalCommandAction function).
 * 
 * @param userId.
 * @returns: EDK_ERROR_CODE - EDK_ERROR_CODE = EDK_OK if successful.
 */
EdkDll.IEE_EnableMentalCommandActionsList = function(userId) {
	var IEE_EnableMentalCommandActionsList = ELSPlugin()
			.ELS_EnableMentalCommandActionsList(userId);
	if (EdkDll.DebugLog) {
		console
				.log("EdkDll.IEE_EnableMentalCommandActionsList(" + userId
						+ ")");
		console.log(IEE_EnableMentalCommandActionsList);
	}
	return IEE_EnableMentalCommandActionsList;
};

/**
 * Set the type of MentalCommand action to be trained.
 * 
 * @param userId -
 *            user ID.
 * @param action -
 *            IEE_MentalCommandAction_t: which action would like to be trained.
 * @returns: EDK_ERROR_CODE - EDK_ERROR_CODE = EDK_OK if successful.
 */
EdkDll.IEE_MentalCommandSetTrainingAction = function(userId, action) {
	var IEE_MentalCommandSetTrainingAction = ELSPlugin()
			.ELS_IEE_MentalCommandSetTrainingAction(userId, action);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_MentalCommandSetTrainingAction(" + userId + ","
				+ action + ")");
		console.log(IEE_MentalCommandSetTrainingAction);
	}
	return IEE_MentalCommandSetTrainingAction;
};

/**
 * Set the training control flag for MentalCommand training.
 * 
 * @param userId -
 *            user ID.
 * @param control -
 *            IEE_MentalCommandTrainingControl_t: pre-defined MentalCommand training control.
 * @returns: EDK_ERROR_CODE - EDK_ERROR_CODE = EDK_OK if successful.
 */
EdkDll.IEE_MentalCommandSetTrainingControl = function(userId, control) {
	var IEE_MentalCommandSetTrainingControl = ELSPlugin()
			.ELS_IEE_MentalCommandSetTrainingControl(userId, control);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_MentalCommandSetTrainingControl(" + userId
				+ "," + control + ")");
		console.log(IEE_MentalCommandSetTrainingControl);
	}
	return IEE_MentalCommandSetTrainingControl;
};

/**
 * Set the overall sensitivity for all MentalCommand actions.
 * 
 * @param userId -
 *            user ID.
 * @param level -
 *            int: sensitivity level of all actions (lowest: 1, highest: 7).
 * @returns: EDK_ERROR_CODE - EDK_ERROR_CODE = EDK_OK if successful.
 */
EdkDll.IEE_MentalCommandSetActivationLevel = function(userId, level) {
	var IEE_MentalCommandSetActivationLevel = ELSPlugin()
			.ELS_IEE_MentalCommandSetActivationLevel(userId, level);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_MentalCommandSetActivationLevel(" + userId
				+ "," + level + ")");
		console.log(IEE_MentalCommandSetActivationLevel);
	}
	return IEE_MentalCommandSetActivationLevel;
};

/**
 * Get the overall sensitivity for all MentalCommand actions.
 * 
 * @param userId -
 *            user ID.
 * @returns - sensitivity level of all actions (min: 1, max: 10).
 */
EdkDll.IEE_MentalCommandGetActivationLevel = function(userId) {
	var IEE_MentalCommandGetActivationLevel = ELSPlugin()
			.ELS_IEE_MentalCommandGetActivationLevel(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_MentalCommandGetActivationLevel(" + userId
				+ ")");
		console.log(IEE_MentalCommandGetActivationLevel);
	}
	return IEE_MentalCommandGetActivationLevel;
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
 * @returns EDK_ERROR_CODE
				- EDK_ERROR_CODE = EDK_OK if successful.
 */
EdkDll.IEE_MentalCommandSetActionSensitivity = function(userId,
		action1Sensitivity, action2Sensitivity, action3Sensitivity,
		action4Sensitivity) {
	var IEE_MentalCommandSetActionSensitivity = ELSPlugin()
			.ELS_IEE_MentalCommandSetActionSensitivity(userId,
					action1Sensitivity, action2Sensitivity, action3Sensitivity,
					action4Sensitivity);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_MentalCommandSetActionSensitivity(" + userId
				+ "," + action1Sensitivity + "," + action2Sensitivity + ","
				+ action3Sensitivity + "," + action4Sensitivity + ")");
		console.log(IEE_MentalCommandSetActionSensitivity);
	}
	return IEE_MentalCommandSetActionSensitivity;
};

/**
 * Query the sensitivity of MentalCommand actions.
 * 
 * @param userId -
 *            user ID.
 * @returns: array sensitivity of actions.
 */
EdkDll.IEE_MentalCommandGetActionSensitivity = function(userId) {
	var IEE_MentalCommandGetActionSensitivity = ELSPlugin()
			.ELS_IEE_MentalCommandGetActionSensitivity(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_MentalCommandGetActionSensitivity(" + userId
				+ ")");
		console.log(IEE_MentalCommandGetActionSensitivity);
	}
	return IEE_MentalCommandGetActionSensitivity;
};

/**
 * Start Sampling Neutral in MentalCommand.
 * 
 * @param userId -
 *            user ID.
 * @returns: EDK_ERROR_CODE - EDK_ERROR_CODE = EDK_OK if successful.
 */
EdkDll.IEE_MentalCommandStartSamplingNeutral = function(userId) {
	var IEE_MentalCommandStartSamplingNeutral = ELSPlugin()
			.ELS_IEE_MentalCommandStartSamplingNeutral(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_MentalCommandStartSamplingNeutral(" + userId + ")");
		console.log(IEE_MentalCommandStartSamplingNeutral);
	}
	return IEE_MentalCommandStartSamplingNeutral;
};

/**
 * Start Sampling Neutral in MentalCommand.
 * 
 * @param userId -
 *            user ID.
 * @returns: EDK_ERROR_CODE - EDK_ERROR_CODE = EDK_OK if successful.
 */
EdkDll.IEE_MentalCommandStopSamplingNeutral = function(userId) {
	var IEE_MentalCommandStopSamplingNeutral = ELSPlugin()
			.ELS_IEE_MentalCommandStopSamplingNeutral(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_MentalCommandStopSamplingNeutral(" + userId + ")");
		console.log(IEE_MentalCommandStopSamplingNeutral);
	}
	return IEE_MentalCommandStopSamplingNeutral;
};

/**
 * Enable or disable signature caching in MentalCommand.
 * 
 * @param userId -
 *            user ID.
 * @param enabled -
 *            bool: flag to set status of caching (1: enable, 0: disable).
 * @returns: EDK_ERROR_CODE - EDK_ERROR_CODE = EDK_OK if successful.
 */
EdkDll.IEE_MentalCommandSetSignatureCaching = function(userId, enabled) {
	var IEE_MentalCommandSetSignatureCaching = ELSPlugin()
			.ELS_IEE_MentalCommandSetSignatureCaching(userId, enabled);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_MentalCommandSetSignatureCaching(" + userId
				+ "," + enabled + ")");
		console.log(IEE_MentalCommandSetSignatureCaching);
	}
	return IEE_MentalCommandSetSignatureCaching;
};

/**
 * Query the status of signature caching in MentalCommand.
 * 
 * @param userId -
 *            user ID.
 * @returns: status of caching (1: enable, 0: disable).
 */
EdkDll.IEE_MentalCommandGetSignatureCaching = function(userId) {
	var IEE_MentalCommandGetSignatureCaching = ELSPlugin()
			.ELS_IEE_MentalCommandGetSignatureCaching(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_MentalCommandGetSignatureCaching(" + userId
				+ ")");
		console.log(IEE_MentalCommandGetSignatureCaching);
	}
	return IEE_MentalCommandGetSignatureCaching;
};

/**
 * Set the cache size for the signature caching in MentalCommand.
 * 
 * @param userId -
 *            user ID.
 * @param size -
 *            int: number of signatures to be kept in the cache (0: unlimited).
 * @returns: EDK_ERROR_CODE - EDK_ERROR_CODE = EDK_OK if successful.
 */
EdkDll.IEE_MentalCommandSetSignatureCacheSize = function(userId, size) {
	var IEE_MentalCommandSetSignatureCacheSize = ELSPlugin()
			.ELS_IEE_MentalCommandSetSignatureCacheSize(userId, size);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_MentalCommandSetSignatureCacheSize(" + userId
				+ "," + size + ")");
		console.log(IEE_MentalCommandSetSignatureCacheSize);
	}
	return IEE_MentalCommandSetSignatureCacheSize;
};

/**
 * Get the current cache size for the signature caching in MentalCommand.
 * 
 * @param userId -
 *            user ID.
 * @returns: number of signatures to be kept in the cache (0: unlimited).
 */
EdkDll.IEE_MentalCommandGetSignatureCacheSize = function(userId) {
	var IEE_MentalCommandGetSignatureCacheSize = ELSPlugin()
			.ELS_IEE_MentalCommandGetSignatureCacheSize(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_MentalCommandGetSignatureCacheSize(" + userId
				+ ")");
		console.log(IEE_MentalCommandGetSignatureCacheSize);
	}
	return IEE_MentalCommandGetSignatureCacheSize;
};

/**
 * Returns a array containing details about sensor location and other info.
 * @param channelId - IEE_InputChannels_t: insight channel identifier has values in IEE_InputChannels_t.
 * @return IInputSensorDescriptor_t - provides detailed sensor location and other info.
 */
EdkDll.IEE_HeadsetGetSensorDetails = function(channelId) {
	var IEE_HeadsetGetSensorDetails = ELSPlugin()
			.ELS_IEE_HeadsetGetSensorDetails(channelId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_HeadsetGetSensorDetails(" + channelId + ")");
		console.log(IEE_HeadsetGetSensorDetails);
	}
	return IEE_HeadsetGetSensorDetails;
};

/**
 * Returns the delta of the movement of the gyro since the previous call for a
 * particular user
 * 
 * @param userId -
 *            user ID for query
 * @returns: array of positions (pXOut, pYOut)
 */
EdkDll.IEE_HeadsetGetGyroDelta = function(userId) {
	var IEE_HeadsetGetGyroDelta = ELSPlugin().ELS_IEE_HeadsetGetGyroDelta(
			userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_HeadsetGetGyroDelta(" + userId + ")");
		console.log(IEE_HeadsetGetGyroDelta);
	}
	return IEE_HeadsetGetGyroDelta;
};

/**
 * Re-zero the gyro for a particular user
 * 
 * @param userId -
 *            user ID for query
 * @returns: EDK_ERROR_CODE - EDK_ERROR_CODE = EDK_OK if successful
 */
EdkDll.IEE_HeadsetGyroRezero = function(userId) {
	var IEE_HeadsetGyroRezero = ELSPlugin().ELS_IEE_HeadsetGyroRezero(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_HeadsetGyroRezero(" + userId + ")");
		console.log(IEE_HeadsetGyroRezero);
	}
	return IEE_HeadsetGyroRezero;
};

/**
 * Sets the size of the data buffer. The size of the buffer affects how frequent
 * IEE_DataUpdateHandle() needs to be called to prevent data loss.
 * 
 * @param bufferSizeInSec -
 *            float: buffer size in second
 * @returns: EDK_ERROR_CODE - EDK_ERROR_CODE = EDK_OK if successful
 */
EdkDll.IEE_DataSetBufferSizeInSec = function(bufferSizeInSec) {
	var IEE_DataSetBufferSizeInSec = ELSPlugin()
			.ELS_IEE_DataSetBufferSizeInSec(bufferSizeInSec);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_DataSetBufferSizeInSec(" + bufferSizeInSec
				+ ")");
		console.log(IEE_DataSetBufferSizeInSec);
	}
	return IEE_DataSetBufferSizeInSec;
};

/**
 * Get the size of the data buffer. The size of the buffer affects how frequent
 * IEE_DataUpdateHandle() needs to be called to prevent data loss.
 * @returns: bufferSizeInSec - float: buffer size in second
 */
EdkDll.IEE_DataGetBufferSizeInSec = function() {
	var IEE_DataGetBufferSizeInSec = ELSPlugin().ELS_IEE_DataGetBufferSizeInSec();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_DataGetBufferSizeInSec()");
		console.log(IEE_DataGetBufferSizeInSec);
	}
	return IEE_DataGetBufferSizeInSec;
};

/**
 * Controls acquisition of data from EmoEngine (which is off by default).
 * 
 * @param userId -
 *            user ID
 * @param enable -
 *            bool: If true, then enables data acquisition - If false, then disables
 *            data acquisition
 * @returns: EDK_ERROR_CODE - EDK_ERROR_CODE = EDK_OK if the command succeeded
 */
EdkDll.IEE_DataAcquisitionEnable = function(userId, enable) {
	var IEE_DataAcquisitionEnable = ELSPlugin().ELS_IEE_DataAcquisitionEnable(
			userId, enable);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_DataAcquisitionEnable(" + userId + "," + enable
				+ ")");
		console.log(IEE_DataAcquisitionEnable);
	}
	return IEE_DataAcquisitionEnable;
};

/**
 * Sets marker
 * @param userId - user ID for query.
			marker - int: value of the marker
 * @return EDK_ERROR_CODE
                - EDK_ERROR_CODE = EDK_OK if the command succeeded.
 */
EdkDll.IEE_DataSetMarker = function(userId, marker) {
	var IEE_DataSetMarker = ELSPlugin().ELS_IEE_DataSetMarker(
			userId, marker);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_DataSetMarker(" + userId + "," + marker
				+ ")");
		console.log(IEE_DataSetMarker);
	}
	return IEE_DataSetMarker;
};

/**
 * Gets sampling rate
 * @param userId - user ID for query.
 * @return samplingRateOut - int: receives the sampling rate
 */
EdkDll.IEE_DataGetSamplingRate = function(userId) {
	var IEE_DataGetSamplingRate = ELSPlugin().ELS_IEE_DataGetSamplingRate(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_DataGetSamplingRate(" + userId + ")");
		console.log(IEE_DataGetSamplingRate);
	}
	return IEE_DataGetSamplingRate;
};

/**
 * Updates the content of the data handle to point to new data since the last
 * call
 * 
 * @param userId -
 *            user ID
 * @returns: EDK_ERROR_CODE - EDK_ERROR_CODE = EDK_OK if successful
 */
EdkDll.IEE_DataUpdateHandle = function(userId) {
	var IEE_DataUpdateHandle = ELSPlugin().ELS_IEE_DataUpdateHandle(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_DataUpdateHandle(" + userId + ")");
		console.log(IEE_DataUpdateHandle);
	}
	return IEE_DataUpdateHandle;
};

/**
 * Returns number of sample of data stored in the data handle
 * 
 * @returns: number of sample of data stored in the data handle
 */
EdkDll.IEE_DataGetNumberOfSample = function() {
	var IEE_DataGetNumberOfSample = ELSPlugin().ELS_IEE_DataGetNumberOfSample();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_DataGetNumberOfSample()");
		console.log(IEE_DataGetNumberOfSample);
	}
	return IEE_DataGetNumberOfSample;
};

/**
 * Extracts data of a particular channel from the data handle
 * 
 * @returns: array EEG Data (is used for EEG License); two dimensional array
 */
EdkDll.IEE_DataGet = function() {
	var IEE_DataGet = ELSPlugin().ELS_IEE_DataGet();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_DataGet()");
		console.log(IEE_DataGet);
	}
	return IEE_DataGet;
};

/**
 * Sets the size of the motion data buffer. The size of the buffer affects how frequent
 * IEE_MotionDataUpdateHandle() needs to be called to prevent data loss.
 * 
 * @param bufferSizeInSec -
 *            float: buffer size in second
 * @returns: EDK_ERROR_CODE - EDK_ERROR_CODE = EDK_OK if successful
 */
EdkDll.IEE_MotionDataSetBufferSizeInSec = function(bufferSizeInSec) {
	var IEE_MotionDataSetBufferSizeInSec = ELSPlugin()
			.ELS_IEE_MotionDataSetBufferSizeInSec(bufferSizeInSec);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_MotionDataSetBufferSizeInSec(" + bufferSizeInSec
				+ ")");
		console.log(IEE_MotionDataSetBufferSizeInSec);
	}
	return IEE_MotionDataSetBufferSizeInSec;
};

/**
 * Get the size of the motion data buffer. The size of the buffer affects how frequent
 * IEE_MotionDataUpdateHandle() needs to be called to prevent data loss.
 * @returns: bufferSizeInSec - float: buffer size in second
 */
EdkDll.IEE_MotionDataGetBufferSizeInSec = function() {
	var IEE_MotionDataGetBufferSizeInSec = ELSPlugin().ELS_IEE_MotionDataGetBufferSizeInSec();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_MotionDataGetBufferSizeInSec()");
		console.log(IEE_MotionDataGetBufferSizeInSec);
	}
	return IEE_MotionDataGetBufferSizeInSec;
};

/**
 * Gets sampling rate of motion data
 * @param userId - user ID for query.
 * @return samplingRateOut - int: receives the sampling rate
 */
EdkDll.IEE_MotionDataGetSamplingRate = function(userId) {
	var IEE_MotionDataGetSamplingRate = ELSPlugin().ELS_IEE_MotionDataGetSamplingRate(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_MotionDataGetSamplingRate(" + userId + ")");
		console.log(IEE_MotionDataGetSamplingRate);
	}
	return IEE_MotionDataGetSamplingRate;
};

/**
 * Updates the content of the motion data handle to point to new data since the last
 * call
 * 
 * @param userId -
 *            user ID
 * @returns: EDK_ERROR_CODE - EDK_ERROR_CODE = EDK_OK if successful
 */
EdkDll.IEE_MotionDataUpdateHandle = function(userId) {
	var IEE_MotionDataUpdateHandle = ELSPlugin().ELS_IEE_MotionDataUpdateHandle(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_MotionDataUpdateHandle(" + userId + ")");
		console.log(IEE_MotionDataUpdateHandle);
	}
	return IEE_MotionDataUpdateHandle;
};

/**
 * Returns number of sample of motion data stored in the motion data handle
 * 
 * @returns: number of sample of data stored in the data handle
 */
EdkDll.IEE_MotionDataGetNumberOfSample = function() {
	var IEE_MotionDataGetNumberOfSample = ELSPlugin().ELS_IEE_MotionDataGetNumberOfSample();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_MotionDataGetNumberOfSample()");
		console.log(IEE_MotionDataGetNumberOfSample);
	}
	return IEE_MotionDataGetNumberOfSample;
};

/**
 * Extracts motion data of a particular channel from the data handle
 * 
 * @returns: array EEG Motion Data (is used for EEG License); two dimensional array
 */
EdkDll.IEE_MotionDataGet = function() {
	var IEE_MotionDataGet = ELSPlugin().ELS_IEE_MotionDataGet();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_MotionDataGet()");
		console.log(IEE_MotionDataGet);
	}
	return IEE_MotionDataGet;
};

/**
 * Returns a serialized user profile for a default user in a synchronous manner.
 * 
 * @returns: EDK_ERROR_CODE - EDK_ERROR_CODE = EDK_OK if successful
 */
EdkDll.IEE_GetBaseProfile = function() {
	var IEE_GetBaseProfile = ELSPlugin().ELS_IEE_GetBaseProfile();
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_GetBaseProfile()");
		console.log(IEE_GetBaseProfile);
	}
	return IEE_GetBaseProfile;
};

/**
 * Reset user profile to default
 * 
 * @param userId -
 *            user ID
 * @returns: EDK_ERROR_CODE - EDK_ERROR_CODE = EDK_OK if successful
 */
EdkDll.IEE_SetBaseProfile = function(userId) {
	var IEE_SetBaseProfile = ELSPlugin().ELS_IEE_SetBaseProfile(userId);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_SetBaseProfile(" + userId + ")");
		console.log(IEE_SetBaseProfile);
	}
	return IEE_SetBaseProfile;
};

/**
 * Save user profile to local path
 * 
 * @param userId -
 *            user ID
 * @param profileName -
 *            string: name of profile to save
 * @returns: 0 if ok, -1 if not
 */
EdkDll.IEE_SaveUserProfile = function(userId, profileName) {
	var IEE_SaveUserProfile = ELSPlugin().ELS_ISaveUserProfile(userId,
			profileName);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_SaveUserProfile(" + userId + "," + profileName
				+ ")");
		console.log(IEE_SaveUserProfile);
	}
	return IEE_SaveUserProfile;
};

/**
 * Load user profile from local path
 * 
 * @param userId -
 *            user ID
 * @param profileName -
 *            string: name of profile to load
 * @returns: 0 if ok, -1 if not
 */
EdkDll.IEE_LoadUserProfile = function(userId, profileName) {
	var IEE_LoadUserProfile = ELSPlugin().ELS_ILoadUserProfile(userId,
			profileName);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.IEE_LoadUserProfile(" + userId + "," + profileName
				+ ")");
		console.log(IEE_LoadUserProfile);
	}
	return IEE_LoadUserProfile;
};

/**
 * Call fft math
 * 
 * @param timeSignal -
 *            signal array: double type
 * @returns: outFrequencySignal - frequency signal array: double type.
 */
EdkDll.fft = function(timeSignal) {
	var fft = ELSPlugin().ELS_fft(timeSignal);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.fft("+ timeSignal +")");
		console.log(fft);
	}
	return fft;
};

/**
 * Call windowing math
 * 
 * @param data -
 *            data array: double type
 * @param type -
 *            a value in EDK.WindowingTypes
 * @returns: outData - double array.
 */
EdkDll.windowing = function(data, type) {
	var windowing = ELSPlugin().ELS_windowing(data, type);
	if (EdkDll.DebugLog) {
		console.log("EdkDll.windowing(" + data + "," + type
				+ ")");
		console.log(windowing);
	}
	return windowing;
};

