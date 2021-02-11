var br = function () { return document.createElement('BR'); }
var errorMsg = "The card should be A,K,Q,J or 2-10"
var myCards = [];
var dealer = ""

function playBJ() {
	var deck = $("input[type='radio'][name='deck']:checked").val();
	myCards = [];
	dealer = ""
	document.body.appendChild(br());
	dealer = promptMsg("", "Enter the dealer's card", errorMsg);
	document.body.append("Dealer's card: " + dealer);
	document.body.appendChild(br());
    var c1 = promptMsg("", "Enter your first card", errorMsg);
    document.body.append("Card #1: " + c1);
    var c2 = promptMsg("", "Enter your second card", errorMsg);
    document.body.appendChild(br());
    document.body.append("Card #2: " + c2);
    document.body.appendChild(br());
    myCards.push(c1, c2);
    suggestAction(myCards, dealer, false)
}

function validCardInput(card) {
    var validStr = "23456789AKQJ";
    //Only card with 2 digits
    if (card == 10) {
        return true;
    }
    //Check for 1 digit, then see if in valid string
    else {
        if (card.length != 1) {
            return false;
        }
        else {
            return validStr.includes(card);
        }
    }
}

function promptMsg(placeHolder, originalMsg, error) {
    var x = prompt(originalMsg, placeHolder);
    while (validCardInput(x) == false) {
        x = prompt(error, placeHolder);
    }
    return x;
}

function suggestAction(cards, dealer, ace) {
    //One deck
    var doubleStr = "";
    var splitStr = "";
    var standStr = "";
    var blackjack = false;
    var sum = 0
    for (var i = 0; i < cards.length; i++) {
        if ("KQJ".includes(cards[i])) {
            sum += 10;
        }
        else if (cards[i] == "A") {
			if (ace != true){
				sum += 11;
				ace = true;
			}
			else{
				sum += 1;
			}
        }
		
        else {
            sum += parseInt(cards[i]);
        }
    }
	if(sum > 21){
		if (ace == true){
			suggestAction(myCards, dealer, true);
			return;
			
		}
		else{
			alert("Sorry, you busted!");
			return;
		}
	}
    //Two of the same cards
    if (cards[0] == cards[1] && cards.length == 2) {
        switch (true) {
            case cards[0] == "A":
                splitStr = "AKQJ2345678910";
                break;
            case (cards[0] == "2"):
                splitStr = "34567";
                break;
            case (cards[0] == "3"):
                splitStr = "4567";
                break;
            case (cards[0] == "4"):
                doubleStr = "56"
                break;
            case (cards[0] == "5"):
                doubleStr = "23456789";
                break;
            case (cards[0] == "6"):
                splitStr = "23456";
                break;
            case (cards[0] == "7"):
                splitStr = "234567";
                break;
            case (cards[0] == "8"):
                splitStr = "AKQJ2345678910";
                break;
            case (cards[0] == "9"):
                splitStr = "2345689";
                standStr = "710A";
                break;
            case "KQJ10".includes(cards[0]):
                standStr = "AKQJ2345678910"
                break;
        }
    }
    else if ((cards[0] == "A" || cards[1] == "A") && cards.length == 2) {
        switch (true) {
            case ("2345".includes(cards[0]) || "2345".includes(cards[1])):
                doubleStr = "456";
                break;
            case (cards[0] == "6" || cards[1] == "6"):
                doubleStr = "23456";
                break;
            case (cards[0] == "7" || cards[1] == "7"):
                doubleStr = "3456";
                standStr = "278A";
                break;
            case (cards[0] == "8" || cards[1] == "8"):
				doubleStr = "6"
				standStr = "AKQJ234578910"
                break;
            case (cards[0] == "9" || cards[1] == "9"):
				standStr = "AKQJ2345678910";
                break;
            default:
                blackjack = true;
        }
    }

    else {

        //More than 2 cards
        switch (true) {
            case (sum == 8):
                doubleStr = "56"
                break;
            case (sum == 9):
                doubleStr = "23456";
                break;
            case (sum == 10):
                doubleStr = "23456789";
                break;
            case (sum == 11):
                doubleStr = "AKQJ2345678910"
                break;
            case (sum == 12):
                standStr = "456";
                break;
            case (sum == 13 || sum == 14 || sum == 15 || sum == 16):
                standStr = "23456";
                break;
            case (sum == 17 || sum == 18 || sum == 19 || sum == 20):
                standStr = "AKQJ2345678910"
                break;
            case (sum == 21):
                blackjack = true;
                break;

        }
    }
	
    if (doubleStr.includes(dealer)) {
        alert("Double");
    }
	 else if (splitStr.includes(dealer)) {
        alert("Split");
    }
    else if (standStr.includes(dealer)) {
        alert("Stand");
    }
    else if (blackjack == true) {
        alert("Blackjack baby!")
    }
    else {
        alert("Hit");
		var nextCard = promptMsg("Next card", "Enter your next card", errorMsg);
		myCards.push(nextCard);
		document.body.append("Card #" + myCards.length + ": " + nextCard);
		document.body.appendChild(br());
		suggestAction(myCards, dealer, false)	
		return;
    }
}


