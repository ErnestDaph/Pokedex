type Pokemon = {
    name: string;
    imgSrc?: string;
};

const pokemonList: Pokemon[] = [
    {name: "Bulbasaur", imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"},
    {
      name: "mew",
    },

  ];

function PokemonCard() {
    const pokemon = pokemonList [0]
   
    return (<section>
         <div>
          <img src={pokemon.imgSrc}/>
        </div>
        <figcaption>{pokemon.name}</figcaption>
    </section>;
    );
  }

  export default PokemonCard;

  