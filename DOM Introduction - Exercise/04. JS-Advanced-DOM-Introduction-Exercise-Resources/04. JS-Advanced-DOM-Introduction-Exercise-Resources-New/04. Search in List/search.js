function search() {
   
   const elements = document.querySelectorAll("ul li");
   const text = document.getElementById("searchText");
   let matches = 0;
   
   for (const el of elements) {
      if (el.innerHTML.indexOf(text.value) !== -1) {
         el.style.fontWeight = "bold";
         el.style.textDecoration = "underline";
         matches += 1;
      } else {
         el.style.fontWeight = "normal";
         el.style.textDecoration = "";
      }
   }
   document.getElementById("result").textContent = `${matches} matches found`;
}
