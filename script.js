function createTable() {
    var rows = parseInt(prompt("Input number of rows"));
    var columns = parseInt(prompt("Input number of columns"));
    
    var table = document.getElementById("myTable");

    // Clear existing table content
    table.innerHTML = '';

    for (var i = 0; i < rows; i++) {
        var row = table.insertRow(i);
        for (var j = 0; j < columns; j++) {
            var cell = row.insertCell(j);
            cell.textContent = "Row-" + i + " Column-" + j;
        }
    }
}
