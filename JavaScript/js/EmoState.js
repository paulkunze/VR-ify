//Constructor with param is object of EmoState
function EmoState(es) {
	//this.hEmoState = EdkDll.EE_EmoStateCreate();
	//this.hEmoState = EdkDll.EE_EmoStateCreate();
	//EdkDll.ES_Copy(this.hEmoState,es.GetHandle());
}

function EmoState() {
	//this.hEmoState = EdkDll.EE_EmoStateCreate();
	//this.hEmoState = EdkDll.EE_EmoStateCreate();
}
//EmoState.prototype.hEmoState = EdkDll.EE_EmoStateCreate();

EmoState.prototype.Clone = function() {
	return new EmoState(this);
};

EmoState.prototype.GetHandle = function() {
	return this.hEmoState;
};

/**
 * return EdkDll.the time since EmoEngine has been successfully connected to the headset
 * If the headset is disconnected from EmoEngine due to low battery or weak
 * wireless signal, the time will be reset to zero.
 * @returns time in second
*/
EmoState.prototype.GetTimeFromStart = function() {
	return EdkDll.ES_GetTimeFromStart();
};

/**
 * Return whether the headset has been put on correctly or not.
 * @return int - (1: On, 0: Off).
 */
EmoState.prototype.GetHeadsetOn = function() {
	return EdkDll.ES_GetHeadsetOn();
};

/**
 * Query the contact quality of all the electrodes in one single call.
 * @return Array - list contact quality of all the electrodes.
 */
EmoState.prototype.ES_GetContactQualityFromAllChannels = function() {
	return EdkDll.ES_GetContactQualityFromAllChannels();
};

/**
 * Query the contact quality of a specific EEG electrode.
 * @params electroIdx - int: location of electrode to get contact quality.
 * @return EE_EEG_ContactQuality_t - contact quality of the electrode.
 */
EmoState.prototype.GetContactQuality = function(electroIdx) {
	return EdkDll.ES_GetContactQuality();
};


/**
 * Query whether the user is blinking at the time the EmoState is captured.
 * @return blink status (1: blink, 0: not blink).
 */EmoState.prototype.ExpressivIsBlink = function() {
	return EdkDll.ES_ExpressivIsBlink();
};

/**
 * Query whether the user is winking left at the time the EmoState is captured.
 * @return left wink status (1: wink, 0: not wink).
 */
EmoState.prototype.ExpressivIsLeftWink = function() {
	return EdkDll.ES_ExpressivIsLeftWink();
};

/**
 * Query whether the user is winking right at the time the EmoState is captured.
 * @return right wink status (1: wink, 0: not wink).
 */
EmoState.prototype.ExpressivIsRightWink = function() {
	return EdkDll.ES_ExpressivIsRightWink();
};

/**
 * Query whether the eyes of the user are opened at the time the EmoState is captured.
 * @return eye open status (1: eyes open, 0: eyes closed).
 */
EmoState.prototype.ExpressivIsEyesOpen = function() {
	return EdkDll.ES_ExpressivIsEyesOpen();
};

/**
 * Query whether the user is looking up at the time the EmoState is captured.
 * @return eyes position (1: looking up, 0: not looking up).
 */
EmoState.prototype.ExpressivIsLookingUp = function() {
	return EdkDll.ES_ExpressivIsLookingUp();
};

/**
 * Query whether the user is looking down at the time the EmoState is captured.
 * @return eyes position (1: looking down, 0: not looking down).
 */
EmoState.prototype.ExpressivIsLookingDown = function() {
	return EdkDll.ES_ExpressivIsLookingDown();
};

/**
 * Query whether the user is looking left at the time the EmoState is captured.
 * @return eye position (1: looking left, 0: not looking left).
 */
EmoState.prototype.ExpressivIsLookingLeft = function() {
	return EdkDll.ES_ExpressivIsLookingLeft();
};

/**
 * Query whether the user is looking right at the time the EmoState is captured.
 * @return eye position (1: looking right, 0: not looking right).
 */
EmoState.prototype.ExpressivIsLookingRight = function() {
	return EdkDll.ES_ExpressivIsLookingRight();
};

//EmoState.prototype.ExpressivGetEyelidState = function(size) {
	//not used
//};

//EmoState.prototype.ExpressivGetEyeLocation = function(size) {
	//not used
//};

/**
 * Returns the eyebrow extent of the user (Obsolete function).
 * @return eyebrow extent value (0.0 to 1.0).
 */
EmoState.prototype.ExpressivGetEyebrowExtent = function() {
	return EdkDll.ES_ExpressivGetEyebrowExtent();
};

/**
 * Returns the smile extent of the user (Obsolete function).
 * @return smile extent value (0.0 to 1.0).
 */
EmoState.prototype.ExpressivGetSmileExtent = function() {
	return EdkDll.ES_ExpressivGetSmileExtent();
};

/**
 * Returns the clench extent of the user (Obsolete function).
 * @return clench extent value (0.0 to 1.0).
 */
EmoState.prototype.ExpressivGetClenchExtent = function() {
	return EdkDll.ES_ExpressivGetClenchExtent();
};

/**
 * Returns the detected upper face Expressiv action of the user.
 * @return EE_ExpressivAlgo_t - pre-defined Expressiv action types.
 */
EmoState.prototype.ExpressivGetUpperFaceAction = function() {
	return EdkDll.ES_ExpressivGetUpperFaceAction();
};

/**
 * Returns the detected upper face Expressiv action power of the user.
 * @return power value (0.0 to 1.0).
 */
EmoState.prototype.ExpressivGetUpperFaceActionPower = function() {
	return EdkDll.ES_ExpressivGetUpperFaceActionPower();
};

/**
 * Returns the detected lower face Expressiv action of the user.
 * @return EE_ExpressivAlgo_t - pre-defined Expressiv action types.
 */
EmoState.prototype.ExpressivGetLowerFaceAction = function() {
	return EdkDll.ES_ExpressivGetLowerFaceAction();
};

/**
 * Returns the detected lower face Expressiv action power of the user.
 * @return power value (0.0 to 1.0).
 */
EmoState.prototype.ExpressivGetLowerFaceActionPower = function() {
	return EdkDll.ES_ExpressivGetLowerFaceActionPower();
};

//EmoState.prototype.ExpressivIsActive = function(type) {
	//need to add
//};

/**
 * Returns the long term excitement level of the user.
 * @return excitement level (0.0 to 1.0).
 */
EmoState.prototype.AffectivGetExcitementLongTermScore = function() {
	return EdkDll.ES_AffectivGetExcitementLongTermScore();
};

/**
 * Returns short term excitement level of the user.
 * @return excitement level (0.0 to 1.0).
 */
EmoState.prototype.AffectivGetExcitementShortTermScore = function() {
	return EdkDll.ES_AffectivGetExcitementShortTermScore();
};

//EmoState.prototype.AffectivIsActive = function(type) {
	//need to add
//};

/**
 * Returns meditation level of the user.
 * @return meditation level (0.0 to 1.0).
 */
EmoState.prototype.AffectivGetMeditationScore = function() {
	return EdkDll.ES_AffectivGetMeditationScore();
};

/**
 * Returns frustration level of the user.
 * @return frustration level (0.0 to 1.0).
 */
EmoState.prototype.AffectivGetFrustrationScore = function() {
	return EdkDll.ES_AffectivGetFrustrationScore();
};

/**
 * Returns engagement/boredom level of the user.
 * @return engagement/boredom level (0.0 to 1.0).
 */
EmoState.prototype.AffectivGetEngagementBoredomScore = function() {
	return EdkDll.ES_AffectivGetEngagementBoredomScore();
};

/**
 * Returns valence level of the user.
 * @return valence level (0.0 to 1.0).
 */
EmoState.prototype.AffectivGetValenceScore = function() {
	return EdkDll.ES_AffectivGetValenceScore();
};

/**
 * Returns Affectiv raw value: excitement raw, meditation raw, engagement raw, frustration raw, valence raw.
 * @return two dimensional array: one dimension is excitement, meditation ..., another dimension is raw value of excitement ...
 */
EmoState.prototype.AffectivRawValueGet = function() {
	return EdkDll.ES_AffectivRawValueGet();
};

/**
 * Returns the detected Cognitiv action of the user.
 * @return EE_CognitivAction_t - Cognitiv action type.
 */
EmoState.prototype.CognitivGetCurrentAction = function() {
	return EdkDll.ES_CognitivGetCurrentAction();
};

/**
 * Returns the detected Cognitiv action power of the user.
 * @return Cognitiv action power (0.0 to 1.0).
 */
EmoState.prototype.CognitivGetCurrentActionPower = function() {
	return EdkDll.ES_CognitivGetCurrentActionPower();
};

//EmoState.prototype.CognitivIsActive = function() {
	//need to add
//};

/**
 * Query of the current wireless signal strength.
 * @return wireless signal strength [No Signal, Bad, Fair, Good, Excellent] - 0,1,2,3,4.
 */
EmoState.prototype.GetWirelessSignalStatus = function() {
	return EdkDll.ES_GetWirelessSignalStatus();
};

/**
 * Get the level of charge remaining in the headset battery.
 * @return array: chargeLevel        - the current level of charge in the headset battery
					maxChargeLevel    - the maximum level of charge in the battery
 */
EmoState.prototype.GetBatteryChargeLevel = function() {
	return EdkDll.ES_GetBatteryChargeLevel();
};

/**
 * Check whether two states are with identical 'emotiv' state.
 * @return 1: Equal, 0: Different.
 */
EmoState.prototype.AffectivEqual = function(state) {
	return EdkDll.ES_AffectivEqual();
};

/**
 * Check whether two states are with identical Expressiv state, i.e. are both state representing the same facial expression.
 * @return 1: Equal, 0: Different.
 */
EmoState.prototype.ExpressivEqual = function(state) {
	return EdkDll.ES_ExpressivEqual();
};

/**
 * Check whether two states are with identical Cognitiv state.
 * @return 1: Equal, 0: Different.
 */
EmoState.prototype.CognitivEqual = function(state) {
	return EdkDll.ES_CognitivEqual();
};

/**
 * Check whether two states are with identical EmoEngine state.
 * @return 1: Equal, 0: Different.
 */
EmoState.prototype.EmoEngineEqual = function() {
	return EdkDll.ES_EmoEngineEqual();
};

//EmoState.prototype.Equals = function() {
	//need to add
//};

/**
 * Return the time since EmoEngine has been successfully connected to the
 * headset If the headset is disconnected from EmoEngine due to low battery or
 * weak wireless signal, the time will be reset to zero.
 * 
 * @returns: float - time in second
 */
EmoState.prototype.IS_GetTimeFromStart = function() {
	return EdkDll.IS_GetTimeFromStart();
};

/**
 * Return whether the headset has been put on correctly or not.
 * @return int - (1: On, 0: Off).
 */
EmoState.prototype.IS_GetHeadsetOn = function() {
	return EdkDll.IS_GetHeadsetOn();
};

/**
 * Query of the current wireless signal strength.
 * 
 * @returns: int - 0,1,2,3,4 according to wireless signal strength [No Signal,
 *           Bad, Fair, Good, Excellent].
 */
EmoState.prototype.IS_GetWirelessSignalStatus = function() {
	return EdkDll.IS_GetWirelessSignalStatus();
};

/**
 * Get the level of charge remaining in the headset battery.
 * 
 * @returns param chargeLevel - the current level of charge in the headset
 *          battery param maxChargeLevel - the maximum level of charge in the
 *          battery.
 */
EmoState.prototype.IS_GetBatteryChargeLevel = function() {
	return EdkDll.IS_GetBatteryChargeLevel();
};

/**
 * Query the contact quality of all the electrodes in one single call.
 * 
 * @returns param contactQuality - array of 32-bit float of size numChannels
 *          param numChannels - size (number of floats) of the input array
 *          return Number of signal quality values copied to the contactQuality
 *          array.
 */
EmoState.prototype.IS_GetContactQualityFromAllChannels = function() {
	return EdkDll.IS_GetContactQualityFromAllChannels();
};

/**
 * Query the contact quality of a specific EEG electrode.
 * @param: electroIdx - int: The index of the electrode for query.
 * @return: IEE_EEG_ContactQuality_t - Enumerated value that characterizes the EEG electrode contact for the specified input channel.
 */
EmoState.prototype.IS_GetContactQuality = function() {
	return EdkDll.IS_GetContactQuality();
};

/**
 * Query the contact quality for five EEG electrode: AF3, AF4, Pz, T8, AF4.
 * @return: array of IEE_EEG_ContactQuality_t  - Enumerated value that characterizes the EEG electrode contact for the specified input channel.
 * AF3 = 0, T7 = 1, Pz = 2, T8 = 3, AF4 = 4;
 */
EmoState.prototype.IS_GetContactQualities = function() {
	return EdkDll.IS_GetContactQualities();
};

/**
 * Query whether the user is blinking at the time the EmoState is captured.
 * 
 * @returns: blink status (1: blink, 0: not blink).
 */
EmoState.prototype.IS_FacialExpressionIsBlink = function() {
	return EdkDll.IS_FacialExpressionIsBlink();
};

/**
 * Query whether the eyes of the user are opened at the time the EmoState is
 * captured.
 * 
 * @returns: eye open status (1: eyes open, 0: eyes closed).
 */
EmoState.prototype.IS_FacialExpressionIsEyesOpen = function() {
	return EdkDll.IS_FacialExpressionIsEyesOpen();
};

/**
 * Query whether the user is winking left at the time the EmoState is captured.
 * 
 * @returns: left wink status (1: wink, 0: not wink).
 */
EmoState.prototype.IS_FacialExpressionIsLeftWink = function() {
	return EdkDll.IS_FacialExpressionIsLeftWink();
};

/**
 * Query whether the user is winking right at the time the EmoState is captured.
 * 
 * @returns: right wink status (1: wink, 0: not wink).
 */
EmoState.prototype.IS_FacialExpressionIsRightWink = function() {
	return EdkDll.IS_FacialExpressionIsRightWink();
};

/**
 * Query whether the user is looking up at the time the EmoState is captured.
 * 
 * @returns: eyes position (1: looking up, 0: not looking up).
 */
EmoState.prototype.IS_FacialExpressionIsLookingUp = function() {
	return EdkDll.IS_FacialExpressionIsLookingUp();
};

/**
 * Query whether the user is looking down at the time the EmoState is captured.
 * 
 * @returns:eyes position (1: looking down, 0: not looking down).
 */
EmoState.prototype.IS_FacialExpressionIsLookingDown = function() {
	return EdkDll.IS_FacialExpressionIsLookingDown();
};

/**
 * Returns the eyebrow extent of the user (Obsolete function).
 * 
 * @return: eyebrow extent value (0.0 to 1.0).
 */
EmoState.prototype.IS_FacialExpressionGetEyebrowExtent = function() {
	return EdkDll.IS_FacialExpressionGetEyebrowExtent();
};

/**
 * Returns the clench extent of the user (Obsolete function).
 * 
 * @returns: clench extent value (0.0 to 1.0).
 */
EmoState.prototype.IS_FacialExpressionGetClenchExtent = function() {
	return EdkDll.IS_FacialExpressionGetClenchExtent();
};

/**
 * Returns the smile extent of the user (Obsolete function).
 * 
 * @returns: smile extent value (0.0 to 1.0).
 */
EmoState.prototype.IS_FacialExpressionGetSmileExtent = function() {
	return EdkDll.IS_FacialExpressionGetSmileExtent();
};

/**
 * Returns the detected lower face FacialExpression action of the user.
 * 
 * @returns: pre-defined FacialExpression action types.
 */
EmoState.prototype.IS_FacialExpressionGetLowerFaceAction = function() {
	return EdkDll.IS_FacialExpressionGetLowerFaceAction();
};

/**
 * Returns the detected lower face FacialExpression action power of the user.
 * 
 * @return power value (0.0 to 1.0).
 */
EmoState.prototype.IS_FacialExpressionGetLowerFaceActionPower = function() {
	return EdkDll.IS_FacialExpressionGetLowerFaceActionPower();
};

/**
 * Returns the detected upper face FacialExpression action of the user.
 * 
 * @returns: return pre-defined FacialExpression action types.
 */
EmoState.prototype.IS_FacialExpressionGetUpperFaceAction = function() {
	return EdkDll.IS_FacialExpressionGetUpperFaceAction();
};

/**
 * Returns the detected upper face FacialExpression action power of the user.
 * 
 * @returns: power value (0.0 to 1.0).
 */
EmoState.prototype.IS_FacialExpressionGetUpperFaceActionPower = function() {
	return EdkDll.IS_FacialExpressionGetUpperFaceActionPower();
};

/**
 * Returns engagement/boredom level of the user.
 * 
 * @returns: engagement/boredom level (0.0 to 1.0).
 */
EmoState.prototype.IS_PerformanceMetricGetEngagementBoredomScore = function() {
	return EdkDll.IS_PerformanceMetricGetEngagementBoredomScore();
};

/**
 * Returns the long term excitement level of the user.
 * 
 * @returns: excitement level (0.0 to 1.0).
 */
EmoState.prototype.IS_PerformanceMetricGetExcitementLongTermScore = function() {
	return EdkDll.IS_PerformanceMetricGetExcitementLongTermScore();
};

/**
 * Returns short term excitement level of the user.
 * 
 * @returns: excitement level (0.0 to 1.0).
 */
EmoState.prototype.IS_PerformanceMetricGetInstantaneousExcitementScore = function() {
	return EdkDll.IS_PerformanceMetricGetInstantaneousExcitementScore();
};

/**
 * Returns frustration (stress) level of the user.
 * 
 * @returns: frustration level (0.0 to 1.0).
 */
EmoState.prototype.IS_PerformanceMetricGetStressScore = function() {
	return EdkDll.IS_PerformanceMetricGetStressScore();
};

/**
 * Returns meditation (relax) level of the user.
 * 
 * @returns: meditation level (0.0 to 1.0).
 */
EmoState.prototype.IS_PerformanceMetricGetRelaxationScore = function() {
	return EdkDll.IS_PerformanceMetricGetRelaxationScore();
};

/**
 * Returns valence (interest) level of the user.
 * 
 * @returns: valence level (0.0 to 1.0).
 */
EmoState.prototype.IS_PerformanceMetricGetInterestScore = function() {
	return EdkDll.IS_PerformanceMetricGetInterestScore();
};

/**
 * Returns focus level of the user.
 * 
 * @returns: focus level (0.0 to 1.0).
 */
EmoState.prototype.IS_PerformanceMetricGetFocusScore = function() {
	return EdkDll.IS_PerformanceMetricGetFocusScore();
};

/**
 * Returns raw model parameters.
 * 
 * @return: array of scores.
 */
EmoState.prototype.IS_PerformanceMetricRawValueGet = function() {
	return EdkDll.IS_PerformanceMetricRawValueGet();
};

/**
 * Returns the detected MentalCommand action of the user.
 * 
 * @returns: MentalCommand action type.
 */
EmoState.prototype.IS_MentalCommandGetCurrentAction = function() {
	return EdkDll.IS_MentalCommandGetCurrentAction();
};

/**
 * Returns the detected MentalCommand action power of the user.
 * 
 * @returns: MentalCommand action power (0.0 to 1.0).
 */
EmoState.prototype.IS_MentalCommandGetCurrentActionPower = function() {
	return EdkDll.IS_MentalCommandGetCurrentActionPower();
};

/**
 * Check whether current and default states are with identical EmoEngine state.
 * 
 * @returns: 1: Equal, 0: Different.
 */
EmoState.prototype.IS_EmoEngineEqual = function() {
	return EdkDll.IS_EmoEngineEqual();
};

/**
 * Check whether current and default states are with identical MentalCommand
 * state.
 * 
 * @returns: 1: Equal, 0: Different.
 */
EmoState.prototype.IS_MentalCommandEqual = function() {
	return EdkDll.IS_MentalCommandEqual();
};

/**
 * Check whether current and default states are with identical FacialExpression
 * state, i.e. are both state representing the same facial expression.
 * 
 * @returns: 1: Equal, 0: Different.
 */
EmoState.prototype.IS_FacialExpressionEqual = function() {
	return EdkDll.IS_FacialExpressionEqual();
};

/**
 * Check whether current and default states are with identical 'emotiv' state.
 * 
 * @returns: 1: Equal, 0: Different.
 */
EmoState.prototype.IS_PerformanceMetricEqual = function() {
	return EdkDll.IS_PerformanceMetricEqual();
};
