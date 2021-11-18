const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");




app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

//Handlebars settings
app.set("view engine", "hbs");
app.engine("hbs", exphbs({
    extname: "hbs",
    defaultLayout: "index",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",

}));




const port = 8800;
app.listen(port);
console.log(`Server is running on Port: ${port}`)


// Route to display static src images
app.get("/static", (req, res) => {
    res.render("static");
});

app.get('/', (req, res) => {
    res.render("main",


//Json goes here


        {
            "name": "Overview",
            "action": "Franmarine Underwater Services Pty Ltd have been appointed by Naval Ship Management (NSM) to conduct a post in-water hull clean (IWHC) Biofouling Inspection (BFI) on the vessel HMAS Arunta. The inspection was conducted by qualified divers trained in under water inspection techniques and all activities were carried out in accordance with client requirements and time schedules. Diving operations were conducted from AMC in strict accordance with Occupational Diving Operations AS/NZS 2299.1:2015.",
            "summary": "1. Niche Area Biofouling: The Niche areas of the vessel were observed to have on average 2% coverage of light slime discoloration/staining consistent with FR-0 to FR-10. The niche areas were typically subject to sporadic, stubborn shell base in isolated areas at coverage of less than 2%. 2. ",
            "who": "Tug Boat company",



            "id": "fbf346a4-f026-48ea-97dd-df6d5a48684a",
            "displayName": "Order Hull Inspection/Clean",
            "workCode": "IOP-2021-000",
            "lastModified": "2021-07-16T03:08:48+00:00",
            "messages": null,
            "data": {
                "invites": {
                    "buyer": [
                        {
                            "id": "00000000-0000-0000-0000-000000000000",
                            "name": "Michael.Klyne@testemail.com",
                            "email": "Michael.Klyne@testemail.com",
                            "roles": [
                                "Buyer"
                            ]
                        }
                    ],
                    "supplier": [
                        {
                            "id": "00000000-0000-0000-0000-000000000000",
                            "name": "Blake.Miller@testemail.com",
                            "email": "Blake.Miller@testemail.com",
                            "roles": [
                                "Supplier"
                            ]
                        }
                    ],
                    "supervisor": [
                        {
                            "id": "00000000-0000-0000-0000-000000000000",
                            "name": "ElliottHardy@testemail.com",
                            "email": "ElliottHardy@testemail.com",
                            "roles": [
                                "Supervisor"
                            ]
                        }
                    ],
                    "divers": [
                        {
                            "id": "00000000-0000-0000-0000-000000000000",
                            "name": "will@testemail.com",
                            "email": "will@testemail.com",
                            "roles": [
                                "ReadOnly"
                            ]
                        },
                        {
                            "id": "00000000-0000-0000-0000-000000000000",
                            "name": "Fox@testemail.com",
                            "email": "Fox@testemail.com",
                            "roles": [
                                "ReadOnly"
                            ]
                        },
                        {
                            "id": "00000000-0000-0000-0000-000000000000",
                            "name": "Danny@testemail.com",
                            "email": "Danny@testemail.com",
                            "roles": [
                                "ReadOnly"
                            ]
                        },
                        {
                            "id": "00000000-0000-0000-0000-000000000000",
                            "name": "aaron@testemail.com",
                            "email": "aaron@testemail.com",
                            "roles": [
                                "ReadOnly"
                            ]
                        }
                    ],
                    "inspector": [
                        {
                            "id": "00000000-0000-0000-0000-000000000000",
                            "name": "adam@testemail.com",
                            "email": "adam@testemail.com",
                            "roles": [
                                "Inspector"
                            ]
                        }
                    ],
                    "approver": [
                        {
                            "id": "00000000-0000-0000-0000-000000000000",
                            "name": "kelly@testemail.com",
                            "email": "kelly@testemail.com",
                            "roles": [
                                "Supervisor",
                                "Inspector",
                                "QA",
                                "Approver",
                                "ReadOnly"
                            ]
                        }
                    ]
                },
                "products": "Biofouling Inspection",
                "scopeOfWork": "<p>Post Clean Biofouling Inspection</p>\n",
                "location": {
                    "id": "38d7427f-1775-58d3-897f-aced41d44f18",
                    "displayName": "Fremantle",
                    "imageUrl": null,
                    "data": {
                        "portNumber": 54520,
                        "portName": "Fremantle",
                        "regionNumber": 53290,
                        "regionName": "AUSTRALIA",
                        "countryCode": "AU",
                        "countryName": "Australia",
                        "latitude": "32°03'00\"S",
                        "longitude": "115°45'00\"E",
                        "publicationNumber": "Sailing Directions Pub. 175 (Enroute) - North West and South Coasts of Australia",
                        "chartNumber": "74582",
                        "navArea": "X",
                        "harborSize": "L",
                        "harborType": "CB",
                        "shelter": "G",
                        "erTide": "N",
                        "erSwell": "N",
                        "erIce": "N",
                        "erOther": "Y",
                        "overheadLimits": "Y",
                        "chDepth": "13",
                        "anDepth": "14",
                        "cpDepth": "13",
                        "otDepth": "9",
                        "tide": 1,
                        "maxVesselLength": null,
                        "maxVesselBeam": null,
                        "maxVesselDraft": null,
                        "goodHoldingGround": "Y",
                        "turningArea": "Y",
                        "firstPortOfEntry": "Y",
                        "usRep": "Y",
                        "ptCompulsory": "Y",
                        "ptAvailable": null,
                        "ptLocalAssist": null,
                        "ptAdvisable": "Y",
                        "tugsSalvage": "U",
                        "tugsAssist": "Y",
                        "qtPratique": "Y",
                        "qtOther": "Y",
                        "cmTelephone": "U",
                        "cmTelegraph": "U",
                        "cmRadio": "Y",
                        "cmRadioTel": "U",
                        "cmAir": "Y",
                        "cmRail": "Y",
                        "loWharves": "Y",
                        "loAnchor": "U",
                        "loMedMoor": "U",
                        "loBeachMoor": "U",
                        "loIceMoor": "U",
                        "medFacilities": "Y",
                        "garbageDisposal": "Y",
                        "degauss": "U",
                        "dirtyBallast": "Y",
                        "crFixed": "Y",
                        "crMobile": "Y",
                        "crFloating": "Y",
                        "lifts100": "Y",
                        "lifts50": "Y",
                        "lifts25": "Y",
                        "lifts0": "Y",
                        "srLongshore": "Y",
                        "srElectrical": "Y",
                        "srSteam": "Y",
                        "srNavigEquip": "Y",
                        "srElectRepair": "Y",
                        "suProvisions": "Y",
                        "suWater": "Y",
                        "suFuel": "Y",
                        "suDiesel": "Y",
                        "suDeck": "Y",
                        "suEngine": "Y",
                        "repairCode": "A",
                        "drydock": "M",
                        "railway": "M",
                        "qtSanitation": "U",
                        "suAviationFuel": "U",
                        "harborUse": "UNK",
                        "ukcMgmtSystem": "U",
                        "portSecurity": "U",
                        "etaMessage": "Y",
                        "searchAndRescue": "U",
                        "tss": "U",
                        "vts": "U",
                        "cht": "U",
                        "globalId": "{C71006AA-73BA-4302-AB33-4709E6102FE1}",
                        "loRoro": "U",
                        "loSolidBulk": "U",
                        "loContainer": "U",
                        "loBreakBulk": "U",
                        "loOilTerm": "U",
                        "loLongTerm": "U",
                        "loOther": "U",
                        "loDangCargo": "U",
                        "loLiquidBulk": "U",
                        "srIceBreaking": "U",
                        "srDiving": "U",
                        "cranesContainer": "U",
                        "unloCode": null,
                        "dnc": "a0454520, coa04k, gen04a, h0454520",
                        "s121WaterBody": "",
                        "s57Enc": null,
                        "s101Enc": "",
                        "dodWaterBody": "Indian Ocean",
                        "alternateName": null,
                        "s23WaterBody": "Indian Ocean",
                        "entranceWidth": null,
                        "lngTerminalDepth": null,
                        "offMaxVesselLength": null,
                        "offMaxVesselBeam": null,
                        "offMaxVesselDraft": null,
                        "xcoord": 115.75000000000011,
                        "ycoord": -32.049999999999955
                    },
                    "dataId": "00000000-0000-0000-0000-000000000000",
                    "revision": 1,
                    "version": 2,
                    "dianaDataType": "Thing",
                    "attachments": null,
                    "entityType": "thing",
                    "jsonName": "FREMANTLE",
                    "originId": "00000000-0000-0000-0000-000000000000",
                    "berth": "TBC"
                },
                "vessel": {
                    "id": "27b53010-233a-52dc-ad77-67cb5acd5cee",
                    "displayName": "HMAS ARUNTA",
                    "imageUrl": "https://risexcdn.blob.core.windows.net/diana/images/ships/Carrier.svg",
                    "data": {
                        "name": "HMAS Arunta",
                        "imo": "",
                        "mmsi": "503110000",
                        "callSign": "VKMQ",
                        "flag": "Australian",
                        "type": "NOT AVAILABLE",
                        "dwt": null,
                        "length": "118m",
                        "breadth": 16,
                        "beam": "15m",
                        "class": "ANZAC",
                        "registry": "Fleet Base West, WA",
                        "grossTonage": "3,600 tonnes",
                        "pennant": "FFH 151",
                        "shipType": "Frigate",
                        "draughtForward": "4.6m",
                        "draughtMidships": "4.7m",
                        "draughtAft": "4.8m"
                    },
                    "dataId": "00000000-0000-0000-0000-000000000000",
                    "revision": 0,
                    "version": 0,
                    "dianaDataType": "Thing",
                    "attachments": null,
                    "entityType": "Vessel",
                    "jsonName": "HMAS Arunta",
                    "originId": "00000000-0000-0000-0000-000000000000"
                },
                "delivery": {
                    "window": {
                        "from": "2021-08-19T04:00:00+00:00",
                        "to": "2021-08-19T04:00:00+00:00"
                    },
                    "actualDate": {
                        "date": "2021-07-16T03:08:58+00:00"
                    }
                },
                "actualDelivery": {
                    "startDateTime": {
                        "date": "2021-04-01T03:05:55Z"
                    },
                    "endDateTime": {
                        "date": "2021-04-01T03:10:16Z"
                    }
                },
                "report": {
                    "overview": "<p>Franmarine Underwater Services Pty Ltd have been appointed by Naval Ship Management (NSM) to conduct a post in-water hull clean (IWHC) Biofouling Inspection (BFI) on the vessel HMAS Arunta.</p>\n<p>The inspection was conducted by qualified divers trained in under water inspection techniques and all activities were carried out in accordance with client requirements and time schedules.</p>\n<p>Diving operations were conducted from AMC in strict accordance with Occupational Diving Operations AS/NZS 2299.1:2015.</p>\n<p>Documents used to assist the project:</p>\n<ul>\n<li>AS/NZS 2299.1:2015</li>\n<li>Franmarine Operations Manual</li>\n<li>Underwater Inspection Manual</li>\n<li>Previous Biofouling Inspection report.</li>\n</ul>\n<p></p>\n",
                    "findings": "<p></p>\n",
                    "summary": "<p>1. Niche Area Biofouling: The Niche areas of the vessel were observed to have on average 2% coverage of light slime discoloration/staining consistent with FR-0 to FR-10. The niche areas were typically subject to sporadic, stubborn shell base in isolated areas at coverage of less than 2%.</p>\n<p>2. Hull Plate Biofouling: The hull plating areas of the vessel were observed to have on average 2% coverage of light slime discoloration/staining consistent with FR-0 to FR-10. The hull plating areas were typically subject to sporadic, stubborn shell base in isolated areas at coverage of less than 2%, this was more apparent at the AFT of the vessel.</p>\n<p>3. AFC Condition: The AFC was observed to be in overall good to average condition. Minor coating defects and blemishes were observed over the length of the vessel. Large areas of delamination were observed on the bow plating, sonar dome, skeg, and A brackets. Overall, the vessel AFC condition ranged between PDR-10 and PDR-50.</p>\n<p>Please note that CCTV imagery and additional still photographs may be provided upon client request.&nbsp;</p>\n<p>Reference Tables (Fouling Ratings Scale and Paint Deterioration Rating Scale) can be found at the end of this report.</p>\n<p><strong><em>Thank you for the opportunity to provide our services.</em></strong></p>\n<p><strong><em>If we can be of any future assistance, please do not hesitate to contact us at any time.</em></strong></p>\n<p></p>\n<p></p>\n<p></p>\n"
                },
                "rudder": {
                    "rudder": {
                        "comments": "<ul>\n<li>&nbsp;The rudder was found to be in good condition at the time of the inspection with no significant anomalies or areas of damage discovered during the inspection process.</li>\n<li>&nbsp;The rudder anodes were observed to be subject to minor soft slime/weed growth within the fixing recesses at a coverage of 2%, this was consistent with a fouling rating of FR-10.</li>\n<li>&nbsp;The rudder plating surfaces were observed to have under 2% coverage of light slime discolouration, consistent with a fouling rating of FR-0 to FR-10. Sporadic, stubborn shell base was observed in isolated areas at a coverage of approx. 2%.</li>\n<li>Niche areas on the rudder were subject to light slime discolouration and sporadic shell base at a coverage of 2%.</li>\n<li>The antifoul coating (AFC) was observed to be in good condition consistent with a paint deterioration of PDR-10 with intermittent areas around weld seams and edges consistent with PDR-20.</li>\n</ul>\n",
                        "fouling": {
                            "fr0": "98",
                            "fr10": "2",
                            "fr20": "",
                            "fr30": "",
                            "fr40": "",
                            "fr50": "",
                            "fr60": "",
                            "fr70": "",
                            "fr80": "",
                            "fr90": "",
                            "fr100": ""
                        }
                    }
                },
                "propeller": {
                    "propeller": {
                        "comments": "<ul>\n<li>Both the Port and STBD side propellers were reported to be 100% free of marine fouling. FR-0.&nbsp;</li>\n<li>Marine growth on the propeller boss was reported as non-existent with only staining to the antifoul coating present (FR-0).&nbsp;</li>\n<li>The propeller boss was 100% covered in an anti-fouling coating (AFC). The coating appeared to be intact and in good condition consistent with PDR-10.</li>\n</ul>\n",
                        "fouling": {
                            "fr0": "100",
                            "fr10": "",
                            "fr20": "",
                            "fr30": "",
                            "fr40": "",
                            "fr50": "",
                            "fr60": "",
                            "fr70": "",
                            "fr80": "",
                            "fr90": "",
                            "fr100": ""
                        },
                        "pdr": "10"
                    },
                    "comments2": "<p></p>\n",
                    "comments": "<p></p>\n",
                    "propeller2": {
                        "comments": "<p>Starboard side propeller</p>\n<p></p>\n"
                    },
                    "propeller3": {
                        "comments": "<p>Port side propeller</p>\n<p></p>\n"
                    }
                },
                "ropeGuard": {
                    "ropeGuard": {
                        "comments": "<ul>\n<li>Both the Port and STBD side rope guards’ external surfaces were observed to have no marine fouling present. FR-0.</li>\n<li>Internally the rope guards could not be viewed.</li>\n<li>The antifoul coating (AFC) was observed to be in average condition with coating defects around bolt heads revealing the underlying AC coating consistent with PDR-30.</li>\n</ul>\n",
                        "fouling": {
                            "fr0": "100",
                            "fr10": "",
                            "fr20": "",
                            "fr30": "",
                            "fr40": "",
                            "fr50": "",
                            "fr60": "",
                            "fr70": "",
                            "fr80": "",
                            "fr90": "",
                            "fr100": ""
                        },
                        "pdr": "30"
                    },
                    "ropeGuard3": {
                        "comments": "<p>Starboard side rope guard</p>\n"
                    },
                    "ropeGuard2": {
                        "comments": "<p>Port side rope guard</p>\n<p>Portside</p>\n"
                    }
                },
                "sternArrangement": {
                    "sternArrangement": {
                        "comments": "<ul>\n<li>Both the Port and STBD side stern arrangements were observed to be in similar condition with approx. 2% coverage of light slime discolouration, consistent with a fouling rating of FR-0 to FR-10. Sporadic, stubborn shell base was observed in isolated areas at a coverage of less than 2%.&nbsp;</li>\n<li>The antifoul coating (AFC) was observed to be in average condition (PDR-30), with large areas of delamination and intermittent delamination around bolt heads and edges which were identified as being consistent with PDR-30.</li>\n</ul>\n",
                        "fouling": {
                            "fr0": "98",
                            "fr10": "2",
                            "fr20": "",
                            "fr30": "",
                            "fr40": "",
                            "fr50": "",
                            "fr60": "",
                            "fr70": "",
                            "fr80": "",
                            "fr90": "",
                            "fr100": ""
                        },
                        "pdr": "30"
                    },
                    "sternArrangement3": {
                        "comments": "<p>Portside stern arrangement</p>\n"
                    },
                    "sternArrangement2": {
                        "comments": "<p>Starboard side stern arrangement</p>\n"
                    }
                },
                "stabiliserFins": {
                    "stabiliserFins": {
                        "comments": "<ul>\n<li>Both the Port and STBD side stabiliser fins were observed to be in similar condition with approx. 2% coverage of light slime discolouration, consistent with a fouling rating of FR-0 to FR-10. Sporadic, stubborn shell base was observed in isolated areas at a coverage of 2-5%.</li>\n<li>The Port and STBD glands were seen to be free of all fouling consistent with FR-0.</li>\n<li>The antifoul coating (AFC) appeared in good condition with only isolated coating damage observed, consistent with PDR-20.</li>\n</ul>\n",
                        "fouling": {
                            "fr0": "98",
                            "fr10": "2",
                            "fr20": "",
                            "fr30": "",
                            "fr40": "",
                            "fr50": "",
                            "fr60": "",
                            "fr70": "",
                            "fr80": "",
                            "fr90": "",
                            "fr100": ""
                        },
                        "pdr": "20"
                    },
                    "stabiliserFins2": {
                        "comments": "<p>port side stabiliser fin</p>\n",
                        "fr": {
                            "fr0": "100",
                            "fr10": "",
                            "fr20": "",
                            "fr30": "",
                            "fr40": "",
                            "fr50": "",
                            "fr60": "",
                            "fr70": "",
                            "fr80": "",
                            "fr90": "",
                            "fr100": ""
                        }
                    },
                    "stabiliserFins3": {
                        "comments": "<p>starboard side stabilizer fin</p>\n",
                        "fr": {
                            "fr0": "100",
                            "fr10": "",
                            "fr20": "",
                            "fr30": "",
                            "fr40": "",
                            "fr50": "",
                            "fr60": "",
                            "fr70": "",
                            "fr80": "",
                            "fr90": "",
                            "fr100": ""
                        }
                    }
                },
                "bilgeKeels": {
                    "bilgeKeels": {
                        "fouling": {
                            "fr0": "98",
                            "fr10": "2",
                            "fr20": "",
                            "fr30": "",
                            "fr40": "",
                            "fr50": "",
                            "fr60": "",
                            "fr70": "",
                            "fr80": "",
                            "fr90": "",
                            "fr100": ""
                        },
                        "comments": "<ul>\n<li>Both the Port and STBD side bilge keels were observed to be in similar condition with approx. 2% coverage of light slime discolouration, consistent with a fouling rating of FR-0 to FR-10. Sporadic, stubborn shell base was observed in isolated areas at a coverage of less than 2%.</li>\n<li>Marine growth on the bilge keel anodes was consistent with FR-10.</li>\n<li>The antifoul coating (AFC) was observed to be in an overall good condition with only minor coating blemishes observed consistent with PDR-20.</li>\n</ul>\n",
                        "pdr": "20"
                    },
                    "bilgeKeels3": {
                        "comments": "<p>Portside bilge keel</p>\n"
                    },
                    "bilgeKeels2": {
                        "comments": "<p></p>\n"
                    }
                },
                "echoSounder": {
                    "echoSounder": {
                        "comments": "<ul>\n<li>Marine growth was non-existent on the Echo Sounder, FR-0.T.</li>\n<li>The echo sounder had no antifoul coating (AFC).</li>\n</ul>\n"
                    }
                },
                "logProbe": {
                    "logProbe": {
                        "comments": "<ul>\n<li>Marine growth was non-existent on the log probe, FR-0.</li>\n<li>There was no antifoul coating (AFC) present on the log probe.</li>\n</ul>\n",
                        "fouling": {
                            "fr0": "100",
                            "fr10": "",
                            "fr20": "",
                            "fr30": "0",
                            "fr40": "0",
                            "fr50": "",
                            "fr60": "0",
                            "fr70": "0",
                            "fr80": "0",
                            "fr90": "0",
                            "fr100": "0"
                        }
                    }
                },
                "sonarDome": {
                    "sonarDome": {
                        "comments": "<ul>\n<li>Marine growth identified in the form of soft bio slime was evident on less than 2% of the sonar dome cover. FR-10.</li>\n<li>The antifoul coating (AFC) was observed to be in an average condition. Minor coating defects were observed predominantly around the fairing plate fixings consistent with PDR-20 and large areas of delamination were observed around the bottom of the dome consistent with PDR-30.</li>\n</ul>\n",
                        "fouling": {
                            "fr0": "98",
                            "fr10": "2",
                            "fr20": "",
                            "fr30": "",
                            "fr40": "",
                            "fr50": "",
                            "fr60": "",
                            "fr70": "",
                            "fr80": "",
                            "fr90": "",
                            "fr100": ""
                        },
                        "pdr": "20"
                    }
                },
                "moas": {
                    "moas": {
                        "comments": "<ul>\n<li>At the time of inspection the MOAS blanking plate was installed</li>\n<li>The blanking plate was consistent with FR-0</li>\n</ul>\n",
                        "fouling": {
                            "fr0": "100",
                            "fr10": "",
                            "fr20": "",
                            "fr30": "",
                            "fr40": "",
                            "fr50": "",
                            "fr60": "",
                            "fr70": "",
                            "fr80": "",
                            "fr90": "",
                            "fr100": ""
                        }
                    },
                    "moas2": {
                        "comments": "<ul>\n<li>All sacrificial hull anodes were observed to be clean with only minor soft slime discolouration observed at 2 coverage, consistent with FR-10.</li>\n<li>All hull anodes were observed to have an even depletion with approx. 90% of the sacrificial material remaining</li>\n</ul>\n",
                        "fr": {
                            "fr0": "",
                            "fr10": "100",
                            "fr20": "",
                            "fr30": "",
                            "fr40": "",
                            "fr50": "",
                            "fr60": "",
                            "fr70": "",
                            "fr80": "",
                            "fr90": "",
                            "fr100": ""
                        }
                    }
                },
                "hullAnodes": {
                    "hullAnodes": {
                        "comments": "<ul>\n<li>All sacrificial hull anodes were observed to be clean with only minor soft slime discolouration observed at 2 coverage, consistent with FR-10.</li>\n<li>All hull anodes were observed to have an even depletion with approx. 90% of the sacrificial material remaining.</li>\n</ul>\n",
                        "fouling": {
                            "fr0": "98",
                            "fr10": "2",
                            "fr20": "",
                            "fr30": "",
                            "fr40": "",
                            "fr50": "",
                            "fr60": "",
                            "fr70": "",
                            "fr80": "",
                            "fr90": "",
                            "fr100": ""
                        }
                    }
                },
                "seaChests": {
                    "seaChest1": {
                        "comments": "<ul>\n<li>A total of ten (10) main sea chest grates were located over the vessel. These have been labeled from SC-1 to SC-10 consistent with the diagram 3.1.1 Key Niche Areas. Three (3) smaller grates are present adjacent to the sonar dome.&nbsp;</li>\n<li>All sea chest grates were observed to be in similar condition subject to soft slime discolouration only at a coverage of approx. 2-5%, consistent with FR-0 to FR-10.&nbsp;</li>\n<li>Typically, each sea chest grate was subject to areas of coating defects/blemishes, predominately surrounding the fixings of the gratings. The sea chest grates antifoul coating (AFC) ranged between PDR-10 and PDR-30.</li>\n</ul>\n",
                        "fouling": {
                            "fr0": "95",
                            "fr10": "5",
                            "fr20": "",
                            "fr30": "",
                            "fr40": "",
                            "fr50": "",
                            "fr60": "",
                            "fr70": "",
                            "fr80": "",
                            "fr90": "",
                            "fr100": ""
                        },
                        "pdr": "20"
                    }
                },
                "obd": {
                    "obd": {
                        "comments": "<ul>\n<li>All OBD’s located were observed to be in similar condition with 2% coverage of soft slime/weed consistent with FR-10.&nbsp;</li>\n<li>The antifoul coating (AFC) on and surrounding the OBD’s was observed to be in good condition with only minor coating defects observed consistent with PDR-20.</li>\n</ul>\n",
                        "fouling": {
                            "fr0": "98",
                            "fr10": "2",
                            "fr20": "",
                            "fr30": "",
                            "fr40": "",
                            "fr50": "",
                            "fr60": "",
                            "fr70": "",
                            "fr80": "",
                            "fr90": "",
                            "fr100": ""
                        },
                        "pdr": "20"
                    },
                    "obd2": {
                        "comments": "<ul>\n<li>The draft marks were observed to be in similar condition with approx. 2% coverage of light slime discolouration/staining, consistent with a fouling rating of FR-0 to FR-10. Sporadic, stubborn shell base was observed in between the draft marks at a coverage of approx. 2-5%.</li>\n<li>The antifoul coating (AFC) on the draft marks was intact and in good to average condition resulting in most marks being clearly visible, this was consistent with PDR-20.</li>\n</ul>\n",
                        "fr": {
                            "fr0": "95",
                            "fr10": "5",
                            "fr20": "",
                            "fr30": "",
                            "fr40": "",
                            "fr50": "",
                            "fr60": "",
                            "fr70": "",
                            "fr80": "",
                            "fr90": "",
                            "fr100": ""
                        },
                        "pdr": "20"
                    },
                    "obd3": {
                        "comments": "<ul>\n<li>The bow plate was observed to be subject to approx. 2% coverage of light slime discolouration/staining, consistent with a fouling rating of FR-0 to FR-10. Sporadic, stubborn shell base was observed in isolated areas at a coverage of approx. 5-10%.</li>\n<li>The antifoul coating (AFC) at the bow plate was subject to multiple coating defects with large areas back to AC paint, these areas were consistent with typical anchor chain drag marks, paint deterioration rating ranging between PDR-30 – PDR-60.</li>\n</ul>\n",
                        "fr": {
                            "fr0": "98",
                            "fr10": "2",
                            "fr20": "",
                            "fr30": "",
                            "fr40": "",
                            "fr50": "",
                            "fr60": "",
                            "fr70": "",
                            "fr80": "",
                            "fr90": "",
                            "fr100": ""
                        },
                        "pdr": "40"
                    }
                },
                "hullPlating": {
                    "hullPlatingFwdHull": {
                        "comments": "<ul>\n<li>The FWD Hull plate was observed to have 2-5% coverage of soft slime discolouration/staining consistent with FR-10. Sporadic, stubborn shell base was observed in isolated areas at a coverage of less than 2%.&nbsp;</li>\n<li>The antifoul coating (AFC) at the FWD hull plate was subject to multiple minor coating blemishes, consistent with PDR-20 to PDR-30.&nbsp;</li>\n<li>Please see hull numbered photos referencing section 3.2.1 Hull photo location guideline.</li>\n</ul>\n",
                        "fouling": {
                            "fr0": "95",
                            "fr10": "5",
                            "fr20": "",
                            "fr30": "",
                            "fr40": "",
                            "fr50": "",
                            "fr60": "",
                            "fr70": "",
                            "fr80": "",
                            "fr90": "",
                            "fr100": ""
                        },
                        "pdr": "30"
                    },
                    "hullPlatingMidships": {
                        "comments": "<ul>\n<li>The Midships Hull plate was observed to have 2-5% coverage of soft slime discolouration/staining consistent with FR-10. Sporadic, stubborn shell base was observed in isolated areas at a coverage of less than 2%.</li>\n<li>The antifoul coating (AFC) at the Midships hull plate was subject to multiple minor coating blemishes, consistent with PDR-20 to PDR-30.</li>\n<li>Please see hull numbered photos referencing section 3.2.1 Hull photo location guideline.</li>\n</ul>\n<p></p>\n",
                        "fouling": {
                            "fr0": "95",
                            "fr10": "5",
                            "fr20": "",
                            "fr30": "",
                            "fr40": "",
                            "fr50": "",
                            "fr60": "",
                            "fr70": "",
                            "fr80": "",
                            "fr90": "",
                            "fr100": ""
                        },
                        "pdr": "20"
                    },
                    "hullPlatingAftHull": {
                        "fouling": {
                            "fr0": "95",
                            "fr10": "5",
                            "fr20": "",
                            "fr30": "",
                            "fr40": "",
                            "fr50": "",
                            "fr60": "",
                            "fr70": "",
                            "fr80": "",
                            "fr90": "",
                            "fr100": ""
                        },
                        "comments": "<ul>\n<li>The AFT Hull plate was observed to have 2-5% coverage of soft slime discolouration/staining consistent with FR-10. Sporadic, stubborn shell base was observed in isolated areas at a coverage of less than 2%.&nbsp;</li>\n<li>The antifoul coating (AFC) at the AFT hull plate was subject to multiple minor coating blemishes, consistent with PDR-20 to PDR-30.</li>\n<li>Please see hull numbered photos referencing section 3.2.1 Hull photo location guideline.</li>\n</ul>\n",
                        "pdr": "20"
                    },
                    "hullPlatingTransom": {
                        "comments": "<ul>\n<li>The Transom plate was observed to have 2-5% coverage of soft slime discolouration/staining consistent with FR-10. Sporadic, stubborn shell base was observed in isolated areas at a coverage of less than 2%.</li>\n<li>The antifoul coating (AFC) at the transom plate was subject to minor coating blemishes, consistent with PDR-10 to PDR-20.</li>\n</ul>\n",
                        "fouling": {
                            "fr0": "95",
                            "fr10": "5",
                            "fr20": "",
                            "fr30": "",
                            "fr40": "",
                            "fr50": "",
                            "fr60": "",
                            "fr70": "",
                            "fr80": "",
                            "fr90": "",
                            "fr100": ""
                        },
                        "pdr": "20"
                    },
                    "hullPlatingFwdHull2": {
                        "comments": "<p></p>\n"
                    }
                },
                "bulbousBow": {
                    "bulbousBow": {
                        "comments": "<ul>\n<li>The skeg was observed to be subject to approx. 2-5% coverage of light slime discoloration/staining, consistent with a fouling rating of FR-0 to FR-10. Sporadic, stubborn shell base was observed in isolated areas at coverage of less than 2%.</li>\n<li>The antifoul coating (AFC) was observed to be in an average condition consistent with PDR-30. Large areas of delamination were observed along with the plating with intermittent areas of delamination observed along weld seams and edges. PDR-30.</li>\n</ul>\n",
                        "fouling": {
                            "fr0": "98",
                            "fr10": "2",
                            "fr20": "",
                            "fr30": "",
                            "fr40": "",
                            "fr50": "",
                            "fr60": "",
                            "fr70": "",
                            "fr80": "",
                            "fr90": "",
                            "fr100": ""
                        },
                        "pdr": "30"
                    }
                },
                "terms": {
                    "expiry": {
                        "date": "2021-07-16T03:35:36.037+00:00"
                    }
                },
                "created": {
                    "Id": "d38c685c-4395-42db-a0eb-84a1619e24ab",
                    "Email": "david.barker@rise-x.io",
                    "Name": "David Barker",
                    "DisplayName": "David Barker",
                    "Roles": [],
                    "Link": null,
                    "CompanyName": null,
                    "CompanyAddress": null,
                    "CompanyNumber": null,
                    "CompanyId": "00000000-0000-0000-0000-000000000000",
                    "CompanyUri": "/api/v1/Company/00000000-0000-0000-0000-000000000000",
                    "Expiry": "9999-12-31T23:59:59.9999999+00:00",
                    "IsGuestUser": false,
                    "ImageUrl": "https://diana-api.rise-x.com/api/v2/attachments/f93c2b84-8bdd-5ac8-b541-ce7e2734132e/user/2021/05_may/d38c685c-4395-42db-a0eb-84a1619e24ab/system/e1c4063f-2373-57d3-9152-4b2537426438_avatar-v0.png"
                }
            }

        });
})




