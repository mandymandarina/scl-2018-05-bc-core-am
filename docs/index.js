/* Acá va tu código */
window.onload = () => {
  //Boton para codificar
  const btn = document.getElementById("code");

  btn.addEventListener("click", function () {
    let offsetNum = document.getElementById("number-one").value;
    const enterText = document.getElementById("enter-one").value;
    document.getElementById("enter-two").innerHTML = window.cipher.encode(enterText, offsetNum);
  })

  //Boton para decodificar
  const btnt = document.getElementById("decode");

  btnt.addEventListener("click", function () {
    let offsetNum = document.getElementById("number-one").value;
    const enterText = document.getElementById("enter-three").value;
    document.getElementById("enter-four").innerHTML = window.cipher.decode(enterText, offsetNum);
  })

  //Boton para hacer comentarios
  const btnThree = document.getElementById("thkx");

  btnThree.addEventListener("click", function () {
    messagethree = document.getElementById("commentary").value;
    document.getElementById("messagethree").innerHTML = messagethree;
  })
}