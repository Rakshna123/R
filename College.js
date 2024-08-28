function myFunction() {
  let x = document.getElementById("phones").value;
  let text;
  if (isNaN(x) || x < 1 || x > 10) {
    text = "Input not valid";
  } else {
    text = "Input OK";
  }
  document.getElementById("para").innerHTML = text;
 
}
// function requiredField(){
//     const name = document.getElementById("sub")
//     if (name==" " || name==null) {
//         alert("All field should be filled")
//     }   
// }
// function validateForm() {
//     let x = document.forms["myForm"]["fname"].value;
//     if (x == "") {
//       alert("Name must be filled out");
//       return false;
//     }
//   }