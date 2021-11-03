import React from "react";
import { useHistory } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Favorite = () => {
  let cheakLoactions = JSON.parse(localStorage.getItem("locations"));
  let locationsTemblet = [
    {
      id: 0,
      name: "Bora Bora",
      image:
        "https://travel.usnews.com/dims4/USNEWS/472cf27/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/borabora_445x280_dtTOVY1.jpg",
      isLike: true,
    },
    {
      id: 1,
      name: "Maui",
      image:
        "https://travel.usnews.com/dims4/USNEWS/070489a/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/GettyImages-117211856_TeGITRy.jpg",
      isLike: false,
    },
    {
      id: 2,
      name: "London",
      image:
        "https://travel.usnews.com/dims4/USNEWS/0e6734a/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/482151882_HjS9rWb.jpg",
      isLike: false,
    },
  ];

  let locations = [];

  if (cheakLoactions == null) {
    locations = [...locationsTemblet];
    localStorage.setItem("locations", JSON.stringify(locationsTemblet));
  } else {
    locations = [...cheakLoactions];
  }

  const history = useHistory();

  function clickCard(id) {
    console.log(id);
    history.push(`/Card/${id}`);
  }

  const like = (index) => {
    console.log("like");
    if (locations[index].isLike) {
      locations[index].isLike = false;
    } else {
      locations[index].isLike = true;
    }
    localStorage.setItem("locations", JSON.stringify(locations));
  };


  return <div className="cards">
    {locations.map((location, i) => {
      if(location.isLike) {
        return(<div className="card" key={i}>
          <img
            src={location.image}
            alt=""
            onClick={() => clickCard(location.id)}
          />
          <h3>
            {location.name}{" "}
            <FaHeart color={location.isLike ? "red" : "black"} onClick={() => like(location.id)} />
          </h3>
        </div>)
      } else {
        
      }
    })}
  </div>;
};

export default Favorite;
