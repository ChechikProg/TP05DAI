async function getPokemons() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/Ditto");
    const data = await response.json();
    console.log(data.name);
    console.log(data.sprites.front_default);
    const array = [];
    const listaTipos = data.types
    listaTipos.forEach(element => {
       array.push(element.type.name) 
    
    });
    console.log(array);
    console.log(data.height);

  } catch (error) {
    console.error("Hubo un problema con la petición:", error.message);
  }
}

getPokemons();
