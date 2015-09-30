var Main = {};

Main.Player = function(firstName, lastName, position)
{
	this.FirstName = firstName;
	this.LastName = lastName;
	this.Position = position;

	this.SetFirstName = function(name)
	{
		this.FirstName = name;
	}
}

Main.LeBron = new Main.Player("LeBron", "James", "Small Forward");
Main.Kyrie = new Main.Player("Kyrie", "Irving", "Point Guard");
Main.Kevin = new Main.Player("Kevin", "Love", "Power Forward");
Main.Timofey = new Main.Player("Timofey", "Mozgov", "Center");
Main.Iman = new Main.Player("Iman", "Shumpert", "Shooting Guard");

Main.LeBron.SetFirstName("LeBron");
Main.Kyrie.SetFirstName("Kyrie");
Main.Kevin.SetFirstName("Kevin");
Main.Timofey.SetFirstName("Timofey");
Main.Iman.SetFirstName("Iman");

Main.Player.prototype.GetInfo = function()
{
	return "Last year, " + this.FirstName + " " + this.LastName + " played in the starting " + this.Position + " position for the Cavs.";
}

document.body.innerHTML = Main.LeBron.GetInfo();
document.body.innerHTML += "<br/>";
document.body.innerHTML += "<br/>";
document.body.innerHTML += Main.Kyrie.GetInfo();
document.body.innerHTML += "<br/>";
document.body.innerHTML += "<br/>";
document.body.innerHTML += Main.Kevin.GetInfo();
document.body.innerHTML += "<br/>";
document.body.innerHTML += "<br/>";
document.body.innerHTML += Main.Timofey.GetInfo();
document.body.innerHTML += "<br/>";
document.body.innerHTML += "<br/>";
document.body.innerHTML += Main.Iman.GetInfo();