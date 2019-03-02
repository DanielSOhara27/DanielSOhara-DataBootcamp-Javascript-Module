// Assign the data from `data.js` to a descriptive variable
var people = data;

// Select the submit button
var submit = d3.select("#submit");

// Complete the click handler for the form
submit.on("click", function() {

  // Prevent the page from refreshing
    d3.event.preventDefault();
  // Select the input element and get the raw HTML node
    let inputObject = d3.select("#patient-form-input");
  // Get the value property of the input element
    console.log(data);
    let inputValue = inputObject.property("value");
    console.log(inputValue);
  // Use the form input to filter the data by blood type
    let filteredData = data.filter( patient => patient.bloodType.toLowerCase() === inputValue.toLowerCase());
    console.log(filteredData);
  // BONUS: Calculate summary statistics for the age field of the filtered data

  // First, create an array with just the age values
    let ages = filteredData.map( patient => patient.age);
  // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
    let median = math.median(ages);
    let mean = math.mean(ages);
    let mode = math.mode(ages);
    let variance = math.var(ages);
    let std = math.std(ages);
  // Finally, add the summary stats to the `ul` tag
   let list =  d3.select("ul");
   list.html("");
   list.append("li").text(`Mean: ${mean}`);
   list.append("li").text(`Median: ${median}`);
   list.append("li").text(`Mode: ${mode}`);
   list.append("li").text(`Variance: ${variance}`);
   list.append("li").text(`Standard Deviation: ${std}`);
});
