try {

function pbuttonGen() {
    for (pdv1 = 0; pdv1 < data.length; pdv1++) {
        var pbon = document.createElement("button");
        document.getElementById("pdiv").append(pbon);
        pcbId[0] = "pb-" + pdv1;
        pbon.id = pcbId[0];
        pbon.style.width = (100 / data.length) + "%";
        pbon.innerText = pdv1 + 1;
        if (pdv1 == 0) {
            pbon.style.color = "#000000";
            pbon.style.backgroundColor = "#ffffff";
        } else {
            pbon.style.color = "#ffffff";
            pbon.style.backgroundColor = "#000000";
        }
        var pdivr = document.createElement("div");
        document.getElementById("pAutoGenDiv").append(pdivr);
        pdivr.id = "pdiv-" + pdv1;
        if (pdv1 != 0) pdivr.style.display = "none";
        pshitter[0] = true;
        for (pdv2 = 0; pdv2 < data[pdv1].length; pdv2++) {
            var pbun = document.createElement("button");
            document.getElementById("pdiv-" + pdv1).append(pbun);
            pcbId[1] = "pb-" + pdv1 + "-" + pdv2;
            pbun.id = pcbId[1];
            pbun.style.width = (100 / data[pdv1].length) + "%";
            pbun.innerText = pdv2 + 1;
            if (pdv1 == 0 && pdv2 == 0) {
                pbun.style.color = "#000000";
                pbun.style.backgroundColor = "#ffffff";
            } else {
                pbun.style.color = "#ffffff";
                pbun.style.backgroundColor = "#000000";
            }
            var pdivder = document.createElement("div");
            document.getElementById("pAutoGenDiv").append(pdivder);
            pdivder.id = "pdiv-" + pdv1 + "-" + pdv2;
            if (pdv2 != 0 || pdv1 != 0) pdivder.style.display = "none";
            pshitter[1] = true;
            for (pdv3 = 0; pdv3 < data[pdv1][pdv2].length; pdv3++) {
                var pbuton = document.createElement("button");
                document.getElementById("pdiv-" + pdv1 + "-" + pdv2).append(pbuton);
                pcbId[2] = "pb-" + pdv1 + "-" + pdv2 + "-" + pdv3;
                pbuton.id = pcbId[2];
                pbuton.style.width = (100 / data[pdv1][pdv2].length) + "%";
                if (pdv1 == 0 && pdv2 == 0 && pdv3 == 0) {
                    pbuton.style.color = "#000000";
                    pbuton.style.backgroundColor = "#ffffff";
                } else {
                    pbuton.style.color = "#ffffff";
                    pbuton.style.backgroundColor = "#000000";
                }
                if (data[pdv1][pdv2][pdv3]["name"] != undefined) {
                    pbuton.innerText = data[pdv1][pdv2][pdv3]["name"];
                } else pbuton.innerText = pdv3 + 1;
                pshitter[2] = true;
                for (pshitass = 0; pshitass < dataOrigin.length; pshitass++) {
                    if (isDefined(data[pdv1][pdv2][pdv3][dataOrigin[pshitass]["data"]]) && pshitter[2]) {
                        shitter[2] = false;
                        pfirstAvailable[pcbId[2]] = "pOriginButton-" + pshitass;
                    }
                    if (localStorage.getItem("pnotes." + dataset + "." + pbuton.id + "." + dataOrigin[pshitass]["data"]) == null) {
                        localStorage.setItem("pnotes." + dataset + "." + pbuton.id + "." + dataOrigin[pshitass]["data"], "This text is editable and autosaves, feel free to put notes about OCs here.");
                    }
                }
                if (pshitter[2]) {
                    pbuton.disabled = true;
                    pbuton.style.color = "#C0C0C0";
                } else if (pshitter[1]) {
                    pshitter[1] = false;
                    pfirstAvailable[pcbId[1]] = pcbId[2];
                }
            }
            if (pshitter[1]) {
                pbun.disabled = true;
                pbun.style.color = "#C0C0C0";
            } else if (pshitter[0]) {
                pshitter[0] = false;
                pfirstAvailable[pcbId[0]] = pcbId[1];
            }
        }
        if (pshitter[0]) {
            pbon.disabled = true;
            pbon.style.color = "#C0C0C0";
        }
    }
    /**/
    if (isDefined(dataOrigin)) {
        var pOriginButtonDiv = document.createElement("div");
        pOriginButtonDiv.id = "pOriginButtonDiv";
        document.getElementById("pAutoGenDiv").append(pOriginButtonDiv);
        for (pdv4 = 0; pdv4 < dataOrigin.length; pdv4++) {
            var pObutton = document.createElement("button");
            pObutton.id = "pOriginButton-" + pdv4;
            if (!isDefined(dataOrigin[pdv4].display)) pObutton.innerText = dataOrigin[pdv4].display;
            pObutton.style.fontSize = 14.75;
            pObutton.style.width = (100 / dataOrigin.length) + "%";
            if (pdv4 == 0) {
                pObutton.style.color = "#000000";
                pObutton.style.backgroundColor = dataOrigin[pdv4].color;
                pActiveOB = "pOriginButton-0";
            } else {
                pObutton.style.color = dataOrigin[pdv4].color;
                pObutton.style.backgroundColor = "#000000";
            }
            document.getElementById("pOriginButtonDiv").append(pObutton);
        }
    }
}

pbuttonGen();

logError("previewScripts.js finished initializing.");
}
catch (err) {
    //window.alert("previewScripts.js is fucking broken, please fix it you dumb fuck");
    //window.alert("Error: " + err);
    logError("File previewScripts.js: " + err);
}