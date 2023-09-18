//the debug things
var sands = 0;
function aler(sans) {
    sands = sands + sans;
    window.alert(sands);
}

function addShrek(fuckingHell) {
    var shrek = document.createElement("img");
    shrek.src = "https://static.wikia.nocookie.net/shrek/images/9/9b/GoodShrekImage.png/revision/latest?cb=20201220080410";
    if (fuckingHell != undefined) {
        document.getElementById(fuckingHell).append(shrek);
    } else document.body.append(shrek);
}

var debug = {
    "saveProgress":false
};

function isLocal() {
    return window.location.href.slice(0,4) == "file";
}

function testGray(color) {
    //Step one: split it into the red, green and blue
    //Step two: convert the hex values to decimal
}
var funkyVariable;
var audioShit = [];
for (funkyVariable = 0; funkyVariable < 24; funkyVariable++) {
    audioShit.push(new Audio("assets/audio/sound" + funkyVariable + ".wav"));
}

var exdays = 365;
function setCookie(cname, cvalue) {
    if (isLocal()) localStorage.setItem(cname, cvalue);
    else {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";}
}

var ctemp;
function getCookie(cname) {
    if (isLocal()) {
        ctemp = localStorage.getItem(cname);
        if (ctemp == undefined) return "";
        else return ctemp;
    }
    else {
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
}

var firstAvailable = {};

var dv1;
var dv2;
var dv3;
var dv4;
var activeOB = undefined;
var shitass;
var shitter = [true,true,true];

var cookies = {
    "id":[],
    "value":[]
};

function updateTheCookie() {
    //Check for the ID, if it exists, update the value, if not, add the ID with the value
    cookieBuilder = cookies["id"][0] + "=" + cookies["value"][0] + ";";
    for (c = 1; c < cookies["id"].length; c++) {
        cookieBuilder = cookieBuilder + " " + cookies["id"][c] + "=" + cookies["value"][c] + ";";
    }
    document.cookie = cookieBuilder;
    return document.cookie;
}

const wrapper = document.getElementById("autoGenDiv");

wrapper.addEventListener("click", (event) => {
    const isButton = event.target.nodeName === "BUTTON";
    if (!isButton) {
        return;
    }
    buttonClicked(event.target.id);
})

var cbId = [];

function buttonGen() {
    for (dv1 = 0; dv1 < data.length; dv1++) {
        var bon = document.createElement("button");
        document.getElementById("div").append(bon);
        cbId[0] = "b-" + dv1;
        bon.id = cbId[0];
        bon.style.width = (100 / data.length) + "%";
        bon.innerText = dv1 + 1;
        if (dv1 == 0) {
            bon.style.color = "#000000";
            bon.style.backgroundColor = "#ffffff";
        } else {
            bon.style.color = "#ffffff";
            bon.style.backgroundColor = "#000000";
        }
        var divr = document.createElement("div");
        document.getElementById("autoGenDiv").append(divr);
        divr.id = "div-" + dv1;
        if (dv1 != 0) divr.style.display = "none";
        shitter[0] = true;
        for (dv2 = 0; dv2 < data[dv1].length; dv2++) {
            var bun = document.createElement("button");
            document.getElementById("div-" + dv1).append(bun);
            cbId[1] = "b-" + dv1 + "-" + dv2;
            bun.id = cbId[1];
            bun.style.width = (100 / data[dv1].length) + "%";
            bun.innerText = dv2 + 1;
            if (dv1 == 0 && dv2 == 0) {
                bun.style.color = "#000000";
                bun.style.backgroundColor = "#ffffff";
            } else {
                bun.style.color = "#ffffff";
                bun.style.backgroundColor = "#000000";
            }
            var divder = document.createElement("div");
            document.getElementById("autoGenDiv").append(divder);
            divder.id = "div-" + dv1 + "-" + dv2;
            if (dv2 != 0 || dv1 != 0) divder.style.display = "none";
            shitter[1] = true;
            for (dv3 = 0; dv3 < data[dv1][dv2].length; dv3++) {
                var buton = document.createElement("button");
                document.getElementById("div-" + dv1 + "-" + dv2).append(buton);
                cbId[2] = "b-" + dv1 + "-" + dv2 + "-" + dv3;
                buton.id = cbId[2];
                buton.style.width = (100 / data[dv1][dv2].length) + "%";
                if (dv1 == 0 && dv2 == 0 && dv3 == 0) {
                    buton.style.color = "#000000";
                    buton.style.backgroundColor = "#ffffff";
                } else {
                    buton.style.color = "#ffffff";
                    buton.style.backgroundColor = "#000000";
                }
                if (data[dv1][dv2][dv3]["name"] != undefined) {
                    buton.innerText = data[dv1][dv2][dv3]["name"];
                } else buton.innerText = dv3 + 1;
                shitter[2] = true;
                for (shitass = 0; shitass < dataOrigin.length; shitass++) {
                    if (data[dv1][dv2][dv3][dataOrigin[shitass]["data"]] != undefined && shitter[2]) {
                        shitter[2] = false;
                        firstAvailable[cbId[2]] = "originButton-" + shitass;
                    }
                    if (/*getCookie("notes." + buton.id + "." + dataOrigin[shitass]["data"]) == ""*/localStorage.getItem("notes." + dataset + "." + buton.id + "." + dataOrigin[shitass]["data"]) == null) {
                        //setCookie("notes." + buton.id + "." + dataOrigin[shitass]["data"], "This text is editable and autosaves, feel free to put notes about OCs here.");
                        localStorage.setItem("notes." + dataset + "." + buton.id + "." + dataOrigin[shitass]["data"], "This text is editable and autosaves, feel free to put notes about OCs here.");
                    }
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
            }
        }
        if (shitter[0]) {
            bon.disabled = true;
            bon.style.color = "#C0C0C0";
        }
    }
    /**/
    if (dataOrigin != undefined) {
        var originButtonDiv = document.createElement("div");
        originButtonDiv.id = "originButtonDiv";
        document.getElementById("autoGenDiv").append(originButtonDiv);
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
    }
}
