import React, { Component } from "react";
import { Container, Row, CardColumns, Badge } from "reactstrap";
import TourCard from "./TourCard";
import "../App.css";
import imgCard1 from "../img/img-card (1).jpg";
import swargdwari from "../img/swargdwari.jpg";
import bargi from "../img/bargi.jpg";
import gopalaR from "../img/gopalaR.jpg";
import mahal from "../img/mahal.jpg";
import khandari from "../img/khandari.jpg";
import nidan from "../img/nidan.jpg";
import dumna from "../img/dumna.jpg";
import bb from "../img/bb.jpg";
import kachnar from "../img/kachnar.jpg";
const tours = [
  {
    id: 1,
    category: ["resort", "Waterfall" ],
    img: imgCard1,
    alt: "blah blah",
    title: "Riverside Resort",
    subtitle: "Bhedaghat Resort"
  },
  {
    id: 2,
    category: [ "mountain"],
    img: bargi,
    alt: "blah blah",
    title: "Bargi Dam ",
    subtitle: "Witness the glorious sunset "
  },
  {
    id: 3,
    category: ["resort", "Family Stay"],
    img: gopalaR,
    alt: "blah blah",
    title: "The Gopala Resort",
    subtitle: "Dhuadhar Bhedaghat "
  },
  {
    id: 4,
    category: ["climbing", "mountain"],
    img: mahal,
    alt: "blah blah",
    title: "Madan Mahal Fort",
    subtitle: "Breath fresh air between greenery  and rocks and enjoy the top city view"
  },
  {
    id: 5,
    category: ["resort", "Family Stay", "beach"],
    img: dumna,
    alt: "blah blah",
    title: "Dumna Nature Park",
    subtitle: "Dumna Nature Reservior" 
  },
  {
    id: 6,
    category: ["climbing", "mountain"],
    img: swargdwari,
    alt: "blah blah",
    title: "Swarg Dwari",
    subtitle: "Beautiful place for trekking lovers!"
  },
  {
    id: 7,
    category: ["Waterfall", "climbing","Mountain"],
    img: nidan,
    alt: "blah blah",
    title: "Nidaan",
    subtitle: "Nidaan Waterfall Katangi"
  },
  {
    id: 8,
    category: ["Family Stay",  "resort"],
    img: kachnar,
    alt: "blah blah",
    title: "Shiv Temple",
    subtitle: "Kachnar City Shiv Temple"
  },
  {
    id: 9,
    category: [ "resort"],
    img: bb,
    alt: "blah blah",
    title: "Balancing Rock",
    subtitle: "Madan Mahal"
  },
  {
    id: 10,
    category: ["camping", "Waterfall"],
    img: khandari,
    alt: "camping in the lake",
    title: "Khandari Dam",
    subtitle: "Dumna"
  }
];

const itemCategories = [
  "all",
  "Waterfall",
  "mountain",
  "resort",
  "climbing",
  "camping",
  
];

class Package extends Component {
  state = {
    cards: [],
    category: "all"
  };

  componentDidMount() {
    this.setState({ cards: tours });
  }

  render() {
    const { cards, category } = this.state;
    return (
      <div className="subComponent-lg" id="packageBody">
        <Container>
          <header className="headerTitle text-center">
            <h1>Tour Packages</h1>
            <p>A Great Collection of Our Tour Packages</p>
          </header>
          <section className="packageBody text-center">
            {itemCategories.map((badge, index) => (
              <Badge
                key={index}
                href=""
                color={badge === category ? "dark" : "light"}
                onClick={() => this.setState({ category: badge })}
              >
                {badge}
              </Badge>
            ))}

            <Row className="text-left">
              <CardColumns>
                {category !== "all"
                  ? cards.map(tourcard => {
                    return tourcard.category.map(catItem => {
                      return catItem === category ? (
                        <TourCard key={tourcard.id} tourcard={tourcard} />
                      ) : null;
                    });
                  })
                  : cards.map(tourcard => (
                    <TourCard key={tourcard.id} tourcard={tourcard} />
                  ))}
              </CardColumns>
            </Row>
          </section>
        </Container>
      </div>
    );
  }
}

export default Package;
