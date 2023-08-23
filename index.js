
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

    const body = document.body;

    const menuAside = document.getElementById("lf__aside-tag-perfil");
    const btn_cerrarMenu = document.getElementById("nb__btn-perfil-closeAside");
    const btn_abrirMenu = document.getElementById("nb__btn-perfil");

    btn_cerrarMenu.addEventListener("click", cerrarMenu);
    btn_abrirMenu.addEventListener("click", abrirMenu);

    function cerrarMenu(){
      menuAside.style.right = "-80%";
      menuAside.style.boxShadow = "0 1px 2px -3px rgba(0,0,0,0.14)";
      menuAside.style.overflowY = "hidden"; //activamos y desactivamos el scroll vertical en funcion de la pagina activa
      body.style.overflowY = "auto";
    }

    function abrirMenu(){
       menuAside.style.right = "0";
       menuAside.style.boxShadow = "-200px 1px 2px -3px rgba(0,0,0,0.50)";
       menuAside.style.overflowY = "auto"; //activamos y desactivamos el scroll vertical en funcion de la pagina activa
       body.style.overflowY = "hidden";
    }

    //BANDEJA DE MENSAJES ANIMACION
    const bandejaMensajes = document.getElementById("bandejaMensajesAside");
    const btn_cerrarBandejaMensajes = document.getElementById("nb__btn-message-closeAside");
    const btn_abrirBandejaMensajes = document.getElementById("btnMessagesAside");

    btn_cerrarBandejaMensajes.addEventListener("click", cerrarBandejaMensajes);
    btn_abrirBandejaMensajes.addEventListener("click", abrirBandejaMensajes);

    function cerrarBandejaMensajes(){
      bandejaMensajes.style.right = "-100%";
      bandejaMensajes.style.overflowY = "hidden"; //activamos y desactivamos el scroll vertical en funcion de la pagina activa
      body.style.overflowY = "auto";
    }

    function abrirBandejaMensajes(){
       bandejaMensajes.style.right = "0";
       bandejaMensajes.style.overflowY = "auto";
       body.style.overflowY = "hidden";
    }

    //seccion de configuracion
    const bandejaConfig = document.getElementById("configSectionAside");
    const btn_cerrarBandejaConfig = document.getElementById("nb__btn-config-closeAside");
    const btn_abrirBandejaConfig = document.getElementById("btn__OpenConfigSection");

    btn_cerrarBandejaConfig.addEventListener("click", cerrarBandejaConfig);
    btn_abrirBandejaConfig.addEventListener("click", abrirBandejaConfig);

    function cerrarBandejaConfig(){
      bandejaConfig.style.right = "-100%";
      bandejaConfig.style.overflowY = "hidden"; //activamos y desactivamos el scroll vertical en funcion de la pagina activa
      body.style.overflowY = "auto";
    }

    function abrirBandejaConfig(){
       bandejaConfig.style.right = "0";
       bandejaConfig.style.overflowY = "auto";
       body.style.overflowY = "hidden";
    }
    const bandejaSearch = document.getElementById("searchSectionAside");
    const btn_cerrarBandejaSearch = document.getElementById("btn__closeSectionSearchAside");
    const btn_abrirBandejaSearch = document.getElementById("nb__btn-buscar");

    btn_cerrarBandejaSearch.addEventListener("click", cerrarBandejaSearch);
    btn_abrirBandejaSearch.addEventListener("click", abrirBandejaSearch);

    function cerrarBandejaSearch(){
      bandejaSearch.style.right = "-100%";
      bandejaSearch.style.overflowY = "hidden"; //activamos y desactivamos el scroll vertical en funcion de la pagina activa
      body.style.overflowY = "auto";
    }

    function abrirBandejaSearch(){
      bandejaSearch.style.right = "0";
      bandejaSearch.style.overflowY = "auto";
      body.style.overflowY = "hidden";
    }


  });//fin de codigo

