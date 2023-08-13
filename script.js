const form = document.getElementById('myForm');
const table = document.getElementById('myTable');

form.addEventListener('submit', (event) =>{
  event.preventDefault();
  table.style.display='inline-block';
  // table.style.border='2px solid black';
  
  const name =document.getElementById('name').value;
  const email =document.getElementById('email').value;
//alert("hi");
  const row = table.insertRow();
  const nameCell = row.insertCell();
  const emailCell = row.insertCell();
//alert("hi");
  nameCell.innerHTML = name;
  emailCell.innerHTML = email;
});