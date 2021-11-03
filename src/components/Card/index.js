import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./style.css";

const Card = () => {
  const [pokemons, setPokemons] = useState([]);

  let { id } = useParams();

  const getData = async () => {
    const response = await axios.get(
      "https://api.pokemontcg.io/v2/cards?pageSize=10"
    );
    setPokemons(response.data.data);
    console.log(pokemons);
  };

  useEffect(() => {
    getData();
  }, []);

  

  const card = pokemons.find((pokemon) => id === String(pokemon.id));

  return pokemons.length ? (
    <div className="cardInfo">
      <h2>{card.name}</h2>
      <img src={card.images.large} alt="" />
    </div>
  ) : (
    <div className="cardInfo">
      <h1>loading</h1>
    </div>
  );
};

export default Card;
