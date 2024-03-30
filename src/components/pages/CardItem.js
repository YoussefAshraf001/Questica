import React from "react";
//import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./Quests.css";
import data from "../../quests.json";

function CardItem(props) {
  //create a new array by filtering the original array
  const filteredData = data.filter((eachCard) => {
    //if no input the return the original
    if (props.input === "") {
      return eachCard;
    }
    //return the item which contains the user input
    else {
      return (
        eachCard.catagory.toLowerCase().includes(props.input) |
        eachCard.title.toLowerCase().includes(props.input) |
        eachCard.status.toLowerCase().includes(props.input)
      );
    }
  });
  return (
    <li className="cards">
      {filteredData.map((eachCard) => (
        <div>
          <Card className="cards__item">
            <Card.Body>
              <Card.Title className="cards__item__title">
                {eachCard.title}
              </Card.Title>

              <Card.Text className="cards__item__info">
                Catagory: {eachCard.catagory}
                <br />
                <br />
                {eachCard.text}
              </Card.Text>

              <Card.Text className="cards__item__reward">
                {eachCard.reward}
              </Card.Text>

              <br />

              <Card.Text
                className={
                  eachCard.status === "Finished"
                    ? "cards__item__status_finished"
                    : "cards__item__status_ongoing"
                }
              >
                {eachCard.status}
              </Card.Text>

              <Button
                className="cards__item__link"
                variant="primary"
                href={`${eachCard.link}`}
              >
                Details
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </li>
  );
}

export default CardItem;
