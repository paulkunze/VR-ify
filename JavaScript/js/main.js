
var engine = EmoEngine.instance();
var es = new EmoState();
var time, runtime;

function loadELS(){
    if(isPluginLoaded()){
        AddValidLicenseDoneEvent();
        EdkDll.ELS_ValidLicense();
        engine.IConnect();           //Connect to Headset
    }
}

function AddValidLicenseDoneEvent() {
    EdkDll.addEvent(ELSPlugin(), 'valid', function(license){
        console.log("license");
        console.log(license);
        if(license.indexOf('"License":"EEG"') > -1) console.log("License is EEG License. You can get all data.");
        else if (license.indexOf('"License":"Non-EEG"') > -1) console.log("License is Non-EEG License. You can get all non-eeg data.");
        else console.log("The license is not valid. Please get valid license to get data");

        if((platform.os.family == "OS X")||(platform.os.family == "iOS"))
        {
            console.log("OS X");
            ELSPlugin().ELS_IEE_EmoInitDevice();
        }
        engine.IConnect();
        var x1 = EdkDll.IEE_GetSecurityCode();
        EdkDll.IEE_CheckSecurityCode(x1);
        updateEmoEngine();
    });
}
function updateEmoEngine() {
    time = new Date();
    document.getElementById('time').innerHTML= 'time: ' + time;
    try {
        engine.IProcessEvents(500);
        setTimeout("updateEmoEngine()",100);
    }
    catch(e) {
        alert(e);
    }
}

$(document).ready(function() {
    $(document).bind("EmoStateUpdated", function (event, userId, es) {
        runtime = es.IS_GetTimeFromStart();
        document.getElementById('runtime').innerHTML = 'runtime: ' + runtime;
        document.getElementById('signal').innerHTML = 'signal: ' + es.IS_GetWirelessSignalStatus();
        var batteryArr = es.IS_GetBatteryChargeLevel();
        var batteryPercent = (batteryArr["chargeLevel"] / batteryArr["maxLevel"]) * 100;
        document.getElementById('battery').innerHTML = 'battery: ' + batteryPercent + ' %';
        document.getElementById('event').innerHTML = 'current event: ' + EdkDll.IEE_EngineGetNextEvent();
        document.getElementById('state').innerHTML = 'current state: ' + EdkDll.IEE_EmoEngineEventGetEmoState();
        document.getElementById('contactQuality').innerHTML = 'contact quality: ' + es.IS_GetContactQualityFromAllChannels();
        document.getElementById('excitement').innerHTML = 'excitement: ' + EdkDll.AffectivGetExcitementShortTermScore;
        document.getElementById('frustration').innerHTML = 'frustration: ' + EdkDll.AffectivGetFrustrationScore;
        document.getElementById('boredom').innerHTML = 'boredom: ' + EdkDll.AffectivGetEngagementBoredomScore;
        document.getElementById('meditation').innerHTML = 'meditation: ' + EdkDll.AffectivGetMeditationScore;

    });
});

// don't rename
function ELSPlugin() {
    return document.getElementById('plugin0');
}

function isPluginLoaded(){
    var isInternetExplorer = !!navigator.userAgent.match(/Trident.*rv\:11\./);
    if(!pluginExists()&&!isInternetExplorer){
        var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
        if(is_chrome) {
            var chromeVersion = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
            chromeVersion = chromeVersion ? parseInt(chromeVersion[2], 10) : false;
            if(chromeVersion>=45){
                alert("Your browser is Google's Chrome version 45 or higher which is not support our plugin. Please run the Cpanel website with Google's Chrome version lower 45 or another Web Browsers. Thanks.");
            }
        }else{
            alert("Plugin not installed! Download from https://cpanel.emotivinsight.com/BTLE/Download/EmotivBTLE.msi");
        }
        return false;
    }else{
        console.log("Plugin loaded");
        return true;
    }
}

function pluginExists(){
    var L = navigator.plugins.length;
    for(var i = 0; i < L; i++)    {
        console.log(
            navigator.plugins[i].name +
            " | " +
            navigator.plugins[i].filename +
            " | " +
            navigator.plugins[i].description +
            " | " +
            navigator.plugins[i].version
        );
        if(navigator.plugins[i].name=="EmotivBTLE"){
            return true;
        }
    }
    return false;
}