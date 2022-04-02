function toggle() {
   const button = document.getElementsByClassName(`button`)[0];
   const textBox = document.getElementById(`extra`);
   let buttonState;
   if (textBox.style.display === "block") {
       buttonState = true;
   } else {
       buttonState = false;
   }
   
   if (buttonState) {
        button.textContent = "More";
        textBox.style.display = "none";
   } else {
        button.textContent = "Less";
        textBox.style.display = "block";
   }
}