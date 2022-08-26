try {

var importThingy = "";
var scriptStartTime = Date.now();
var rawErrorLog = [];

class textLog {
    constructor(location,preLineChars) {
        this.element = document.getElementById(location);
        this.lines = [];
        if (preLineChars == undefined) this.preLineCharacters = "&nbsp;&nbsp;";
        else this.preLineCharacters = preLineChars;
    }
    printLine(text) {
        this.element.innerHTML = this.element.innerHTML.slice(0,this.element.innerHTML.length - 4);
        this.element.innerHTML = this.element.innerHTML + "<span>" + this.preLineCharacters + text + "</span><br><br>";
        this.lines.push(text);
    }
    deleteLine(index) {
        this.lines.splice(index,1);
        this.element.innerHTML = "<br><span>" + this.preLineCharacters + this.lines.join("</span><br><span>" + this.preLineCharacters) + "</span><br><br>";
    }
}

var errLog = new textLog("errorLog");
var backupErrLog = new textLog("emergencyErrorLog");

//the debug things
var sands = 0;
function aler(sans) {
    sands = sands + sans;
    window.alert(sands);
}

function isDefined(thing) {
    return thing != undefined && thing != null;
}

function addShrek(fuckingHell) {
    var shrek = document.createElement("img");
    shrek.src = "https://static.wikia.nocookie.net/shrek/images/9/9b/GoodShrekImage.png/revision/latest?cb=20201220080410";
    if (isDefined(fuckingHell)) {
        document.getElementById(fuckingHell).append(shrek);
    } else document.body.append(shrek);
}

function logError(err, source, params) {
    var emBuild = {
        "message":[
            ""
        ],
        "error":undefined,
        "source":undefined,
        "params":[],
        "paramList":[],
        "timestamp":undefined
    };
    emBuild["error"] = err;
    emBuild["source"] = source;
    emBuild["timestamp"] = Date.now() - scriptStartTime;
    if (arguments.length > 2) {
        for (var i = 2; i < arguments.length; i++) {
            if (arguments[i] == null) emBuild["params"].push([arguments[i],"Null"]);
            else emBuild["params"].push([arguments[i],typeof arguments[i]]);
            if (typeof arguments[i] == "string") emBuild["paramList"].push("\"" + arguments[i] + "\"");
            else emBuild["paramList"].push(arguments[i]);
        }
    }
    rawErrorLog.push([emBuild["timestamp"],emBuild["error"],emBuild["source"],emBuild["params"],emBuild["paramList"]]);
    if (arguments.length == 1) emBuild["message"] = (
        "[" +
        ((Math.floor(emBuild["timestamp"] / 3600000)).toString().padStart(2,"0")) +
        ":" +
        ((Math.floor(emBuild["timestamp"] / 60000)).toString().padStart(2,"0")) +
        ":" + 
        ((emBuild["timestamp"] % 1000).toString().padStart(3,"0")) +
        "] " +
        emBuild["error"]
    );
    else if (emBuild["paramList"] == [] || emBuild["paramList"] == undefined) emBuild["message"] = (
        "[" +
        ((Math.floor(emBuild["timestamp"] / 3600000)).toString().padStart(2,"0")) +
        ":" +
        ((Math.floor(emBuild["timestamp"] / 60000)).toString().padStart(2,"0")) +
        ":" + 
        ((emBuild["timestamp"] % 1000).toString().padStart(3,"0")) +
        "] " +
        "Function " +
        emBuild["source"] +
        "(): " +
        emBuild["error"]
    );
    else emBuild["message"] = (
        "[" +
        ((Math.floor(emBuild["timestamp"] / 3600000)).toString().padStart(2,"0")) +
        ":" +
        ((Math.floor(emBuild["timestamp"] / 60000)).toString().padStart(2,"0")) +
        ":" + 
        ((emBuild["timestamp"] % 1000).toString().padStart(3,"0")) +
        "] " +
        "Function " +
        emBuild["source"] +
        "(" +
        emBuild["paramList"].join(",") +
        "): " +
        emBuild["error"]
    );
    //document.getElementById("errorLog").innerHTML = document.getElementById("errorLog").innerHTML + "<span>&nbsp;&nbsp;" + emBuild["message"] + "</span><br>";
    errLog.printLine(emBuild["message"]);
    backupErrLog.printLine(emBuild["message"]);
    //Display the error as an alert, log the error in the console, and put it in the dev tab error log.
}

var isLocal = window.location.href.slice(0,4) != "http";

var exdays = 365;

function storeValueOnComp(cname, cvalue) {
    try {
        if (isLocal) localStorage.setItem(cname, cvalue);
        else {
            const d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            let expires = "expires="+ d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }
    } catch (err) {
        logError(err,"storeValueOnComp",cname, cvalue);
    }
}

var ctemp;
function getValueFromComp(cname) {
    try {
        if (isLocal) {
            ctemp = localStorage.getItem(cname);
            if (ctemp == null) return "";
            else return ctemp;
        } else {
            let name = cname + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for(let i = 0; i <ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }
    } catch (err) {
        logError(err,"getValueFromComp",cname);
    }
}

/*
var dataset = getValueFromComp("dataset");
var dataOrigin = JSON.parse(getValueFromComp("dataOrigin"));
var data = JSON.parse(getValueFromComp("data"));
var labels = JSON.parse(getValueFromComp("labels"), function (key, value) {
    if (value == null) return undefined;
    else return value;
});
*/

//var settings = JSON.parse(getValueFromComp("settings"));

function swiss(elementId) {
    try {
        var temp3 = document.getElementById(elementId).style.backgroundColor;
        document.getElementById(elementId).style.backgroundColor = document.getElementById(elementId).style.color;
        document.getElementById(elementId).style.color = temp3;
    } catch (err) {
        logError(err,"swiss",elementId);
    }
}

var currentTab = "0";

function switchTab(gex) {
    try {
        swiss("tabSelection" + currentTab);
        document.getElementById("tab" + currentTab).style.display = "none";
        currentTab = gex;
        swiss("tabSelection" + currentTab);
        document.getElementById("tab" + currentTab).style.display = "inline";
        storeValueOnComp("currentTab", currentTab);
    } catch (err) {
        logError(err,"switchTab",gex);
    }
}

function save() {
    try {
        storeValueOnComp("dataset", JSON.stringify(dataset));
        storeValueOnComp("dataOrigin", JSON.stringify(dataOrigin));
        storeValueOnComp("data", JSON.stringify(data));
        storeValueOnComp("labels", JSON.stringify(labels));
        //refreshable = true;
        //document.getElementById("refreshPreview").disabled = false;
    } catch (err) {
        logError(err,"save");
    }
}
save();

var forceNewDataset = false;
if (forceNewDataset) {
    var dataset = "sample";
    var dataOrigin = [
        {
            "display":"0",
            "data":"0",
            "color":"#ffffff",
            "unknownImage":"../assets/images/unknown/white.png",
            "originName":"Example Origin"
        }
    ];
    var data = [
        //
        [
            [
                {
                    "name":"Example",
                    "0":{}
                }
            ]
        ]
    ]
    save();
}

function loadBackup(num) {
    try {
        var exportVar = JSON.parse(getValueFromComp("backup" + num));
        dataset = exportVar[0];
        dataOrigin = exportVar[1];
        data = exportVar[2];
        labels = exportVar[3];
        save();
        window.alert("Backup #" + num + " loaded!");
    } catch (err) {
        logError(err,"loadBackup",num);
    }
}

var settingsPreset = {
    "bool":[["True",true],["False",false]]
};

function settingRequirements(requirement) {
    switch (requirement[0]) {
        case "setting":
            return settings[requirement[1]][requirement[2]];
        case "debugEnabled":
            return debug;
        default:
            return true;
    }
}

var settingsMenu = [
    {
        "internalName":"general",
        "displayName":"General",
        "desc":undefined,
        "requirement":[undefined],
        "containedSettings":[
            {
                "internalName":"saveProgress",
                "displayName":"Autosave",
                "desc":"Determines whether the dataset saves itself every time you change something or not.",
                "possibleValues":settingsPreset["bool"],
                "defaultValue":["true",true]
            }
        ]
    },
    {
        "internalName":"debug",
        "displayName":"Debug",
        "desc":"this is a certified debug moment",
        "requirement":["debugEnabled"],
        "containedSettings":[
            {
                "internalName":"errorLoggingType",
                "displayName":"",
                "desc":undefined,
                "possibleValues":[["Silent",-1],["Quiet",0],["Default",1],["Loud",2]],
                "defaultValue":["Default",1]
            }
        ]
    }
];

function setupSettingsMenu() {
    try {
        for (var i1 = 0; i1 < settingsMenu.length; i1++) {
            //Create section divider
            var ssdiv = document.createElement("div");
            document.getElementById("settingsDiv").append(ssdiv);
            ssdiv.id = settingsMenu[i1]["internalName"];
            if (!settingRequirements(settingsMenu[i]["requirement"])) ssdiv.style.display = "none";
            //Create section title
            var ssname = document.createElement("strong");
            ssdiv.append(ssname);
            ssname.innerText = settingsMenu[i1]["displayName"];
            ssname.className = "ssname";
            //Create section description
            //
            for (var i2 = 0; i2 < settingsMenu[i1]["containedSettings"].length; i2++) {
                //Setting title
                //
                //Setting description
                //
                //Setting dropdown
                //
            }
        }
    } catch (err) {
        logError(err,"setupSettingsMenu");
    }
}

var debug = true;

/*
var settings = {
    "general":{
        "saveProgress":true
    },
    "debug":{
        "errorLoggingType":1
    }
};
storeValueOnComp("settings",JSON.stringify(settings));
//*/

if (debug) {
    var widthThing = 100/7;
    for (var i = 0; i < 7; i++) {
        document.getElementById("tabSelection" + i).style.width = widthThing + "%";
    }
    document.getElementById("tabSelection6").style.display = "inline";
}

//setupSettingsMenu();

function checkFile() {
    try {
        //var fileURL = URL.createObjectURL(document.getElementById("fileInput").files[0]);
        var fileImport = document.getElementById('fileInput').files[0];
        fileImport.text().then(
            function (val) {
                document.getElementById("inputTextarea").value = val;
                var fileImport2 = JSON.parse(document.getElementById("inputTextarea").value);
                var dataset = fileImport2["dataset"];
                var dataOrigin = fileImport2["dataOrigin"];
                var data = fileImport2["data"];
                var labels = fileImport2["labels"];
                save();
                window.alert("File successfully imported!");
            }, function (error) {
                window.alert("skill issue");
                //i just realized that if someone actually sees this they are going to be so confused lmfao
            }
        );
    } catch (err) {
        logError(err,"checkFile");
    }
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function exportAs(type) {
    try {
        document.getElementById("outputTextarea").value = JSON.stringify({"dataset":dataset,"dataOrigin":dataOrigin,"data":data,"labels":labels});
        if (type == 1) download("export.txt",document.getElementById("outputTextarea").value);
    } catch (err) {
        logError(err,"exportAs",type);
    }
}

logError("vitalGenScripts.js finished initializing.");
}
catch (err) {
    window.alert("vitalGenScripts.js is fucking broken, please fix it you dumb fuck");
    window.alert("Error: " + err);
}