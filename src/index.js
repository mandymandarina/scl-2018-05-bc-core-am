/* Acá va tu código */
window.onload =()=> {
    const btn = document.getElementById("code");
    const btntwo= document.getElementById("decode");
    const btnthree=document.getElementById("thkx");

       

    btn.addEventListener("click",function() {
    message=document.getElementById("enter-one").value;
      document.getElementById("message").innerHTML="<h3>Tu mensaje codificado es:</h3><div><input type='text' id='enter-two' value=''></div> ";
    })

    btntwo.addEventListener("click", function() {
    messagetwo=document.getElementById("enter-three").value;
      document.getElementById("messagetwo").innerHTML="<h3>Tu mensaje decodificado es:</h3><div><input type='text' id='enter-four' value=''></div> ";
    })
    
    btnthree.addEventListener("click", function() {
    messagethree=document.getElementById("commentary").value;
      document.getElementById("messagethree").innerHTML= messagethree;
    })

}