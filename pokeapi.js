const input = document.getElementById("input")
const mensaje = document.getElementById("card")


async function getPokemons() {


  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}`);


  if (response.status === 404) {
    mensaje.innerText = `No se encuentra!`;
     mensaje.style.display = "inline";
    return;
  }


  const data = await response.json();
  const array = [];
  mensaje.style.display = "inline";


  const listaTipos = data.types;


  listaTipos.forEach(element => {
    array.push(element.type.name);
  });


  mensaje.innerHTML = `
    <p>${data.name}</p>
    <img src="${data.sprites.front_default}">
    <p>${array}</p>
    <p>${data.height}</p>
    <p>${data.weight}</p>
  `;
}
