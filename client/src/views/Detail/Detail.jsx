import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { clearPokemonDetail, getPokemonDetail } from "../../redux/actions";

import "./detail.styles.css";

export default function Detail(){
    
    const dispatch = useDispatch();
    const pokemonDetail = useSelector(state => state.pokemonDetail);
    const {detailId} = useParams();
    
    useEffect(() => {
      dispatch(getPokemonDetail(detailId));
        
      return ()=>{dispatch(clearPokemonDetail())};
    }, [dispatch, detailId]);

      return(
        <div key={pokemonDetail.id} className="detail-container">
          <h3>ID: {pokemonDetail.id}</h3>
          <h1>Nombre: {pokemonDetail.name}</h1>
          <h2>HP: {pokemonDetail.hp}</h2>
          <h2>Ataque: {pokemonDetail.attack}</h2>
          <h2>Defensa: {pokemonDetail.defense}</h2>
          <h2>Velocidad: {pokemonDetail.speed}</h2>
          <h2>Altura: {pokemonDetail.height}</h2>
          <h2>Peso: {pokemonDetail.weight}</h2>
          <img src={pokemonDetail.image} alt=""/>
          <h2>Tipo: {pokemonDetail.type ? <>{pokemonDetail.type.map(type => (
                <span className={`type ${type}`}> {type} </span>
            ))}</> : null}</h2>
          <hr/>
          <Link to='/home'>
            <button>Home</button>
          </Link>
        </div>
      )
}