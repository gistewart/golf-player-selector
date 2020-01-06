var db = require("../models");

var playerProduction = [
  {
    rank: "1",
    name: "Brooks Koepka",
    numEvents: "21",
    avgMoney: "461,143",
    totMoney: "9,684,005"
  },
  {
    rank: "2",
    name: "Rory McIlroy",
    numEvents: "19",
    avgMoney: "409,751",
    totMoney: "7,785,286"
  },
  {
    rank: "3",
    name: "Robert MacIntyre",
    numEvents: "1",
    avgMoney: "313,000",
    totMoney: "313,000"
  },
  {
    rank: "4",
    name: "Patrick Cantlay",
    numEvents: "21",
    avgMoney: "291,499",
    totMoney: "6,121,487"
  },
  {
    rank: "5",
    name: "Dustin Johnson",
    numEvents: "19",
    avgMoney: "291,295",
    totMoney: "5,534,618"
  },
  {
    rank: "6",
    name: "Matt Kuchar",
    numEvents: "22",
    avgMoney: "286,122",
    totMoney: "6,294,690"
  },
  {
    rank: "7",
    name: "Xander Schauffele",
    numEvents: "21",
    avgMoney: "267,116",
    totMoney: "5,609,456"
  },
  {
    rank: "8",
    name: "Tiger Woods",
    numEvents: "12",
    avgMoney: "266,634",
    totMoney: "3,199,615"
  },
  {
    rank: "9",
    name: "Justin Rose",
    numEvents: "17",
    avgMoney: "256,402",
    totMoney: "4,358,849"
  },
  {
    rank: "10",
    name: "Justin Thomas",
    numEvents: "20",
    avgMoney: "250,654",
    totMoney: "5,013,083"
  },
  {
    rank: "11",
    name: "Jon Rahm",
    numEvents: "20",
    avgMoney: "249,505",
    totMoney: "4,990,109"
  },
  {
    rank: "12",
    name: "Shane Lowry",
    numEvents: "14",
    avgMoney: "249,292",
    totMoney: "3,490,097"
  },
  {
    rank: "13",
    name: "Gary Woodland",
    numEvents: "24",
    avgMoney: "237,123",
    totMoney: "5,690,965"
  },
  {
    rank: "14",
    name: "Francesco Molinari",
    numEvents: "15",
    avgMoney: "231,142",
    totMoney: "3,467,142"
  },
  {
    rank: "15",
    name: "Adam Scott",
    numEvents: "18",
    avgMoney: "226,918",
    totMoney: "4,084,541"
  },
  {
    rank: "16",
    name: "Webb Simpson",
    numEvents: "21",
    avgMoney: "223,360",
    totMoney: "4,690,571"
  },
  {
    rank: "17",
    name: "Tommy Fleetwood",
    numEvents: "18",
    avgMoney: "214,091",
    totMoney: "3,853,651"
  },
  {
    rank: "18",
    name: "Rickie Fowler",
    numEvents: "20",
    avgMoney: "197,290",
    totMoney: "3,945,809"
  },
  {
    rank: "19",
    name: "Collin Morikawa",
    numEvents: "9",
    avgMoney: "194,987",
    totMoney: "1,754,889"
  },
  {
    rank: "20",
    name: "Paul Casey",
    numEvents: "22",
    avgMoney: "193,501",
    totMoney: "4,257,040"
  },
  {
    rank: "21",
    name: "Marc Leishman",
    numEvents: "21",
    avgMoney: "185,075",
    totMoney: "3,886,577"
  },
  {
    rank: "22",
    name: "Matthew Wolff",
    numEvents: "8",
    avgMoney: "173,804",
    totMoney: "1,390,433"
  },
  {
    rank: "23",
    name: "Tony Finau",
    numEvents: "25",
    avgMoney: "173,775",
    totMoney: "4,344,380"
  },
  {
    rank: "24",
    name: "Doc Redman",
    numEvents: "6",
    avgMoney: "167,215",
    totMoney: "1,003,290"
  },
  {
    rank: "25",
    name: "Bryson DeChambeau",
    numEvents: "21",
    avgMoney: "151,725",
    totMoney: "3,186,232"
  },
  {
    rank: "26",
    name: "Patrick Reed",
    numEvents: "25",
    avgMoney: "143,753",
    totMoney: "3,593,844"
  },
  {
    rank: "27",
    name: "Kevin Kisner",
    numEvents: "25",
    avgMoney: "139,565",
    totMoney: "3,489,143"
  },
  {
    rank: "28",
    name: "Hideki Matsuyama",
    numEvents: "24",
    avgMoney: "138,964",
    totMoney: "3,335,137"
  },
  {
    rank: "29",
    name: "Ryan Palmer",
    numEvents: "21",
    avgMoney: "136,824",
    totMoney: "2,873,315"
  },
  {
    rank: "30",
    name: "Louis Oosthuizen",
    numEvents: "19",
    avgMoney: "133,641",
    totMoney: "2,539,182"
  },
  {
    rank: "31",
    name: "Chez Reavie",
    numEvents: "28",
    avgMoney: "130,746",
    totMoney: "3,660,909"
  },
  {
    rank: "32",
    name: "Jim Furyk",
    numEvents: "21",
    avgMoney: "127,139",
    totMoney: "2,669,938"
  },
  {
    rank: "33",
    name: "Lee Westwood",
    numEvents: "4",
    avgMoney: "125,875",
    totMoney: "503,500"
  },
  {
    rank: "34",
    name: "Jason Day",
    numEvents: "21",
    avgMoney: "125,594",
    totMoney: "2,637,479"
  },
  {
    rank: "35",
    name: "Phil Mickelson",
    numEvents: "20",
    avgMoney: "122,011",
    totMoney: "2,440,221"
  },
  {
    rank: "36",
    name: "Ian Poulter",
    numEvents: "18",
    avgMoney: "120,128",
    totMoney: "2,162,305"
  },
  {
    rank: "37",
    name: "Sergio Garcia",
    numEvents: "15",
    avgMoney: "119,535",
    totMoney: "1,793,027"
  },
  {
    rank: "38",
    name: "Kevin Na",
    numEvents: "19",
    avgMoney: "118,805",
    totMoney: "2,257,309"
  },
  {
    rank: "39",
    name: "Brandt Snedeker",
    numEvents: "27",
    avgMoney: "115,664",
    totMoney: "3,122,936"
  },
  {
    rank: "40",
    name: "Charles Howell III",
    numEvents: "27",
    avgMoney: "112,557",
    totMoney: "3,039,049"
  },
  {
    rank: "41",
    name: "Scott Piercy",
    numEvents: "24",
    avgMoney: "111,663",
    totMoney: "2,679,915"
  },
  {
    rank: "42",
    name: "Matthew Fitzpatrick",
    numEvents: "14",
    avgMoney: "110,982",
    totMoney: "1,553,749"
  },
  {
    rank: "43",
    name: "Andrew Putnam",
    numEvents: "23",
    avgMoney: "106,049",
    totMoney: "2,439,137"
  },
  {
    rank: "44",
    name: "Matt Wallace",
    numEvents: "12",
    avgMoney: "105,616",
    totMoney: "1,267,399"
  },
  {
    rank: "45",
    name: "Corey Conners",
    numEvents: "28",
    avgMoney: "104,280",
    totMoney: "2,919,864"
  },
  {
    rank: "46",
    name: "Sung Kang",
    numEvents: "27",
    avgMoney: "103,764",
    totMoney: "2,801,650"
  },
  {
    rank: "47",
    name: "Rafa Cabrera Bello",
    numEvents: "19",
    avgMoney: "101,417",
    totMoney: "1,926,935"
  },
  {
    rank: "48",
    name: "Lucas Glover",
    numEvents: "26",
    avgMoney: "100,537",
    totMoney: "2,613,964"
  },
  {
    rank: "49",
    name: "Abraham Ancer",
    numEvents: "27",
    avgMoney: "99,578",
    totMoney: "2,688,625"
  },
  {
    rank: "50",
    name: "Eddie Pepperell",
    numEvents: "9",
    avgMoney: "98,854",
    totMoney: "889,686"
  },
  {
    rank: "51",
    name: "Jason Kokrak",
    numEvents: "24",
    avgMoney: "97,092",
    totMoney: "2,330,212"
  },
  {
    rank: "52",
    name: "Nate Lashley",
    numEvents: "21",
    avgMoney: "96,680",
    totMoney: "2,030,287"
  },
  {
    rank: "53",
    name: "Jazz Janewattananond",
    numEvents: "2",
    avgMoney: "95,832",
    totMoney: "191,665"
  },
  {
    rank: "54",
    name: "C.T. Pan",
    numEvents: "25",
    avgMoney: "94,495",
    totMoney: "2,362,399"
  },
  {
    rank: "55",
    name: "Henrik Stenson",
    numEvents: "15",
    avgMoney: "93,157",
    totMoney: "1,397,369"
  },
  {
    rank: "56",
    name: "Keith Mitchell",
    numEvents: "26",
    avgMoney: "92,513",
    totMoney: "2,405,360"
  },
  {
    rank: "57",
    name: "Jordan Spieth",
    numEvents: "23",
    avgMoney: "92,356",
    totMoney: "2,124,191"
  },
  {
    rank: "58",
    name: "Rory Sabbatini",
    numEvents: "26",
    avgMoney: "91,626",
    totMoney: "2,382,297"
  },
  {
    rank: "59",
    name: "Byeong Hun An",
    numEvents: "22",
    avgMoney: "90,456",
    totMoney: "1,990,033"
  },
  {
    rank: "60",
    name: "Tyrrell Hatton",
    numEvents: "17",
    avgMoney: "89,258",
    totMoney: "1,517,395"
  },
  {
    rank: "61",
    name: "Kevin Tway",
    numEvents: "26",
    avgMoney: "88,463",
    totMoney: "2,300,049"
  },
  {
    rank: "62",
    name: "Matt Every",
    numEvents: "16",
    avgMoney: "88,321",
    totMoney: "1,413,148"
  },
  {
    rank: "63",
    name: "J.B. Holmes",
    numEvents: "25",
    avgMoney: "85,882",
    totMoney: "2,147,064"
  },
  {
    rank: "64",
    name: "Kevin Chappell",
    numEvents: "3",
    avgMoney: "85,674",
    totMoney: "257,023"
  },
  {
    rank: "65",
    name: "Adam Hadwin",
    numEvents: "24",
    avgMoney: "84,958",
    totMoney: "2,039,012"
  },
  {
    rank: "66",
    name: "J.T. Poston",
    numEvents: "29",
    avgMoney: "84,869",
    totMoney: "2,461,215"
  },
  {
    rank: "67",
    name: "Billy Horschel",
    numEvents: "26",
    avgMoney: "84,124",
    totMoney: "2,187,249"
  },
  {
    rank: "68",
    name: "Ryan Moore",
    numEvents: "22",
    avgMoney: "83,581",
    totMoney: "1,838,787"
  },
  {
    rank: "69",
    name: "Graeme McDowell",
    numEvents: "20",
    avgMoney: "83,576",
    totMoney: "1,671,523"
  },
  {
    rank: "70",
    name: "Max Homa",
    numEvents: "25",
    avgMoney: "82,544",
    totMoney: "2,063,606"
  },
  {
    rank: "71",
    name: "Bubba Watson",
    numEvents: "19",
    avgMoney: "82,000",
    totMoney: "1,558,014"
  },
  {
    rank: "72",
    name: "Kiradech Aphibarnrat",
    numEvents: "20",
    avgMoney: "81,503",
    totMoney: "1,630,072"
  },
  {
    rank: "73",
    name: "Sungjae Im",
    numEvents: "35",
    avgMoney: "81,460",
    totMoney: "2,851,134"
  },
  {
    rank: "74",
    name: "Erik van Rooyen",
    numEvents: "6",
    avgMoney: "79,417",
    totMoney: "476,502"
  },
  {
    rank: "75",
    name: "Si Woo Kim",
    numEvents: "28",
    avgMoney: "78,278",
    totMoney: "2,191,808"
  },
  {
    rank: "76",
    name: "Emiliano Grillo",
    numEvents: "23",
    avgMoney: "76,178",
    totMoney: "1,752,114"
  },
  {
    rank: "77",
    name: "Keegan Bradley",
    numEvents: "25",
    avgMoney: "76,111",
    totMoney: "1,902,796"
  },
  {
    rank: "78",
    name: "Zack Sucher",
    numEvents: "10",
    avgMoney: "75,378",
    totMoney: "753,781"
  },
  {
    rank: "79",
    name: "Marcus Kinhult",
    numEvents: "1",
    avgMoney: "72,928",
    totMoney: "72,928"
  },
  {
    rank: "80",
    name: "Troy Merritt",
    numEvents: "21",
    avgMoney: "72,911",
    totMoney: "1,531,142"
  },
  {
    rank: "81",
    name: "Michael Lorenzo-Vera",
    numEvents: "2",
    avgMoney: "71,550",
    totMoney: "143,100"
  },
  {
    rank: "82",
    name: "Jhonattan Vegas",
    numEvents: "23",
    avgMoney: "68,126",
    totMoney: "1,566,910"
  },
  {
    rank: "83",
    name: "Viktor Hovland",
    numEvents: "10",
    avgMoney: "67,803",
    totMoney: "678,035"
  },
  {
    rank: "84",
    name: "Danny Willett",
    numEvents: "19",
    avgMoney: "67,723",
    totMoney: "1,286,737"
  },
  {
    rank: "85",
    name: "Zack Fischer",
    numEvents: "2",
    avgMoney: "67,500",
    totMoney: "135,000"
  },
  {
    rank: "86",
    name: "Joel Dahmen",
    numEvents: "29",
    avgMoney: "67,239",
    totMoney: "1,949,957"
  },
  {
    rank: "87",
    name: "Dylan Frittelli",
    numEvents: "24",
    avgMoney: "65,707",
    totMoney: "1,576,974"
  },
  {
    rank: "88",
    name: "Cameron Smith",
    numEvents: "23",
    avgMoney: "65,426",
    totMoney: "1,504,819"
  },
  {
    rank: "89",
    name: "Cameron Champ",
    numEvents: "26",
    avgMoney: "65,221",
    totMoney: "1,695,748"
  },
  {
    rank: "90",
    name: "Vaughn Taylor",
    numEvents: "27",
    avgMoney: "63,848",
    totMoney: "1,723,910"
  },
  {
    rank: "91",
    name: "Luke List",
    numEvents: "22",
    avgMoney: "63,245",
    totMoney: "1,391,407"
  },
  {
    rank: "92",
    name: "Talor Gooch",
    numEvents: "17",
    avgMoney: "62,769",
    totMoney: "1,067,088"
  },
  {
    rank: "93",
    name: "Martin Kaymer",
    numEvents: "14",
    avgMoney: "62,697",
    totMoney: "877,760"
  },
  {
    rank: "94",
    name: "Branden Grace",
    numEvents: "22",
    avgMoney: "62,417",
    totMoney: "1,373,184"
  },
  {
    rank: "95",
    name: "Charley Hoffman",
    numEvents: "24",
    avgMoney: "61,202",
    totMoney: "1,468,855"
  },
  {
    rank: "96",
    name: "Kevin Streelman",
    numEvents: "26",
    avgMoney: "61,110",
    totMoney: "1,588,881"
  },
  {
    rank: "97",
    name: "Adam Long",
    numEvents: "27",
    avgMoney: "61,037",
    totMoney: "1,648,007"
  },
  {
    rank: "98",
    name: "Harold Varner III",
    numEvents: "26",
    avgMoney: "59,736",
    totMoney: "1,553,149"
  },
  {
    rank: "99",
    name: "Michael Thompson",
    numEvents: "22",
    avgMoney: "59,446",
    totMoney: "1,307,815"
  },
  {
    rank: "100",
    name: "Patrick Rodgers",
    numEvents: "18",
    avgMoney: "58,157",
    totMoney: "1,046,838"
  },
  {
    rank: "101",
    name: "Paul Dunne",
    numEvents: "1",
    avgMoney: "57,000",
    totMoney: "57,000"
  },
  {
    rank: "102",
    name: "Danny Lee",
    numEvents: "27",
    avgMoney: "56,449",
    totMoney: "1,524,125"
  },
  {
    rank: "103",
    name: "Andrew Wilson",
    numEvents: "1",
    avgMoney: "56,278",
    totMoney: "56,278"
  },
  {
    rank: "104",
    name: "Charlie Danielson",
    numEvents: "4",
    avgMoney: "55,936",
    totMoney: "223,747"
  },
  {
    rank: "105",
    name: "Chesson Hadley",
    numEvents: "26",
    avgMoney: "54,062",
    totMoney: "1,405,632"
  },
  {
    rank: "106",
    name: "Armando Favela",
    numEvents: "2",
    avgMoney: "54,000",
    totMoney: "108,000"
  },
  {
    rank: "107",
    name: "Pat Perez",
    numEvents: "21",
    avgMoney: "52,535",
    totMoney: "1,103,240"
  },
  {
    rank: "108",
    name: "Russell Knox",
    numEvents: "22",
    avgMoney: "51,492",
    totMoney: "1,132,824"
  },
  {
    rank: "109",
    name: "Joaquin Niemann",
    numEvents: "28",
    avgMoney: "51,232",
    totMoney: "1,434,518"
  },
  {
    rank: "110",
    name: "Alex Noren",
    numEvents: "18",
    avgMoney: "50,747",
    totMoney: "913,446"
  },
  {
    rank: "111",
    name: "Aaron Baddeley",
    numEvents: "18",
    avgMoney: "50,276",
    totMoney: "904,982"
  },
  {
    rank: "112",
    name: "Davis Riley",
    numEvents: "1",
    avgMoney: "50,230",
    totMoney: "50,230"
  },
  {
    rank: "113",
    name: "Aaron Wise",
    numEvents: "21",
    avgMoney: "50,119",
    totMoney: "1,052,506"
  },
  {
    rank: "114",
    name: "Cameron Tringale",
    numEvents: "21",
    avgMoney: "49,957",
    totMoney: "1,049,106"
  },
  {
    rank: "115",
    name: "Wyndham Clark",
    numEvents: "27",
    avgMoney: "47,360",
    totMoney: "1,278,721"
  },
  {
    rank: "116",
    name: "Tyler McCumber",
    numEvents: "1",
    avgMoney: "46,800",
    totMoney: "46,800"
  },
  {
    rank: "117",
    name: "J.J. Spaun",
    numEvents: "26",
    avgMoney: "46,383",
    totMoney: "1,205,977"
  },
  {
    rank: "118",
    name: "Brian Harman",
    numEvents: "29",
    avgMoney: "46,302",
    totMoney: "1,342,777"
  },
  {
    rank: "119",
    name: "Sam Ryder",
    numEvents: "23",
    avgMoney: "46,118",
    totMoney: "1,060,735"
  },
  {
    rank: "120",
    name: "Brian Stuard",
    numEvents: "29",
    avgMoney: "45,539",
    totMoney: "1,320,636"
  },
  {
    rank: "121",
    name: "Russell Henley",
    numEvents: "25",
    avgMoney: "45,350",
    totMoney: "1,133,773"
  },
  {
    rank: "122",
    name: "Kyle Stanley",
    numEvents: "25",
    avgMoney: "44,704",
    totMoney: "1,117,604"
  },
  {
    rank: "123",
    name: "Justin Harding",
    numEvents: "12",
    avgMoney: "43,844",
    totMoney: "526,138"
  },
  {
    rank: "124",
    name: "Bud Cauley",
    numEvents: "25",
    avgMoney: "43,600",
    totMoney: "1,090,018"
  },
  {
    rank: "125",
    name: "Sam Burns",
    numEvents: "26",
    avgMoney: "42,973",
    totMoney: "1,117,311"
  },
  {
    rank: "126",
    name: "Tom Lewis",
    numEvents: "4",
    avgMoney: "42,925",
    totMoney: "171,700"
  },
  {
    rank: "127",
    name: "Lucas Bjerregaard",
    numEvents: "14",
    avgMoney: "42,335",
    totMoney: "592,694"
  },
  {
    rank: "128",
    name: "Scott Stallings",
    numEvents: "26",
    avgMoney: "41,555",
    totMoney: "1,080,450"
  },
  {
    rank: "129",
    name: "Chris Stroud",
    numEvents: "26",
    avgMoney: "41,367",
    totMoney: "1,075,552"
  },
  {
    rank: "130",
    name: "Wes Roach",
    numEvents: "21",
    avgMoney: "40,964",
    totMoney: "860,263"
  },
  {
    rank: "131",
    name: "Mackenzie Hughes",
    numEvents: "25",
    avgMoney: "40,883",
    totMoney: "1,022,080"
  },
  {
    rank: "132",
    name: "Vijay Singh",
    numEvents: "6",
    avgMoney: "40,800",
    totMoney: "244,800"
  },
  {
    rank: "133",
    name: "Bronson Burgoon",
    numEvents: "20",
    avgMoney: "40,733",
    totMoney: "814,673"
  },
  {
    rank: "134",
    name: "Doug Ghim",
    numEvents: "6",
    avgMoney: "40,559",
    totMoney: "243,356"
  },
  {
    rank: "135",
    name: "Adam Schenk",
    numEvents: "31",
    avgMoney: "40,553",
    totMoney: "1,257,158"
  },
  {
    rank: "136",
    name: "Patton Kizzire",
    numEvents: "25",
    avgMoney: "39,813",
    totMoney: "995,340"
  },
  {
    rank: "137",
    name: "Paul Barjon",
    numEvents: "2",
    avgMoney: "39,628",
    totMoney: "79,257"
  },
  {
    rank: "138",
    name: "Bernd Wiesberger",
    numEvents: "2",
    avgMoney: "39,003",
    totMoney: "78,006"
  },
  {
    rank: "139",
    name: "Nick Watney",
    numEvents: "26",
    avgMoney: "38,806",
    totMoney: "1,008,963"
  },
  {
    rank: "140",
    name: "Carlos Ortiz",
    numEvents: "28",
    avgMoney: "38,355",
    totMoney: "1,073,961"
  },
  {
    rank: "141",
    name: "Thomas Pieters",
    numEvents: "6",
    avgMoney: "38,040",
    totMoney: "228,243"
  },
  {
    rank: "142",
    name: "Matt Jones",
    numEvents: "27",
    avgMoney: "37,957",
    totMoney: "1,024,851"
  },
  {
    rank: "143",
    name: "Roger Sloan",
    numEvents: "27",
    avgMoney: "37,617",
    totMoney: "1,015,660"
  },
  {
    rank: "144",
    name: "Sepp Straka",
    numEvents: "25",
    avgMoney: "37,395",
    totMoney: "934,894"
  },
  {
    rank: "145",
    name: "Shubhankar Sharma",
    numEvents: "7",
    avgMoney: "37,356",
    totMoney: "261,495"
  },
  {
    rank: "146",
    name: "Daniel Berger",
    numEvents: "20",
    avgMoney: "37,116",
    totMoney: "742,339"
  },
  {
    rank: "147",
    name: "Jason Dufner",
    numEvents: "25",
    avgMoney: "37,054",
    totMoney: "926,364"
  },
  {
    rank: "148",
    name: "Scott Brown",
    numEvents: "27",
    avgMoney: "37,016",
    totMoney: "999,457"
  },
  {
    rank: "T149",
    name: "Innchoon Hwang",
    numEvents: "1",
    avgMoney: "36,925",
    totMoney: "36,925"
  },
  {
    rank: "T149",
    name: "Benjamin Hebert",
    numEvents: "1",
    avgMoney: "36,925",
    totMoney: "36,925"
  },
  {
    rank: "T149",
    name: "Callum Shinkwin",
    numEvents: "1",
    avgMoney: "36,925",
    totMoney: "36,925"
  },
  {
    rank: "152",
    name: "Brian Gay",
    numEvents: "28",
    avgMoney: "36,765",
    totMoney: "1,029,440"
  },
  {
    rank: "153",
    name: "Austin Cook",
    numEvents: "23",
    avgMoney: "36,425",
    totMoney: "837,788"
  },
  {
    rank: "154",
    name: "Brice Garnett",
    numEvents: "28",
    avgMoney: "36,414",
    totMoney: "1,019,593"
  },
  {
    rank: "155",
    name: "Sebastián Muñoz",
    numEvents: "26",
    avgMoney: "36,410",
    totMoney: "946,665"
  },
  {
    rank: "156",
    name: "D.J. Trahan",
    numEvents: "14",
    avgMoney: "36,279",
    totMoney: "507,919"
  },
  {
    rank: "157",
    name: "Andrew Landry",
    numEvents: "25",
    avgMoney: "35,496",
    totMoney: "887,404"
  },
  {
    rank: "158",
    name: "Kyoung-Hoon Lee",
    numEvents: "30",
    avgMoney: "35,381",
    totMoney: "1,061,456"
  },
  {
    rank: "159",
    name: "Scottie Scheffler",
    numEvents: "4",
    avgMoney: "34,967",
    totMoney: "139,871"
  },
  {
    rank: "160",
    name: "Sam Horsfield",
    numEvents: "4",
    avgMoney: "34,851",
    totMoney: "139,405"
  },
  {
    rank: "161",
    name: "Ryan Armour",
    numEvents: "28",
    avgMoney: "34,123",
    totMoney: "955,467"
  },
  {
    rank: "162",
    name: "Peter Malnati",
    numEvents: "26",
    avgMoney: "33,249",
    totMoney: "864,495"
  },
  {
    rank: "163",
    name: "Martin Laird",
    numEvents: "26",
    avgMoney: "33,194",
    totMoney: "863,053"
  },
  {
    rank: "164",
    name: "Denny McCarthy",
    numEvents: "28",
    avgMoney: "33,041",
    totMoney: "925,155"
  },
  {
    rank: "165",
    name: "Ted Potter, Jr.",
    numEvents: "23",
    avgMoney: "32,944",
    totMoney: "757,721"
  },
  {
    rank: "166",
    name: "Martin Flores",
    numEvents: "1",
    avgMoney: "32,400",
    totMoney: "32,400"
  },
  {
    rank: "167",
    name: "Jonathan Byrd",
    numEvents: "17",
    avgMoney: "32,385",
    totMoney: "550,546"
  },
  {
    rank: "168",
    name: "Jim Herman",
    numEvents: "21",
    avgMoney: "32,294",
    totMoney: "678,185"
  },
  {
    rank: "169",
    name: "Jonas Blixt",
    numEvents: "26",
    avgMoney: "32,241",
    totMoney: "838,271"
  },
  {
    rank: "170",
    name: "Shawn Stefani",
    numEvents: "25",
    avgMoney: "31,953",
    totMoney: "798,830"
  },
  {
    rank: "171",
    name: "Nick Taylor",
    numEvents: "28",
    avgMoney: "31,880",
    totMoney: "892,662"
  },
  {
    rank: "172",
    name: "Bill Haas",
    numEvents: "23",
    avgMoney: "31,774",
    totMoney: "730,805"
  },
  {
    rank: "173",
    name: "Sanghyun Park",
    numEvents: "5",
    avgMoney: "31,755",
    totMoney: "158,778"
  },
  {
    rank: "174",
    name: "Zach Johnson",
    numEvents: "19",
    avgMoney: "31,745",
    totMoney: "603,160"
  },
  {
    rank: "175",
    name: "Richy Werenski",
    numEvents: "27",
    avgMoney: "31,530",
    totMoney: "851,329"
  },
  {
    rank: "176",
    name: "Johnson Wagner",
    numEvents: "19",
    avgMoney: "31,462",
    totMoney: "597,792"
  },
  {
    rank: "177",
    name: "Dong Seop Maeng",
    numEvents: "1",
    avgMoney: "30,970",
    totMoney: "30,970"
  },
  {
    rank: "178",
    name: "Roberto Castro",
    numEvents: "22",
    avgMoney: "30,647",
    totMoney: "674,249"
  },
  {
    rank: "179",
    name: "Paul Peterson",
    numEvents: "1",
    avgMoney: "30,483",
    totMoney: "30,483"
  },
  {
    rank: "180",
    name: "Davis Love III",
    numEvents: "9",
    avgMoney: "30,135",
    totMoney: "271,216"
  },
  {
    rank: "181",
    name: "Chad Ramey",
    numEvents: "1",
    avgMoney: "29,944",
    totMoney: "29,944"
  },
  {
    rank: "182",
    name: "Kelly Kraft",
    numEvents: "31",
    avgMoney: "29,215",
    totMoney: "905,681"
  },
  {
    rank: "183",
    name: "Peter Uihlein",
    numEvents: "29",
    avgMoney: "29,068",
    totMoney: "842,991"
  },
  {
    rank: "184",
    name: "Seamus Power",
    numEvents: "27",
    avgMoney: "28,665",
    totMoney: "773,975"
  },
  {
    rank: "185",
    name: "Hank Lebioda",
    numEvents: "23",
    avgMoney: "28,556",
    totMoney: "656,801"
  },
  {
    rank: "186",
    name: "Robert Streb",
    numEvents: "28",
    avgMoney: "28,447",
    totMoney: "796,525"
  },
  {
    rank: "187",
    name: "Dominic Bozzelli",
    numEvents: "24",
    avgMoney: "27,852",
    totMoney: "668,448"
  },
  {
    rank: "188",
    name: "Martin Trainer",
    numEvents: "25",
    avgMoney: "27,686",
    totMoney: "692,155"
  },
  {
    rank: "189",
    name: "Josh Teater",
    numEvents: "24",
    avgMoney: "27,648",
    totMoney: "663,569"
  },
  {
    rank: "190",
    name: "Jim Knous",
    numEvents: "18",
    avgMoney: "27,276",
    totMoney: "490,975"
  },
  {
    rank: "191",
    name: "Hudson Swafford",
    numEvents: "20",
    avgMoney: "27,259",
    totMoney: "545,190"
  },
  {
    rank: "192",
    name: "Ryan Blaum",
    numEvents: "28",
    avgMoney: "26,992",
    totMoney: "755,801"
  },
  {
    rank: "193",
    name: "Roberto Díaz",
    numEvents: "23",
    avgMoney: "26,964",
    totMoney: "620,177"
  },
  {
    rank: "194",
    name: "Steve Marino",
    numEvents: "4",
    avgMoney: "26,900",
    totMoney: "107,603"
  },
  {
    rank: "195",
    name: "Jimmy Walker",
    numEvents: "22",
    avgMoney: "26,838",
    totMoney: "590,437"
  },
  {
    rank: "196",
    name: "K.J. Choi",
    numEvents: "7",
    avgMoney: "26,564",
    totMoney: "185,952"
  },
  {
    rank: "197",
    name: "Ashton Turner",
    numEvents: "1",
    avgMoney: "26,467",
    totMoney: "26,467"
  },
  {
    rank: "T198",
    name: "Romain Langasque",
    numEvents: "1",
    avgMoney: "25,800",
    totMoney: "25,800"
  },
  {
    rank: "T198",
    name: "Paul Waring",
    numEvents: "1",
    avgMoney: "25,800",
    totMoney: "25,800"
  },
  {
    rank: "200",
    name: "Bernhard Langer",
    numEvents: "1",
    avgMoney: "25,415",
    totMoney: "25,415"
  },
  {
    rank: "201",
    name: "Oscar Fraustro",
    numEvents: "1",
    avgMoney: "25,200",
    totMoney: "25,200"
  },
  {
    rank: "202",
    name: "Yosuke Asaji",
    numEvents: "1",
    avgMoney: "25,088",
    totMoney: "25,088"
  },
  {
    rank: "203",
    name: "Gaganjeet Bhullar",
    numEvents: "2",
    avgMoney: "25,060",
    totMoney: "50,120"
  },
  {
    rank: "204",
    name: "Nino Bertasio",
    numEvents: "1",
    avgMoney: "24,438",
    totMoney: "24,438"
  },
  {
    rank: "205",
    name: "Stephan Jaeger",
    numEvents: "26",
    avgMoney: "23,967",
    totMoney: "623,144"
  },
  {
    rank: "206",
    name: "Beau Hossler",
    numEvents: "27",
    avgMoney: "23,918",
    totMoney: "645,795"
  },
  {
    rank: "207",
    name: "Justin Walters",
    numEvents: "1",
    avgMoney: "23,851",
    totMoney: "23,851"
  },
  {
    rank: "208",
    name: "Dylan Meyer",
    numEvents: "5",
    avgMoney: "23,822",
    totMoney: "119,114"
  },
  {
    rank: "209",
    name: "Luke Donald",
    numEvents: "12",
    avgMoney: "23,802",
    totMoney: "285,630"
  },
  {
    rank: "210",
    name: "Scott Langley",
    numEvents: "27",
    avgMoney: "23,551",
    totMoney: "635,882"
  },
  {
    rank: "211",
    name: "Brendan Steele",
    numEvents: "22",
    avgMoney: "23,415",
    totMoney: "515,139"
  },
  {
    rank: "212",
    name: "Brett Drewitt",
    numEvents: "2",
    avgMoney: "23,400",
    totMoney: "46,800"
  },
  {
    rank: "213",
    name: "Jason Gore",
    numEvents: "4",
    avgMoney: "23,240",
    totMoney: "92,960"
  },
  {
    rank: "214",
    name: "Chip McDaniel",
    numEvents: "8",
    avgMoney: "23,221",
    totMoney: "185,768"
  },
  {
    rank: "215",
    name: "Stewart Cink",
    numEvents: "16",
    avgMoney: "23,000",
    totMoney: "368,007"
  },
  {
    rank: "216",
    name: "Rhys Enoch",
    numEvents: "1",
    avgMoney: "22,977",
    totMoney: "22,977"
  },
  {
    rank: "217",
    name: "Brendon Todd",
    numEvents: "11",
    avgMoney: "22,958",
    totMoney: "252,545"
  },
  {
    rank: "218",
    name: "Harris English",
    numEvents: "28",
    avgMoney: "22,461",
    totMoney: "628,922"
  },
  {
    rank: "219",
    name: "Sean O'Hair",
    numEvents: "9",
    avgMoney: "22,372",
    totMoney: "201,352"
  },
  {
    rank: "220",
    name: "Joost Luiten",
    numEvents: "5",
    avgMoney: "22,370",
    totMoney: "111,852"
  },
  {
    rank: "221",
    name: "Clément Sordet",
    numEvents: "1",
    avgMoney: "22,353",
    totMoney: "22,353"
  },
  {
    rank: "222",
    name: "Jonathan Randolph",
    numEvents: "1",
    avgMoney: "22,165",
    totMoney: "22,165"
  },
  {
    rank: "223",
    name: "David Hearn",
    numEvents: "18",
    avgMoney: "22,093",
    totMoney: "397,676"
  },
  {
    rank: "224",
    name: "Chase Wright",
    numEvents: "26",
    avgMoney: "21,983",
    totMoney: "571,575"
  },
  {
    rank: "225",
    name: "Fabián Gómez",
    numEvents: "20",
    avgMoney: "21,651",
    totMoney: "433,026"
  },
  {
    rank: "226",
    name: "Trey Mullinax",
    numEvents: "25",
    avgMoney: "21,467",
    totMoney: "536,693"
  },
  {
    rank: "T227",
    name: "Rob Labritz",
    numEvents: "1",
    avgMoney: "21,300",
    totMoney: "21,300"
  },
  {
    rank: "T227",
    name: "Seungsu Han",
    numEvents: "1",
    avgMoney: "21,300",
    totMoney: "21,300"
  },
  {
    rank: "T227",
    name: "Ross Fisher",
    numEvents: "1",
    avgMoney: "21,300",
    totMoney: "21,300"
  },
  {
    rank: "230",
    name: "Will Gordon",
    numEvents: "1",
    avgMoney: "21,218",
    totMoney: "21,218"
  },
  {
    rank: "231",
    name: "Ryan Fox",
    numEvents: "6",
    avgMoney: "21,052",
    totMoney: "126,313"
  },
  {
    rank: "232",
    name: "George McNeill",
    numEvents: "9",
    avgMoney: "20,883",
    totMoney: "187,950"
  },
  {
    rank: "233",
    name: "Jamie Lovemark",
    numEvents: "7",
    avgMoney: "20,857",
    totMoney: "145,999"
  },
  {
    rank: "234",
    name: "Joey Garber",
    numEvents: "22",
    avgMoney: "20,649",
    totMoney: "454,295"
  },
  {
    rank: "235",
    name: "Tyler Duncan",
    numEvents: "29",
    avgMoney: "20,569",
    totMoney: "596,502"
  },
  {
    rank: "236",
    name: "David Toms",
    numEvents: "3",
    avgMoney: "20,479",
    totMoney: "61,438"
  },
  {
    rank: "237",
    name: "Chase Koepka",
    numEvents: "1",
    avgMoney: "19,609",
    totMoney: "19,609"
  },
  {
    rank: "238",
    name: "Steve Stricker",
    numEvents: "7",
    avgMoney: "19,381",
    totMoney: "135,670"
  },
  {
    rank: "239",
    name: "Lucas Herbert",
    numEvents: "1",
    avgMoney: "19,250",
    totMoney: "19,250"
  },
  {
    rank: "240",
    name: "Satoshi Kodaira",
    numEvents: "22",
    avgMoney: "19,157",
    totMoney: "421,456"
  },
  {
    rank: "241",
    name: "Cameron Davis",
    numEvents: "25",
    avgMoney: "19,098",
    totMoney: "477,466"
  },
  {
    rank: "242",
    name: "Kramer Hickok",
    numEvents: "26",
    avgMoney: "19,016",
    totMoney: "494,423"
  },
  {
    rank: "243",
    name: "Curtis Luck",
    numEvents: "23",
    avgMoney: "18,807",
    totMoney: "432,569"
  },
  {
    rank: "244",
    name: "Rich Beem",
    numEvents: "1",
    avgMoney: "18,550",
    totMoney: "18,550"
  },
  {
    rank: "245",
    name: "Billy Hurley III",
    numEvents: "13",
    avgMoney: "18,415",
    totMoney: "239,395"
  },
  {
    rank: "246",
    name: "Marty Jertson",
    numEvents: "1",
    avgMoney: "18,400",
    totMoney: "18,400"
  },
  {
    rank: "247",
    name: "Anirban Lahiri",
    numEvents: "23",
    avgMoney: "18,244",
    totMoney: "419,619"
  },
  {
    rank: "248",
    name: "Thorbjørn Olesen",
    numEvents: "11",
    avgMoney: "18,147",
    totMoney: "199,623"
  },
  {
    rank: "249",
    name: "Alex Prugh",
    numEvents: "26",
    avgMoney: "17,989",
    totMoney: "467,732"
  },
  {
    rank: "250",
    name: "Anders Albertson",
    numEvents: "25",
    avgMoney: "17,969",
    totMoney: "449,226"
  },
  {
    rank: "251",
    name: "Tom Hoge",
    numEvents: "32",
    avgMoney: "17,920",
    totMoney: "573,464"
  },
  {
    rank: "252",
    name: "Charl Schwartzel",
    numEvents: "13",
    avgMoney: "17,901",
    totMoney: "232,725"
  },
  {
    rank: "253",
    name: "Brandon Harkins",
    numEvents: "28",
    avgMoney: "17,671",
    totMoney: "494,794"
  },
  {
    rank: "254",
    name: "John Catlin",
    numEvents: "6",
    avgMoney: "17,446",
    totMoney: "104,680"
  },
  {
    rank: "255",
    name: "José de Jesús Rodríguez",
    numEvents: "23",
    avgMoney: "17,147",
    totMoney: "394,401"
  },
  {
    rank: "256",
    name: "Ernie Els",
    numEvents: "18",
    avgMoney: "16,921",
    totMoney: "304,590"
  },
  {
    rank: "257",
    name: "Tae Hee Lee",
    numEvents: "2",
    avgMoney: "16,873",
    totMoney: "33,747"
  },
  {
    rank: "258",
    name: "Austen Truslow",
    numEvents: "4",
    avgMoney: "16,625",
    totMoney: "66,500"
  },
  {
    rank: "259",
    name: "George Cunningham",
    numEvents: "2",
    avgMoney: "16,485",
    totMoney: "32,970"
  },
  {
    rank: "260",
    name: "Adam Svensson",
    numEvents: "25",
    avgMoney: "16,229",
    totMoney: "405,730"
  },
  {
    rank: "261",
    name: "Norman Xiong",
    numEvents: "3",
    avgMoney: "16,108",
    totMoney: "48,326"
  },
  {
    rank: "262",
    name: "Hyungjoon Lee",
    numEvents: "1",
    avgMoney: "15,960",
    totMoney: "15,960"
  },
  {
    rank: "263",
    name: "James Hahn",
    numEvents: "10",
    avgMoney: "15,934",
    totMoney: "159,343"
  },
  {
    rank: "264",
    name: "Sam Saunders",
    numEvents: "26",
    avgMoney: "15,918",
    totMoney: "413,887"
  },
  {
    rank: "265",
    name: "Thomas Detry",
    numEvents: "1",
    avgMoney: "15,850",
    totMoney: "15,850"
  },
  {
    rank: "266",
    name: "Matthew Short",
    numEvents: "1",
    avgMoney: "15,721",
    totMoney: "15,721"
  },
  {
    rank: "267",
    name: "Padraig Harrington",
    numEvents: "11",
    avgMoney: "15,399",
    totMoney: "169,390"
  },
  {
    rank: "268",
    name: "Chris Kirk",
    numEvents: "17",
    avgMoney: "15,376",
    totMoney: "261,400"
  },
  {
    rank: "269",
    name: "Richard Jung",
    numEvents: "1",
    avgMoney: "15,352",
    totMoney: "15,352"
  },
  {
    rank: "270",
    name: "Hyun-woo Ryu",
    numEvents: "1",
    avgMoney: "15,295",
    totMoney: "15,295"
  },
  {
    rank: "271",
    name: "Jake Knapp",
    numEvents: "1",
    avgMoney: "15,200",
    totMoney: "15,200"
  },
  {
    rank: "272",
    name: "Wes Homan",
    numEvents: "1",
    avgMoney: "15,184",
    totMoney: "15,184"
  },
  {
    rank: "273",
    name: "Julián Etulain",
    numEvents: "24",
    avgMoney: "15,027",
    totMoney: "360,653"
  },
  {
    rank: "274",
    name: "Haotong Li",
    numEvents: "12",
    avgMoney: "14,965",
    totMoney: "179,581"
  },
  {
    rank: "275",
    name: "Ollie Schniederjans",
    numEvents: "28",
    avgMoney: "14,702",
    totMoney: "411,682"
  },
  {
    rank: "T276",
    name: "Lee Hodges",
    numEvents: "1",
    avgMoney: "14,592",
    totMoney: "14,592"
  },
  {
    rank: "T276",
    name: "Henrik Norlander",
    numEvents: "1",
    avgMoney: "14,592",
    totMoney: "14,592"
  },
  {
    rank: "278",
    name: "David Lipsky",
    numEvents: "5",
    avgMoney: "14,545",
    totMoney: "72,728"
  },
  {
    rank: "279",
    name: "Ben Leong",
    numEvents: "1",
    avgMoney: "14,280",
    totMoney: "14,280"
  },
  {
    rank: "280",
    name: "John Chin",
    numEvents: "21",
    avgMoney: "14,025",
    totMoney: "294,536"
  },
  {
    rank: "281",
    name: "Ben Crane",
    numEvents: "14",
    avgMoney: "13,790",
    totMoney: "193,073"
  },
  {
    rank: "282",
    name: "Minchel Choi",
    numEvents: "2",
    avgMoney: "13,737",
    totMoney: "27,475"
  },
  {
    rank: "283",
    name: "Hunter Mahan",
    numEvents: "21",
    avgMoney: "13,694",
    totMoney: "287,579"
  },
  {
    rank: "284",
    name: "Nicholas Lindheim",
    numEvents: "17",
    avgMoney: "13,360",
    totMoney: "227,124"
  },
  {
    rank: "285",
    name: "Rikuya Hoshino",
    numEvents: "1",
    avgMoney: "13,120",
    totMoney: "13,120"
  },
  {
    rank: "286",
    name: "Mikko Korhonen",
    numEvents: "2",
    avgMoney: "12,900",
    totMoney: "25,800"
  },
  {
    rank: "287",
    name: "Andy Pope",
    numEvents: "2",
    avgMoney: "12,675",
    totMoney: "25,350"
  },
  {
    rank: "288",
    name: "Yuki Inamori",
    numEvents: "3",
    avgMoney: "12,647",
    totMoney: "37,942"
  },
  {
    rank: "289",
    name: "Eric Dugas",
    numEvents: "1",
    avgMoney: "12,544",
    totMoney: "12,544"
  },
  {
    rank: "290",
    name: "Ben Silverman",
    numEvents: "24",
    avgMoney: "12,437",
    totMoney: "298,497"
  },
  {
    rank: "291",
    name: "Seth Reeves",
    numEvents: "25",
    avgMoney: "12,383",
    totMoney: "309,588"
  },
  {
    rank: "292",
    name: "Boo Weekley",
    numEvents: "9",
    avgMoney: "11,997",
    totMoney: "107,981"
  },
  {
    rank: "293",
    name: "Kristoffer Ventura",
    numEvents: "3",
    avgMoney: "11,520",
    totMoney: "34,562"
  },
  {
    rank: "294",
    name: "Rahil Gangjee",
    numEvents: "1",
    avgMoney: "11,480",
    totMoney: "11,480"
  },
  {
    rank: "295",
    name: "Kim Leun-Kwang",
    numEvents: "1",
    avgMoney: "11,200",
    totMoney: "11,200"
  },
  {
    rank: "296",
    name: "Stuart Appleby",
    numEvents: "3",
    avgMoney: "11,112",
    totMoney: "33,336"
  },
  {
    rank: "297",
    name: "Whee Kim",
    numEvents: "27",
    avgMoney: "10,843",
    totMoney: "292,772"
  },
  {
    rank: "298",
    name: "Kyle Jones",
    numEvents: "26",
    avgMoney: "10,683",
    totMoney: "277,762"
  },
  {
    rank: "299",
    name: "Tom Lovelady",
    numEvents: "14",
    avgMoney: "10,403",
    totMoney: "145,647"
  },
  {
    rank: "300",
    name: "Arjun Atwal",
    numEvents: "6",
    avgMoney: "10,349",
    totMoney: "62,095"
  },
  {
    rank: "301",
    name: "Kurt Kitayama",
    numEvents: "2",
    avgMoney: "10,100",
    totMoney: "20,200"
  },
  {
    rank: "302",
    name: "Brady Schnell",
    numEvents: "21",
    avgMoney: "10,043",
    totMoney: "210,914"
  },
  {
    rank: "303",
    name: "Y.E. Yang",
    numEvents: "4",
    avgMoney: "9,763",
    totMoney: "39,055"
  },
  {
    rank: "T304",
    name: "Case Cochran",
    numEvents: "1",
    avgMoney: "9,633",
    totMoney: "9,633"
  },
  {
    rank: "T304",
    name: "Stephen Stallings Jr.",
    numEvents: "1",
    avgMoney: "9,633",
    totMoney: "9,633"
  },
  {
    rank: "306",
    name: "Cody Gribble",
    numEvents: "26",
    avgMoney: "9,550",
    totMoney: "248,316"
  },
  {
    rank: "T307",
    name: "Dawson Armstrong",
    numEvents: "1",
    avgMoney: "9,240",
    totMoney: "9,240"
  },
  {
    rank: "T307",
    name: "Hayden Buckley",
    numEvents: "1",
    avgMoney: "9,240",
    totMoney: "9,240"
  },
  {
    rank: "309",
    name: "Doyeob Mun",
    numEvents: "2",
    avgMoney: "9,025",
    totMoney: "18,050"
  },
  {
    rank: "310",
    name: "Grayson Murray",
    numEvents: "14",
    avgMoney: "8,965",
    totMoney: "125,511"
  },
  {
    rank: "311",
    name: "Martin Piller",
    numEvents: "15",
    avgMoney: "8,935",
    totMoney: "134,028"
  },
  {
    rank: "312",
    name: "Andrea Pavan",
    numEvents: "3",
    avgMoney: "8,905",
    totMoney: "26,716"
  },
  {
    rank: "313",
    name: "Trevor Immelman",
    numEvents: "4",
    avgMoney: "8,838",
    totMoney: "35,353"
  },
  {
    rank: "314",
    name: "Tim Wilkinson",
    numEvents: "1",
    avgMoney: "8,624",
    totMoney: "8,624"
  },
  {
    rank: "315",
    name: "Adri Arnaus",
    numEvents: "3",
    avgMoney: "8,450",
    totMoney: "25,350"
  },
  {
    rank: "316",
    name: "Morgan Hoffmann",
    numEvents: "11",
    avgMoney: "8,382",
    totMoney: "92,211"
  },
  {
    rank: "317",
    name: "Andres Romero",
    numEvents: "9",
    avgMoney: "8,309",
    totMoney: "74,785"
  },
  {
    rank: "318",
    name: "Braden Thornberry",
    numEvents: "2",
    avgMoney: "8,278",
    totMoney: "16,557"
  },
  {
    rank: "319",
    name: "Alex Cejka",
    numEvents: "22",
    avgMoney: "8,234",
    totMoney: "181,154"
  },
  {
    rank: "320",
    name: "J.J. Henry",
    numEvents: "22",
    avgMoney: "8,056",
    totMoney: "177,232"
  },
  {
    rank: "321",
    name: "Fred Couples",
    numEvents: "3",
    avgMoney: "7,893",
    totMoney: "23,680"
  },
  {
    rank: "322",
    name: "Sangmoon Bae",
    numEvents: "22",
    avgMoney: "7,839",
    totMoney: "172,472"
  },
  {
    rank: "323",
    name: "Robert Garrigus",
    numEvents: "11",
    avgMoney: "7,653",
    totMoney: "84,191"
  },
  {
    rank: "324",
    name: "Tyrone Van Aswegen",
    numEvents: "15",
    avgMoney: "7,651",
    totMoney: "114,779"
  },
  {
    rank: "325",
    name: "Freddie Jacobson",
    numEvents: "19",
    avgMoney: "7,605",
    totMoney: "144,500"
  },
  {
    rank: "326",
    name: "John Huh",
    numEvents: "13",
    avgMoney: "7,481",
    totMoney: "97,254"
  },
  {
    rank: "327",
    name: "Alistair Docherty",
    numEvents: "1",
    avgMoney: "7,280",
    totMoney: "7,280"
  },
  {
    rank: "328",
    name: "Richard Lee",
    numEvents: "2",
    avgMoney: "7,178",
    totMoney: "14,356"
  },
  {
    rank: "329",
    name: "Sihwan Kim",
    numEvents: "2",
    avgMoney: "7,140",
    totMoney: "14,280"
  },
  {
    rank: "330",
    name: "Alex Kang",
    numEvents: "2",
    avgMoney: "7,082",
    totMoney: "14,164"
  },
  {
    rank: "331",
    name: "Shintaro Ban",
    numEvents: "2",
    avgMoney: "7,056",
    totMoney: "14,112"
  },
  {
    rank: "332",
    name: "Tom Lehman",
    numEvents: "2",
    avgMoney: "6,976",
    totMoney: "13,952"
  },
  {
    rank: "333",
    name: "Chris Couch",
    numEvents: "4",
    avgMoney: "6,791",
    totMoney: "27,165"
  },
  {
    rank: "334",
    name: "Maverick McNealy",
    numEvents: "2",
    avgMoney: "6,784",
    totMoney: "13,568"
  },
  {
    rank: "335",
    name: "Daniel Chopra",
    numEvents: "6",
    avgMoney: "6,733",
    totMoney: "40,401"
  },
  {
    rank: "336",
    name: "Colt Knost",
    numEvents: "10",
    avgMoney: "6,649",
    totMoney: "66,493"
  },
  {
    rank: "337",
    name: "John Rollins",
    numEvents: "5",
    avgMoney: "6,484",
    totMoney: "32,424"
  },
  {
    rank: "338",
    name: "Jon Curran",
    numEvents: "4",
    avgMoney: "6,465",
    totMoney: "25,861"
  },
  {
    rank: "339",
    name: "Ken Duke",
    numEvents: "1",
    avgMoney: "6,450",
    totMoney: "6,450"
  },
  {
    rank: "340",
    name: "Scott Vincent",
    numEvents: "2",
    avgMoney: "6,370",
    totMoney: "12,740"
  },
  {
    rank: "341",
    name: "John Senden",
    numEvents: "16",
    avgMoney: "6,213",
    totMoney: "99,419"
  },
  {
    rank: "342",
    name: "Berry Henson",
    numEvents: "2",
    avgMoney: "5,985",
    totMoney: "11,970"
  },
  {
    rank: "343",
    name: "Julio Santos",
    numEvents: "1",
    avgMoney: "5,970",
    totMoney: "5,970"
  },
  {
    rank: "344",
    name: "Drew Nesbitt",
    numEvents: "2",
    avgMoney: "5,916",
    totMoney: "11,832"
  },
  {
    rank: "345",
    name: "David Lingmerth",
    numEvents: "13",
    avgMoney: "5,511",
    totMoney: "71,643"
  },
  {
    rank: "346",
    name: "Derek Fathauer",
    numEvents: "14",
    avgMoney: "5,489",
    totMoney: "76,850"
  },
  {
    rank: "347",
    name: "Derek Ernst",
    numEvents: "3",
    avgMoney: "5,057",
    totMoney: "15,172"
  },
  {
    rank: "348",
    name: "Rod Pampling",
    numEvents: "22",
    avgMoney: "4,642",
    totMoney: "102,126"
  },
  {
    rank: "349",
    name: "Shugo Imahira",
    numEvents: "7",
    avgMoney: "4,434",
    totMoney: "31,040"
  },
  {
    rank: "350",
    name: "Tim Herron",
    numEvents: "10",
    avgMoney: "4,328",
    totMoney: "43,281"
  },
  {
    rank: "351",
    name: "Tommy Gainey",
    numEvents: "5",
    avgMoney: "4,312",
    totMoney: "21,560"
  },
  {
    rank: "352",
    name: "Chris Thompson",
    numEvents: "19",
    avgMoney: "4,296",
    totMoney: "81,635"
  },
  {
    rank: "353",
    name: "Charlie Wi",
    numEvents: "3",
    avgMoney: "4,245",
    totMoney: "12,735"
  },
  {
    rank: "354",
    name: "Michael Kim",
    numEvents: "26",
    avgMoney: "4,036",
    totMoney: "104,936"
  },
  {
    rank: "355",
    name: "Chad Collins",
    numEvents: "15",
    avgMoney: "3,944",
    totMoney: "59,164"
  },
  {
    rank: "T356",
    name: "Rafael Campos",
    numEvents: "2",
    avgMoney: "3,770",
    totMoney: "7,540"
  },
  {
    rank: "T356",
    name: "Ben Griffin",
    numEvents: "2",
    avgMoney: "3,770",
    totMoney: "7,540"
  },
  {
    rank: "358",
    name: "Dicky Pride",
    numEvents: "3",
    avgMoney: "3,760",
    totMoney: "11,280"
  },
  {
    rank: "359",
    name: "Parker McLachlin",
    numEvents: "8",
    avgMoney: "3,709",
    totMoney: "29,674"
  },
  {
    rank: "360",
    name: "Charlie Beljan",
    numEvents: "5",
    avgMoney: "3,660",
    totMoney: "18,303"
  },
  {
    rank: "361",
    name: "Ryan Vermeer",
    numEvents: "7",
    avgMoney: "3,502",
    totMoney: "24,520"
  },
  {
    rank: "362",
    name: "Zac Blair",
    numEvents: "2",
    avgMoney: "3,330",
    totMoney: "6,660"
  },
  {
    rank: "363",
    name: "D.A. Points",
    numEvents: "13",
    avgMoney: "3,326",
    totMoney: "43,246"
  },
  {
    rank: "364",
    name: "Chad Campbell",
    numEvents: "13",
    avgMoney: "3,240",
    totMoney: "42,130"
  },
  {
    rank: "365",
    name: "Omar Uresti",
    numEvents: "4",
    avgMoney: "3,172",
    totMoney: "12,690"
  },
  {
    rank: "366",
    name: "Mike Weir",
    numEvents: "9",
    avgMoney: "3,071",
    totMoney: "27,643"
  },
  {
    rank: "367",
    name: "Robert Allenby",
    numEvents: "5",
    avgMoney: "2,943",
    totMoney: "14,715"
  },
  {
    rank: "368",
    name: "Dru Love",
    numEvents: "5",
    avgMoney: "2,918",
    totMoney: "14,592"
  },
  {
    rank: "369",
    name: "Smylie Kaufman",
    numEvents: "5",
    avgMoney: "2,890",
    totMoney: "14,454"
  },
  {
    rank: "370",
    name: "John Merrick",
    numEvents: "5",
    avgMoney: "2,722",
    totMoney: "13,610"
  },
  {
    rank: "371",
    name: "John Daly",
    numEvents: "3",
    avgMoney: "2,356",
    totMoney: "7,070"
  },
  {
    rank: "372",
    name: "Ricky Barnes",
    numEvents: "11",
    avgMoney: "2,033",
    totMoney: "22,369"
  },
  {
    rank: "373",
    name: "Justin Suh",
    numEvents: "7",
    avgMoney: "1,993",
    totMoney: "13,952"
  },
  {
    rank: "374",
    name: "Brendon de Jonge",
    numEvents: "6",
    avgMoney: "1,984",
    totMoney: "11,904"
  },
  {
    rank: "375",
    name: "Heath Slocum",
    numEvents: "4",
    avgMoney: "1,671",
    totMoney: "6,685"
  },
  {
    rank: "376",
    name: "Jonathan Kaye",
    numEvents: "4",
    avgMoney: "1,477",
    totMoney: "5,910"
  },
  {
    rank: "377",
    name: "Jason Bohn",
    numEvents: "5",
    avgMoney: "1,194",
    totMoney: "5,970"
  },
  {
    rank: "378",
    name: "Brian Davis",
    numEvents: "9",
    avgMoney: "1,166",
    totMoney: "10,500"
  },
  {
    rank: "379",
    name: "Brandon Hagy",
    numEvents: "13",
    avgMoney: "1,119",
    totMoney: "14,555"
  },
  {
    rank: "380",
    name: "Will MacKenzie",
    numEvents: "8",
    avgMoney: "813",
    totMoney: "6,510"
  }
];

module.exports = function() {
  return db.playerProduction.bulkCreate(playerProduction);
};
