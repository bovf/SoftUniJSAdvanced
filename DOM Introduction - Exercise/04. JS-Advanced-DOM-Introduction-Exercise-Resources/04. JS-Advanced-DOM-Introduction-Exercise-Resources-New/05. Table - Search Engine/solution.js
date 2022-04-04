function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const students = document.getElementsByClassName('container')[0].lastElementChild;
      const text = document.getElementById('searchField').value;
      for (const row of students.getElementsByTagName('tr')) {
         for (const cell of row.getElementsByTagName('td')) {
            if (cell.textContent.indexOf(text) != -1) {
               row.classList.add("select");
               break;
            } else {
               row.classList.remove("select");
            }
         }

      }
      document.getElementById('searchField').value = ''
   }
}