import React from "react";
import { Container, Row, Col, Button, FormGroup, Input, Label } from "reactstrap";
import "../App.css";
// import tours from "../components/Package";
import Gopala from "../img/gopala.jpg";
import imgCard2 from "../img/gopalaR.jpg";
import imgCard3 from "../img/img-card (3).jpg";
import imgCard4 from "../img/img-card (4).jpg";

const Tour = () => (
  <div className="subComponent">
    <Container>
      <section className="tour-cover item-center">
        <img src={Gopala} alt="" />
        <h1>Gopala Resort</h1>
        <h4>Dhuadhar Bhedaghat </h4>
      </section>
      <section className="tour-info">
        <Row>
          <Col sm="8">
            <div className="tour-desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                imperdiet, sem id vehicula lacinia, mi purus lacinia mauris,
                vitae mollis nisl elit in lorem. Suspendisse potenti. Cras
                elementum ullamcorper tortor, rutrum convallis nunc tempor
                tristique. Donec ut ipsum vel mauris hendrerit efficitur. Nullam
                eget massa interdum, euismod nunc ac, maximus risus. Aliquam nec
                rhoncus tortor. Suspendisse nulla diam, hendrerit a metus vitae,
                rutrum hendrerit nisl. Nulla vel venenatis massa. Mauris lacinia
                porttitor ex, a egestas nisi fringilla vitae. Nam fringilla leo
                ante, id interdum sapien facilisis vel. Morbi ut suscipit nulla.
                Sed vitae tempus elit, at laoreet urna.
              </p>
              <p>
                Morbi facilisis, odio vitae egestas pretium, mauris tortor
                vulputate dolor, non interdum nunc tellus at dolor. Donec
                condimentum et augue vitae volutpat. Fusce vitae laoreet sem.
                Integer a justo sit amet nibh vehicula blandit. Suspendisse
                faucibus venenatis egestas. In vulputate sapien sit amet ligula
                vulputate, in consequat ex molestie. Curabitur hendrerit
                pulvinar vehicula. Phasellus quis posuere tortor. Cras
                pellentesque vehicula dui nec fermentum. Sed venenatis nunc
                justo. Quisque metus est, volutpat quis scelerisque in,
                fermentum sed lacus. Sed sed pretium massa. Aenean imperdiet
                molestie turpis at egestas.
              </p>
            </div>
          </Col>
          <Col sm="4">
            <div className="tour-gallery">
              <a href={Gopala}>
                <img src={Gopala} alt="" />
              </a>
              <a href={imgCard2}>
                <img src={imgCard2} alt="" />
              </a>
              <a href={imgCard3}>
                <img src={imgCard3} alt="" />
              </a>
              <a href={imgCard4}>
                <img src={imgCard4} alt="" />
              </a>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
    <section className="reviews">
      <Container>
        <section className="tour-msg text-center">
          <h1>Reviews and Suggestions</h1>
          <p>We're glad to hear something from you.</p>
          <form action="">
            <Row>
              <Col sm="6">
                <input
                  type="text"
                  name="Name"
                  id="reviewer-name"
                  placeholder="Your Name"
                  required
                />
                <br />
                <input
                  type="email"
                  name="Email"
                  id="reviewer-email"
                  placeholder="Your email"
                  required
                />
              </Col>
              <Col>
                <textarea
                  name="Message"
                  id="reviewer-message"
                  rows="4"
                  placeholder="Your Message"
                />
              </Col>
            </Row>
            <FormGroup>
                <Label for="exampleFile">
                    Add Photos/Videos
                </Label>
                <Input
                    id="exampleFile"
                    name="file"
                    type="file"
                />
            </FormGroup>
            <Button outline color="secondary" className="float-right">
              Submit
            </Button>
          </form>
        </section>
      </Container>
    </section>
  </div>
);

export default Tour;
