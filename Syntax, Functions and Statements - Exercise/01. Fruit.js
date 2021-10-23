function fruit(fruitKind, weightGrams, pricePerKg) {
    money = pricePerKg * weightGrams / 1000;
    console.log(`I need $${money.toFixed(2)} to buy ${(weightGrams / 1000).toFixed(2)} kilograms ${fruitKind}.`);
}
fruit('orange', 1563, 2.35);