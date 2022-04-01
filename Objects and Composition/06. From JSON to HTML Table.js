function fromJSONToHTML(json) {
    let result = `<table>\n`;
    const objArr = JSON.parse(json);
    var col = [];
    for (var i = 0; i < objArr.length; i++) {
        for (var key in objArr[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }
    let headerLine = `<tr>`;
    for (const key of col) {
        headerLine += `<th>${key}</th>`;
    }
    headerLine += `</tr>`;
    result += `    ` + headerLine + `\n`;

    for (const obj of objArr) {
        let line = `    <tr>`;
        for (const key of col) {
            line += `<td>${obj[key]}</td>`;
        }
        line += `</tr>\n`;
        result += line;
    }
    console.log(result + `</table>`);
}

const json = `[{"Name":"Stamat","Score":5.5},{"Name":"Rumen","Score":6}]`;
fromJSONToHTML(json);