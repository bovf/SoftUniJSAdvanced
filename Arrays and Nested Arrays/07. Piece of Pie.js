function pieceOfPie(myArr, startString, endString) {
    const newArr = []
    let toAdd = false
    for (const myArrKey of myArr) {
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
    return(newArr)
}
console.log(pieceOfPie(['Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie', 'Sugar Cream Pie'],'Key Lime Pie','Lemon Meringue Pie'))