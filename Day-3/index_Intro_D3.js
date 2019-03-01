//This will help you select an element from the DOM, for this example we are using a css class as the selector
var text1 = d3.select(".text1").text();
console.log(text1);

//We are now changing the text of the DOM element
d3.select(".text1").text("We changed this text using D3");

//Accessing an element by ID
var text2 = d3.select("#text2").text();
console.log(text2);

//Accessing an element by TAG - This has the limitation that it only selects the first H1 Tag in finds in the DOM
d3.select("h1").text("This is a new header for a tag without an ID or Class");

//Getting the link in the doc in parts
var myLink = d3.select(".my-link").html();
console.log(myLink);
//This returns an Array with the results
var myLinkArray = d3.select(".my-link > a");
console.log(myLinkArray);
//Getting the HREF url as a string
var myLinkValue = myLinkArray.attr("href");
console.log(myLinkValue);
//Changing the url into another one
myLinkArray.attr("href", "https://google.com");

myLinkArray.attr("href", "https://facebook.com").text("This is now a link to Facebook");

//Changing styles in the DOM
d3.selectAll("li").style("color", "red");

//Appending new elements into the DOM
var newLI = d3.select("ul").append("li");
newLI.text("I'm the new element added dynamically");

//Another way of appending a new element
d3.select("ul").append("li").text("I'm the even newer element");