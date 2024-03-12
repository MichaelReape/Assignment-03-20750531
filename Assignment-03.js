function test() {
  var table = document.getElementById("my-table");
  var count = [];
  for (var i = 1, row; (row = table.rows[i]); i++) {
    for (var j = 2, col; (col = row.cells[j]); j++) {
      //   console.log(i - 1);
      count[i - 1] += parseInt(row.cells[j].innerHTML);
      console.log(count[i - 1]);
    }
  }
  for (var i = 0; i < count.length; i++) {
    console.log(count[i] / 5, "\n");
  }
}
//use json for student data instead of hard code in html
