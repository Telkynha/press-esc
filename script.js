document.getElementById("esc").addEventListener("click", () => {
    const escImg = document.getElementById("esc").src;
    alert("escImg");
    if (escImg.src = "media/Esc.png"){
        escImg.src = "media/EscPress.png"   
    }else{
        escImg.src = "media/Esc.png"
    }
})
