
function longestInList(words) {
    longest = words[0];
    for (let word of words){
        if(word.length > longest.length)
            longest = word;
    }
    return longest;
}




console.log(longestInList(["England", "Wales", "Scotland", "Northern Ireland"]), `should be "Northern Ireland"`);
console.log(longestInList(["the", "quick", "brown", "fox"]), `should be "quick"`);
console.log(longestInList(["hello", "hi", "greetings", "hey"]), `should be "greetings"`);