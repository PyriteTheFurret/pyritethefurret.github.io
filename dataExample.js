var dv1;
var dv2;
var dv3;

class dSto {
    constructor (name, firstName, middleName, lastName, desc, desc2, desc3, origin, gender, species, status, align, image1, image2, image3, image4, image5, image6, image7, image8, color) {
        this["name"] = name;
        this["firstName"] = firstName;
        this["middleName"] = middleName;
        this["lastName"] = lastName;
        this["desc"] = desc;
        this["desc2"] = desc2;
        this["desc3"] = desc3;
        this["origin"] = origin;
        this["gender"] = gender;
        this["species"] = species;
        this["status"] = status;
        this["align"] = align;
        this["image1"] = image1;
        this["image2"] = image2;
        this["image3"] = image3;
        this["image4"] = image4;
        this["image5"] = image5;
        this["image6"] = image6;
        this["image7"] = image7;
        this["image8"] = image8;
        this["color"] = color;
    }
}

function buttonGen() {
    for (dv1 = 0; dv1 < data.length; dv1++) {
        var bon = document.createElement("button");
        document.getElementById("div").append(bon);
        bon.id = "b-" + dv1;
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
        for (dv2 = 0; dv2 < data[dv1].length; dv2++) {
            var bun = document.createElement("button");
            document.getElementById("div-" + dv1).append(bun);
            bun.id = "b-" + dv1 + "-" + dv2;
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
            if (dv2 != 0) divder.style.display = "none";
            for (dv3 = 0; dv3 < data[dv1][dv2].length; dv3++) {
                var buton = document.createElement("button");
                document.getElementById("div-" + dv1 + "-" + dv2).append(buton);
                buton.id = "b-" + dv1 + "-" + dv2 + "-" + dv3;
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
            }
        }
    }
}

var data = [
    //0
    [
        //0-0
        [
            //Shrek
            {
                "name": "Shrek",
                "0": new dSto(
                    "Shrek",
                    undefined,
                    undefined,
                    undefined,
                    "best ogre",
                    undefined,
                    undefined,
                    "Shrek (Movie)",
                    "Male",
                    "Ogre",
                    undefined,
                    undefined,
                    "assets/shrek.png",
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    "#9aed55"
                )
            },
            {
                "name": "Madeline",
                "0": new dSto(
                    "Madeline",
                    undefined,
                    undefined,
                    undefined,
                    "The main character of Celeste. (very good game btw)",
                    undefined,
                    undefined,
                    "Celeste",
                    "Female",
                    "Human",
                    undefined,
                    undefined,
                    "assets/madeline.png",
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    "#ff5757"
                )
            },
            {
                "name": "Garfield",
                "0": new dSto(
                    "Garfield",
                    undefined,
                    undefined,
                    undefined,
                    "garfielf where is my lasaga",
                    undefined,
                    undefined,
                    "Garfield",
                    "Male",
                    "Cat",
                    undefined,
                    undefined,
                    "assets/garfield.png",
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    "#f28500"
                )
            }
        ],
        [
            {
                "name": "Mario",
                "0": new dSto(
                    "Mario",
                    undefined,
                    undefined,
                    undefined,
                    "Plumber",
                    undefined,
                    undefined,
                    "Super Mario Bros. (Video Game)",
                    "Male",
                    "Human (maybe, idk)",
                    undefined,
                    undefined,
                    "assets/mario.png",
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    "#ff0000"
                )
            }
        ]
    ]
];

buttonGen();

const wrapper = document.getElementById("autoGenDiv");

wrapper.addEventListener("click", (event) => {
  const isButton = event.target.nodeName === "BUTTON";
  if (!isButton) {
    return;
  }

  buttonClicked(event.target.id);
})
