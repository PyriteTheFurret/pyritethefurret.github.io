var curOpt = [0,0,0,0];

// This is here so that the jQuery code doesn't run until after the document is ready.
// Update: it just makes my code not work at all, at least locally. Great.
//$(function(){

function reselect(selectId,changedVal) {
    try {
        if (changedVal != undefined) {
            curOpt[selectId] = changedVal;
        }
        // Switch for the different category types
        switch (selectId) {
            // 0 is the main category
            // Populate the first subcategory
            case 0:
                $("#selSub1").empty();

                for (var i = 0; i < data["data"][curOpt[0]]["data"].length; i++) {
                    // Create an option element for each... well, each option.
                    // 
                    var subOpt1 = document.createElement("option");
                    subOpt1.text = (data["data"][curOpt[0]]["data"][i]["name"]);
                    subOpt1.value = i;
                    $("#selSub1").append(subOpt1);
                }
                reselect(1,0);
                break;
            // 1 is the first subcategory
            // Populate the character subcategory
            case 1:
                $("#selSub2").empty();

                for (i = 0; i < data["data"][curOpt[0]]["data"][curOpt[1]]["data"].length; i++) {
                    var subOpt2 = document.createElement("option");
                    subOpt2.text = (data["data"][curOpt[0]]["data"][curOpt[1]]["data"][i][0]["name"]);
                    subOpt2.value = i;
                    $("#selSub2").append(subOpt2);
                }
                reselect(2,0);
                break;
            // 2 is the character subcategory
            // Populate the origin subcategory
            case 2:
                $("#selOrig").empty();
                /* TODO: Add a way to handle characters with unspecified/custom origins */
                if (data["data"][curOpt[0]]["data"][curOpt[1]]["data"][curOpt[2]].length > 1) {
                    $("#selOrig").css("display","inline");
                    for (i = 0; i < data["data"][curOpt[0]]["data"][curOpt[1]]["data"][curOpt[2]].length; i++) {
                        var origOpt = document.createElement("option");
                        if (data["data"][curOpt[0]]["data"][curOpt[1]]["data"][curOpt[2]][i]["origin"] != undefined) {
                            origOpt.text = data["data"][curOpt[0]]["data"][curOpt[1]]["data"][curOpt[2]][i]["origin"];
                        } else origOpt.text = data["origin"]["name"][data["data"][curOpt[0]]["data"][curOpt[1]]["data"][curOpt[2]][i]["pos"][3]];
                        origOpt.value = i;
                        $("#selOrig").append(origOpt);
                    }
                } else {
                    $("#selOrig").css("display","none");
                }
                reselect(3,0);
                break;
            // 3 is the origin subcategory
            // Fetch the data of the character
            case 3:
                // Generic attributes (if it's there, put it there; if it's not, hide it)
                var list = ["name","fullname","gender","desc"]; // List of generic attributes
                for (var i = 0; i < list.length; i++) {
                    if (data["data"][curOpt[0]]["data"][curOpt[1]]["data"][curOpt[2]][curOpt[3]][list[i]] != undefined) {
                        $("#span" + list[i]).css("display","inline");
                        $("#" + list[i]).text(data["data"][curOpt[0]]["data"][curOpt[1]]["data"][curOpt[2]][curOpt[3]][list[i]]);
                    } else $("#span" + list[i]).css("display","none");
                }

                // Special cases

                // Species
                if (data["data"][curOpt[0]]["data"][curOpt[1]]["data"][curOpt[2]][curOpt[3]]["species"] != undefined) {
                    $("#spanspecies").css("display","inline");
                    $("#species").text(data["data"][curOpt[0]]["data"][curOpt[1]]["data"][curOpt[2]][curOpt[3]]["species"].join(", "));
                } else $("#spanspecies").css("display","none");
                
                // Origin
                if (data["data"][curOpt[0]]["data"][curOpt[1]]["data"][curOpt[2]][curOpt[3]]["origin"] != undefined) {
                    // if origin is defined
                    $("#spanorigin").css("display","inline");
                    if (isNaN(data["data"][curOpt[0]]["data"][curOpt[1]]["data"][curOpt[2]][curOpt[3]]["origin"])) {
                        // if origin is not a number (custom origin name)
                        $("#origin").text(data["data"][curOpt[0]]["data"][curOpt[1]]["data"][curOpt[2]][curOpt[3]]["origin"]);
                    }
                    $("#origin").text(data["data"][curOpt[0]]["data"][curOpt[1]]["data"][curOpt[2]][curOpt[3]]["origin"]);
                } else if (data["data"][curOpt[0]]["data"][curOpt[1]]["data"][curOpt[2]][curOpt[3]]["pos"][3] != undefined) {
                    //if origin is not defined, but pos has a fourth number in it (number origin)
                    $("#spanorigin").css("display","inline");
                    $("#origin").text(data["origin"]["title"][data["data"][curOpt[0]]["data"][curOpt[1]]["data"][curOpt[2]][curOpt[3]]["pos"][3]]);
                } else $("#spanorigin").css("display","none");
                
                //Owner
                if (data["data"][curOpt[0]]["data"][curOpt[1]]["data"][curOpt[2]][curOpt[3]]["owner"] != undefined) {
                    $("#owner").text(data["data"][curOpt[0]]["data"][curOpt[1]]["data"][curOpt[2]][curOpt[3]]["owner"]);
                } else $("#owner").text(data["data"][curOpt[0]]["owner"]);
                break;
            default:
                // what the fuck did you do to get here, how
        }
    }
    catch (err) {
        alert("You done goofed! (" + err + ")");
    }
}

function initStuff() {
    try {
        // Add options to the select tags
        // for loop to add stuff
        for (var i = 0; i < data["data"].length; i++) {
            // Categories
            var catOpt = document.createElement("option");
            catOpt.text = data["data"][i]["name"];
            catOpt.value = i;
            $("#selCat").append(catOpt);
        }
        reselect(0);
    }
    catch (err) {
        alert("You done goofed! (" + err + ")");
    }
}
//});
initStuff();
