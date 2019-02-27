
// Roster of player
var roster = [{
 name: "Doug",
    position: "Quarterback",
    madeTeam: true
},
{
name: "Antonio",
  position: "Tight End",
  madeTeam: true
},
{
  name: "Nick",
  position: "Kicker",
    madeTeam: false
},
{
  name: "Ereck",
  position: "Offensive Live",
   madeTeam: false
},
{
  name: "AJ",
  position: "Line Backer",
  madeTeam: true
 }];

var team = roster.filter(roster => roster.madeTeam);

console.log(team);
console.log(`${team.length} made the team\n${roster.length- team.length} did not.`);

