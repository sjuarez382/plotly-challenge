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

    var dropdownMenu = d3.select("#selDataset");
    var dropdownValue = dropdownMenu.property("value");
    var index = testid.indedOf(dropdownValue);

    d3.select("#sample-metadata").html("");
    d3.select("#sample-metadata")
        .selectAll("p")
        .data(Object.defineProperties(data.metadata[index]))
        .enter()
        .append("p")
        .html(function(d) {
            return `${d[0]}:${d[1]}`;
        });
    console.log(Object.defineProperties(data.metadata[index]));
});
//Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

