var letras = [
  {
    a: {
      nombre: "A",
      imagen: "../assets/letras/A.png",
      codigo:
        "(pulgar > 400 && indice < 300 && medio < 310 && anular < 350 && menique < 350)",
    },
  },
  {
    l: {
      nombre: "L",
      imagen: "../assets/letras/L.png",
      codigo:
        "((pulgar > 350 && pulgar < 570) && (indice > 230 && indice < 550) && (medio > 0 && medio < 250) && (anular > 0 && anular < 250) && (menique > 0 && menique < 250))",
    },
  },
  {
    n: {
      nombre: "N",
      imagen: "../assets/letras/N.png",
      codigo:
        "((pulgar > 150 && pulgar < 450) && (indice > 450 && indice < 950) && (medio > 400 && medio < 950) && (anular > 0 && anular < 250) && (menique > 0 && menique < 250))",
    },
  },
  {
    u: {
      nombre: "U",
      imagen: "../assets/letras/U.png",
      codigo:
        "((pulgar > 500 && pulgar < 850) && (indice > 450 && indice < 950) && (medio > 400 && medio < 850) && (anular > 0 && anular < 250) && (menique > 0 && menique < 250))",
    },
  },
  {
    h: {
      nombre: "H",
      imagen: "../assets/letras/H.png",
      codigo:
        "((pulgar > 350 && pulgar < 670) && (indice > 350 && indice < 650) && (medio > 350 && medio < 650) && (anular > 700 && anular < 950) && (menique > 0 && menique < 250))",
    }, 
  },
  {
    o: {
      nombre: "O",
      imagen: "../assets/letras/O.png",
      codigo:
        "((pulgar > 400 && pulgar < 700) && (indice > 100 && indice < 300) && (medio > 100 && medio < 300) && (anular > 700 && anular < 1000) && (menique > 50 && menique < 200))",
    },
  },
  {
    i: {
      nombre: "I",
      imagen: "../assets/letras/I.png",
      codigo:
        "(pulgar < 300 && indice < 400 && medio < 300 && anular < 300 && menique > 350)",
    },
  },
  {
    b: {
      nombre: "B",
      imagen: "../assets/letras/B.png",
      codigo:
        "(pulgar < 500 && indice > 500 && medio > 500 && anular > 400 && menique > 500)",
    },
  },
  {
    e: {
      nombre: "E",
      imagen: "../assets/letras/E.png",
      codigo:
        "((pulgar > 0 && pulgar < 350) && (indice > 0 && indice < 350) && (medio > 0 && medio < 350) && (anular > 0 && anular < 350) && (menique > 0 && menique < 350))",
    },
  },
  {
    r: {
      nombre: "R",
      imagen: "../assets/letras/R.png",
      codigo:
        "((pulgar > 150 && pulgar < 470) && (indice > 350 && indice < 650) && (medio > 350 && medio < 650) && (anular > 0 && anular < 250) && (menique > 0 && menique < 250))",
    },
  },
  {
    d: {
      nombre: "D",
      imagen: "../assets/letras/D.png",
      codigo:
        "((pulgar > 450 && pulgar < 750) && (indice > 650 && indice < 950) && (medio > 300 && medio < 520) && (anular > 100 && anular < 250) && (menique > 100 && menique < 350))",
    },
  },
  {
    m: {
      nombre: "M",
      imagen: "../assets/letras/M.png",
      codigo:
        "((pulgar > 50 && pulgar < 300) && (indice > 400 && indice < 870) && (medio > 150 && medio < 300) && (anular > 40 && anular < 250) && (menique > 40 && menique < 250))",
    },
  }
];

const traducirPalabra = (palabra) => {
  let traduccion = "";

  for (let i = 0; i < palabra.length; i++) {
    const letra = palabra[i];

    const letraEncontrada = letras.find((item) => item[letra]);

    if (letraEncontrada) {
      traduccion += `<img src="${letraEncontrada[letra].imagen}" class="w-14 mx-auto md:w-20 mx-2 my-1 rounded-xl border border-black hover:border-white duration-500" alt="imagen${letra}" onClick="alerta('${letraEncontrada[letra].nombre}','${letraEncontrada[letra].codigo}')"> `;
    }

    document.getElementById(`resultado-${palabra}`).innerHTML = traduccion;
  }
};

const alerta = (letra, codigo) => {
  return Swal.fire({
    title: "Letra: " + letra,
    color: "#000",
    text: codigo,
    confirmButtonColor: "#428736"
  });
};
