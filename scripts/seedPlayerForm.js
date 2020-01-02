var db = require("../models");

var playerForm = [
  {
    rank: "1",
    name: "Brooks Koepka",
    numEvents: "16",
    totMoney: "$7,302,884"
  },
  {
    rank: "2",
    name: "Rory McIlroy",
    numEvents: "14",
    totMoney: "$6,989,374"
  },
  {
    rank: "3",
    name: "Matt Kuchar",
    numEvents: "17",
    totMoney: "$6,166,194"
  },
  {
    rank: "4",
    name: "Gary Woodland",
    numEvents: "19",
    totMoney: "$5,556,461"
  },
  {
    rank: "5",
    name: "Xander Schauffele",
    numEvents: "16",
    totMoney: "$5,374,171"
  },
  {
    rank: "6",
    name: "Dustin Johnson",
    numEvents: "14",
    totMoney: "$5,297,249"
  },
  {
    rank: "7",
    name: "Patrick Cantlay",
    numEvents: "16",
    totMoney: "$4,766,188"
  },
  {
    rank: "8",
    name: "Paul Casey",
    numEvents: "17",
    totMoney: "$3,955,934"
  },
  {
    rank: "9",
    name: "Justin Rose",
    numEvents: "12",
    totMoney: "$3,822,428"
  },
  {
    rank: "10",
    name: "Jon Rahm",
    numEvents: "15",
    totMoney: "$3,657,410"
  },
  {
    rank: "11",
    name: "Chez Reavie",
    numEvents: "22",
    totMoney: "$3,498,484"
  },
  {
    rank: "12",
    name: "Rickie Fowler",
    numEvents: "16",
    totMoney: "$3,436,710"
  },
  {
    rank: "13",
    name: "Adam Scott",
    numEvents: "13",
    totMoney: "$3,381,541"
  },
  {
    rank: "14",
    name: "Francesco Molinari",
    numEvents: "12",
    totMoney: "$3,259,090"
  },
  {
    rank: "15",
    name: "Marc Leishman",
    numEvents: "16",
    totMoney: "$3,172,467"
  },
  {
    rank: "16",
    name: "Tiger Woods",
    numEvents: "9",
    totMoney: "$3,158,915"
  },
  {
    rank: "17",
    name: "Tony Finau",
    numEvents: "20",
    totMoney: "$3,042,365"
  },
  {
    rank: "18",
    name: "Bryson DeChambeau",
    numEvents: "16",
    totMoney: "$3,021,442"
  },
  {
    rank: "19",
    name: "Charles Howell III",
    numEvents: "23",
    totMoney: "$2,945,305"
  },
  {
    rank: "20",
    name: "Kevin Kisner",
    numEvents: "20",
    totMoney: "$2,898,269"
  },
  {
    rank: "21",
    name: "Justin Thomas",
    numEvents: "15",
    totMoney: "$2,857,009"
  },
  {
    rank: "22",
    name: "Sung Kang",
    numEvents: "23",
    totMoney: "$2,726,948"
  },
  {
    rank: "23",
    name: "Ryan Palmer",
    numEvents: "17",
    totMoney: "$2,720,426"
  },
  {
    rank: "24",
    name: "Webb Simpson",
    numEvents: "15",
    totMoney: "$2,647,741"
  },
  {
    rank: "25",
    name: "Scott Piercy",
    numEvents: "21",
    totMoney: "$2,589,954"
  },
  {
    rank: "26",
    name: "Hideki Matsuyama",
    numEvents: "18",
    totMoney: "$2,582,371"
  },
  {
    rank: "27",
    name: "Jason Day",
    numEvents: "17",
    totMoney: "$2,541,909"
  },
  {
    rank: "28",
    name: "Jim Furyk",
    numEvents: "17",
    totMoney: "$2,515,906"
  },
  {
    rank: "29",
    name: "Sungjae Im",
    numEvents: "30",
    totMoney: "$2,434,131"
  },
  {
    rank: "30",
    name: "Corey Conners",
    numEvents: "22",
    totMoney: "$2,378,657"
  },
  {
    rank: "31",
    name: "Brandt Snedeker",
    numEvents: "21",
    totMoney: "$2,362,778"
  },
  {
    rank: "32",
    name: "Phil Mickelson",
    numEvents: "16",
    totMoney: "$2,340,411"
  },
  {
    rank: "33",
    name: "Keith Mitchell",
    numEvents: "22",
    totMoney: "$2,288,364"
  },
  {
    rank: "34",
    name: "Lucas Glover",
    numEvents: "21",
    totMoney: "$2,184,709"
  },
  {
    rank: "35",
    name: "Kevin Na",
    numEvents: "17",
    totMoney: "$2,170,382"
  },
  {
    rank: "36",
    name: "C.T. Pan",
    numEvents: "21",
    totMoney: "$2,167,824"
  },
  {
    rank: "37",
    name: "Tommy Fleetwood",
    numEvents: "13",
    totMoney: "$2,125,653"
  },
  {
    rank: "38",
    name: "Andrew Putnam",
    numEvents: "19",
    totMoney: "$2,073,584"
  },
  {
    rank: "39",
    name: "J.B. Holmes",
    numEvents: "21",
    totMoney: "$2,020,382"
  },
  {
    rank: "40",
    name: "Kevin Tway",
    numEvents: "22",
    totMoney: "$1,977,025"
  },
  {
    rank: "41",
    name: "Adam Hadwin",
    numEvents: "20",
    totMoney: "$1,954,455"
  },
  {
    rank: "42",
    name: "Max Homa",
    numEvents: "22",
    totMoney: "$1,950,259"
  },
  {
    rank: "43",
    name: "Rory Sabbatini",
    numEvents: "22",
    totMoney: "$1,899,291"
  },
  {
    rank: "44",
    name: "Nate Lashley",
    numEvents: "17",
    totMoney: "$1,898,102"
  },
  {
    rank: "45",
    name: "Si Woo Kim",
    numEvents: "24",
    totMoney: "$1,862,223"
  },
  {
    rank: "46",
    name: "Louis Oosthuizen",
    numEvents: "14",
    totMoney: "$1,838,764"
  },
  {
    rank: "47",
    name: "Joel Dahmen",
    numEvents: "25",
    totMoney: "$1,838,170"
  },
  {
    rank: "48",
    name: "Jason Kokrak",
    numEvents: "19",
    totMoney: "$1,804,946"
  },
  {
    rank: "49",
    name: "Keegan Bradley",
    numEvents: "21",
    totMoney: "$1,799,347"
  },
  {
    rank: "50",
    name: "Rafa Cabrera Bello",
    numEvents: "16",
    totMoney: "$1,763,608"
  },
  {
    rank: "51",
    name: "Sergio Garcia",
    numEvents: "12",
    totMoney: "$1,693,939"
  },
  {
    rank: "52",
    name: "Ryan Moore",
    numEvents: "20",
    totMoney: "$1,668,588"
  },
  {
    rank: "53",
    name: "Billy Horschel",
    numEvents: "21",
    totMoney: "$1,656,821"
  },
  {
    rank: "54",
    name: "Emiliano Grillo",
    numEvents: "19",
    totMoney: "$1,655,864"
  },
  {
    rank: "55",
    name: "Ian Poulter",
    numEvents: "14",
    totMoney: "$1,626,156"
  },
  {
    rank: "56",
    name: "Graeme McDowell",
    numEvents: "17",
    totMoney: "$1,624,429"
  },
  {
    rank: "57",
    name: "Abraham Ancer",
    numEvents: "22",
    totMoney: "$1,623,950"
  },
  {
    rank: "58",
    name: "Cameron Champ",
    numEvents: "23",
    totMoney: "$1,572,908"
  },
  {
    rank: "59",
    name: "Kevin Streelman",
    numEvents: "23",
    totMoney: "$1,562,414"
  },
  {
    rank: "60",
    name: "Kiradech Aphibarnrat",
    numEvents: "17",
    totMoney: "$1,542,706"
  },
  {
    rank: "61",
    name: "Jordan Spieth",
    numEvents: "18",
    totMoney: "$1,537,764"
  },
  {
    rank: "62",
    name: "Adam Long",
    numEvents: "23",
    totMoney: "$1,525,767"
  },
  {
    rank: "63",
    name: "Jhonattan Vegas",
    numEvents: "20",
    totMoney: "$1,519,750"
  },
  {
    rank: "64",
    name: "Shane Lowry",
    numEvents: "11",
    totMoney: "$1,509,879"
  },
  {
    rank: "65",
    name: "Danny Lee",
    numEvents: "24",
    totMoney: "$1,507,661"
  },
  {
    rank: "66",
    name: "Vaughn Taylor",
    numEvents: "24",
    totMoney: "$1,499,204"
  },
  {
    rank: "67",
    name: "Dylan Frittelli",
    numEvents: "20",
    totMoney: "$1,471,560"
  },
  {
    rank: "68",
    name: "Charley Hoffman",
    numEvents: "21",
    totMoney: "$1,423,611"
  },
  {
    rank: "69",
    name: "Byeong Hun An",
    numEvents: "18",
    totMoney: "$1,406,705"
  },
  {
    rank: "70",
    name: "Patrick Reed",
    numEvents: "19",
    totMoney: "$1,397,065"
  },
  {
    rank: "71",
    name: "Matt Every",
    numEvents: "14",
    totMoney: "$1,396,699"
  },
  {
    rank: "72",
    name: "Luke List",
    numEvents: "19",
    totMoney: "$1,374,480"
  },
  {
    rank: "73",
    name: "Chesson Hadley",
    numEvents: "24",
    totMoney: "$1,363,914"
  },
  {
    rank: "74",
    name: "Bubba Watson",
    numEvents: "16",
    totMoney: "$1,324,697"
  },
  {
    rank: "75",
    name: "Michael Thompson",
    numEvents: "20",
    totMoney: "$1,296,036"
  },
  {
    rank: "76",
    name: "Branden Grace",
    numEvents: "19",
    totMoney: "$1,275,329"
  },
  {
    rank: "77",
    name: "Brian Stuard",
    numEvents: "26",
    totMoney: "$1,262,516"
  },
  {
    rank: "78",
    name: "Cameron Smith",
    numEvents: "19",
    totMoney: "$1,249,680"
  },
  {
    rank: "79",
    name: "Henrik Stenson",
    numEvents: "13",
    totMoney: "$1,219,770"
  },
  {
    rank: "80",
    name: "Joaquin Niemann",
    numEvents: "24",
    totMoney: "$1,217,570"
  },
  {
    rank: "81",
    name: "Matthew Wolff",
    numEvents: "5",
    totMoney: "$1,188,888"
  },
  {
    rank: "82",
    name: "J.J. Spaun",
    numEvents: "23",
    totMoney: "$1,183,077"
  },
  {
    rank: "83",
    name: "J.T. Poston",
    numEvents: "25",
    totMoney: "$1,155,275"
  },
  {
    rank: "84",
    name: "Brian Harman",
    numEvents: "26",
    totMoney: "$1,140,295"
  },
  {
    rank: "85",
    name: "Adam Schenk",
    numEvents: "28",
    totMoney: "$1,134,983"
  },
  {
    rank: "86",
    name: "Sam Burns",
    numEvents: "26",
    totMoney: "$1,117,312"
  },
  {
    rank: "87",
    name: "Tyrrell Hatton",
    numEvents: "14",
    totMoney: "$1,114,231"
  },
  {
    rank: "88",
    name: "Pat Perez",
    numEvents: "18",
    totMoney: "$1,095,681"
  },
  {
    rank: "89",
    name: "Wyndham Clark",
    numEvents: "24",
    totMoney: "$1,084,659"
  },
  {
    rank: "90",
    name: "Russell Knox",
    numEvents: "19",
    totMoney: "$1,080,127"
  },
  {
    rank: "91",
    name: "Talor Gooch",
    numEvents: "15",
    totMoney: "$1,049,144"
  },
  {
    rank: "92",
    name: "Scott Stallings",
    numEvents: "24",
    totMoney: "$1,043,685"
  },
  {
    rank: "93",
    name: "Kyoung-Hoon Lee",
    numEvents: "27",
    totMoney: "$1,040,238"
  },
  {
    rank: "94",
    name: "Bud Cauley",
    numEvents: "23",
    totMoney: "$1,036,974"
  },
  {
    rank: "95",
    name: "Sam Ryder",
    numEvents: "20",
    totMoney: "$1,036,041"
  },
  {
    rank: "96",
    name: "Carlos Ortiz",
    numEvents: "26",
    totMoney: "$1,032,244"
  },
  {
    rank: "97",
    name: "Brian Gay",
    numEvents: "25",
    totMoney: "$1,029,440"
  },
  {
    rank: "98",
    name: "Patrick Rodgers",
    numEvents: "14",
    totMoney: "$1,028,191"
  },
  {
    rank: "99",
    name: "Russell Henley",
    numEvents: "22",
    totMoney: "$1,017,342"
  },
  {
    rank: "100",
    name: "Chris Stroud",
    numEvents: "23",
    totMoney: "$1,016,052"
  },
  {
    rank: "101",
    name: "Cameron Tringale",
    numEvents: "19",
    totMoney: "$1,006,506"
  },
  {
    rank: "102",
    name: "Nick Watney",
    numEvents: "24",
    totMoney: "$988,799"
  },
  {
    rank: "103",
    name: "Harold Varner III",
    numEvents: "23",
    totMoney: "$984,635"
  },
  {
    rank: "104",
    name: "Aaron Wise",
    numEvents: "18",
    totMoney: "$972,244"
  },
  {
    rank: "105",
    name: "Scott Brown",
    numEvents: "25",
    totMoney: "$968,923"
  },
  {
    rank: "106",
    name: "Kyle Stanley",
    numEvents: "22",
    totMoney: "$953,201"
  },
  {
    rank: "107",
    name: "Mackenzie Hughes",
    numEvents: "23",
    totMoney: "$950,259"
  },
  {
    rank: "108",
    name: "Troy Merritt",
    numEvents: "16",
    totMoney: "$946,868"
  },
  {
    rank: "109",
    name: "Aaron Baddeley",
    numEvents: "17",
    totMoney: "$904,982"
  },
  {
    rank: "110",
    name: "Patton Kizzire",
    numEvents: "22",
    totMoney: "$885,807"
  },
  {
    rank: "111",
    name: "Jason Dufner",
    numEvents: "23",
    totMoney: "$879,115"
  },
  {
    rank: "112",
    name: "Roger Sloan",
    numEvents: "24",
    totMoney: "$867,858"
  },
  {
    rank: "113",
    name: "Ryan Armour",
    numEvents: "25",
    totMoney: "$866,976"
  },
  {
    rank: "114",
    name: "Peter Malnati",
    numEvents: "23",
    totMoney: "$857,671"
  },
  {
    rank: "115",
    name: "Martin Kaymer",
    numEvents: "12",
    totMoney: "$856,542"
  },
  {
    rank: "116",
    name: "Nick Taylor",
    numEvents: "25",
    totMoney: "$833,163"
  },
  {
    rank: "117",
    name: "Danny Willett",
    numEvents: "16",
    totMoney: "$832,812"
  },
  {
    rank: "118",
    name: "Jonas Blixt",
    numEvents: "23",
    totMoney: "$829,101"
  },
  {
    rank: "119",
    name: "Wes Roach",
    numEvents: "18",
    totMoney: "$825,976"
  },
  {
    rank: "120",
    name: "Matt Jones",
    numEvents: "24",
    totMoney: "$817,086"
  },
  {
    rank: "121",
    name: "Brice Garnett",
    numEvents: "25",
    totMoney: "$791,215"
  },
  {
    rank: "122",
    name: "Richy Werenski",
    numEvents: "24",
    totMoney: "$786,039"
  },
  {
    rank: "123",
    name: "Peter Uihlein",
    numEvents: "26",
    totMoney: "$780,481"
  },
  {
    rank: "124",
    name: "Denny McCarthy",
    numEvents: "24",
    totMoney: "$777,086"
  },
  {
    rank: "125",
    name: "Andrew Landry",
    numEvents: "22",
    totMoney: "$753,039"
  },
  {
    rank: "126",
    name: "Shawn Stefani",
    numEvents: "23",
    totMoney: "$731,787"
  },
  {
    rank: "127",
    name: "Seamus Power",
    numEvents: "24",
    totMoney: "$726,233"
  },
  {
    rank: "128",
    name: "Sebastián Muñoz",
    numEvents: "22",
    totMoney: "$717,828"
  },
  {
    rank: "129",
    name: "Zack Sucher",
    numEvents: "7",
    totMoney: "$716,717"
  },
  {
    rank: "130",
    name: "Ted Potter, Jr.",
    numEvents: "21",
    totMoney: "$715,527"
  },
  {
    rank: "131",
    name: "Daniel Berger",
    numEvents: "18",
    totMoney: "$711,560"
  },
  {
    rank: "132",
    name: "Martin Trainer",
    numEvents: "23",
    totMoney: "$692,155"
  },
  {
    rank: "133",
    name: "Ryan Blaum",
    numEvents: "25",
    totMoney: "$688,287"
  },
  {
    rank: "134",
    name: "Bronson Burgoon",
    numEvents: "18",
    totMoney: "$674,673"
  },
  {
    rank: "135",
    name: "Austin Cook",
    numEvents: "21",
    totMoney: "$671,760"
  },
  {
    rank: "136",
    name: "Hank Lebioda",
    numEvents: "20",
    totMoney: "$638,483"
  },
  {
    rank: "137",
    name: "Bill Haas",
    numEvents: "20",
    totMoney: "$632,092"
  },
  {
    rank: "138",
    name: "Beau Hossler",
    numEvents: "24",
    totMoney: "$627,770"
  },
  {
    rank: "139",
    name: "Martin Laird",
    numEvents: "22",
    totMoney: "$624,271"
  },
  {
    rank: "140",
    name: "Roberto Castro",
    numEvents: "20",
    totMoney: "$622,296"
  },
  {
    rank: "141",
    name: "Scott Langley",
    numEvents: "24",
    totMoney: "$614,108"
  },
  {
    rank: "142",
    name: "Robert Streb",
    numEvents: "25",
    totMoney: "$593,525"
  },
  {
    rank: "143",
    name: "Sepp Straka",
    numEvents: "21",
    totMoney: "$593,454"
  },
  {
    rank: "144",
    name: "Jimmy Walker",
    numEvents: "20",
    totMoney: "$590,437"
  },
  {
    rank: "145",
    name: "Zach Johnson",
    numEvents: "17",
    totMoney: "$589,007"
  },
  {
    rank: "146",
    name: "Stephan Jaeger",
    numEvents: "23",
    totMoney: "$585,345"
  },
  {
    rank: "147",
    name: "Alex Noren",
    numEvents: "15",
    totMoney: "$584,977"
  },
  {
    rank: "148",
    name: "Harris English",
    numEvents: "25",
    totMoney: "$577,032"
  },
  {
    rank: "149",
    name: "Tyler Duncan",
    numEvents: "26",
    totMoney: "$566,142"
  },
  {
    rank: "150",
    name: "Hudson Swafford",
    numEvents: "20",
    totMoney: "$545,191"
  },
  {
    rank: "151",
    name: "Dominic Bozzelli",
    numEvents: "21",
    totMoney: "$543,732"
  },
  {
    rank: "152",
    name: "Trey Mullinax",
    numEvents: "24",
    totMoney: "$536,694"
  },
  {
    rank: "153",
    name: "Kelly Kraft",
    numEvents: "27",
    totMoney: "$527,681"
  },
  {
    rank: "154",
    name: "Chase Wright",
    numEvents: "23",
    totMoney: "$507,200"
  },
  {
    rank: "155",
    name: "Brendan Steele",
    numEvents: "20",
    totMoney: "$499,739"
  },
  {
    rank: "156",
    name: "Roberto Díaz",
    numEvents: "20",
    totMoney: "$496,978"
  },
  {
    rank: "157",
    name: "Jim Knous",
    numEvents: "18",
    totMoney: "$490,976"
  },
  {
    rank: "158",
    name: "Jonathan Byrd",
    numEvents: "14",
    totMoney: "$483,662"
  },
  {
    rank: "159",
    name: "Kramer Hickok",
    numEvents: "23",
    totMoney: "$465,374"
  },
  {
    rank: "160",
    name: "Johnson Wagner",
    numEvents: "16",
    totMoney: "$455,102"
  },
  {
    rank: "161",
    name: "Joey Garber",
    numEvents: "19",
    totMoney: "$454,296"
  },
  {
    rank: "162",
    name: "Brandon Harkins",
    numEvents: "25",
    totMoney: "$438,405"
  },
  {
    rank: "163",
    name: "Alex Prugh",
    numEvents: "23",
    totMoney: "$435,045"
  },
  {
    rank: "164",
    name: "Curtis Luck",
    numEvents: "21",
    totMoney: "$432,569"
  },
  {
    rank: "165",
    name: "Tom Hoge",
    numEvents: "29",
    totMoney: "$418,724"
  },
  {
    rank: "166",
    name: "Satoshi Kodaira",
    numEvents: "20",
    totMoney: "$413,575"
  },
  {
    rank: "167",
    name: "Ollie Schniederjans",
    numEvents: "27",
    totMoney: "$411,682"
  },
  {
    rank: "168",
    name: "Anirban Lahiri",
    numEvents: "22",
    totMoney: "$405,466"
  },
  {
    rank: "169",
    name: "Anders Albertson",
    numEvents: "22",
    totMoney: "$401,976"
  },
  {
    rank: "170",
    name: "Sam Saunders",
    numEvents: "23",
    totMoney: "$399,572"
  },
  {
    rank: "171",
    name: "David Hearn",
    numEvents: "16",
    totMoney: "$380,028"
  },
  {
    rank: "172",
    name: "D.J. Trahan",
    numEvents: "12",
    totMoney: "$377,369"
  },
  {
    rank: "173",
    name: "Adam Svensson",
    numEvents: "22",
    totMoney: "$361,614"
  },
  {
    rank: "174",
    name: "Julián Etulain",
    numEvents: "21",
    totMoney: "$353,268"
  },
  {
    rank: "175",
    name: "Cameron Davis",
    numEvents: "22",
    totMoney: "$347,422"
  },
  {
    rank: "176",
    name: "Fabián Gómez",
    numEvents: "18",
    totMoney: "$306,285"
  },
  {
    rank: "177",
    name: "José de Jesús Rodríguez",
    numEvents: "20",
    totMoney: "$304,258"
  },
  {
    rank: "178",
    name: "Seth Reeves",
    numEvents: "22",
    totMoney: "$300,418"
  },
  {
    rank: "179",
    name: "Josh Teater",
    numEvents: "21",
    totMoney: "$295,191"
  },
  {
    rank: "180",
    name: "Luke Donald",
    numEvents: "11",
    totMoney: "$285,630"
  },
  {
    rank: "181",
    name: "Ben Silverman",
    numEvents: "21",
    totMoney: "$284,497"
  },
  {
    rank: "182",
    name: "Whee Kim",
    numEvents: "25",
    totMoney: "$283,139"
  },
  {
    rank: "183",
    name: "Hunter Mahan",
    numEvents: "19",
    totMoney: "$277,945"
  },
  {
    rank: "184",
    name: "Stewart Cink",
    numEvents: "14",
    totMoney: "$276,658"
  },
  {
    rank: "185",
    name: "Davis Love III",
    numEvents: "9",
    totMoney: "$271,216"
  },
  {
    rank: "186",
    name: "Chris Kirk",
    numEvents: "17",
    totMoney: "$261,401"
  },
  {
    rank: "187",
    name: "Kevin Chappell",
    numEvents: "3",
    totMoney: "$257,024"
  },
  {
    rank: "188",
    name: "Ernie Els",
    numEvents: "16",
    totMoney: "$248,312"
  },
  {
    rank: "189",
    name: "Vijay Singh",
    numEvents: "6",
    totMoney: "$244,800"
  },
  {
    rank: "190",
    name: "Charl Schwartzel",
    numEvents: "13",
    totMoney: "$232,725"
  },
  {
    rank: "191",
    name: "Cody Gribble",
    numEvents: "23",
    totMoney: "$219,542"
  },
  {
    rank: "192",
    name: "Brendon Todd",
    numEvents: "9",
    totMoney: "$217,947"
  },
  {
    rank: "193",
    name: "Brady Schnell",
    numEvents: "18",
    totMoney: "$210,914"
  },
  {
    rank: "194",
    name: "Nicholas Lindheim",
    numEvents: "14",
    totMoney: "$205,942"
  },
  {
    rank: "195",
    name: "Sean O'Hair",
    numEvents: "9",
    totMoney: "$201,352"
  },
  {
    rank: "196",
    name: "Ben Crane",
    numEvents: "14",
    totMoney: "$193,074"
  },
  {
    rank: "197",
    name: "K.J. Choi",
    numEvents: "7",
    totMoney: "$185,952"
  },
  {
    rank: "198",
    name: "Billy Hurley III",
    numEvents: "11",
    totMoney: "$183,629"
  },
  {
    rank: "199",
    name: "J.J. Henry",
    numEvents: "19",
    totMoney: "$177,232"
  },
  {
    rank: "200",
    name: "Padraig Harrington",
    numEvents: "8",
    totMoney: "$169,390"
  },
  {
    rank: "201",
    name: "Kyle Jones",
    numEvents: "23",
    totMoney: "$164,378"
  },
  {
    rank: "202",
    name: "Sangmoon Bae",
    numEvents: "20",
    totMoney: "$164,049"
  },
  {
    rank: "203",
    name: "James Hahn",
    numEvents: "10",
    totMoney: "$159,343"
  },
  {
    rank: "204",
    name: "Jamie Lovemark",
    numEvents: "7",
    totMoney: "$145,999"
  },
  {
    rank: "205",
    name: "Freddie Jacobson",
    numEvents: "18",
    totMoney: "$137,465"
  },
  {
    rank: "206",
    name: "Steve Stricker",
    numEvents: "7",
    totMoney: "$135,670"
  },
  {
    rank: "207",
    name: "Martin Piller",
    numEvents: "13",
    totMoney: "$134,029"
  },
  {
    rank: "208",
    name: "Grayson Murray",
    numEvents: "14",
    totMoney: "$125,511"
  },
  {
    rank: "209",
    name: "Alex Cejka",
    numEvents: "20",
    totMoney: "$125,411"
  },
  {
    rank: "210",
    name: "George McNeill",
    numEvents: "7",
    totMoney: "$110,068"
  },
  {
    rank: "211",
    name: "Tom Lovelady",
    numEvents: "12",
    totMoney: "$107,220"
  },
  {
    rank: "212",
    name: "Michael Kim",
    numEvents: "25",
    totMoney: "$104,936"
  },
  {
    rank: "213",
    name: "John Senden",
    numEvents: "14",
    totMoney: "$99,419"
  },
  {
    rank: "214",
    name: "John Huh",
    numEvents: "13",
    totMoney: "$97,255"
  },
  {
    rank: "215",
    name: "Rod Pampling",
    numEvents: "19",
    totMoney: "$94,245"
  },
  {
    rank: "216",
    name: "Jason Gore",
    numEvents: "4",
    totMoney: "$92,960"
  },
  {
    rank: "217",
    name: "Morgan Hoffmann",
    numEvents: "11",
    totMoney: "$92,212"
  },
  {
    rank: "218",
    name: "Boo Weekley",
    numEvents: "7",
    totMoney: "$88,441"
  },
  {
    rank: "219",
    name: "Tyrone Van Aswegen",
    numEvents: "13",
    totMoney: "$87,480"
  },
  {
    rank: "220",
    name: "Chris Thompson",
    numEvents: "16",
    totMoney: "$81,635"
  },
  {
    rank: "221",
    name: "Derek Fathauer",
    numEvents: "12",
    totMoney: "$76,850"
  },
  {
    rank: "222",
    name: "Robert Garrigus",
    numEvents: "9",
    totMoney: "$76,806"
  },
  {
    rank: "223",
    name: "Colt Knost",
    numEvents: "10",
    totMoney: "$66,493"
  },
  {
    rank: "224",
    name: "Andres Romero",
    numEvents: "7",
    totMoney: "$66,362"
  },
  {
    rank: "225",
    name: "John Chin",
    numEvents: "18",
    totMoney: "$65,136"
  },
  {
    rank: "226",
    name: "David Lingmerth",
    numEvents: "11",
    totMoney: "$62,474"
  },
  {
    rank: "227",
    name: "Chad Collins",
    numEvents: "13",
    totMoney: "$59,164"
  },
  {
    rank: "228",
    name: "Arjun Atwal",
    numEvents: "4",
    totMoney: "$55,165"
  },
  {
    rank: "229",
    name: "Tim Herron",
    numEvents: "8",
    totMoney: "$43,281"
  },
  {
    rank: "230",
    name: "D.A. Points",
    numEvents: "13",
    totMoney: "$43,246"
  },
  {
    rank: "231",
    name: "Chad Campbell",
    numEvents: "11",
    totMoney: "$42,130"
  },
  {
    rank: "232",
    name: "Jim Herman",
    numEvents: "19",
    totMoney: "$39,762"
  },
  {
    rank: "233",
    name: "David Toms",
    numEvents: "2",
    totMoney: "$39,663"
  },
  {
    rank: "234",
    name: "Trevor Immelman",
    numEvents: "4",
    totMoney: "$35,353"
  },
  {
    rank: "235",
    name: "Stuart Appleby",
    numEvents: "3",
    totMoney: "$33,336"
  },
  {
    rank: "236",
    name: "Daniel Chopra",
    numEvents: "4",
    totMoney: "$32,519"
  },
  {
    rank: "237",
    name: "Y.E. Yang",
    numEvents: "2",
    totMoney: "$31,040"
  },
  {
    rank: "238",
    name: "Parker McLachlin",
    numEvents: "6",
    totMoney: "$29,674"
  },
  {
    rank: "239",
    name: "Bernhard Langer",
    numEvents: "1",
    totMoney: "$25,415"
  },
  {
    rank: "240",
    name: "Fred Couples",
    numEvents: "3",
    totMoney: "$23,680"
  },
  {
    rank: "241",
    name: "Rich Beem",
    numEvents: "1",
    totMoney: "$18,550"
  },
  {
    rank: "242",
    name: "John Rollins",
    numEvents: "3",
    totMoney: "$17,024"
  },
  {
    rank: "243",
    name: "Mike Weir",
    numEvents: "6",
    totMoney: "$15,987"
  },
  {
    rank: "244",
    name: "Derek Ernst",
    numEvents: "2",
    totMoney: "$15,172"
  },
  {
    rank: "245",
    name: "Brandon Hagy",
    numEvents: "13",
    totMoney: "$14,555"
  },
  {
    rank: "246",
    name: "Smylie Kaufman",
    numEvents: "5",
    totMoney: "$14,454"
  },
  {
    rank: "247",
    name: "Tom Lehman",
    numEvents: "1",
    totMoney: "$13,952"
  },
  {
    rank: "248",
    name: "Chris Couch",
    numEvents: "3",
    totMoney: "$13,166"
  },
  {
    rank: "249",
    name: "Ricky Barnes",
    numEvents: "9",
    totMoney: "$12,736"
  },
  {
    rank: "250",
    name: "Brendon de Jonge",
    numEvents: "4",
    totMoney: "$11,904"
  },
  {
    rank: "251",
    name: "Dicky Pride",
    numEvents: "3",
    totMoney: "$11,280"
  },
  {
    rank: "252",
    name: "Brian Davis",
    numEvents: "7",
    totMoney: "$10,500"
  },
  {
    rank: "253",
    name: "Charlie Beljan",
    numEvents: "3",
    totMoney: "$8,670"
  },
  {
    rank: "254",
    name: "Robert Allenby",
    numEvents: "3",
    totMoney: "$7,540"
  },
  {
    rank: "255",
    name: "John Merrick",
    numEvents: "3",
    totMoney: "$6,926"
  },
  {
    rank: "256",
    name: "Ken Duke",
    numEvents: "1",
    totMoney: "$6,450"
  },
  {
    rank: "257",
    name: "Jason Bohn",
    numEvents: "3",
    totMoney: "$5,970"
  },
  {
    rank: "T258",
    name: "Charlie Wi",
    numEvents: "1",
    totMoney: "$5,910"
  },
  {
    rank: "T258",
    name: "Jonathan Kaye",
    numEvents: "2",
    totMoney: "$5,910"
  },
  {
    rank: "260",
    name: "Omar Uresti",
    numEvents: "2",
    totMoney: "$5,760"
  }
];

module.exports = function() {
  return db.playerForm.bulkCreate(playerForm);
};
