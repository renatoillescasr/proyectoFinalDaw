// set the dimensions of the canvas
var margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 600 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;


// set the ranges
var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);
var y = d3.scale.linear().range([height, 0]);

// define the axis
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);

// add the SVG element
var svg = d3.select("#grafica2D3").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// load the data
d3.json("/api/product/list", function(error, data) {

    data.products.forEach(function(d) {
        d.slug = d.slug;
        d.qty_M = +d.qty_M;
    });

  // scale the range of the data
  x.domain(data.products.map(function(d) { return d.slug; }));
  y.domain([0, d3.max(data.products, function(d) { return d.qty_M; })]);

  // add axis
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 5)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("qty_M");


  // Add bar chart
  svg.selectAll("bar")
      .data(data.products)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.slug); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.qty_M); })
      .attr("height", function(d) { return height - y(d.qty_M); });

});
