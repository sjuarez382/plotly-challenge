//Use the D3 library to read in samples.json
d3.json("samples.json").then(function createPlotly(data) {
    console.log(data);
    var testid = data.names;
    console.log(testid);

    d3.select("#selDataset")
    .selectAll("option")
    .data(testid)
    .enter()
    .append("option")
    .htlm(function(d) {
        return `option>${d}</option>`;
    });
});
//Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

