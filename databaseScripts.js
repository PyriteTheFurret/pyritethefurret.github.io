var selCat = document.getElementById("selCat");
var curOpt = [0,0,0,0];

function reselect(selectId,changedVal) {
    try {
        if (changedVal != undefined) {
            curOpt[selectId] = changedVal;
        }
        //Switch for the different category types
        switch (selectId) {
            // 0 is the main category
            // Populate the first subcategory
            case 0:
                var deathRow = document.getElementsByClassName("subOpt1");
                deathRow.forEach(element => {
                    element.remove();
                });
                for (var i = 0; i < data["data"][curOpt[0]]["data"].length; i++) {
                    var subOpt1 = document.createElement("option");
                    //The joke is that this entire script is very likely suboptimal! :)
                    subOpt1.text = data["data"][curOpt[0]]["data"][i]["name"];
                    subOpt1.value = i;
                    subOpt1.classList = "subOpt1";
                    document.getElementById("selSub1").appendChild(subOpt1);
                }
                reselect(1,0);
                break;
            // 1 is the first subcategory
            // Populate the character subcategory
            case 1:
                var deathRow = document.getElementsByClassName("subOpt2");
                deathRow.forEach(element => {
                    element.remove();
                });
                for (i = 0; i < data["data"][curOpt[0]]["data"][curOpt[1]]["data"].length; i++) {
                    var subOpt2 = document.createElement("option");
                    subOpt2.text = data["data"][curOpt[0]]["data"][curOpt[1]]["data"][i][0]["name"];
                    subOpt2.value = i;
                    subOpt2.classList = "subOpt2";
                    document.getElementById("selSub2").appendChild(subOpt2);
                }
                reselect(2,0);
                break;
            // 2 is the character subcategory
            // Populate the origin subcategory
            case 2:
                var deathRow = document.getElementsByClassName("origOpt");
                deathRow.forEach(element => {
                    element.remove();
                });
                if (data["data"][curOpt[0]]["data"][curOpt[1]]["data"][curOpt[2]].length > 1) {
                    for (i = 0; i < data["data"][curOpt[0]]["data"][curOpt[1]]["data"][curOpt[2]].length; i++) {
                        var origOpt = document.createElement("option");
                        origOpt.text = data["data"][curOpt[0]]["data"][curOpt[1]]["data"][curOpt[2]][i]["pos"][3];
                        origOpt.value = i;
                        origOpt.classList = "origOpt";
                        document.getElementById("selOrig").appendChild(origOpt);
                    }
                }
                reselect(3,0);
                break;
            //3 is the origin subcategory
            case 3:
                var list = ["name","fullname","gender","species","desc"]
                for (var i = 0; i < list.length; i++) {
                    if (data["data"][curOpt[0]]["data"][curOpt[1]]["data"][curOpt[2]][curOpt[3]][list[i]] != undefined) {
                        document.getElementById("span" + list[i]).style.display = "inline";
                        document.getElementById(list[i]).innerText = data["data"][curOpt[0]]["data"][curOpt[1]]["data"][curOpt[2]][curOpt[3]][list[i]];
                    } else document.getElementById("span" + list[i]).style.display = "none";
                }
                break;
            default:
                //what the fuck did you do to get here, how
        }
    }
    catch (err) {
        alert("You done goofed! (" + err + ")");
    }
}

function initStuff() {
    try {
        //Add options to the select tags
        //for loop to add stuff
        for (var i = 0; i < data["data"].length; i++) {
            //Categories
            var catOpt = document.createElement("option");
            catOpt.text = data["data"][i]["name"];
            catOpt.value = i;
            selCat.appendChild(catOpt);
        }
        for (var i = 0; i < data["data"][curOpt[0]]["data"].length; i++) {
            var subOpt1 = document.createElement("option");
            subOpt1.text = data["data"][curOpt[0]]["data"][i]["name"];
            subOpt1.value = i;
            subOpt1.classList = "subOpt1";
            document.getElementById("selSub1").appendChild(subOpt1);
        }
        for (i = 0; i < data["data"][curOpt[0]]["data"][curOpt[1]]["data"].length; i++) {
            var subOpt2 = document.createElement("option");
            subOpt2.text = data["data"][curOpt[0]]["data"][curOpt[1]]["data"][i][0]["name"];
            subOpt2.value = i;
            subOpt2.classList = "subOpt2";
            document.getElementById("selSub2").appendChild(subOpt2);
        }
        for (i = 0; i < data["data"][curOpt[0]]["data"][curOpt[1]]["data"][curOpt[2]].length; i++) {
            var origOpt = document.createElement("option");
            origOpt.text = data["data"][curOpt[0]]["data"][curOpt[1]]["data"][curOpt[2]][i]["pos"][3];
            origOpt.value = data["data"][curOpt[0]]["data"][curOpt[1]]["data"][curOpt[2]][i]["pos"][3];
            origOpt.classList = "origOpt";
            document.getElementById("selOrig").appendChild(origOpt);
        }
        reselect(3);
    }
    catch (err) {
        alert("You done goofed! (" + err + ")");
    }
}

initStuff();
