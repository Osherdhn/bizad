import { useState } from "react";
import Title from "../general/Title";
import FilterBar from "./FilterBar";
import Card from "./Card/Card";
import pizza from "../assets/pizza.jpg";
import falafel from "../assets/falafel.jpg";
import burger from "../assets/burger.jpg";
import sushi from "../assets/sushi.jpg";
import greenMarket from "../assets/greenMarket.jpg";
import gym from "../assets/gym.jpg";
import performances from "../assets/performances.jpg";
import waterPark from "../assets/waterPark.jpg";
import petShop from "../assets/petShop.jpg";
import "./MainPage.css";
function MainPage() {
  const data = [
    {
      id: 1,
      number: "#001",
      image: burger,
      name: "burger",
      location: "tel aviv, Israel",
      phone: "0526716738",
      tags: "food burger",
    },
    {
      id: 2,
      number: "#002",
      image: pizza,
      name: "pizza",
      location: "eilat, Israel",
      phone: "0596497897",
      tags: "food pizza",
    },
    {
      id: 3,
      number: "#003",
      image: falafel,
      name: "falafel",
      location: "Haifa, Israel",
      phone: "0563847894",
      tags: "food falafel ",
    },
    {
      id: 4,
      number: "#004",
      image: sushi,
      name: "sushi",
      location: "petah tiqua, Israel",
      phone: "0538560954",
      tags: "food sushi",
    },
    {
      id: 5,
      number: "#005",
      image: greenMarket,
      name: "green market",
      location: "acu, Israel",
      phone: "0563847891",
      tags: "supermarket shopping green vegan",
    },
    {
      id: 6,
      number: "#006",
      image: performances,
      name: "performances",
      location: "ramat gan, Israel",
      phone: "0515961114",
      tags: "attractions performances shows stage ballet opera family fun",
    },
    {
      id: 7,
      number: "#007",
      image: petShop,
      name: "pet shop",
      location: "ariel, Israel",
      phone: "0597891235",
      tags: "animals pets dogs cats",
    },
    {
      id: 8,
      number: "#008",
      image: waterPark,
      name: "water park",
      location: "naharia, Israel",
      phone: "089456274",
      tags: "attractions waterpark family fun",
    },
    {
      id: 9,
      number: "#009",
      image: gym,
      name: "gym",
      location: "ashdod, Israel",
      phone: "0501064579",
      tags: "gym workout fitness sport",
    },
  ];

  const [origData] = useState(data);
  const [mainPage, setMain] = useState(data);

  function searchMain(value) {
    let result = [...origData];
    if (value.length > 0) {
      result = data.filter((data) =>
        data.tags.toLowerCase().includes(value.toLowerCase())
      );
    }

    setMain(result);
  }

  const [display, setDisplay] = useState("row grid");

  return (
    <>
      <Title mainTxt="BizAd">
        <p className="fs-2">
          Advertising your business
        </p>
      </Title>

      <FilterBar search={searchMain} />
      <div className="d-flex justify-content-between px-5 pt-2">
        <div>
          <button
            onClick={(e) => setDisplay("")}
            className="btn btn-dark m-1"
          >
            <i className="bi-list-ul"></i>
          </button>
          <button
            onClick={(e) => setDisplay("row grid")}
            className="btn btn-dark m-1"
          >
            <i className="bi-grid-3x3-gap-fill"></i>
          </button>
        </div>
      </div>

      
        <div className={display}>
          {mainPage.map((card) => (
            <Card
              list={mainPage}
              key={card.id}
              number={card.number}
              name={card.name}
              tags={card.tags}
              location={card.location}
              phone={card.phone}
              image={card.image}
            />
          ))}
        </div>
      
    </>
  );
}

export default MainPage;
