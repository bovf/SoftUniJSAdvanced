function addItem() {
    let toAdd = document.getElementById("newItemText").value;
    let newLine = document.createElement('li');
    newLine.appendChild(document.createTextNode(toAdd));
    let list = document.getElementById("items");
    list.appendChild(newLine)
    document.getElementById('newItemText').value = ''
}