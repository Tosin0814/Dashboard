const generateTableHead = (table, data) => {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement('th');
        if (key === null) {
            th.appendChild(document.createTextNode(""));
            row.appendChild(th)
        } else {
            th.appendChild(document.createTextNode(key));
            row.appendChild(th)
        }
    };
    const showElementNum = document.createElement('th')
    showElementNum.appendChild(document.createTextNode("Number of Elements"));
    row.appendChild(showElementNum)
}

const generateTableRows = (table, data) => {
    let newRow = table.createTBody().insertRow(-1);
    let elementNum = 0
    console.log(elementNum)
    data.map((row, index) => {
        let newCell = newRow.insertCell();
        if (row === null && index > 0) {
            newCell.style.backgroundColor='red'
            newCell.appendChild(document.createTextNode(''));
        } else if (row !== null && index === 0){
            newCell.appendChild(document.createTextNode(row))
            newCell.style.fontWeight='bold'
        } else if ((row !== null) && (index > 0)){
            newCell.style.backgroundColor='green'
            newCell.appendChild(document.createTextNode('xxxx'))
            elementNum +=1
        }
    });
    newRow.insertCell().appendChild(document.createTextNode(elementNum))
}

const input = document.getElementById('input');


input.addEventListener('change', function () {
    readXlsxFile(input.files[0])
    .then(function (data) {
        data.map((row, index) => {
            if (index === 0){
                let table = document.getElementById('table-data');
                generateTableHead(table, row);
            }else {
                let table = document.getElementById('table-data');
                generateTableRows(table, row);
            }
        })
    })
})