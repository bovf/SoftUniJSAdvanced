// •	chop - divide the number by two
// •	dice - square root of a number
// •	spice - add 1 to the number
// •	bake - multiply number by 3
// •	fillet - subtract 20% from number

function cookingByNumbers(number, firstCommand, secondCommand, thirdCommand, fourthCommand, fifthCommand) {
    number = parseInt(number);
    function chop(input){
        let result = input / 2;
        return result;
    }
    function dice(input){
        let result = Math.sqrt(input);
        return result;
    }
    function spice(input){
        let result = input + 1;
        return result;
    }
    function bake(input){
        let result = input * 3;
        return result;
    }
    function fillet(input){
        let result = input - (input * 0.2);
        return result;
    }

    let commandArray = [firstCommand, secondCommand, thirdCommand, fourthCommand, fifthCommand];
    for (let command of commandArray) {
        if (command === "chop") {number = chop(number);}
        if (command === "dice") {number = dice(number);}
        if (command === "spice") {number = spice(number);}
        if (command === "bake") {number = bake(number);}
        if (command === "fillet") {number = fillet(number);}
        console.log(number)
    }
}

cookingByNumbers("9", "dice", "spice", "chop", "bake", "fillet")