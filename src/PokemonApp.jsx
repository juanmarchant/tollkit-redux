import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon";



export const PokemonApp = () => {

    const { isLoading, pokemons, page } = useSelector((state) => state.pokemons);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemons());
    }, [])
    return (
        <>
            <h1>Pokemon App</h1>
            <hr />
            <p>Loading: {isLoading ? 'True' : 'False'}</p>

            <ul>
                {
                    pokemons.map(({ name }) => (
                        <li key={name} >{name}</li>
                    ))
                }
            </ul>

            <button
                disabled={isLoading}
                onClick={() => dispatch(getPokemons(page))}
            >
                Next
            </button>
        </>
    )
}
