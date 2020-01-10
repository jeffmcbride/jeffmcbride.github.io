var characters = 79
var characterList = {
	"0":"Mario",
	"1":"Donkey Kong",
	"2":"Link",
	"3":"Samus",
	"4":"Dark Samus",
	"5":"Yoshi",
	"6":"Kirby",
	"7":"Fox",
	"8":"Pikachu",
	"9":"Luigi",
	"10":"Ness",
	"11":"Captain Falcon",
	"12":"Jigglypuff",
	"13":"Peach",
	"14":"Daisy",
	"15":"Bowser",
	"16":"Ice Climbers",
	"17":"Sheik",
	"18":"Zelda",
	"19":"Dr. Mario",
	"20":"Pichu",
	"21":"Falco",
	"22":"Marth",
	"23":"Lucina",
	"24":"Young Link",
	"25":"Ganandorf",
	"26":"Mewtwo",
	"27":"Roy",
	"28":"Chrom",
	"29":"Mr. Game & Watch",
	"30":"Meta Knight",
	"31":"Pit",
	"32":"Dark Pitt",
	"33":"Zero Suit Samus",
	"34":"Wario",
	"35":"Snake",
	"36":"Ike",
	"37":"Pokemon Trainer",
	"38":"Diddy Kong",
	"39":"Lucas",
	"40":"Sonic",
	"41":"King Dedede",
	"42":"Olimar",
	"43":"Lucario",
	"44":"R.O.B.",
	"45":"Toon Link",
	"46":"Wolf",
	"47":"Villager",
	"48":"Mega Man",
	"49":"Wii Fit Trainer",
	"50":"Rosalina & Luma",
	"51":"Little Mac",
	"52":"Greninja",
	"53":"Palutena",
	"54":"Pac Man",
	"55":"Robin",
	"56":"Shulk",
	"57":"Bowser Jr.",
	"58":"Duck Hunt",
	"59":"Ryu",
	"60":"Ken",
	"61":"Cloud",
	"62":"Corrin",
	"63":"Bayoneta",
	"64":"Inkling",
	"65":"Ridley",
	"66":"Simon",
	"67":"Richter",
	"68":"King K. Rool",
	"69":"Isabelle",
	"70":"Incineroar",
	"71":"Piranha Plant",
	"72":"Joker",
	"73":"Hero",
	"74":"Banjo & Kazooie",
	"75":"Terry",
	"76":"Mii Brawler",
	"77":"Mii Swordfighter",
	"78":"Mii Gunner"
}
var index = false

function createBoard() {
    var images = []
    for (i = 1; i < characters + 1; i++) {
        var imageUrl = "characters/" + i + ".jpg"
        images.push(imageUrl);
    }
    var table = "<table>\n";
    for (i = 0; i < images.length; i++) {
        if (i % 12 == 0) {
            table += "\t<tr>\n";
        }
        table += "\t\t<td id = " + i + "><img src=\"" + images[i] + "\"></td>\n";
    }
    return table;
}

function toggleOpacity() {
    for (i = 0; i < characters; i++) {
        $('#' + i).click(function() {
            if ($(this).css("opacity") == 0.25) {
                $(this).css({
                    'opacity': '1'
                })
            }
            else {
                $(this).css({
                    'opacity': '0.25'
                })
            }
        });
    }
}

function chooseRandom(remove = false) {
    for (i = 0; i < characters; i++) {
        $('#' + i).css({
            'border': 'white thick solid'
        })
    }
    bool = false
    if (remove == true && index != false) {
        $('#' + index).css({
            'opacity': '0.25'
        })
    }
    // Get random value from 0-78
    while (bool == false) {
        index = Math.floor(Math.random() * characters)
        if ($('#' + index).css("opacity") != 0.25) {
            console.log(index)
			bool = true;
        }
    }
    $('#' + index).css({
        'border': '#FAED27 thick solid',
        'border-radius': '50%'
    })
	
	$('#char').text("Character: " + characterList[index])
}
// Chosen character = characterList[index]	
$(document).ready(function() {
    var table = createBoard();
    $("#canvas").append(table);
    toggleOpacity();
    $('#rand').click(function() {
        chooseRandom();
    });
    $('#randRemove').click(function() {
        chooseRandom(true);
    });
});