const pokemonList = [
    { name: "Bulbasaur", imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" },
    { name: "Mew"},
];

function PokemonCard({index}) {
    const pokemon = pokemonList[index];

    return (
        <section>
            <div>
            {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name} /> : <p>???</p>}
            <figcaption>{pokemon.name}</figcaption>
                </div>
        </section>
    );
}

export default PokemonCard;