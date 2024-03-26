// Script for the Mixed Messages Project 

/* TODO
- Reroll Function for 2 more days? Store the first 2 days, if same days, reroll ! 
- Add more phrases
- Create frontend + style
*/

// Returns a number 0-30
const addDaysToDate = () => {
    return Math.floor(Math.random() * 31);
};

// Returns a date from 0-30 and formats it to DateString
const randomFutureDate = () =>{
    const d = new Date();
    let futureDate = d;
    futureDate.setDate(d.getDate() + addDaysToDate());
    return futureDate.toDateString();
};

//Returns (0/1/2) meaning Good/Average/Bad Day 
const day = () => {
    let randomNumber = Math.floor(Math.floor(Math.random()*3));
    console.log("The day is: " + randomNumber);
    return randomNumber;
};

//Picks a random [i] from the array 
const random = (array) => {
return Math.floor(Math.random() * array.length);
};

//Takes an array, returns a random [i] from the array.
const text = (array) => {
    return array[random(array)];
};

const text1 = "On ";
const text2 = ", you will have ";
const text4 = " day! ";

const posPhrase = ["a good", "a great", "a awesome", "a terrific", "an amazing", "a breathtaking", "a miraculous", "a lucky", "an incredible", "a fantastic"];
const avePhrase = ["a normal", "an average", "a generic", "standard", "an ordinary", "a regular", "a reasonable", "a typical"];
const negPhrase = ["a bad", "an awful", "a terrible", "a horrible", "a crap", "a poor", "a 'meh'", "a so so", "a dreadful", ""];

const posComment = ["Lady Luck is on your side today!", "The Stars say you will live long!", "It's time to resolve that problem!", "Something you lost will appear soon!", 
                    "Know you are loved.", "Life is a series of choices. Today they are good ones!", "Your hardwork will be rewarded!", "You're doing good!",
                     "You should share your luck with me!", "The stars have aligned for you!", "Do it! Just do it! Don't let your dreams be dreams!", "You are the chosen one!", "You are blessed!"];

const aveComment = ["It's an average day", "Come back later", "I have no energy today", "Live as you would", "Error 404: Fortune not found.", "You don't need your fortune read today", 
                    "I see nothing today", "Your fortune is blurry today", "Nothing too out of the ordinary..", "it's a regular day."];

const negComment = ["Wear a helmet!", "Take preventative measures.", "Stay safe!", "Watch your step!", "Don't gamble!", "I can't help you...", "Misfortune greets you", 
                    "You will forget something..", "Eat slowly...", "Maintain a low profile for now", "Don't panic...", "I see money in your future... it is not yours though.", 
                    "Don't take it...", "Snake eyes", "Watch out for friendly fire", "Don't do it!", "Don't eat THAT!", "You will soon have an out-of-money experience." , 
                    "Help! I’m being held hostage by Rogue A.I!." , "Your pet is planning to eat you."];

let dayStatus = day(); //Variable for storing the type of day good/average/bad = 0/1/2

//Takes a day type (number 0/1/2) and returns the appropriate phrase
const phraseType = (number) => {
        switch(number){
            case 0: 
                return text(posPhrase);
            break;
            case 1:
                return text(avePhrase);
            break;
            case 2:
                return text(negPhrase);
            break;
            default:
                return text(posPhrase);
            break;
                    }
                    };

const commentType = (number) => {
            switch(number){
                case 0: 
                    return text(posComment);
                break;
                case 1:
                    return text(aveComment);
                break;
                case 2:
                    return text(negComment);
                break;
                default:
                    return text(posComment);
                break;
                        }
                        };

phraseType(dayStatus);
commentType(dayStatus);


const textGenerator = () => {
    const allText = text1 + randomFutureDate()+ text2+ phraseType(dayStatus) + text4 + "\n" + commentType(dayStatus);
    return allText;
};

console.log("Hello ! " + text1 + randomFutureDate()+ text2+ phraseType(dayStatus) + text4 + "\n" + commentType(dayStatus));

//console.log("This totally works: " + textGenerator);
//console.log();