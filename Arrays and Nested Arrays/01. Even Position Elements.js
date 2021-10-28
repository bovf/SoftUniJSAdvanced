function elementsEvenPosition(array) {
    const evenArray = []
    for (let i = 0; i < array.length; i++) {
        let element = 0
        if (i % 2 === 0) {
            let element = array[i];
            evenArray.push(element)
        }
    }
    console.log(...evenArray)
}
elementsEvenPosition([1,2,3,4,5,6])