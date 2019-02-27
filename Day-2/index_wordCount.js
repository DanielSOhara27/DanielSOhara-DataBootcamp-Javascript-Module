var wordDictionary = {};

function wordCount(sentence){

    wordDictionary = {};
    var wordArray = sentence.split(' ');

    wordArray.forEach(function(word){
        if(word in wordDictionary){
            wordDictionary[word] +=1
        }
        else{
            wordDictionary[word] = 1
        }
    });

    console.log(wordDictionary);
}