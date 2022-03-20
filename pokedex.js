
const pokenombre = document.getElementById('nombre');
const pokeImg = document.getElementById("pokeImg");
const poketipo = document.getElementById('poketipo');
const pokehabil1 = document.getElementById('pokehabil')
const pokehabil2 = document.getElementById('pokehabil2')
const pokemov = document.getElementById('pokemov')
const pokemov1 = document.getElementById('pokemov1')

const fetchPokemon =() => { 
const pokeNameInput = document.getElementById("pokeName");
let pokeName = pokeNameInput.value;
pokeName = pokeName.toLowerCase();
const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
fetch(url).then((res)=> res.json())
.then((data)=>{
        pokenombre.innerHTML = data.name;
        poketipo.innerHTML = data.types[0].type.name;
        pokehabil1.innerHTML = data.abilities[0].ability.name;
        pokehabil2.innerHTML = data.abilities[1].ability.name;
        pokemov.innerHTML = data.moves[0].move.name;
        pokemov1.innerHTML = data.moves[1].move.name;

        let pokeimg = data.sprites.front_default;
        pokeImage(pokeimg);
    })
    const pokeImage = (url) =>{
        pokeImg.src = url;
        

}

}



