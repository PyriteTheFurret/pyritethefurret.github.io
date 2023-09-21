var data = {
    /*
        There are two objects in this file, one for the names of categories and one for the actual character data.
     */
    /*"catLbls":[
        // Categories and subcategories, obviously, have names. This is where they're stored.

        // Category 1: My characters
        {
            "name":"Pyrite's Characters",
            "sc":[
                {
                    "name":"The Family",
                    "sc":[
                        "Pyrite"
                    ]
                }
            ]
        }
    ],*/
    /*
        Each character data block has many data values in it:
            "pos": An array of FOUR numbers showing where the character is in the list AND THEIR ORIGIN.
                The last number should be -1 if it's the only version of that character in the database.
            "name": The character's name and/or any aliases and nicknames the character goes by or is referred to as.
            "fullname": Pretty self-explanatory.
            "desc": A description of the character, maybe some info or whatever goes here.
                You could feasibly put anything related to said character here.
            "img": An array containing links to images of the character, both directly from the site and from elsewhere.
                I might make different variables for PFP art and other art of the character, but I don't know if I should.
            "gender": Gender.
            "species": Species.
     */
    "data":[
        // 00 - My characters
        {"name":"Pyrite's Characters",
        "data":[
            // 00.00 - Pyrite's family
            {"name":"The Family",
            "data":[
                // 00.00.00 - Pyrite
                [
                    // Pyrite [ORIGO]
                    {
                        "pos":[0,0,0,0],
                        "name":"Pyrite",
                        "fullname":"Pyrite Jade Hue",
                        "desc":"Certified squishy",
                        "img":[],
                        "gender":"Male",
                        "species":["Harcolian Delta Furret","Maritchian Slime [Variant R]"]
                    },
                    // Emerald [ENSIS]
                    {
                        "pos":[0,0,0,1],
                        "name":"Emerald (Emmy)",
                        "fullname":"Pyrite Emerald Bagels",
                        "desc":undefined,
                        "img":[],
                        "gender":"Female",
                        "species":["Harcolian Delta Furret (ENSIS Timeline Variant)","Maritchian Slime [Variant A]"]
                    },
                    // Pyra [CANTO]
                    {
                        "pos":[0,0,0,2],
                        "name":"Pyra",
                        "fullname":undefined,
                        "desc":undefined,
                        "img":[],
                        "gender":"Female",
                        "species":undefined
                    }
                    // Heliotrope [MALUS]
                    // SILEO Pyrite [SILEO]
                    // {RETIRED} Ruby (Dapper Pyrite) [ANTAS]
                    // {RETIRED} Short Pyrite [BREVE]
                    // Onyx (Pyrite but as a Hollow Knight Vessel OC) [INANI]
                    // Graphene (Pyrite but as a living drawing, Kartana-adjacent) [ILLUS]
                    // Pyre (Elemental Pyrite) [IGNIS]
                    // Arctite [GELID]
                    // Archerite [ARCOS]
                    // Bixbite (Video Game Pyrite) [PIXUS]
                    // Tourmaline (Space Pyrite) [DIVUM]
                    // {RETIRED} Bismuth [NORMA]
                    // Halite [LODOS]
                    // {RETIRED} Street Corner Pyrite [VICUS]
                    // {RETIRED} "Andrew", Eevee Pyrite [EVOLU]
                    // {UNKNOWN} Pyrite [MACHI]
                    // Mica (Paper Pyrite)
                    // Diorite (Shitpost Pyrite)
                    // Mirror Harcol Pyrite
                    // Lunchmeat [?]
                ]
/*

*/
            ]}
        ]}
    ]
};