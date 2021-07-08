// Leanne Thompson July 2021
var svgWidth = 960;
var svgHeight = 500;
// group margins into an object
var margin = { top: 20, right: 40, bottom: 60, left: 100 };
console.log(margin)
var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold the chart, and shift the latter by left and top margins.
var svg = d3.select("#scatter")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Import Data from file location
d3.csv("./assets/data/data.csv").then(function (healthdata) {
    console.log(healthdata);
    // read the data for poverty and healthcare     
    healthdata.forEach(function (data) {
        data.poverty = +data.poverty;
        data.healthcare = +data.healthcare;
    });

    // Step 2: Create scale functions

    var xLinearScale = d3.scaleLinear()
        .domain([0, d3.max(healthdata, d => d.poverty)])
        .range([0, width]);

    var yLinearScale = d3.scaleLinear()
        .domain([0, d3.max(healthdata, d => d.healthcare)])
        .range([height, 0]);

