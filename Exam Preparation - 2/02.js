class Restaurant {
  constructor(budget) {
    this.budgetMoney = budget;
    this.menu = {};
    this.stockProducts = {};
    this.history = [];
  }

  loadProducts (productArr) {
    for (const el of productArr) {
      const productInfo = el.split(' ');
      const product = {
        productName: productInfo[0],
        productQuantity: Number(productInfo[1]),
      };
      if (this.budgetMoney >= Number(productInfo[2])) {
        const currentProducts = Object.keys(this.stockProducts);
        if (currentProducts.indexOf(product.productName) !== -1) {
          this.stockProducts[product.productName].productQuantity += product.productQuantity;
        } else {
          this.stockProducts[product.productName] = product;
        }
        this.history.push(`Successfully loaded ${product.productQuantity} ${product.productName}`);
        this.budgetMoney -= productInfo[2];
      } else {
        this.history.push(`There was not enough money to load ${product.productQuantity} ${product.productName}`);
      }

    }
    return this.history.join('\n');
  }
  addToMenu(meal, neededProducts, price) {
  if (Object.keys(this.menu).indexOf(meal) === -1) {
    this.menu[meal] = {
    products: neededProducts,
    price: price
    };
    return Object.keys(this.menu).length === 1 ? `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?` : `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
      } else {
        return `The ${meal} is already in the our menu, try something different.`;
      }

    }

  showTheMenu() {
    let result = ``;
    if (Object.keys(this.menu).length > 0) {    
      for (const meal of Object.keys(this.menu)) {
      result += `${meal} - $ ${this.menu[meal].price}\n`;
      }
    } else {
      result = `Our menu is not ready yet, please come later...`;
    }
    return result;
  }
  makeTheOrder(meal) {
    const isItInTheMenu = Object.keys(this.menu).indexOf(meal) === -1 ? false : true;
    let result = '';
    if (isItInTheMenu) {
      let doWeHaveProducts = false
      for (const products of this.menu[meal].products) {
        const productArr = products.split(" ");
        const productNeeded = productArr[0];
        const productNumber = Number(productArr[1]);


        if (Object.keys(this.stockProducts).indexOf(productNeeded) !== -1 && this.stockProducts[productNeeded].productQuantity > productNumber) {
          result = `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
          doWeHaveProducts = true;
        } else {
          result = `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
          doWeHaveProducts = false;
          break;
        }

      }
      if (doWeHaveProducts) {
        for (const products of this.menu[meal].products) {
          const productArr = products.split(" ");
          const productNeeded = productArr[0];
          const productNumber = Number(productArr[1]);
          this.stockProducts[productNeeded].productQuantity -= productNumber;
        }
        this.budgetMoney += this.menu[meal].price;
      }      
    } else {
      result = `There is not ${meal} yet in our menu, do you want to order something else?`;
    }
    return result;
  }
}


// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
// let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
// console.log(kitchen.showTheMenu());
// let kitchen = new Restaurant(1000);
// kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
// kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
// console.log(kitchen.makeTheOrder('frozenYogurt'));
let kitchen = new Restaurant(1000);
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
