// Randomly select an episode number for Star Wars
var text = d3.select(".star-wars")
  .text(Math.floor(Math.random() * 8) + 1);

// Select the upvote and downvote buttons
let upvote = d3.select(".upvote");
let downvote = d3.select(".downvote");

// Select the counter h1 element
let counter = d3.select(".counter");
var counterArray = [];

// Use D3 `.on` to attach a click handler for the upvote
upvote.on("click", function(){
    let aux = parseInt(counter.text()) + 1;
    counterArray.push(["upvote", aux]);
    counter.text(aux);
    console.log(counterArray)
});

// Use d3 `.on` to attach a click handler for the downvote
downvote.on("click", function(){
    let aux = parseInt(counter.text()) - 1;
    counterArray.push(["downvote", aux]);
    counter.text(aux);
    console.log(counterArray);
});