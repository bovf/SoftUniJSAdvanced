function colorize() {
    const rows = document.querySelectorAll(`table tr`);
        for (let index = 1; index < rows.length; index+=2) {
            const row = rows[index];
            row.style.backgroundColor = `teal`;
            
        }
    console.log(rows);
}