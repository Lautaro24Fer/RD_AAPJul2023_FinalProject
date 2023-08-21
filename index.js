
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

  });










//   //gif
//   const carrouselGifContainers = document.querySelectorAll(".lf__mtc-af-reels");
// // const staticImage = hoverContainer.querySelector("img");
// // const gifImage = hoverContainer.querySelector(".gif");
// const isMobile = window.innerWidth <= 768;

// carrouselGifContainers.forEach(function(gifContainer){
// // //   const gifContainer_img = gifContainer.closest(".lf__img-img");
// // //   const gifContainer_gif = gifContainer.closest(".lf__img-gif");
//   if(isMobile){
//     //dispositivos moviles
//     gifContainer.addEventListener("touchstart", cambiarOpacidadMovil);
//     const cambiarOpacidadMovil = () => {
//       if(gifContainer_img.style.opacity === "1"){
//         gifContainer_img.style.opacity = "0";
//         gifContainer_gif.style.opacity = "1";
//       }
//       else{
//         gifContainer_img.style.opacity = "0";
//         gifContainer_gif.style.opacity = "1";
//       }
//     }
//     }
//     else{
//     //dispositivos grandes
//         gifContainer.addEventListener("mouseover",cambiarOpacidadNoMovil);
//         const cambiarOpacidadNoMovil = () => {
//           if(gifContainer_img.style.opacity === "1"){
//             gifContainer_img.style.opacity = "0";
//             gifContainer_gif.style.opacity = "1";
//           }
//           else{
//             gifContainer_img.style.opacity = "0";
//             gifContainer_gif.style.opacity = "1";
//           }
//         }
//     }
// });




// const handleImageChange = () => {
//   if (isMobile) {
//     staticImage.style.opacity = "0";
//     gifImage.style.opacity = "1";
//   } else {
//     staticImage.style.opacity = "1";
//     gifImage.style.opacity = "0";
//   }
// };

// hoverContainer.addEventListener("mouseover", handleImageChange);
// hoverContainer.addEventListener("mouseout", handleImageChange);
// hoverContainer.addEventListener("touchstart", handleImageChange);
// hoverContainer.addEventListener("touchend", handleImageChange);
