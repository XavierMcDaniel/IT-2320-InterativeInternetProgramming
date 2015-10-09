function displayDrummers(drummers) {

	for (var i = 0; i < drummers.list.length; i++)
	{
		var drummer = drummers.list[i];
		alert(drummer.firstName + " " + drummer.lastName);
	}
	
}

function createList() {
	
	return {
		"list" : [
			{
				"firstName" : "Espen",
				"lastName" : "Aalberg"
			},

			{
				"firstName" : "Candido",
				"lastName" : "Camero"
			},
			
			{
				"firstName" : "Tiny",
				"lastName" : "Bradshaw"
			},

			{
				"firstName" : "Nick",
				"lastName" : "Ceroli"
			},

			{
				"firstName" : "Anthony",
				"lastName" : "Brown"
			}
		]
	};
}

$(document).ready(function()
{
	
	$(".clickHere").click(function()
	{
		var drummers = createList();
		displayDrummers(drummers);
	});
	
});