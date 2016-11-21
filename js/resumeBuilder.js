/*
This is empty on purpose! Your code to build the resume will go here.
 */

 //$("#main").append("David Waldron");

// var awesomeThoughts = "I am David, and I am awesome!";
//
// var funThoughts = awesomeThoughts.replace("awesome", "fun");

// $("#main").append(funThoughts);


// Resume header
var fullName = "David Waldron";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace ("%data%", fullName);
var formattedRole = HTMLheaderRole.replace ("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// Skills
var skills = ["awesomeness", "programming", "teaching", "JS"]

$("#main").append(skills);
