/*Create 4 group of display
var groups = [
  { 'id': 1, 'name': 'Student1', 'confirmed': false },
  { 'id': 2, 'name': 'Student2', 'confirmed': true },
  { 'id': 3, 'name': 'Student3', 'confirmed': false },
  { 'id': 4, 'name': 'Student4', 'confirmed': false },
  { 'id': 5, 'name': 'Student5', 'confirmed': true },
  { 'id': 6, 'name': 'Student6', 'confirmed': true },
  { 'id': 7, 'name': 'Student7', 'confirmed': true },
  { 'id': 8, 'name': 'Student8', 'confirmed': true }
];
Time to complete: About 15 minutes.
Summary: Display the above data in 4 columns so that each has 2 rows of student details.*/

var groups = [
    { 'id': 1, 'name': 'Student1', 'confirmed': false },
    { 'id': 2, 'name': 'Student2', 'confirmed': true },
    { 'id': 3, 'name': 'Student3', 'confirmed': false },
    { 'id': 4, 'name': 'Student4', 'confirmed': false },
    { 'id': 5, 'name': 'Student5', 'confirmed': true },
    { 'id': 6, 'name': 'Student6', 'confirmed': true },
    { 'id': 7, 'name': 'Student7', 'confirmed': true },
    { 'id': 8, 'name': 'Student8', 'confirmed': true }
];

var table = document.createElement("table");

var count = 0;
document.body.appendChild(table);
for (var i = 0; i < 2; i++) {
    var tr = document.createElement("tr");
    table.appendChild(tr);
    for (var j = 0; j < 4; j++) {
        var td = document.createElement("td");
        tr.appendChild(td);
        td.textContent = "id : " + groups[count].id + ", name : " +
            groups[count].name + ", confirmed :" + groups[count].confirmed + "   |";
        count++;
    }
}