/* Acá va tu código */
/*para cifrar */
window.onload =()=> {

 const btn = document.getElementById("code");

  btn.addEventListener("click", function() {
  let offsetNum = document.getElementById("number-one").value;
  const enterText = document.getElementById("enter-one").value;
  const outText = window.ciper.encode(enterText, offsetNum);
  document.getElementById("enter-two").innerHTML =outText;
})
  
 const btnThree = document.getElementById("thkx");

  btnThree.addEventListener("click", function() {
  messagethree=document.getElementById("commentary").value;
  document.getElementById("messagethree").innerHTML= messagethree;
})
}