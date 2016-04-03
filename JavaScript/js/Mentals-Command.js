/*-- Duc add --*/
var selectTag='';
var mentalCommandActionList = new Array(
							EdkDll.IEE_MentalCommandAction_t.MC_NEUTRAL,
							EdkDll.IEE_MentalCommandAction_t.MC_PUSH,
                            EdkDll.IEE_MentalCommandAction_t.MC_PULL,
                            EdkDll.IEE_MentalCommandAction_t.MC_LIFT,
							EdkDll.IEE_MentalCommandAction_t.MC_DROP,
                            EdkDll.IEE_MentalCommandAction_t.MC_LEFT,
                            EdkDll.IEE_MentalCommandAction_t.MC_RIGHT,
                            EdkDll.IEE_MentalCommandAction_t.MC_ROTATE_LEFT,
							EdkDll.IEE_MentalCommandAction_t.MC_ROTATE_RIGHT,
                            EdkDll.IEE_MentalCommandAction_t.MC_ROTATE_CLOCKWISE,
							EdkDll.IEE_MentalCommandAction_t.MC_ROTATE_COUNTER_CLOCKWISE,
                            EdkDll.IEE_MentalCommandAction_t.MC_ROTATE_FORWARDS,
                            EdkDll.IEE_MentalCommandAction_t.MC_ROTATE_REVERSE,
                            EdkDll.IEE_MentalCommandAction_t.MC_DISAPPEAR
                            );
var mentalCommandActionString =  new Array("Neutral", "Push", "Pull", "Lift", "Drop", "Left", "Right", "Rotate Left", "Rotate Right",
										"Rotate Clockwise", "Rotate Anti-Clockwise", "Rotate Forwards", "Rotate Reverse", "Disappear");
var mentalCommandAction;
var mentalCommandActionPower	= new Array();

function onChangeAction()
	{
		var selectTraining = document.getElementById("selectTraining");
		var actionTraining = selectTraining.options[selectTraining.selectedIndex].value;
		for (var i = 0; i < mentalCommandActionList.length; i++)
		{
			EdkDll.IEE_EnableMentalCommandAction(mentalCommandActionList[i], false);
		}
		for (var i = 0; i < mentalCommandActionList.length; i++)
		{
			if (actionTraining == mentalCommandActionString[i]) EdkDll.IEE_EnableMentalCommandAction(mentalCommandActionList[i], true);
		}
		engine.EnableMentalCommandActionsList(0);
	}
		/*-- End add --*/
		
	//Update Process bar
	function updateProcessBar(action, valueBar){
		   document.getElementById(action+'_progressbar').style.width = valueBar*100+'%';
	}
	
	//Update element on select tag training
	function UpdateTraining(){
		var listoption12='';
		var trainedActions=engine.MentalCommandGetTrainedSignatureActions(0);
		var imageNeutralTraining = '<option data-image="images/msdropdown/icons/ignored.png">';
		for (var j = 0; j < 6; j++)
			{
				if(trainedActions[j])
				{
					imageTraining = '<option data-image="images/msdropdown/icons/tick.png">';
				}
				else
				imageTraining = '<option data-image="images/msdropdown/icons/ignored.png">';
				listoption12 = listoption12 + imageTraining + mentalCommandActionString[j]+'</option>';
			}
		selectTag=''
		//remove
		$('#tmpRemove').html('');
		 selectTag='<select id = "selectTraining" style="width:200px; color:black" class="tech" onchange="onChangeAction();">'+listoption12+'</select>';
		$('#tmpRemove').html(selectTag);
		
		$("select.tech").msDropdown({roundedBorder:true});
		
		var activeActions = engine.MentalCommandGetActionsEnabled(0);
		for (var j = 1; j<6; j++)
		{
			if(activeActions[j])
				{
					$('#selectTraining').msDropDown().data('dd').set('selectedIndex',j);
				}
		}
	}
	

//Event click to training action
function btnStartTrainClick()
{
	//get action need to train
	var selectTraining = document.getElementById("selectTraining");
	var actionTraining = selectTraining.options[selectTraining.selectedIndex].value;
	StartTrainingMentalCommand(actionTraining);
}

//Event click to clear training action
function btnClearTrainingClick()
{
	//get actio need to clear
	var selectTraining = document.getElementById("selectTraining");
	var actionClear = selectTraining.options[selectTraining.selectedIndex].value;
	var confirmClear = confirm("Are you sure to remove all training data for " + actionClear + " ?");
	if (confirmClear == true)
	{
		clearTrainingData(actionClear);
	}
}

//Training is started
function StartTrainingMentalCommand(mentalCommandAction)
{
		var mentalCommandActionsEnabled = engine.MentalCommandGetActionsEnabled(0);
		if (mentalCommandAction == "Neutral")
        {
            engine.MentalCommandSetTrainingAction(0, EdkDll.IEE_MentalCommandAction_t.MC_NEUTRAL);
            engine.MentalCommandSetTrainingControl(0, EdkDll.IEE_MentalCommandTrainingControl_t.MC_START);
        }
        else
            for (var i = 0; i < mentalCommandActionList.length; i++)
            {
                if (mentalCommandAction == mentalCommandActionString[i])
                {
                    if (mentalCommandActionsEnabled[i])
                    {
						try
						{
							engine.MentalCommandSetTrainingAction(0, mentalCommandActionList[i]);
							engine.MentalCommandSetTrainingControl(0, EdkDll.IEE_MentalCommandTrainingControl_t.MC_START);
						}
						catch(e)
						{
							alert(e);
						}
                    }
                }
            }
}

/*-- Clear training data --*/
function clearTrainingData(mentalCommandAction)
{
	for (var i = 0; i < mentalCommandActionList.length; i++)
		{
			if (mentalCommandAction == mentalCommandActionString[i])
				{
						try
						{
							engine.MentalCommandSetTrainingAction(0, mentalCommandActionList[i]);
							engine.MentalCommandSetTrainingControl(0, EdkDll.IEE_MentalCommandTrainingControl_t.MC_ERASE);
							UpdateTraining();
						}
						catch(e)
						{
							alert(e);
						}
                }
            }
}

$(document).bind("CognitivTrainingStarted",function(userId){
	alert("Start Trainning");
});

$(document).bind("CognitivTrainingSucceeded",function(userId){
	var confirmAccept = confirm("Completed training. Accept this training");
	if (confirmAccept == true)
	{
		engine.MentalCommandSetTrainingControl(0, EdkDll.IEE_MentalCommandTrainingControl_t.MC_ACCEPT);
		alert("Complete Trainning");
		UpdateTraining();
	}
	else
	{
		engine.MentalCommandSetTrainingControl(0, EdkDll.IEE_MentalCommandTrainingControl_t.MC_REJECT);
	}
});

$(document).bind("CognitivTrainingFailed",function(userId){
	alert("Failed to training");
});

$(document).bind("CognitivTrainingDataErased",function(userId){
	alert("Cleared trained action");
	UpdateTraining();
});

//get current mentalcommand action
$(document).bind("CognitivEmoStateUpdated",function(event,userId,es){
	mentalCommandAction = es.IS_MentalCommandGetCurrentAction();
	var power = es.IS_MentalCommandGetCurrentActionPower();

    for (var i = 0; i < mentalCommandActionList.length; i++)
	{
        if (mentalCommandAction == mentalCommandActionList[i])
        {
            mentalCommandActionPower[i] = power;
			UpdateMentalCommand(i);
        }
    }
});

function UpdateMentalCommand(i)
{
	if (i==0) mentalCommandActionPower[0] = 0;
	//currentAction.value = mentalCommandActionString[i];
	updateProcessBar("Power", mentalCommandActionPower[i]);
	Move(i, mentalCommandActionPower[i]);
	//update progress bar
}

function Move(i, cogValue)
{
	if(cogValue <= 0.09)
	{
		imageCogBox.src = 'images/mental-command/' + mentalCommandActionString[i] + '1.png';
		return;
	}
	else if(0.1 < cogValue <= 0.24)
	{
		imageCogBox.src = 'images/mental-command/' + mentalCommandActionString[i] + '2.png';
		return;
	}
	else if(0.25 < cogValue <= 0.39)
	{
		imageCogBox.src = 'images/mental-command/' + mentalCommandActionString[i] + '3.png';
		return;
	}
	else if(0.4 < cogValue <= 0.54)
	{
		imageCogBox.src = 'images/mental-command/' + mentalCommandActionString[i] + '4.png';
		return;
	}
	else if(0.55 < cogValue <= 0.69)
	{
		imageCogBox.src = 'images/mental-command/' + mentalCommandActionString[i] + '5.png';
		return;
	}
    else if(0.7 < cogValue <= 0.84)
	{
		imageCogBox.src = 'images/mental-command/' + mentalCommandActionString[i] + '6.png';
		return;
	}
    else if(0.85 < cogValue <= 1)
	{
		imageCogBox.src = 'images/mental-command/' + mentalCommandActionString[i] + '7.png';
		return;
	}
}