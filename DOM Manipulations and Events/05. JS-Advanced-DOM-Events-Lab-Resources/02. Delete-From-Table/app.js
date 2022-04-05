function deleteByEmail() {
    let toDelete = document.getElementsByName('email')[0].value;
    let list = document.getElementById('customers');
    let customers = list.lastElementChild;
    // console.log(list.lastElementChild);
    // console.log(customers.children);
    for (const row of Array.from(customers.children)) {
        if (toDelete === row.lastElementChild.textContent) {
            console.log(row.lastElementChild.textContent);
            customers.removeChild(row);
            document.getElementById('result').textContent = "Deleted.";
            return
        }
    }
    document.getElementById('result').textContent = "Not found.";

}