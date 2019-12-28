var db = require("../models");

var playerRankings = [
  {
    ranking: "1",
    name: "Brooks Koepka",
    money: "$9,684,006"
  },
  {
    ranking: "2",
    name: "Rory McIlroy",
    money: "$7,785,286"
  },
  {
    ranking: "3",
    name: "Matt Kuchar",
    money: "$6,294,690"
  },
  {
    ranking: "4",
    name: "Patrick Cantlay",
    money: "$6,121,488"
  },
  {
    ranking: "5",
    name: "Gary Woodland",
    money: "$5,690,965"
  },
  {
    ranking: "6",
    name: "Xander Schauffele",
    money: "$5,609,456"
  },
  {
    ranking: "7",
    name: "Dustin Johnson",
    money: "$5,534,619"
  },
  {
    ranking: "8",
    name: "Justin Thomas",
    money: "$5,013,084"
  },
  {
    ranking: "9",
    name: "Jon Rahm",
    money: "$4,990,110"
  },
  {
    ranking: "10",
    name: "Webb Simpson",
    money: "$4,690,572"
  },
  {
    ranking: "11",
    name: "Justin Rose",
    money: "$4,358,849"
  },
  {
    ranking: "12",
    name: "Tony Finau",
    money: "$4,344,380"
  },
  {
    ranking: "13",
    name: "Paul Casey",
    money: "$4,257,040"
  },
  {
    ranking: "14",
    name: "Adam Scott",
    money: "$4,084,541"
  },
  {
    ranking: "15",
    name: "Rickie Fowler",
    money: "$3,945,810"
  },
  {
    ranking: "16",
    name: "Marc Leishman",
    money: "$3,886,577"
  },
  {
    ranking: "17",
    name: "Tommy Fleetwood",
    money: "$3,853,651"
  },
  {
    ranking: "18",
    name: "Chez Reavie",
    money: "$3,660,909"
  },
  {
    ranking: "19",
    name: "Patrick Reed",
    money: "$3,593,844"
  },
  {
    ranking: "20",
    name: "Shane Lowry",
    money: "$3,490,098"
  },
  {
    ranking: "21",
    name: "Kevin Kisner",
    money: "$3,489,144"
  },
  {
    ranking: "22",
    name: "Francesco Molinari",
    money: "$3,467,143"
  },
  {
    ranking: "23",
    name: "Hideki Matsuyama",
    money: "$3,335,137"
  },
  {
    ranking: "24",
    name: "Tiger Woods",
    money: "$3,199,615"
  },
  {
    ranking: "25",
    name: "Bryson DeChambeau",
    money: "$3,186,232"
  },
  {
    ranking: "26",
    name: "Brandt Snedeker",
    money: "$3,122,936"
  },
  {
    ranking: "27",
    name: "Charles Howell III",
    money: "$3,039,049"
  },
  {
    ranking: "28",
    name: "Corey Conners",
    money: "$2,919,864"
  },
  {
    ranking: "29",
    name: "Ryan Palmer",
    money: "$2,873,316"
  },
  {
    ranking: "30",
    name: "Sungjae Im",
    money: "$2,851,134"
  },
  {
    ranking: "31",
    name: "Sung Kang",
    money: "$2,801,650"
  },
  {
    ranking: "32",
    name: "Abraham Ancer",
    money: "$2,688,625"
  },
  {
    ranking: "33",
    name: "Scott Piercy",
    money: "$2,679,915"
  },
  {
    ranking: "34",
    name: "Jim Furyk",
    money: "$2,669,938"
  },
  {
    ranking: "35",
    name: "Jason Day",
    money: "$2,637,480"
  },
  {
    ranking: "36",
    name: "Lucas Glover",
    money: "$2,613,965"
  },
  {
    ranking: "37",
    name: "Louis Oosthuizen",
    money: "$2,539,183"
  },
  {
    ranking: "38",
    name: "J.T. Poston",
    money: "$2,461,215"
  },
  {
    ranking: "39",
    name: "Phil Mickelson",
    money: "$2,440,221"
  },
  {
    ranking: "40",
    name: "Andrew Putnam",
    money: "$2,439,137"
  },
  {
    ranking: "41",
    name: "Keith Mitchell",
    money: "$2,405,360"
  },
  {
    ranking: "42",
    name: "Rory Sabbatini",
    money: "$2,382,298"
  },
  {
    ranking: "43",
    name: "C.T. Pan",
    money: "$2,362,399"
  },
  {
    ranking: "44",
    name: "Jason Kokrak",
    money: "$2,330,212"
  },
  {
    ranking: "45",
    name: "Kevin Tway",
    money: "$2,300,050"
  },
  {
    ranking: "46",
    name: "Kevin Na",
    money: "$2,257,309"
  },
  {
    ranking: "47",
    name: "Si Woo Kim",
    money: "$2,191,808"
  },
  {
    ranking: "48",
    name: "Billy Horschel",
    money: "$2,187,249"
  },
  {
    ranking: "49",
    name: "Ian Poulter",
    money: "$2,162,306"
  },
  {
    ranking: "50",
    name: "J.B. Holmes",
    money: "$2,147,065"
  },
  {
    ranking: "51",
    name: "Jordan Spieth",
    money: "$2,124,192"
  },
  {
    ranking: "52",
    name: "Max Homa",
    money: "$2,063,606"
  },
  {
    ranking: "53",
    name: "Adam Hadwin",
    money: "$2,039,012"
  },
  {
    ranking: "54",
    name: "Nate Lashley",
    money: "$2,030,287"
  },
  {
    ranking: "55",
    name: "Byeong Hun An",
    money: "$1,990,033"
  },
  {
    ranking: "56",
    name: "Joel Dahmen",
    money: "$1,949,958"
  },
  {
    ranking: "57",
    name: "Rafa Cabrera Bello",
    money: "$1,926,935"
  },
  {
    ranking: "58",
    name: "Keegan Bradley",
    money: "$1,902,797"
  },
  {
    ranking: "59",
    name: "Ryan Moore",
    money: "$1,838,788"
  },
  {
    ranking: "60",
    name: "Sergio Garcia",
    money: "$1,793,027"
  },
  {
    ranking: "61",
    name: "Collin Morikawa",
    money: "$1,754,890"
  },
  {
    ranking: "62",
    name: "Emiliano Grillo",
    money: "$1,752,114"
  },
  {
    ranking: "63",
    name: "Vaughn Taylor",
    money: "$1,723,910"
  },
  {
    ranking: "64",
    name: "Cameron Champ",
    money: "$1,695,748"
  },
  {
    ranking: "65",
    name: "Graeme McDowell",
    money: "$1,671,523"
  },
  {
    ranking: "66",
    name: "Adam Long",
    money: "$1,648,007"
  },
  {
    ranking: "67",
    name: "Kiradech Aphibarnrat",
    money: "$1,630,073"
  },
  {
    ranking: "68",
    name: "Kevin Streelman",
    money: "$1,588,881"
  },
  {
    ranking: "69",
    name: "Dylan Frittelli",
    money: "$1,576,974"
  },
  {
    ranking: "70",
    name: "Jhonattan Vegas",
    money: "$1,566,910"
  },
  {
    ranking: "71",
    name: "Bubba Watson",
    money: "$1,558,014"
  },
  {
    ranking: "72",
    name: "Harold Varner III",
    money: "$1,553,149"
  },
  {
    ranking: "73",
    name: "Troy Merritt",
    money: "$1,531,143"
  },
  {
    ranking: "74",
    name: "Danny Lee",
    money: "$1,524,126"
  },
  {
    ranking: "75",
    name: "Tyrrell Hatton",
    money: "$1,517,396"
  },
  {
    ranking: "76",
    name: "Cameron Smith",
    money: "$1,504,820"
  },
  {
    ranking: "77",
    name: "Charley Hoffman",
    money: "$1,468,855"
  },
  {
    ranking: "78",
    name: "Joaquin Niemann",
    money: "$1,434,519"
  },
  {
    ranking: "79",
    name: "Matt Every",
    money: "$1,413,149"
  },
  {
    ranking: "80",
    name: "Chesson Hadley",
    money: "$1,405,632"
  },
  {
    ranking: "81",
    name: "Henrik Stenson",
    money: "$1,397,370"
  },
  {
    ranking: "82",
    name: "Luke List",
    money: "$1,391,408"
  },
  {
    ranking: "83",
    name: "Matthew Wolff",
    money: "$1,390,433"
  },
  {
    ranking: "84",
    name: "Branden Grace",
    money: "$1,373,185"
  },
  {
    ranking: "85",
    name: "Brian Harman",
    money: "$1,342,778"
  },
  {
    ranking: "86",
    name: "Brian Stuard",
    money: "$1,320,637"
  },
  {
    ranking: "87",
    name: "Michael Thompson",
    money: "$1,307,816"
  },
  {
    ranking: "88",
    name: "Danny Willett",
    money: "$1,286,737"
  },
  {
    ranking: "89",
    name: "Wyndham Clark",
    money: "$1,278,721"
  },
  {
    ranking: "90",
    name: "Adam Schenk",
    money: "$1,257,158"
  },
  {
    ranking: "91",
    name: "J.J. Spaun",
    money: "$1,205,977"
  },
  {
    ranking: "92",
    name: "Russell Henley",
    money: "$1,133,773"
  },
  {
    ranking: "93",
    name: "Russell Knox",
    money: "$1,132,825"
  },
  {
    ranking: "94",
    name: "Kyle Stanley",
    money: "$1,117,604"
  },
  {
    ranking: "95",
    name: "Sam Burns",
    money: "$1,117,312"
  },
  {
    ranking: "96",
    name: "Pat Perez",
    money: "$1,103,241"
  },
  {
    ranking: "97",
    name: "Bud Cauley",
    money: "$1,090,018"
  },
  {
    ranking: "98",
    name: "Scott Stallings",
    money: "$1,080,451"
  },
  {
    ranking: "99",
    name: "Chris Stroud",
    money: "$1,075,552"
  },
  {
    ranking: "100",
    name: "Carlos Ortiz",
    money: "$1,073,962"
  },
  {
    ranking: "101",
    name: "Talor Gooch",
    money: "$1,067,089"
  },
  {
    ranking: "102",
    name: "Kyoung-Hoon Lee",
    money: "$1,061,457"
  },
  {
    ranking: "103",
    name: "Sam Ryder",
    money: "$1,060,735"
  },
  {
    ranking: "104",
    name: "Aaron Wise",
    money: "$1,052,507"
  },
  {
    ranking: "105",
    name: "Cameron Tringale",
    money: "$1,049,106"
  },
  {
    ranking: "106",
    name: "Patrick Rodgers",
    money: "$1,046,838"
  },
  {
    ranking: "107",
    name: "Brian Gay",
    money: "$1,029,440"
  },
  {
    ranking: "108",
    name: "Matt Jones",
    money: "$1,024,852"
  },
  {
    ranking: "109",
    name: "Mackenzie Hughes",
    money: "$1,022,081"
  },
  {
    ranking: "110",
    name: "Brice Garnett",
    money: "$1,019,594"
  },
  {
    ranking: "111",
    name: "Roger Sloan",
    money: "$1,015,661"
  },
  {
    ranking: "112",
    name: "Nick Watney",
    money: "$1,008,964"
  },
  {
    ranking: "113",
    name: "Scott Brown",
    money: "$999,457"
  },
  {
    ranking: "114",
    name: "Patton Kizzire",
    money: "$995,341"
  },
  {
    ranking: "115",
    name: "Ryan Armour",
    money: "$955,468"
  },
  {
    ranking: "116",
    name: "Sebastián Muñoz",
    money: "$946,666"
  },
  {
    ranking: "117",
    name: "Sepp Straka",
    money: "$934,894"
  },
  {
    ranking: "118",
    name: "Jason Dufner",
    money: "$926,365"
  },
  {
    ranking: "119",
    name: "Denny McCarthy",
    money: "$925,156"
  },
  {
    ranking: "120",
    name: "Alex Noren",
    money: "$913,446"
  },
  {
    ranking: "121",
    name: "Kelly Kraft",
    money: "$905,681"
  },
  {
    ranking: "122",
    name: "Aaron Baddeley",
    money: "$904,982"
  },
  {
    ranking: "123",
    name: "Nick Taylor",
    money: "$892,663"
  },
  {
    ranking: "124",
    name: "Andrew Landry",
    money: "$887,405"
  },
  {
    ranking: "125",
    name: "Martin Kaymer",
    money: "$877,761"
  },
  {
    ranking: "126",
    name: "Peter Malnati",
    money: "$864,496"
  },
  {
    ranking: "127",
    name: "Martin Laird",
    money: "$863,054"
  },
  {
    ranking: "128",
    name: "Wes Roach",
    money: "$860,264"
  },
  {
    ranking: "129",
    name: "Richy Werenski",
    money: "$851,329"
  },
  {
    ranking: "130",
    name: "Peter Uihlein",
    money: "$842,991"
  },
  {
    ranking: "131",
    name: "Jonas Blixt",
    money: "$838,271"
  },
  {
    ranking: "132",
    name: "Austin Cook",
    money: "$837,788"
  },
  {
    ranking: "133",
    name: "Bronson Burgoon",
    money: "$814,673"
  },
  {
    ranking: "134",
    name: "Shawn Stefani",
    money: "$798,831"
  },
  {
    ranking: "135",
    name: "Robert Streb",
    money: "$796,525"
  },
  {
    ranking: "136",
    name: "Seamus Power",
    money: "$773,976"
  },
  {
    ranking: "137",
    name: "Ted Potter, Jr.",
    money: "$757,721"
  },
  {
    ranking: "138",
    name: "Ryan Blaum",
    money: "$755,802"
  },
  {
    ranking: "139",
    name: "Zack Sucher",
    money: "$753,782"
  },
  {
    ranking: "140",
    name: "Daniel Berger",
    money: "$742,340"
  },
  {
    ranking: "141",
    name: "Bill Haas",
    money: "$730,806"
  },
  {
    ranking: "142",
    name: "Martin Trainer",
    money: "$692,155"
  },
  {
    ranking: "143",
    name: "Jim Herman",
    money: "$678,185"
  },
  {
    ranking: "144",
    name: "Roberto Castro",
    money: "$674,250"
  },
  {
    ranking: "145",
    name: "Dominic Bozzelli",
    money: "$668,449"
  },
  {
    ranking: "146",
    name: "Josh Teater",
    money: "$663,570"
  },
  {
    ranking: "147",
    name: "Hank Lebioda",
    money: "$656,802"
  },
  {
    ranking: "148",
    name: "Beau Hossler",
    money: "$645,795"
  },
  {
    ranking: "149",
    name: "Scott Langley",
    money: "$635,883"
  },
  {
    ranking: "150",
    name: "Harris English",
    money: "$628,922"
  },
  {
    ranking: "151",
    name: "Stephan Jaeger",
    money: "$623,145"
  },
  {
    ranking: "152",
    name: "Roberto Díaz",
    money: "$620,178"
  },
  {
    ranking: "153",
    name: "Zach Johnson",
    money: "$603,160"
  },
  {
    ranking: "154",
    name: "Johnson Wagner",
    money: "$597,792"
  },
  {
    ranking: "155",
    name: "Tyler Duncan",
    money: "$596,502"
  },
  {
    ranking: "156",
    name: "Jimmy Walker",
    money: "$590,437"
  },
  {
    ranking: "157",
    name: "Tom Hoge",
    money: "$573,464"
  },
  {
    ranking: "158",
    name: "Chase Wright",
    money: "$571,575"
  },
  {
    ranking: "159",
    name: "Jonathan Byrd",
    money: "$550,547"
  },
  {
    ranking: "160",
    name: "Hudson Swafford",
    money: "$545,191"
  },
  {
    ranking: "161",
    name: "Trey Mullinax",
    money: "$536,694"
  },
  {
    ranking: "162",
    name: "Brendan Steele",
    money: "$515,139"
  },
  {
    ranking: "163",
    name: "D.J. Trahan",
    money: "$507,919"
  },
  {
    ranking: "164",
    name: "Brandon Harkins",
    money: "$494,795"
  },
  {
    ranking: "165",
    name: "Kramer Hickok",
    money: "$494,424"
  },
  {
    ranking: "166",
    name: "Jim Knous",
    money: "$490,976"
  },
  {
    ranking: "167",
    name: "Cameron Davis",
    money: "$477,467"
  },
  {
    ranking: "168",
    name: "Alex Prugh",
    money: "$467,732"
  },
  {
    ranking: "169",
    name: "Joey Garber",
    money: "$454,296"
  },
  {
    ranking: "170",
    name: "Anders Albertson",
    money: "$449,226"
  },
  {
    ranking: "171",
    name: "Fabián Gómez",
    money: "$433,027"
  },
  {
    ranking: "172",
    name: "Curtis Luck",
    money: "$432,569"
  },
  {
    ranking: "173",
    name: "Satoshi Kodaira",
    money: "$421,457"
  },
  {
    ranking: "174",
    name: "Anirban Lahiri",
    money: "$419,620"
  },
  {
    ranking: "175",
    name: "Sam Saunders",
    money: "$413,887"
  },
  {
    ranking: "176",
    name: "Ollie Schniederjans",
    money: "$411,682"
  },
  {
    ranking: "177",
    name: "Adam Svensson",
    money: "$405,730"
  },
  {
    ranking: "178",
    name: "David Hearn",
    money: "$397,677"
  },
  {
    ranking: "179",
    name: "José de Jesús Rodríguez",
    money: "$394,402"
  },
  {
    ranking: "180",
    name: "Stewart Cink",
    money: "$368,008"
  },
  {
    ranking: "181",
    name: "Julián Etulain",
    money: "$360,653"
  },
  {
    ranking: "182",
    name: "Seth Reeves",
    money: "$309,588"
  },
  {
    ranking: "183",
    name: "Ernie Els",
    money: "$304,590"
  },
  {
    ranking: "184",
    name: "Ben Silverman",
    money: "$298,497"
  },
  {
    ranking: "185",
    name: "John Chin",
    money: "$294,536"
  },
  {
    ranking: "186",
    name: "Whee Kim",
    money: "$292,773"
  },
  {
    ranking: "187",
    name: "Hunter Mahan",
    money: "$287,579"
  },
  {
    ranking: "188",
    name: "Luke Donald",
    money: "$285,630"
  },
  {
    ranking: "189",
    name: "Kyle Jones",
    money: "$277,762"
  },
  {
    ranking: "190",
    name: "Davis Love III",
    money: "$271,216"
  },
  {
    ranking: "191",
    name: "Chris Kirk",
    money: "$261,401"
  },
  {
    ranking: "192",
    name: "Kevin Chappell",
    money: "$257,024"
  },
  {
    ranking: "193",
    name: "Brendon Todd",
    money: "$252,546"
  },
  {
    ranking: "194",
    name: "Cody Gribble",
    money: "$248,317"
  },
  {
    ranking: "195",
    name: "Vijay Singh",
    money: "$244,800"
  },
  {
    ranking: "196",
    name: "Billy Hurley III",
    money: "$239,396"
  },
  {
    ranking: "197",
    name: "Charl Schwartzel",
    money: "$232,725"
  },
  {
    ranking: "198",
    name: "Nicholas Lindheim",
    money: "$227,124"
  },
  {
    ranking: "199",
    name: "Brady Schnell",
    money: "$210,914"
  },
  {
    ranking: "200",
    name: "Sean O'Hair",
    money: "$201,352"
  },
  {
    ranking: "201",
    name: "Ben Crane",
    money: "$193,074"
  },
  {
    ranking: "202",
    name: "George McNeill",
    money: "$187,950"
  },
  {
    ranking: "203",
    name: "K.J. Choi",
    money: "$185,952"
  },
  {
    ranking: "204",
    name: "Alex Cejka",
    money: "$181,155"
  },
  {
    ranking: "205",
    name: "J.J. Henry",
    money: "$177,232"
  },
  {
    ranking: "206",
    name: "Sangmoon Bae",
    money: "$172,472"
  },
  {
    ranking: "207",
    name: "Padraig Harrington",
    money: "$169,390"
  },
  {
    ranking: "208",
    name: "James Hahn",
    money: "$159,343"
  },
  {
    ranking: "209",
    name: "Jamie Lovemark",
    money: "$145,999"
  },
  {
    ranking: "210",
    name: "Tom Lovelady",
    money: "$145,647"
  },
  {
    ranking: "211",
    name: "Freddie Jacobson",
    money: "$144,500"
  },
  {
    ranking: "212",
    name: "Steve Stricker",
    money: "$135,670"
  },
  {
    ranking: "213",
    name: "Martin Piller",
    money: "$134,029"
  },
  {
    ranking: "214",
    name: "Grayson Murray",
    money: "$125,511"
  },
  {
    ranking: "215",
    name: "Tyrone Van Aswegen",
    money: "$114,780"
  },
  {
    ranking: "216",
    name: "Boo Weekley",
    money: "$107,981"
  },
  {
    ranking: "217",
    name: "Michael Kim",
    money: "$104,936"
  },
  {
    ranking: "218",
    name: "Rod Pampling",
    money: "$102,127"
  },
  {
    ranking: "219",
    name: "John Senden",
    money: "$99,419"
  },
  {
    ranking: "220",
    name: "John Huh",
    money: "$97,255"
  },
  {
    ranking: "221",
    name: "Jason Gore",
    money: "$92,960"
  },
  {
    ranking: "222",
    name: "Morgan Hoffmann",
    money: "$92,212"
  },
  {
    ranking: "223",
    name: "Robert Garrigus",
    money: "$84,191"
  },
  {
    ranking: "224",
    name: "Chris Thompson",
    money: "$81,635"
  },
  {
    ranking: "225",
    name: "Derek Fathauer",
    money: "$76,850"
  },
  {
    ranking: "226",
    name: "Andres Romero",
    money: "$74,786"
  },
  {
    ranking: "227",
    name: "David Lingmerth",
    money: "$71,644"
  },
  {
    ranking: "228",
    name: "Colt Knost",
    money: "$66,493"
  },
  {
    ranking: "229",
    name: "Arjun Atwal",
    money: "$62,095"
  },
  {
    ranking: "230",
    name: "David Toms",
    money: "$61,438"
  },
  {
    ranking: "231",
    name: "Chad Collins",
    money: "$59,164"
  },
  {
    ranking: "232",
    name: "Tim Herron",
    money: "$43,281"
  },
  {
    ranking: "233",
    name: "D.A. Points",
    money: "$43,246"
  },
  {
    ranking: "234",
    name: "Chad Campbell",
    money: "$42,130"
  },
  {
    ranking: "235",
    name: "Daniel Chopra",
    money: "$40,401"
  },
  {
    ranking: "236",
    name: "Y.E. Yang",
    money: "$39,055"
  },
  {
    ranking: "237",
    name: "Trevor Immelman",
    money: "$35,353"
  },
  {
    ranking: "238",
    name: "Stuart Appleby",
    money: "$33,336"
  },
  {
    ranking: "239",
    name: "John Rollins",
    money: "$32,424"
  },
  {
    ranking: "240",
    name: "Parker McLachlin",
    money: "$29,674"
  },
  {
    ranking: "241",
    name: "Mike Weir",
    money: "$27,643"
  },
  {
    ranking: "242",
    name: "Chris Couch",
    money: "$27,166"
  },
  {
    ranking: "243",
    name: "Bernhard Langer",
    money: "$25,415"
  },
  {
    ranking: "244",
    name: "Fred Couples",
    money: "$23,680"
  },
  {
    ranking: "245",
    name: "Ricky Barnes",
    money: "$22,370"
  },
  {
    ranking: "246",
    name: "Tommy Gainey",
    money: "$21,560"
  },
  {
    ranking: "247",
    name: "Rich Beem",
    money: "$18,550"
  },
  {
    ranking: "248",
    name: "Charlie Beljan",
    money: "$18,304"
  },
  {
    ranking: "249",
    name: "Derek Ernst",
    money: "$15,172"
  },
  {
    ranking: "250",
    name: "Robert Allenby",
    money: "$14,715"
  },
  {
    ranking: "251",
    name: "Brandon Hagy",
    money: "$14,555"
  },
  {
    ranking: "252",
    name: "Smylie Kaufman",
    money: "$14,454"
  },
  {
    ranking: "253",
    name: "Tom Lehman",
    money: "$13,952"
  },
  {
    ranking: "254",
    name: "John Merrick",
    money: "$13,611"
  },
  {
    ranking: "255",
    name: "Charlie Wi",
    money: "$12,735"
  },
  {
    ranking: "256",
    name: "Omar Uresti",
    money: "$12,690"
  },
  {
    ranking: "257",
    name: "Brendon de Jonge",
    money: "$11,904"
  },
  {
    ranking: "258",
    name: "Dicky Pride",
    money: "$11,280"
  },
  {
    ranking: "259",
    name: "Brian Davis",
    money: "$10,500"
  },
  {
    ranking: "260",
    name: "John Daly",
    money: "$7,070"
  },
  {
    ranking: "261",
    name: "Heath Slocum",
    money: "$6,685"
  },
  {
    ranking: "262",
    name: "Will MacKenzie",
    money: "$6,510"
  },
  {
    ranking: "263",
    name: "Ken Duke",
    money: "$6,450"
  },
  {
    ranking: "264",
    name: "Jason Bohn",
    money: "$5,970"
  },
  {
    ranking: "265",
    name: "Jonathan Kaye",
    money: "$5,910"
  }
];

module.exports = function() {
  return db.playerRankings.bulkCreate(playerRankings);
};
