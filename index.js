
//tarjetas
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


    //reels
      const carrouselGifContainers = document.querySelectorAll(".reels__carrousel-element-content");

      carrouselGifContainers.forEach(function (gifContainer) {
      gifContainer.addEventListener("touchstart", function () {
        const gifContainerFather = gifContainer.closest(".reels__carrousel-element")
        const gifContainer_img = gifContainerFather.querySelector(".lf__img-img");
        const gifContainer_gif = gifContainerFather.querySelector(".lf__img-gif");


        if(gifContainer_img.style.opacity === "1"){
          gifContainer_img.style.opacity = "0";
          gifContainer_gif.style.opacity = "1"
        }
        else{
          gifContainer_img.style.opacity = "1";
          gifContainer_gif.style.opacity = "0"
        }

      });
    });

    const menuAside = document.getElementById("lf__aside-tag-perfil");
    const btn_cerrarMenu = document.getElementById("nb__btn-perfil-closeAside");
    const btn_abrirMenu = document.getElementById("nb__btn-perfil");

    btn_cerrarMenu.addEventListener("click", cerrarMenu);
    btn_abrirMenu.addEventListener("click", abrirMenu);

    function cerrarMenu(){
      menuAside.style.right = "-80%";
      menuAside.style.boxShadow = "0 1px 2px -3px rgba(0,0,0,0.14)";
    }

    function abrirMenu(){
     menuAside.style.right = "0";
     menuAside.style.boxShadow = "-88px 1px 2px -3px rgba(0,0,0,0.50)";
    }


  });//fin de codigo

