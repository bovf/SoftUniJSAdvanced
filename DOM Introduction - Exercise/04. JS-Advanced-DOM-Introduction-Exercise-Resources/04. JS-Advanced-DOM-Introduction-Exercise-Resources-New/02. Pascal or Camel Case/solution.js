function solve() {
  //Get Text
  const text = document.getElementById('text').value;

  //Get Convention
  const convention = document.getElementById('naming-convention').value;

  //Convert Text
  let textArr = text.split(" ").map(x => x.toLowerCase());
  let finalResult = ``;
  if (convention === "Camel Case") {
    finalResult = textArr.map( function(x, index, textArr) {
      x = index === 0 ? x : x[0].toUpperCase() + x.slice(1);
      return x;
    }).join('');
    
  } else if (convention === "Pascal Case") {
    finalResult = textArr.map(x => x[0].toUpperCase() + x.slice(1)). join('');
  } else {
    finalResult = "Error!";
  }

  //Append text to result
  document.getElementById(`result`).textContent = finalResult;
}