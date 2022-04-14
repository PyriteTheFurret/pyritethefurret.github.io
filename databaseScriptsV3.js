//Variables
var d1 = 0;
var d2 = 0;
var d3 = 0;
var o1 = "0";
var buttonId;
var l;
var i;
var a;
var temp1 = [];
var temp2;
var temp3;
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


//listData
/*
    description goes here
*/
function listData(data1, data2, data3, origin1) {
    if (data1 != undefined) d1 = data1;
    if (data2 != undefined) d2 = data2;
    if (data3 != undefined) d3 = data3;
    if (origin1 != undefined) o1 = origin1;
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
        document.body.style.border = defs["color"] + " solid 5px";
        for (a = 1; a < 9; a++) {
            document.getElementById("image" + a).style.border = defs["color"] + " solid 5px";
        }
    }
    for (i = 1; i < 9; i++) {
        if (data[d1][d2][d3][o1]["image" + i] != undefined) {
            document.getElementById("image" + i).style.display = "inline";
            document.getElementById("image" + i).src = data[d1][d2][d3][o1]["image" + i];
        } else {
            document.getElementById("image" + i).style.display = "none";
        }
    }
}

//buttonClicked
/*
    description goes here
*/
function buttonClicked(bid) {
    buttonId = bid;
    temp1 = buttonId.split("-");
    temp1.shift();
    temp2 = temp1.length;
    switch (temp2) {
        case 3:
            swiss(selectedButtons[2]);
            selectedButtons[2] = buttonId;
            swiss(buttonId);
            listData(temp1[0], temp1[1], temp1[2], "0");
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
                buttonClicked(buttonId + "-0");
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
                buttonClicked(buttonId + "-0");
            }
            break;
        default:
            //How?
    }
}

listData();
