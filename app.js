// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputField1 = d3.select("#datetime");
var inputField2 = d3.select("#city");
var resetbtn = d3.select("#reset-btn");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

var populate = (dataInput) => {

	dataInput.forEach(ufo_sightings => {
		var row = tbody.append("tr");
		columns.forEach(column => row.append("td").text(ufo_sightings[column])
		)
	});
}

//Populate table
populate(data);

// Select the submit button
var submit = d3.select("#submit");

submit.on("click", function() {
    console.log("hello3")

	console.log(dateInput.property("value"));
	console.log(cityInput.property("value"));
	console.log(stateInput.property("value"));
	console.log(countryInput.property("value"));
	console.log(shapeInput.property("value"));

	var filtered = tableData.filter(et_sighting =>{
		return (et_sighting.datetime===dateInput.property("value") || !dateInput.property("value") ) && 
				  (et_sighting.city===cityInput.property("value") || !cityInput.property("value")) &&
				  (et_sighting.state===stateInput.property("value") || !stateInput.property("value")) &&
				  (et_sighting.country===countryInput.property("value") || !countryInput.property("value")) &&
				  (et_sighting.shape===shapeInput.property("value") || !shapeInput.property("value"))
	   })
	  
	   //run the filtered entries through the displayData function to update the table
	   displayData(filtered);
	  
	  
	  });
	  
	  var filterInputs = d3.selectAll('.form-control');
	  