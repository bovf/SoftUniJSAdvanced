window.addEventListener('load', solve);

function solve() {
    const buttonAdd = document.getElementById('add');
    buttonAdd.addEventListener('click', addFurniture);

    function addFurniture(e) {
        e.preventDefault();
        const priceToAdd = parseFloat(document.getElementById('price').value);
        const modelToAdd = document.getElementById('model').value;
        const yearToAdd = document.getElementById('year').value;
        const descToAdd = document.getElementById('description').value;
        let table = document.getElementById('furniture-list');
        if (
            priceToAdd.length < 1 | modelToAdd.length < 1 | yearToAdd.length < 1 | descToAdd.length < 1) {
                return;
            }

        let rowInfo = document.createElement('tr');
        rowInfo.classList.add('info');
        let rowHide = document.createElement('tr');
        rowHide.classList.add('hide');
        let colModel = document.createElement('td');
        colModel.innerHTML = modelToAdd
        let colPrice = document.createElement('td');
        colPrice.appendChild(document.createTextNode(priceToAdd.toFixed(2)));
        let colYear = document.createElement('td');
        colYear.innerHTML = `Year: ${yearToAdd}`
        let colDesc = document.createElement('td');
        colDesc.innerHTML = `Description: ${descToAdd}`;
        colDesc.colSpan = '3';
        let btnInfo = document.createElement('button');
        btnInfo.classList.add('moreBtn');
        btnInfo.innerHTML = 'More Info';
        btnInfo.addEventListener('click', showInfo);
        function showInfo (){
            if (btnInfo.innerHTML === "Less Info") {
                btnInfo.innerHTML = 'More Info';
                rowHide.style.display = '';
            } else {
                btnInfo.innerHTML = 'Less Info';
                rowHide.style.display = 'contents'
            }
        }
        let btnBuy = document.createElement('button');
        btnBuy.classList.add('buyBtn');
        btnBuy.innerHTML = 'Buy it';
        btnBuy.addEventListener('click', buyModel);
        function buyModel (e){
            const totalPrice = document.querySelectorAll(".total-price")
            const buyInfo = e.target.parentElement.parentElement;
            const buyHide = buyInfo.nextElementSibling;

            buyHide.parentElement.removeChild(buyHide);

            const price = parseFloat(buyInfo.querySelectorAll('td')[1].textContent);
            totalPrice[0].textContent = (parseFloat(totalPrice[0].textContent) + price).toFixed(2);
            buyInfo.parentElement.removeChild(buyInfo);
            
        //     const tableRows = Array.from(table.children);
        //     let totalPrice = 0;
        //     for (let index = 0; index < tableRows.length; index += 2) {
        //         const row = tableRows[index];
        //         totalPrice += parseFloat(row.children[1].textContent);
        //         console.log(totalPrice);
        //     }
        //     const total = document.getElementsByClassName('total-price')[0];
        //    total.textContent =  totalPrice.toFixed(2);
        //    for (let index = 0; index < tableRows.length; index ++) {
        //     const row = tableRows[index];
        //     table.removeChild(table.firstChild);
        }
        colBtn = document.createElement('td');
        colBtn.appendChild(btnInfo);
        colBtn.appendChild(btnBuy);
        rowInfo.appendChild(colModel);
        rowInfo.appendChild(colPrice);
        rowInfo.appendChild(colBtn);

        rowHide.appendChild(colYear);
        rowHide.appendChild(colDesc);

        table.appendChild(rowInfo);
        table.appendChild(rowHide);

        
    }
    document.getElementById('price').value = '';
    document.getElementById('model').value = '';
    document.getElementById('year').value = '';
    document.getElementById('description').value = '';

}
