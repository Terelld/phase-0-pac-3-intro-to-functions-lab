function shout(string) {
    "Hello!".toUpperCase()
    return string.toUpperCase();
}

function whisper(string) {
    "hello".toLowerCase()
    return string.toLowerCase();
}

function logShout(string) {
"Hello!".toUpperCase()
console.log(string.toUpperCase());
}

function logWhisper(string) {
    "Hello!".toLowerCase()
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
   if (string === string.toLowerCase()) {
       return "I can't hear you!";
   } 
   else if (string.toUpperCase() === string) {
       return "YES INDEED!";
   }
   else if (string === "Let's have dinner together!") {
       return "I would love to!";
   }
}