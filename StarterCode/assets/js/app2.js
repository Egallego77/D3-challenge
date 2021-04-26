// D3 Animated Scatter Plot

// Section 1: Pre-Data Setup
// ===========================
// Before we code any data visualizations,
// we need to at least set up the width, height and margins of the graph.
// Note: I also added room for label text as well as text padding,
// though not all graphs will need those specifications.

// Grab the width of the containing box
var width = parseInt(d3.select("#scatter").style("width"));
var height = width - width / 3.9;
var margin = 20;
var labelArea = 110;
var textPadBottom = 40;
var textPadLeft = 40;

// Create the actual canvas for the graph
var svg = d3.select("#scatter") // d3.select() the id "#scatter" element
    .append("svg") // .append() an "svg" tag
    .attr("width", width) // set the 'width' attribute to be your variable width
    .attr("height", height) // set the 'height' attribute to be your variable height
    .attr("class", "chart"); // give it a class of "chart"

var chartGroup = svg.append("g")
    .attr("transform", `translate(${((width - labelArea) / 2 + labelArea)},${(height - margin - textPadBottom)})`)

// Import Data
d3.csv("assets/data/data.csv").then(function (demoData) {

    // print demoData
    //console.log(demoData)

    // Step 1: Parse Data/Cast as numbers
    // ==============================
    demoData.forEach(function (demoData) {
        demoData.poverty = parseInt(demoData.poverty);
        demoData.obesity = parseInt(demoData.obesity);
        demoData.age = parseInt(demoData.age);
        demoData.income = parseInt(demoData.income);
        demoData.healthcare = parseInt(demoData.healthcare);
        demoData.smokes = parseInt(demoData.smokes);
    });

    console.log(demoData)


    // Step 2: Create scale functions
    // ==============================
    var xLinearScale = d3.scaleLinear()
        .domain([20, d3.max(hairData, d => d.hair_length)])
        .range([0, width]);

    var yLinearScale = d3.scaleLinear()
        .domain([0, d3.max(hairData, d => d.num_hits)])
        .range([height, 0]);






});
