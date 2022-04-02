function sumTable() {
    const rows = document.querySelectorAll('table tr');
    let result = 0;
    for (let index = 1; index < rows.length - 1; index++) {
        const element = rows[index];
        // console.log((element.childNodes[2].firstChild));
        // const cost = Number((element.childNodes[2].firstChild).nodeValue);
        const cell = element.lastElementChild;
        const cost = Number(cell.textContent);
        // console.log(cost);
        result += cost;
    }
    // console.log(rows);
    // (rows[-1].childNodes[2].firstChild).nodeValue = result;
    console.log(result);
    document.getElementById('sum').textContent = result;
}