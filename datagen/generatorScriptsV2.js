try {
var sort = {
    "categories":[],
    "subcategories":[],
    "characters":[],
    "main":[]
};
/*
if (getValueFromComp("firstRun") != "true") {
    switchTab(0);
    storeValueOnComp("firstRun","true");
} else {
    //switchTab(getValueFromComp("currentTab"))
}*/

//var dataset = getValueFromComp("dataset");
//var dataOrigin = JSON.parse(getValueFromComp("dataOrigin"));
//var data = JSON.parse(getValueFromComp("data"));
/*
var labels = [
    [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined
    ],
    [
        [
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined
        ],
        [
            undefined
        ],
        [
            undefined
        ],
        [
            undefined
        ],
        [
            undefined
        ]
    ]
];
//*/
//storeValueOnComp("labels",JSON.stringify(labels));
//var labels = JSON.parse(getValueFromComp("labels"));

var currentGenButton = "b-0";
var theShitlist = [];
var theShitlist2 = [];
var theShitlist3 = [];
var theShitlist4 = [];
var firstAvailable = {};

var dv1;
var dv2;
var dv3;
var dv4;
var activeOB = undefined;
var shitass;
var shitter = [true,true,true];
var refreshable = false;
var cookies = {
    "id":[],
    "value":[]
};

//loadBackup(1);

function setBackup(num) {
    var exportVar = [dataset,dataOrigin,data/*,labels*/];
    storeValueOnComp("backup" + num,JSON.stringify(exportVar));
    window.alert("Backup #" + num + " saved!");
}

const wrapper = document.getElementById("tab0");

wrapper.addEventListener("click", (event) => {
    const isButton = event.target.nodeName === "BUTTON";
    if (!isButton) {
        return;
    }
    buttonClicked(event.target.id);
});

var cbId = [];

function buttonGeneration() {
    try {
        for (dv1 = 0; dv1 < data.length; dv1++) {
            var bon = document.createElement("option");
            document.getElementById("currentCategory").appendChild(bon);
            cbId[0] = dv1;
            bon.id = "option-" + cbId[0];
            /*if (isDefined(labels[0][dv1])) bon.label = labels[0][dv1];
            else */bon.label = dv1 + 1;
            bon.value = bon.id;
            theShitlist.push(bon.id);
            var bon2 = document.createElement("optgroup");
            document.getElementById("currentSubcategory").appendChild(bon2);
            bon2.id = "optionGroup-" + cbId[0];
            bon2.label = dv1 + 1;
            bon2.value = bon2.id;
            theShitlist.push(bon2.id);
            if (dv1 != 0) bon2.style.display = "none";
            //shitter[0] = true;
            for (dv2 = 0; dv2 < data[dv1].length; dv2++) {
                var bun = document.createElement("optgroup");
                document.getElementById("currentCharacter").appendChild(bun);
                cbId[1] = dv1 + "-" + dv2;
                bun.id = "optionGroup-" + cbId[1];
                theShitlist.push(bun.id);
                //bun.style.width = (100 / data[dv1].length) + "%";
                /*if (isDefined(labels[1][dv1][dv2])) bun.label = labels[1][dv1][dv2];
                else */bun.label = (dv1+1) + "-" + (dv2+1);
                bun.value = bun.id;
                ///**/
                var bun2 = document.createElement("option");
                document.getElementById("optionGroup-" + dv1).appendChild(bun2);
                bun2.id = "option-" + cbId[1];
                theShitlist.push(bun2.id);
                //bun.style.width = (100 / data[dv1].length) + "%";
                bun2.label = (dv1+1) + "-" + (dv2+1);
                bun2.value = bun2.id;
                if (dv2 != 0 || dv1 != 0) bun.style.display = "none";
                //shitter[1] = true;
                for (dv3 = 0; dv3 < data[dv1][dv2].length; dv3++) {
                    var buton = document.createElement("option");
                    document.getElementById("optionGroup-" + dv1 + "-" + dv2).appendChild(buton);
                    cbId[2] = dv1 + "-" + dv2 + "-" + dv3;
                    buton.id = "option-" + cbId[2];
                    theShitlist.push(buton.id);
                    if (isDefined(data[dv1][dv2][dv3]["name"])) {
                        buton.innerText = data[dv1][dv2][dv3]["name"];
                    } else buton.innerText = (dv1+1) + "-" + (dv2+1) + "-" + (dv3+1);
                    buton.value = buton.id;
                    /*
                    shitter[2] = true;
                    for (shitass = 0; shitass < dataOrigin.length; shitass++) {
                        if (data[dv1][dv2][dv3][dataOrigin[shitass]["data"]] != undefined && shitter[2]) {
                            shitter[2] = false;
                            firstAvailable[cbId[2]] = "originButton-" + shitass;
                        }*/
                        //if (/*getCookie("notes." + buton.id + "." + dataOrigin[shitass]["data"]) == ""*/getValueFromComp("notes." + dataset + "." + buton.id + "." + dataOrigin[shitass]["data"]) == null) {
                            //setCookie("notes." + buton.id + "." + dataOrigin[shitass]["data"], "This text is editable and autosaves, feel free to put notes about OCs here.");
                            //storeValueOnComp("notes." + dataset + "." + buton.id + "." + dataOrigin[shitass]["data"], "This text is editable and autosaves, feel free to put notes about OCs here.");
                        /*}
                    }
                    if (shitter[2]) {
                        buton.disabled = true;
                        buton.style.color = "#C0C0C0";
                    } else if (shitter[1]) {
                        shitter[1] = false;
                        firstAvailable[cbId[1]] = cbId[2];
                    }
                }
                if (shitter[1]) {
                    bun.disabled = true;
                    bun.style.color = "#C0C0C0";
                } else if (shitter[0]) {
                    shitter[0] = false;
                    firstAvailable[cbId[0]] = cbId[1];
                */}/*
            }
            if (shitter[0]) {
                bon.disabled = true;
                bon.style.color = "#C0C0C0";*/
            }
        }
        if (isDefined(dataOrigin)) {
            for (dv4 = 0; dv4 < dataOrigin.length; dv4++) {
                var obutton = document.createElement("button");
                obutton.id = "originButton-" + dv4;
                theShitlist.push(obutton.id);
                obutton.innerText = dataOrigin[dv4].display;
                obutton.style.fontSize = 14.75;
                obutton.style.width = (100 / dataOrigin.length) + "%";
                if (dv4 == 0) {
                    obutton.style.color = "#202020";
                    obutton.style.backgroundColor = dataOrigin[dv4].color;
                    activeOB = "originButton-0";
                } else {
                    obutton.style.color = dataOrigin[dv4].color;
                    obutton.style.backgroundColor = "#202020";
                }
                document.getElementById("originButtonDiv").append(obutton);
                var obutton = document.createElement("option");
                obutton.id = "originOption-" + dv4;
                theShitlist.push(obutton.id);
                obutton.label = dataOrigin[dv4].display;
                obutton.value = "originButton-" + dv4;
                obutton.style.color = dataOrigin[dv4].color;
                document.getElementById("currentOrigin").append(obutton);
            }
        }
    } catch (err) {
        logError(err,"buttonGeneration");
    }
}

function buttonGen() {
    try {
        for (dv1 = 0; dv1 < data.length; dv1++) {
            sort["subcategories"].push([]);
            sort["subcategories"][dv1] = [];
            sort["characters"].push([]);
            var bon = document.createElement("button");
            document.getElementById("organizationDiv").append(bon);
            cbId[0] = "b-" + dv1;
            bon.id = cbId[0];
            theShitlist2.push(bon.id);
            sort["categories"].push(bon.id);
            sort["main"].push(bon.id);
            bon.style.width = "675px";
            /*if (isDefined(labels[0][dv1])) bon.innerText = labels[0][dv1];
            else */bon.innerText = dv1 + 1;
            bon.setAttribute("data-type","category");
            if (currentGenButton == bon.id) {
                bon.style.color = "#202020";
                bon.style.backgroundColor = "#ffffff";
            } else {
                bon.style.color = "#ffffff";
                bon.style.backgroundColor = "#202020";
            }
            var brr = document.createElement("br");
            brr.id = bon.id + "-br";
            theShitlist2.push(brr.id);
            document.getElementById("organizationDiv").append(brr);
            var divr = document.createElement("div");
            document.getElementById("organizationDiv").append(divr);
            divr.id = "div-" + dv1;
            theShitlist4.push(divr.id);
            for (dv2 = 0; dv2 < data[dv1].length; dv2++) {
                sort["characters"][dv1].push([]);
                sort["characters"][dv1][dv2] = [];
                var bun = document.createElement("button");
                document.getElementById("div-" + dv1).append(bun);
                cbId[1] = "b-" + dv1 + "-" + dv2;
                bun.id = cbId[1];
                theShitlist2.push(bun.id);
                sort["subcategories"][dv1].push(bun.id);
                sort["main"].push(bun.id);
                bun.style.width = "60%";
                /*if (isDefined(labels[1][dv1][dv2])) bun.innerText = labels[1][dv1][dv2];
                else */bun.innerText = + (dv1 + 1) + "-" + (dv2 + 1);
                if (currentGenButton == bun.id) {
                    bun.style.color = "#202020";
                    bun.style.backgroundColor = "#ffffff";
                } else {
                    bun.style.color = "#ffffff";
                    bun.style.backgroundColor = "#202020";
                }
                bun.setAttribute("data-type","subcategory");
                var brr = document.createElement("br");
                brr.id = bun.id + "-br";
                theShitlist2.push(brr.id);
                document.getElementById("div-" + dv1).append(brr);
                var divder = document.createElement("div");
                document.getElementById("div-" + dv1).append(divder);
                divder.id = "div-" + dv1 + "-" + dv2;
                theShitlist3.push(divder.id);
                for (dv3 = 0; dv3 < data[dv1][dv2].length; dv3++) {
                    var buton = document.createElement("button");
                    document.getElementById("div-" + dv1 + "-" + dv2).append(buton);
                    cbId[2] = "b-" + dv1 + "-" + dv2 + "-" + dv3;
                    buton.id = cbId[2];
                    theShitlist2.push(buton.id);
                    sort["characters"][dv1][dv2].push(buton.id);
                    sort["main"].push(buton.id);
                    buton.style.width = "30%";
                    if (currentGenButton == buton.id) {
                        buton.style.color = "#202020";
                        buton.style.backgroundColor = "#ffffff";
                    } else {
                        buton.style.color = "#ffffff";
                        buton.style.backgroundColor = "#202020";
                    }
                    buton.setAttribute("data-type","character");
                    if (isDefined(data[dv1][dv2][dv3]["name"])) {
                        buton.innerText = data[dv1][dv2][dv3]["name"];
                    } else buton.innerText = (dv1 + 1) + "-" + (dv2 + 1) + "-" + (dv3 + 1);
                    var brr = document.createElement("br");
                    brr.id = buton.id + "-br";
                    theShitlist2.push(brr.id);
                    document.getElementById("div-" + dv1 + "-" + dv2).append(brr);
                }
            }
        }/*
        if (dataOrigin != undefined) {
            var originButtonDiv = document.createElement("div");
            originButtonDiv.id = "originButtonDiv";
            document.getElementById("organizationDiv").append(originButtonDiv);
            for (dv4 = 0; dv4 < dataOrigin.length; dv4++) {
                var obutton = document.createElement("button");
                obutton.id = "originButton-" + dv4;
                obutton.innerText = dataOrigin[dv4].display;
                obutton.style.fontSize = 14.75;
                obutton.style.width = (100 / dataOrigin.length) + "%";
                if (dv4 == 0) {
                    obutton.style.color = "#000000";
                    obutton.style.backgroundColor = dataOrigin[dv4].color;
                    activeOB = "originButton-0";
                } else {
                    obutton.style.color = dataOrigin[dv4].color;
                    obutton.style.backgroundColor = "#000000";
                }
                document.getElementById("originButtonDiv").append(obutton);
            }
        }*/
    } catch (err) {
        logError(err,"buttonGen");
    }
}

/**/
buttonGen();
buttonGeneration();



//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA



var temp1 = [];
var temp2;
var temp3;
var temp5;
var c;
var special = [];
var i;
var j;
var m;
var specialCharacters = [
    "[",
    "{",
    "]",
    "}",
    "\'",
    "\"",
    ","
];
var corgi = [0];

var titleChance = 3;

var randomTitles = [
    "Party Rockin' in the House Tonight!",
    "Now with 70% less bees!"
];

const wrapper2 = document.getElementById("organizationDiv");

wrapper2.addEventListener("click", (event) => {
    const isButton = event.target.nodeName === "BUTTON";
    if (!isButton) {
        return;
    }
    orgButton(event.target.id);
})

var current = [0, 0, 0, 0, "0"];
var genButtonType = "category";
var item;
var buttonId;
var prevSel = {};
var selectedOptions = [];

var cdvars = [
    "name",
    "firstName",
    "middleName",
    "lastName",
    "desc",
    "desc2",
    "desc3",
    "desc4",
    "desc5",
    "origin",
    "notes",
    "gender",
    "species",
    "status",
    "align",
    "birthday",
    "extras"
];

var hhh = ["option-0","option-0-0","option-0-0-0","originButton-0"];

var imageShit = {};

function randInt(lowest, highest) {
    try {
        return Math.floor(Math.random()*(highest - lowest)) + lowest + 1;
    } catch (err) {
        window.alert("An error has happened at the function " + "randInt()" + ": " + err);
    }
}

function rand(num) {
    try {
        return randInt(0, num - 1);
    } catch (err) {
        window.alert("An error has happened at the function " + "rand()" + ": " + err);
    }
}

if (randInt(1,3) == 3) document.getElementById("title").text = "SCData Editor: " + randomTitles[rand(randomTitles.length)];
else document.getElementById.getElementById("title").text = "SCData Editor [ALPHA]"

function onDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    event.currentTarget.style.backgroundColor = 'yellow';
}

function onDragOver(event) {
    event.preventDefault();
}

function onDrop(event) {
    const id = event.dataTransfer.getData('text');
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    dropzone.appendChild(draggableElement);
    event.dataTransfer.clearData();
}

/*
storeValueOnComp("dataset", dataset);
storeValueOnComp("dataOrigin", JSON.stringify(dataOrigin));
storeValueOnComp("data", JSON.stringify(data));
*/

function switchData() {
    if (data[current[0]][current[1]][current[2]][current[4]] == undefined || data[current[0]][current[1]][current[2]][current[4]] == null) {
        data[current[0]][current[1]][current[2]][current[4]] = {};
    }
    for (i = 0; i < cdvars.length; i++) {
        if (data[current[0]][current[1]][current[2]][current[4]][cdvars[i]] == undefined || data[current[0]][current[1]][current[2]][current[4]][cdvars[i]] == null) {
            document.getElementById(cdvars[i]).value = "";
        } else {
            document.getElementById(cdvars[i]).value = data[current[0]][current[1]][current[2]][current[4]][cdvars[i]];
        }
    }
    if (data[current[0]][current[1]][current[2]][current[4]]["images"] == undefined || data[current[0]][current[1]][current[2]][current[4]]["images"] == null) {
        document.getElementById("images").value = "";
    } else {
        document.getElementById("images").value = data[current[0]][current[1]][current[2]][current[4]]["images"].join(",");
    }
    for (i = 1; i < 9; i++) {
        if (data[current[0]][current[1]][current[2]][current[4]]["image" + i] == undefined || data[current[0]][current[1]][current[2]][current[4]]["image" + i] == null) {
            document.getElementById("image" + i).value = "";
            document.getElementById("iposs" + i).innerText = 0;
            document.getElementById("ipose" + i).innerText = 0;
            document.getElementById("img" + i).src = dataOrigin[current[3]]["unknownImage"];
        } else {
            document.getElementById("image" + i).value = data[current[0]][current[1]][current[2]][current[4]]["image" + i].join(",");
            if (!isDefined(imageShit[hhh[2]])) imageShit[hhh[2]] = {};
            if (!isDefined(imageShit[hhh[2]][current[4]])) imageShit[hhh[2]][current[4]] = [0, 0, 0, 0, 0, 0, 0, 0];
            imageShit[hhh[2]][current[4]][i - 1] = 0;
            document.getElementById("iposs" + i).innerText = imageShit[hhh[2]][current[4]][i - 1] + 1;
            document.getElementById("ipose" + i).innerText = data[current[0]][current[1]][current[2]][current[4]]["image" + i].length;
            document.getElementById("img" + i).src = data[current[0]][current[1]][current[2]][current[4]]["image" + i][0];
        };
    }
}

//decompile(getValueFromComp("dataOrigin"));
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
        current[3] = temp1[0];
        current[4] = dataOrigin[current[3]]["data"];
        switchData();
        //audioShit[oNum].play();
        //audioShit[oNum].volume = 0.3;
        //listData(undefined, undefined, undefined, temp1[0]);
    } else if (buttonId == "selectCharacter") {
        //
    }
    /* else switch (temp2) {
        case 3:
            swiss(selectedButtons[2]);
            if (activeOB != undefined) {
                prevSel[selectedButtons[2]] = activeOB;
                temp5 = 0;
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
    }*/
}
function changeImage(imageNum) {
    //if (data[current[0]][current[1]][current[2]][current[4]]["image" + imageNum][1].length > 1) {
        /*if (event.shiftKey) {
            imageShit[hhh[2]][current[4]][imageNum - 1] = rand(data[current[0]][current[1]][current[2]][current[4]]["image" + imageNum].length);
        } else {*/
            imageShit[hhh[2]][current[4]][imageNum - 1]++;
            if (imageShit[hhh[2]][current[4]][imageNum - 1] == data[current[0]][current[1]][current[2]][current[4]]["image" + imageNum].length) {
                imageShit[hhh[2]][current[4]][imageNum - 1] = 0;
            }
        //}
        document.getElementById("iposs" + imageNum).innerText = imageShit[hhh[2]][current[4]][imageNum - 1] + 1;
        var citemp = data[current[0]][current[1]][current[2]][current[4]]["image" + imageNum][imageShit[hhh[2]][current[4]][imageNum - 1]];
        //if (citemp.slice(0,4) != "http") citemp = ".." + citemp;
        document.getElementById("img" + imageNum).src = citemp;
    //}
}

function hhhhh4() {
    //if (document.getElementById("currentOrigin").value != "none") {
        hhh[3] = document.getElementById("currentOrigin").value;
        document.getElementById("dataDiv").style.display = "inline";
        buttonClicked(hhh[3]);/*
    } else {
        swiss(hhh[3]);
        hhh[3] = document.getElementById("currentOrigin").value;
        document.getElementById("dataDiv").style.display = "none";
    }*/
}

var hTemp = [];
function hhhhh3() {
    hhh[2] = document.getElementById("currentCharacter").value;
    //if (hhh[2] != "none") {
        hTemp = hhh[2].split("-");
        current[0] = hTemp[1];
        current[1] = hTemp[2];
        current[2] = hTemp[3];
        prevSel[selectedOptions[2]] = activeOB;
        temp5 = 0;
        selectedOptions[2] = hhh[2];
        if (isDefined(prevSel[hhh[2]])) {
            document.getElementById("currentOrigin").selectedIndex = Number(hTemp[3])/* + 1*/;
            document.getElementById("currentOrigin").value = prevSel[hhh[2]];
        } else {
            document.getElementById("currentOrigin").selectedIndex = /*1*/0;
            document.getElementById("currentOrigin").value = "originButton-0";
        }/*
    } else {
        document.getElementById("currentOrigin").selectedIndex = 0;
        document.getElementById("currentOrigin").value = "none";
    }*/
    hhhhh4();
}

function hhhhh1() {
    /*if (hhh[0] != "none" && hhh[1] != "none") */prevSel[hhh[0]] = hhh[1];
    document.getElementById("optionGroup" + hhh[0].slice(6)).style.display = "none";
    hhh[0] = document.getElementById("currentCategory").value;
    //if (hhh[0] != "none") {
        //hTemp = hhh[0].split("-");
        //current[0] = hTemp[1];
        temp5 = 0;
        document.getElementById("optionGroup" + hhh[0].slice(6)).style.display = "inline";
        selectedOptions[0] = hhh[0];
        if (isDefined(prevSel[hhh[0]])) {
            document.getElementById("currentSubcategory").selectedIndex = parseInt(prevSel[hhh[0]].slice(9))/* + 1*/;
            document.getElementById("currentSubcategory").value = prevSel[hhh[0]];
        } else {
            document.getElementById("currentSubcategory").selectedIndex = /*1*/0;
            document.getElementById("currentSubcategory").value = hhh[0] + "-0";
        }/*
    } else {
        document.getElementById("currentSubcategory").selectedIndex = 0;
        document.getElementById("currentSubcategory").value = "none";
    }*/
    hhhhh2();
}

function hhhhh2() {
    //If this function was called by hhhhh1(), disable the display of the old category and enable the display of the new category
        /*
        if (document.getElementById("currentSubcategory").value != hhh[1]) {
        prevSel[hhh[1]] = hhh[2];
        hhh[1] = document.getElementById("currentSubcategory").value;
        if (prevSel[hhh[1]] != undefined) hhh[2] = prevSel[hhh[1]];
        else hhh[2] = hhh[1] + "-0";
    }*/
    if (hhh[1] != "none" && hhh[2] != "none") prevSel[hhh[1]] = hhh[2];
    document.getElementById("optionGroup" + hhh[1].slice(6)).style.display = "none";
    hhh[1] = document.getElementById("currentSubcategory").value;
    if (hhh[1] != "none") {
        document.getElementById("optionGroup" + hhh[1].slice(6)).style.display = "inline";
        //hTemp = hhh[0].split("-");
        //current[0] = hTemp[1];
        temp5 = 0;
        selectedOptions[1] = hhh[1];
        if (isDefined(prevSel[hhh[1]])) {
            document.getElementById("currentCharacter").selectedIndex = parseInt(prevSel[hhh[1]].slice(11))/* + 1*/;
            document.getElementById("currentCharacter").value = prevSel[hhh[1]];
        } else {
            document.getElementById("currentCharacter").selectedIndex = /*1*/0;
            document.getElementById("currentCharacter").value = hhh[1] + "-0";
        }
    } else {
        document.getElementById("currentCharacter").selectedIndex = 0;
        document.getElementById("currentCharacter").value = "none";
    }
    hhhhh3();
}

var idd;
var valoo;
var numbah;
function inpoot(iddd, valooo) {
    idd = iddd;
    valoo = valooo;
    if (idd.slice(0, 5) == "image") {
        numbah = parseInt(idd.slice(5));
        if (valoo == "") data[current[0]][current[1]][current[2]][current[4]][idd] = undefined;
        else {
            data[current[0]][current[1]][current[2]][current[4]][idd] = valoo.split(",");
            if (!isDefined(imageShit[hhh[2]][current[4]][numbah - 1]) || imageShit[hhh[2]][current[4]][numbah - 1] > data[current[0]][current[1]][current[2]][current[4]][idd].length) imageShit[hhh[2]][current[4]][numbah - 1] = 0;
            document.getElementById("img" + numbah).src = data[current[0]][current[1]][current[2]][current[4]][idd][imageShit[hhh[2]][current[4]][numbah - 1]];
        }
    }
    else {
        if (valoo == "") data[current[0]][current[1]][current[2]][current[4]][idd] = undefined;
        else data[current[0]][current[1]][current[2]][current[4]][idd] = valoo;
    }
    save();
}

function orgButton(id) {
    swiss(currentGenButton);
    swiss(id);
    currentGenButton = id;
    genButtonType = document.getElementById(currentGenButton).getAttribute("data-type");
    corgi = currentGenButton.split("-");
    corgi.shift();
    if (genButtonType == "character") {
        if (isDefined(data[corgi[0]][corgi[1]][corgi[2]]["name"])) document.getElementById("labelThing").value = data[corgi[0]][corgi[1]][corgi[2]]["name"];
        else document.getElementById("labelThing").value = "";
    } else if (genButtonType == "category") {
        /*if (isDefined(labels[0][corgi[0]])) document.getElementById("labelThing").value = labels[0][corgi[0]];
        else */document.getElementById("labelThing").value = "";
    } else if (genButtonType == "subcategory") {
        /*if (isDefined(labels[1][corgi[0]][corgi[1]])) document.getElementById("labelThing").value = labels[1][corgi[0]][corgi[1]];
        else */document.getElementById("labelThing").value = "";
    }
}

function refreshOrganizationTab() {
    for (i = 0; i < theShitlist2.length; i++) {
        document.getElementById(theShitlist2[i]).remove();
    }
    theShitlist2 = [];
    for (i = 0; i < theShitlist3.length; i++) {
        document.getElementById(theShitlist3[i]).remove();
    }
    theShitlist3 = [];
    for (i = 0; i < theShitlist4.length; i++) {
        document.getElementById(theShitlist4[i]).remove();
    }
    theShitlist4 = [];
    sort["categories"] = [];
    sort["subcategories"] = [];
    sort["characters"] = [];
    sort["main"] = [];
    currentGenButton = "b-0";
    genButtonType = "category";
    /*document.getElementById("labelThing").value = labels[0][0];*/
    buttonGen();
}

function instantDeath() {
    for (i = 0; i < theShitlist.length; i++) {
        document.getElementById(theShitlist[i]).remove();
    }
    theShitlist = [];
    current = [0, 0, 0, 0, "0"];
    hhh = ["option-0","option-0-0","option-0-0-0","originButton-0"];
    imageShit = {};
    buttonGeneration();
    refreshOrganizationTab();
}

function arrayMove(arr, from, to) {
    var amTemp = arr.splice(from, 1);
    arr.splice(to, 0, amTemp[0]);
}

var currentPos;
var newPos;
var dogwater = [];
function moveItem(key) {
    switch (genButtonType) {
        case "category":
            currentPos = sort["categories"].indexOf(currentGenButton);
            /*
            If the category is being moved forwards and it's the last category:
                Set the new position to 0.
            If the category is being moved backwards and it's the first category:
                Set the new position to the length of the category minus 1.
            */
            if (key == 1 && currentPos == sort["categories"].length - 1) {
                /*
                var tempMove = data.pop();
                data.unshift(tempMove[0]);
                */
            } else if (key == -1 && currentPos == 0) {
                /*
                var tempMove = data.shift();
                data.push(tempMove[0]);
                */
            } else {
                newPos = currentPos + key;
                var tempMove = data.splice(currentPos, 1);
                data.splice(newPos, 0, tempMove[0]);
                /*var tempMove = labels[0].splice(currentPos, 1);
                labels[0].splice(newPos, 0, tempMove[0]);*/
                var clicked = "b-" + newPos;
            }
            break;
        case "subcategory":
            currentPos = sort["subcategories"][corgi[0]].indexOf(currentGenButton);
            /*
            If the category is being moved forwards and it's the last category:
                Set the new position to 0.
            If the category is being moved backwards and it's the first category:
                Set the new position to the length of the category minus 1.
            */
            if (key == 1 && currentPos == sort["subcategories"][corgi[0]].length - 1) {
                if (corgi[0] < data.length - 1) {
                    //Move it to the first entry of the next category
                    newPos = corgi[0] + 1;
                    var tempMove = data[corgi[0]].splice(currentPos, 1);
                    data[newPos].splice(0, 0, tempMove[0]);
                    /*var tempMove = labels[1][corgi[0]].splice(currentPos, 1);
                    labels[1][newPos].splice(0, 0, tempMove[0]);*/
                    var clicked = "b-" + newPos + "-0";
                }
                /*
                var tempMove = data.pop();
                data.unshift(tempMove[0]);
                */
            } else if (key == -1 && currentPos == 0) {
                if (corgi[0] > 0) {
                    //Move it to the last entry of the previous category
                    newPos = corgi[0] - 1;
                    var newPos2 = data[newPos].length;
                    var tempMove = data[corgi[0]].splice(currentPos, 1);
                    data[newPos].push(tempMove[0]);
                    /*var tempMove = labels[1][corgi[0]].splice(currentPos, 1);
                    labels[1][newPos].push(tempMove[0]);*/
                    var clicked = "b-" + newPos + "-" + newPos2;
                }
                /*
                var tempMove = data.shift();
                data.push(tempMove[0]);
                */
            } else {
                newPos = currentPos + key;
                var tempMove = data[corgi[0]].splice(currentPos, 1);
                data[corgi[0]].splice(newPos, 0, tempMove[0]);
                /*var tempMove = labels[1][corgi[0]].splice(currentPos, 1);
                labels[1][corgi[0]].splice(newPos, 0, tempMove[0]);*/
                var clicked = "b-" + corgi[0] + "-" + newPos;
            }
            break;
        case "character":
            currentPos = sort["characters"][corgi[0]][corgi[1]].indexOf(currentGenButton);
            /*
            If the category is being moved forwards and it's the last category:
                Set the new position to 0.
            If the category is being moved backwards and it's the first category:
                Set the new position to the length of the category minus 1.
            */
            if (key == 1 && currentPos == sort["characters"][corgi[0]][corgi[1]].length - 1) {
                if (corgi[1] < data[corgi[0]].length - 1) {
                    //Move it to the first entry of the next category
                    newPos = corgi[1] + 1;
                    var tempMove = data[corgi[0]][corgi[1]].splice(currentPos, 1);
                    data[corgi[0]][newPos].splice(0, 0, tempMove[0]);
                    /*var tempMove = labels[1][corgi[0]].splice(currentPos, 1);
                    labels[1][newPos].splice(0, 0, tempMove[0]);*/
                    var clicked = "b-" + corgi[0] + "-" + newPos + "-0";
                }
                /*
                var tempMove = data.pop();
                data.unshift(tempMove[0]);
                */
            } else if (key == -1 && currentPos == 0) {
                if (corgi[1] > 0) {
                    //Move it to the last entry of the previous category
                    newPos = corgi[1] - 1;
                    var newPos2 = data[corgi[0]][newPos].length;
                    var tempMove = data[corgi[0]][corgi[1]].splice(currentPos, 1);
                    data[corgi[0]][newPos].push(tempMove[0]);
                    /*var tempMove = labels[1][corgi[0]].splice(currentPos, 1);
                    labels[1][newPos].push(tempMove[0]);*/
                    var clicked = "b-" + corgi[0] + "-" + newPos + "-" + newPos2;
                }
                /*
                var tempMove = data.shift();
                data.push(tempMove[0]);
                */
            } else {
                newPos = currentPos + key;
                var tempMove = data[corgi[0]][corgi[1]].splice(currentPos, 1);
                data[corgi[0]][corgi[1]].splice(newPos, 0, tempMove[0]);
                /*var tempMove = labels[1][corgi[0]].splice(currentPos, 1);
                labels[1][corgi[0]].splice(newPos, 0, tempMove[0]);*/
                var clicked = "b-" + corgi[0] + "-" + corgi[1] + "-" + newPos;
            }
            break;
    }
    save();
    refreshOrganizationTab();
    document.getElementById(clicked).click();
    document.getElementById(clicked).focus();
}

function findDaPath(id) {
    var pathfinder = id.split("-");
    if (genButtonType == "category") var dnd = [pathfinder[1]];
    else if (genButtonType == "subcategory") var dnd = [pathfinder[1],pathfinder[2]];
    else var dnd = [pathfinder[1],pathfinder[2],pathfinder[3]];
}
function create(type) {
    switch (type) {
        case 0:
            //Category:
            if (genButtonType == "category") {
                //If a category is selected, add a new category directly after the selected category.
            } else if (genButtonType == "subcategory") {
                //If a subcategory is selected, add a new category directly after the category that the selected subcategory is in.
            } else if (genButtonType == "character") {
                //If a character is selected, add a new category directly after the category that the selected character is in.
            }
            break;
        case 1:
            //Subcategory:
            if (genButtonType == "category") {
                //If a category is selected, add a new subcategory at the end of the selected category.
                //var labelPrompt = window.prompt("Label?");
                //if (labelPrompt == null) labelPrompt = undefined;
                corgi[1] = data[corgi[0]].length;
                data[corgi[0]][corgi[1]] = [{"name":"Placeholder"}];
            } else if (genButtonType == "subcategory") {
                //If a subcategory is selected, add a new subcategory directly after the selected subcategory.
            } else if (genButtonType == "character") {
                //If a character is selected, add a new subcategory directly after the subcategory that the selected character is in.
            }
            break;
        case 2:
            //Character:
            if (genButtonType == "category") {
                //If a category is selected, add a new character at the end of the last subcategory of the selected category.
                if (!isDefined(data[corgi[0]])) {data[corgi[0]] = [];}
            } else if (genButtonType == "subcategory") {
                //If a subcategory is selected, add a new character at the end of the selected subcategory.
                var labelPrompt = window.prompt("Label?");
                if (labelPrompt == null) labelPrompt = undefined;
                data[corgi[0]][corgi[1]].push({"name":labelPrompt});
                orgButton("b-" + corgi[0] + "-" + corgi[1] + "-" + (data[corgi[0]][corgi[1]].length - 1));
            } else if (genButtonType == "character") {
                //If a character is selected, add a new character directly after the selected character.
                var labelPrompt = window.prompt("Label?");
                if (labelPrompt == null) labelPrompt = undefined;
                data[corgi[0]][corgi[1]].splice(corgi[2] + 1, 0, {"name":labelPrompt});
            }
            break;
        case 3:
            //Origin
            break;
    }
    save();
    refreshOrganizationTab();
}

document.body.addEventListener("keypress",function () {
    if (currentTab == 1 && !document.getElementById("labelThing").matches(':focus')) {
        if (event.key == "ArrowUp" || event.key == "w") moveItem(-1);
        else if (event.key == "ArrowDown" || event.key == "s") moveItem(1);
    }
});

///*
var fileImport;
var fileImport2;

/*
function labelCheck() {
    if (genButtonType == "character") {
        if (document.getElementById("labelThing").value != "") data[corgi[0]][corgi[1]][corgi[2]]["name"] = document.getElementById("labelThing").value;
        else data[corgi[0]][corgi[1]][corgi[2]]["name"] = undefined;
    } else if (genButtonType == "category") {
        if (document.getElementById("labelThing").value != "") labels[0][corgi[0]] = document.getElementById("labelThing").value;
        else labels[0][corgi[0]] = undefined;
    } else if (genButtonType == "subcategory") {
        if (document.getElementById("labelThing").value != "") labels[1][corgi[0]][corgi[1]] = document.getElementById("labelThing").value;
        else labels[1][corgi[0]][corgi[1]] = undefined;
    }
    var clicked = currentGenButton;
    refreshOrganizationTab();
    document.getElementById(clicked).click();
    save();
}*/

switchData();
//document.getElementById("labelThing").value = labels[0][0];


logError("generatorScriptsV2.js finished initializing.");
}
catch (err) {
    //window.alert("generatorScriptsV2.js is fucking broken, please fix it you dumb fuck");
    //window.alert("Error: " + err);
    logError("File generatorScriptsV2.js: " + err);
}