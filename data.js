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
    "origin":{
        "name":[
            'ORIGO',
            'ENSIS',
            'CANTO',
            'MALUS',
            'SILEO',
            'ANTAS',
            'BREVE',
            'INANI',
            'ILLUS',
            'IGNIS',
            'GELID',
            'ARCOS',
            'PIXUS',
            'DIVUM',
            'NORMA',
            'LODOS',
            'MONSU',
            'VICUS',
            'EVOLU',
            'MACHI',
            'FABUL',
            'STULT',
            'SPECU',
            'UMBRA',
            'PAVOR',
            'VERUM',
            'EXIGU'
        ],
        "title":[
            'ORIGO ~ "World of Origin"',
            'ENSIS ~ "World of the Bladebearer"',
            'CANTO ~ "World of the Musician"',
            'MALUS ~ "World of the Manipulated One"',
            'SILEO ~ "The Reset"',
            'ANTAS',
            'BREVE',
            'INANI ~ "World of the Voidborn"',
            'ILLUS',
            'IGNIS ~ "World of the Elementals"',
            'GELID',
            'ARCOS ~ "World of the Marksman"',
            'PIXUS ~ "The Virtual Expanse"',
            'DIVUM ~ "World of the Space Explorer"',
            'NORMA',
            'LODOS',
            'MONSU ~ "World of the Determined Climber"',
            'VICUS',
            'EVOLU',
            'MACHI ~ "The World, Conquered"',
            'FABUL ~ "The Storybook"',
            'STULT',
            'SPECU ~ "World Beyond the Mirror"',
            'UMBRA ~ "World in Shadows"',
            'PAVOR ~ "World of Horrors, Since Collapsed"',
            'VERUM',
            'EXIGU'
        ]
    },
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
            "origin": Custom origin name goes here. Leave blank to default to the fourth number in the pos array.
            "owner": A way to credit anyone else that made the character with you, if you want to. Defaults to the 'owner' tag in the character's main category.
     */
    "data":[
        // 00 - My characters
        {"name":"Pyrite's Characters",
        "owner":"Pyrite Hue",
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
                        "desc":"A kind woman who wields an ornate magic sword. Despite her being referred to as a 'bladebearer' by some, there is no historical or prophetical significance to her blade.",
                        "img":[],
                        "gender":"Female",
                        "species":["Harcolian Delta Furret (ENSIS Timeline Variant)","Maritchian Slime [Variant A]"]
                    },
                    // Pyra [CANTO]
                    {
                        "pos":[0,0,0,2],
                        "name":"Pyra",
                        "fullname":"Pyra Hue",
                        "desc":"A musician with power over Tempo, the element of song and time. Also a pretty decent blacksmith who runs a weapon shop.",
                        "img":[],
                        "gender":"Female",
                        "species":["Harcolian Delta Furret","Maritchian Slime [Variant R]"]
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
                    // Mica (Paper Pyrite) [FABUL]
                    // Diorite (Shitpost Pyrite) [STULT]
                    // Mirror Harcol Pyrite [SPECU]
                    // Lunchmeat [?]
                ],

                // 00.00.01 - Hazel
                [
                    // Hazel [ORIGO]
                    {
                        "pos":[0,0,1,0],
                        "name":"Hazel",
                        "fullname":"Hazel Marcasite Hue",
                        "desc":"Certified sentret",
                        "img":[],
                        "gender":"Male",
                        "species":["Delta Sentret","Maritchian Slime [Variant R]"]
                    },
                    // Ella (Nutella) [ENSIS]
                    {
                        "pos":[0,0,1,1],
                        "name":"Ella",
                        "fullname":"Hazel Nutella Bagels",
                        //"desc":"",
                        "img":[],
                        "gender":"Female",
                        "species":["Harcolian Delta Furret (ENSIS Timeline Variant)"]
                    },
                    // Detective Hazel [CANTO]
                    // Almond/Allie [MALUS]
                    // SILEO Hazel [SILEO]
                    // Ellie [LODOS]
                ]
/*
                // 00.00.02 - Amber
                    Amber [ORIGO]
                    Calcite [ENSIS]
                    Amby [SILEO]

/*
                // 00.00.03 - Golden
                    Golden

                // 00.00.04 - Cream
                    Cream

/*
                // 00.00.05 - Perri
                    Perri [ORIGO]
                    Reide [ENSIS]

                // 00.00.06 - Palladium
                    Palladium [ORIGO]
                    Palla [ENSIS]

                // 00.00.07 - Wallace
                    Wallace [ORIGO]
                    Willow [ENSIS]

                // 00.00.08 - Latte
                    Latte

                // 00.00.09 - Cappu
                    Cappu

                // 00.00.10 - Malachite
                    Malachite
*/

/*
                // 00.00.11 - Cobalt
                    Cobalt [ORIGO]
                    Aqualite [ENSIS]
                    Diamond [MALUS]
                    Chibi Cobalt [ ? ]

                // 00.00.12 - Coffee
                    Coffee [ORIGO]
                
                // 00.00.13 - Copper/Silver
                    Copper/Silver [ORIGO]
                    Silvia [SILEO]

/*
                // 00.00.14 - Topaz
                    Topaz [ORIGO]

                // 00.00.15 - Orichalcum
                    Orichalcum [ORIGO]

                // 00.00.16 - Charlotte
                    Charlotte [ORIGO]

                // 00.00.17 - Crystellia
                    Crystellia [ORIGO]

                // 00.00.18 - Jade
                    Jade [ORIGO]

                // 00.00.99 - Unsorted
                    // Mary [ORIGO]
                    // Hazel Sr. [ORIGO]
                    // Jelly [ORIGO]
                    // Adam [ORIGO]
                    // Titan [ORIGO]
                    // Gally [ORIGO]
                    // Mythril [ORIGO]



            // 00.01 - Harcolians
                    // Flare Wick
                    // ????? (Mother of the Wick Family)
                    // ????? (Eevee)
                    // Shayle (Flareon)
                    // ????? (Jolteon)
                    // Shel (Vaporeon)
                    // ????? (Espeon/Umbreon Mix)
                    // Kel (Leafeon)
                    // Jem (Glaceon)
                    // ????? (Sylveon)

                    // Quinn
                    // Glacoro
                    // Jay
                    // Alice (Glacoro/Jay's mother)
                    // Custard
                    // Salami

                    // Aquamire Darson
                    // Kari Darson
                    // Lilly Valley
                    // Milly Valley
                    // Antonio (Anthro Drifloon)
                    // Chili the Skitty

                    // Fenn
                    // Carol (Fenn's mother)
                    // Ferlehu

                    // Dr. Pikachu
                    // Prof. Eevee
                    // Gilly

                    // Duke Ex Magearna [M1/M2]
                    // Alex
                    // Jackal (Bounty Hunter)

                    // Jim (Reshiram)
                    // ????? (Zekrom)
                    // Kunai (Articuno)
                    // ????? (Zapdos Businesswoman)
                    // Mace (Moltres Businessman)

                // 00.01.99 - Unsorted
                    // ????? (Neutral Type Arceus)
                    // ????? (Fire Type Arceus)
                    // ????? (Water Type Arceus)
                    // ????? (Grass Type Arceus)
                    // ????? (Electric Type Arceus)
                    // ????? (Ice Type Arceus)
                    // ????? (Fighting Type Arceus)
                    // Arkaeya The Psychic
                    // ????? (Poison Type Arceus)
                    // ????? (Ground Type Arceus)
                    // ????? (Rock Type Arceus)
                    // ????? (Flying Type Arceus)
                    // ????? (Bug Type Arceus)
                    // ????? (Ghost Type Arceus)
                    // ????? (Dragon Type Arceus)
                    // ????? (Dark Type Arceus)
                    // ????? (Steel Type Arceus)
                    // ????? (Fairy Type Arceus)

            // 00. - Jasper Arc OCs
                // 00. .99 - Unsorted
                    Dot
                    Chungy (Dot's Furret)
                    Jasper
                    ????? (Dot's mother)
                    Professor Acacia
                    Fel (Experiment Zero)
                    Pitch
                    Terror
                    The Third Experiment [BYPASS]
                    Malice
                    Jelly/Shift/Ranger
                    Pseudobane
                    Zenith

            // 00. - Post-Harcol, Pre-TGS era OCs
                // 00. .99 - Unsorted
                    Dell
                    Vulcan
                    Darkrai
                    Kecleon
                    Pyrute
                    The Evil Cyndaquil
                    Griffin Von Byrd
                    Chad
                    Billingsworth Cash
                    Robert (James)

            // 00. - Fragments and other Ethereal-Adjacent OCs
                // 00. .99 - Unsorted
                    The Fragment of Sound
                    Craig (The Fragment of Death)
                    The Fragment of Life
                    The Fragment of Light
                    The Fragment of Mind
                    Chroma (The Fragment of Color)
                    Galaxy (The Fragment of Space)
                    The Fragment of Temperature
                    Joules (The Fragment of Energy)
                    The Fragment of Tempo

                    Nebula (Cobalt's Oneiroi)
                    Aqua (Reborn Cobalt's Guardian Voice)
                    Talon (Reborn Coffee's Guardian Voice)

            // 00. - Rain World OCs
                // 00. .99 - Unsorted
                    Deceptive Glowing Stones (+ Explorer)
                    Heart of Metal
                    The Skield
                    The Augmented

                    Survivor woman
                    Monk woman
                    Hunter woman
                    Gourmand woman
                    Artificer woman
                    Spearmaster woman
                    Rivulet woman
                    Saint woman

            // 00. - Other Game OCs
                // 00. .99 - Unsorted
                    Reuben (Terraria idiot)
                    Felos (Terraria | The Desert Ranger)
                    Beryl (Terraria | Mage)
                    Green Lemon (Terraria | Mage)
                    Talos, the Stealth Striker (Terraria)
                    Xen, Druid of Terralon / Xen, the Accursed

                    Kane (Minecraft OC)

                    Zote Calico
                    Erin Calico
                    Vin Ven
                    Zote Zeneki

                    Ellis the Enforcer
                    ????? (Anthro Lionfish)

            // 00. - 
                // 00. .99 - Unsorted

            // 00. - 
                // 00. .99 - Unsorted

            // 00. - Other
                // 00. .99 - Unsorted
                    Peter (Gem Chronicles)
                    Jym (Gem Chronicles)
                    IRL IRP Pyrite
                    Chibi Peter
                    Mendel the Menderbug
                    The French Duck
                    The Soulwalkers
                    The Friendly Soulwalkers

            
            // 00.99 - Unsorted
                    Rogue (A Helio Bot, broken out and rebelling)
                    Addie, Core of Corruption
                    Radium
                    Mellow
                    Unknown (The Cabinet Man)
                    Harmony [RETCONNED]
                    Mini (Tree)
                    Solstice (Boudinian, Forever Changed)
                    Gank Von Campe (Unknown Sileo Character)
                    Kaze (Unknown Sileo Character)
                    Jared, the Chaotic One (Squirrel)
                    Nekonecny (The Fractal Man)
*/
            ]}
        ]}
    ]
};