// window.alert('connected')

const input = document.getElementById('input');

const generateTableHead = (table, data) => {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement('th');
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th)
    };
}

const generateTableRows = (table, data) => {
    let newRow = table.insertRow(-1);
    data.map((row, index) => {
        let newCell = newRow.insertCell();
        let newText = document.createTextNode(row);
        newCell.appeendChild(newText);
    });
}

input.addEventListener('change', function () {
    readXlsxFile(input.files[0])
    .then(function (data) {
        // console.log(data)
        let i= 0;
        data.map((row, index) => {
            if (i === 0){
                let table = document.getElementById('table-data');
                generateTableHead(table, row);
            }

            if (i > 0) {
                let table = document.getElementById('table-data');
                generateTableRows(table, row);
            }
        })
    })
})