let btnStart = document.getElementById("btnStart")



const jugar=()=>{
    let numAleatorio= Math.floor(Math.random()* 6 + 1);

    let numJugador = document.getElementById("usuario")
    let numJugadorParseado = parseInt(numJugador.value)
    console.log(numAleatorio)

    if(isNaN(numJugadorParseado)){
        Swal.fire({
            title: "Ingrese un número valido 🤯",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
    } else if (numJugadorParseado === numAleatorio) {
        Swal.fire({
            title: "Ganaste 🥳🎉",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });


    } else {

        Swal.fire({
            title: "Vuelve a intentarlo 🥲",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
    }
numJugador.value = "";
}
btnStart.addEventListener("click", jugar)