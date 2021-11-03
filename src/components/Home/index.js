import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import "./style.css";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(
      "https://api.pokemontcg.io/v2/cards?pageSize=10"
    );
    const body = await response.json();
    setPokemons(body.data);
    console.log(pokemons);
  };

  const history = useHistory();

  function clickCard(id) {
    history.push(`/Card/${id}`);
  }

  // const like = (index) => {
  //   console.log("like");
  //   if (locations[index].isLike) {
  //     locations[index].isLike = false;
  //   } else {
  //     locations[index].isLike = true;
  //   }
  //   localStorage.setItem("locations", JSON.stringify(locations));
  // };

  return (
    <div className="cards">
      {pokemons.map((pokemon, i) => (
        <div className="card" key={i}>
          <img
            src={pokemon.images.large}
            alt=""
            onClick={() => clickCard(pokemon.id)}
          />
          <h3>
            {pokemon.name}
            {<FaHeart  />}
            {/* onClick={() => like(pokemon.id)} */}
            {/* color={location.isLike ? "red" : "black"} */}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Home;
