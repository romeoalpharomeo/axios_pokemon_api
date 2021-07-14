import React from 'react';

const PokemonBox = (props) => {
    return (
        <div>
            {
                props.pokemonInfo.map((item, idx) => {
                    return <li>{item.name}</li>
                })
            }
            <p>{props.count}</p>
        </div>
    )
}
export default PokemonBox;