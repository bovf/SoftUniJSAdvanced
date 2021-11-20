const myArr = ['Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie', 'Sugar Cream Pie']
let startString = 'Key Lime Pie'
let endString = 'Lemon Meringue Pie'

const newArr = []
for (const newArrElement of newArr) {
    
}
let toAdd = false
for (const myArrKey in myArr) {
    if (startString === myArrKey) {
        toAdd = true
    }
    if (toAdd) {
        newArr.push(myArrKey)
    }
    if (endString === myArrKey) {
        toAdd = false
    }
}
console.log(newArr)