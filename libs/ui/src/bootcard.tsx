import { PokemonResourceList } from '@core/models'

export function BootCard({ pokemonList, handleCurrentPokemon }: { pokemonList: PokemonResourceList, handleCurrentPokemon: any }): JSX.Element {
	if (!pokemonList) {
		return <p>No data</p>
	}
	return (
    <div className="container px-4 px-lg-5">

        <hr/>
        
        <div className="row gx-4 gx-lg-5">

            {
                pokemonList && pokemonList.results.map((pokemonData, key) => (
                    <div className="col-md-4 mb-5" key={key}>
                        <div className="card h-100">
                            <div className="card-body">
                                <h2 className="card-title">{pokemonData.name.toUpperCase()}</h2>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                            <div className="card-footer"><a className="btn btn-primary btn-sm" href="#!" onClick={() => { handleCurrentPokemon(key+1) }}>More Info</a></div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
	)
}
