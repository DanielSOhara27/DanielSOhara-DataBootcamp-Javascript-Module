// The new student and grade to add to the table
var newGrade = ["Wash", 79];

// Use D3 to select the table
var myTable = d3.select(".grades.table");
console.log(myTable);

// Use d3 to create a bootstrap striped table
myTable.attr("class", "table table-striped");
// http://getbootstrap.com/docs/3.3/css/#tables-striped

// Use D3 to select the table body
var tBody = myTable.select("tbody");

// Append one table row `tr` to the table body
var tR = tBody.append("tr");
// Append one cell for the student name
tR.append("td").text(newGrade[0]);
// Append one cell for the student grade
tR.append("td").text(newGrade[1]);

//tBody.append("tr").attr("id", "active1").append("td").text("test1");
//tBody.select("#active1").attr("id", null).append("td").text("test2");

//extra code
var table = d3.select("table2");
table.classed("table-striped", true); //this way you can append new classes
table.classed("grades", false); //this way you can remove classes.

delete(tR);
