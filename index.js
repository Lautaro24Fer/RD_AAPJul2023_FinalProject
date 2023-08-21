document.addEventListener("DOMContentLoaded", function () {
    const botonesCambiarOpacidad = document.querySelectorAll(".card-btn");
  
    botonesCambiarOpacidad.forEach(function (boton) {
      boton.addEventListener("click", function () {
        const tarjeta = boton.closest(".card");
        const textosModificar = tarjeta.querySelectorAll(".lf__card-text");
        const cardBtn_img = tarjeta.querySelector(".card-img")
  
        textosModificar.forEach(function (textoModificar) {
          if (textoModificar.style.opacity === "1") {
            textoModificar.style.opacity = "0";
            cardBtn_img.style.opacity = "1";
          } else {
            textoModificar.style.opacity = "1";
            cardBtn_img.style.opacity = ".6";
          }
        });
      });
    });
  });