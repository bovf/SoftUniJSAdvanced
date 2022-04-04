function solve() {
  const textArr = document.getElementById('input').value.split(".").filter((el) => el != '');
  const output = document.getElementById('output');

  for (let i = 0; i < textArr.length; i+=3) {
    let arr = [];
    for (let y = 0; y < 3; y++) {
      if (textArr[i + y]) {
        arr.push(textArr[i + y]);
      }
      
    }
    let paragraoh = arr.join(". ") + '.';
    output.innerHTML += `<p>${paragraoh}</p>`
  }  
}