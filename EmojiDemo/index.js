var emoji = require("emojilib").lib;
console.log(emoji);
var input = process.argv;
console.log(input);

var sentence= "";
for(var i =2; i<input.length; i++){
if (i>2 && i<input.length){
    sentence +=  " " +input[i]
}else{
    sentence += input[i];
}
}
console.log(sentence)

for (var word in emoji){
    // console.log(emoji[word].keyword);
    console.log(emoji[word].char);
    emoji[word].keyword.forEach(function(){
        if (sentence == element){
            consloe.log(emoji[word].char)
        }
    })
}