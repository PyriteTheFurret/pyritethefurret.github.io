//Variables
var d1 = 0;
var d2 = 0;
var d3 = 0;
var o1 = "0";
var oNum = 0;
var buttonId;
var l;
var i;
var a;
var t;
var c;
var f = [];
var temp1 = [];
var temp2;
var temp3;
var temp4;
var temp5;
var temp6 = [];
var temp7;
var imageShit = {
    "current":0
};

var cookieBuilder;
function updateCookie(id, value) {
    //Check for the ID, if it exists, update the value, if not, add the ID with the value
}

var ctemp1 = [];
var ctemp2;
function chocolateChipCookieDoughEatingContest1993() {
    ctemp1 = document.cookie.split(";");
    document.alert(ctemp1);
}

//chocolateChipCookieDoughEatingContest1993();
var prevSel = {};
var dcList = [
    "name",
    "firstName",
    "middleName",
    "lastName",
    "origin",
    "desc",
    "desc2",
    "desc3",
    "gender",
    "species",
    "status",
    "align"
];
var selectedButtons = [
    "b-0",
    "b-0-0",
    "b-0-0-0"
];

var defs = {
    "color": "#ffffff"
};

var grayedOut = {
    "#ffffff":"#C0C0C0",
    "#00ff00":"#00C000",
    "#ffff00":"#C0C000",
    "#ff0000":"#C00000",
    "#00ffff":"#00C0C0",
    "#0000ff":"#0000C0",
    "#ff8000":"#C06000",
    "#ffa0c0":"#C07890",
    "#8000ff":"#6000C0"
};
function setcookie(cname, cvalue) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getcookie(cname) {
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
var ovenBroke = false;

//hide
/*
    description goes here
*/
function hide(id) {
    document.getElementById("div-" + id.slice(2)).style.display = "none";
}

//show
/*
    description goes here
*/
function show(id) {
    document.getElementById("div-" + id.slice(2)).style.display = "inline";
}

//swiss
/*
    description goes here
*/
function swiss(elementId) {
    temp3 = document.getElementById(elementId).style.backgroundColor;
    document.getElementById(elementId).style.backgroundColor = document.getElementById(elementId).style.color;
    document.getElementById(elementId).style.color = temp3;
}

//listProcess
/*
    description goes here
*/
function listProcess(item) {
    if (data[d1][d2][d3][o1][item] != undefined) {
        document.getElementById(item + "-1").style.display = "inline";
        document.getElementById(item).innerText = data[d1][d2][d3][o1][item];
    } else {
        document.getElementById(item + "-1").style.display = "none";
    }
}


function cookery(theText) {
    if (!ovenBroke) {
        if (selectedButtons[2] == "b-0-0-0" && o1 == "0") {
            localStorage.setItem("notes." + dataset + ".veryFirstItem", theText);
        } else {
            localStorage.setItem("notes." + dataset + "." + selectedButtons[2] + "." + o1, theText);
        }
        //document.cookie = "notes." + selectedButtons[2] + "." + o1 + "=" + theText + ";";
    }
}

//listData
/*
    description goes here
*/
function listData(data1, data2, data3, origin1) {
    if (data1 != undefined) d1 = data1;
    if (data2 != undefined) d2 = data2;
    if (data3 != undefined) d3 = data3;
    if (origin1 != undefined) {
        if (data[d1][d2][d3][origin1] == undefined) {
            o1 = dataOrigin[origin1]["data"];
        } else o1 = origin1;
    }
    if (o1 == undefined) {
        o1 = "0";
    }
    for (l = 0; l < dcList.length; l++) {
        listProcess(dcList[l]);
    }
    if (data[d1][d2][d3][o1]["color"] != undefined) {
        document.body.style.border = data[d1][d2][d3][o1]["color"] + " solid 5px";
        for (a = 1; a < 9; a++) {
            document.getElementById("image" + a).style.border = data[d1][d2][d3][o1]["color"] + " solid 5px";
        }
    } else {
        if (dataOrigin[oNum]["color"] != undefined) {
            document.body.style.border = dataOrigin[oNum]["color"] + " solid 5px";
            for (a = 1; a < 9; a++) {
                document.getElementById("image" + a).style.border = dataOrigin[oNum]["color"] + " solid 5px";
            }
        } else {
            document.body.style.border = defs["color"] + " solid 5px";
            for (a = 1; a < 9; a++) {
                document.getElementById("image" + a).style.border = defs["color"] + " solid 5px";
            }
        }
    }
    for (i = 1; i < 9; i++) {
        if (data[d1][d2][d3][o1]["image" + i] != undefined) {
            f[i - 1] = true;
            document.getElementById("image" + i).style.display = "inline";
            if (data[d1][d2][d3][o1]["image" + i].length > 1) {
                if (data[d1][d2][d3][o1]["imageShit"] == undefined) {
                    data[d1][d2][d3][o1]["imageShit"] = [];
                }
                if (data[d1][d2][d3][o1]["imageShit"][i - 1] == undefined) {
                    data[d1][d2][d3][o1]["imageShit"][i - 1] = 0;
                }
                document.getElementById("image" + i).src = data[d1][d2][d3][o1]["image" + i][data[d1][d2][d3][o1]["imageShit"][i - 1]/**/];
            } else {
                document.getElementById("image" + i).src = data[d1][d2][d3][o1]["image" + i][0];
            }
        } else {
            document.getElementById("image" + i).style.display = "none";
            f[i - 1] = false;
        }
    }
    if (!f[0] && !f[1] && !f[2] && !f[3] && !f[4] && !f[5] && !f[6] && !f[7]) {
        document.getElementById("image1").style.display = "inline";
        document.getElementById("image1").src = dataOrigin[oNum]["unknownImage"];
    }
    ovenBroke = true;
    if (selectedButtons[2] == "b-0-0-0" && o1 == "0") {
        document.getElementById("notes").value = localStorage.getItem("notes." + dataset + ".veryFirstItem");
    } else {
        document.getElementById("notes").value = /*getCookie("notes." + selectedButtons[2] + "." + o1)*/localStorage.getItem("notes." + dataset + "." + selectedButtons[2] + "." + o1);
    }
    ovenBroke = false;
}

//buttonClicked
/*
    description goes here
*/
function buttonClicked(bid) {
    buttonId = bid;
    temp1 = buttonId.split("-");
    temp3 = temp1.shift();
    temp2 = temp1.length;
    if (temp3 == "originButton") {
        swiss(activeOB);
        activeOB = buttonId;
        swiss(buttonId);
        oNum = temp1[0];
        //audioShit[oNum].play();
        //audioShit[oNum].volume = 0.3;
        listData(undefined, undefined, undefined, temp1[0]);
    } else switch (temp2) {
        case 3:
            swiss(selectedButtons[2]);
            if (activeOB != undefined) {
                prevSel[selectedButtons[2]] = activeOB;
                temp5 = 0;
                for (t = 0; t < dataOrigin.length; t++) {
                    if (data[temp1[0]][temp1[1]][temp1[2]][t] == undefined && data[temp1[0]][temp1[1]][temp1[2]][dataOrigin[t]["data"]] == undefined) {
                        temp5++;
                        document.getElementById("originButton-" + t).disabled = true;
                        if (oNum == t) {
                            swiss("originButton-" + t);
                            document.getElementById("originButton-" + t).style.color = grayedOut[dataOrigin[t]["color"]];
                            swiss("originButton-" + t);
                        } else document.getElementById("originButton-" + t).style.color = grayedOut[dataOrigin[t]["color"]];
                    } else {
                        document.getElementById("originButton-" + t).disabled = false;
                        if (oNum == t) {
                            swiss("originButton-" + t);
                            document.getElementById("originButton-" + t).style.color = dataOrigin[t]["color"];
                            swiss("originButton-" + t);
                        }
                        else document.getElementById("originButton-" + t).style.color = dataOrigin[t]["color"];
                    }
                }
                selectedButtons[2] = buttonId;
                swiss(buttonId);
                d1 = temp1[0];
                d2 = temp1[1];
                d3 = temp1[2];
                if (prevSel[buttonId] != undefined) {
                    buttonClicked(prevSel[buttonId]);
                } else {
                    buttonClicked(firstAvailable[buttonId]);
                }
            } else {
                selectedButtons[2] = buttonId;
                swiss(buttonId);
                listData(temp1[0], temp1[1], temp1[2]);
            }
            break;
        case 2:
            swiss(selectedButtons[1]);
            prevSel[selectedButtons[1]] = selectedButtons[2];
            hide(selectedButtons[1]);
            selectedButtons[1] = buttonId;
            show(buttonId);
            swiss(buttonId);
            if (prevSel[buttonId] != undefined) {
                buttonClicked(prevSel[buttonId]);
            } else {
                buttonClicked(firstAvailable[buttonId]);
            }
            break;
        case 1:
            swiss(selectedButtons[0]);
            prevSel[selectedButtons[0]] = selectedButtons[1];
            hide(selectedButtons[0]);
            selectedButtons[0] = buttonId;
            show(buttonId);
            swiss(buttonId);
            if (prevSel[buttonId] != undefined) {
                buttonClicked(prevSel[buttonId]);
            } else {
                buttonClicked(firstAvailable[buttonId]);
            }
            break;
        default:
            //How?
    }
}

listData();

function changeImage(imageNum) {
    if (data[d1][d2][d3][o1]["image" + imageNum][1].length > 1) {
        if (event.shiftKey) {
            data[d1][d2][d3][o1]["imageShit"][imageNum - 1] = Math.round(Math.random()*data[d1][d2][d3][o1]["image" + imageNum].length) - 1;
        } else {
            data[d1][d2][d3][o1]["imageShit"][imageNum - 1]++;
            if (data[d1][d2][d3][o1]["imageShit"][imageNum - 1] == data[d1][d2][d3][o1]["image" + imageNum].length) {
                data[d1][d2][d3][o1]["imageShit"][imageNum - 1] = 0;
            }
        }
        document.getElementById("image" + imageNum).src = data[d1][d2][d3][o1]["image" + imageNum][data[d1][d2][d3][o1]["imageShit"][imageNum - 1]];
    }
}

document.getElementById("notes").addEventListener("input", cookery(),false);