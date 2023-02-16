//initial number of cookies
var num = 0;

window.onload = function () {
        var name = prompt("What is your name");

        var space = document.getElementById("space");

        space.innerHTML = name + "'s Monkeytown";
}

var cookie = document.getElementById("monkey");

function MonkeyClick() {
    num += 1;

    var numbers = document.getElementById("numbers");

    //upgrade level for printing
    var upgradeLevel = document.getElementById("upgradeLevel");

    numbers.innerHTML = num;
    //automatic Granny upgrade to 2x
    if(num >= 30 ){
        num += 2;
        upgradeLevel.innerHTML = "Orang-utan Level";
    }

    //automatic factory upgrade to 10x
    if(num >= 500) {
        num += 10;
        upgradeLevel.innerHTML = "Chimpanzee Level";
    }

    //automatic plant upgrade to 30x
    if(num >= 1000) {
        num += 30;
        upgradeLevel.innerHTML = "Gorilla Level";
    }

    //automatic super factory upgrade to 1000x
    if(num >= 100000) {
        num += 1000;
        upgradeLevel.innerHTML = "SuperMonkey Level";
    }
    if(num >= 10000000) {
            num += 100000;
            upgradeLevel.innerHTML = "Monkeyboss Level";
        }
    if(num >= 1000000000000) {
	       num += 1000000000;
		  upgradeLevel.innerHTML = "Extrem Level";
	   }
}

