function validChecker(x1, y1, x2, y2){
    function checkValidity(x1, y1, x2, y2){
        let distance = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2))
        if (Number.isInteger(distance)) {console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);}
        else {console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);}
    }
    checkValidity(x1,y1, 0, 0);
    checkValidity(x2,y2, 0, 0);
    checkValidity(x1,y1, x2, y2);

}

validChecker(3,0,0,4);
validChecker(2,1,1,1);