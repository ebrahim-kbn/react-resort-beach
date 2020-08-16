import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { RoomContext } from "../context";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import defaultBcg from "../images/room-1.jpeg";
import StyledHero from "../components/StyledHero";

class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }

  static contextType = RoomContext;

  componentDidMount() {
    // const slug = this.props.match.params.slug;
    // let { getRoom } = this.context;
    // let room = getRoom(slug);
    // console.log(room);
  }
  render() {
    let { getRoom } = this.context;
    let room = getRoom(this.state.slug);
    console.log(room);
    if (!room) {
      return (
        <div className="error">
          <h3>no such room could be found </h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }

    const {
      name,
      description,
      size,
      capacity,
      pets,
      images,
      price,
      extras,
      breakfast,
    } = room;
    const [mainImg, ...restImages] = images;
    return (
      <Fragment>
        <StyledHero img={mainImg || this.state.defaultBcg} hero={"roomsHero"}>
          <Banner title={`${name} Room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {restImages.map((img, index) => {
              return <img key={index} src={img} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description} </p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size} SQFT </h6>
              <h6>
                Max Capacity : {capacity}
                {capacity > 1 ? " people" : " person"}{" "}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"} </h6>
              <h6>{breakfast && "free breakfast included"} </h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>Extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>;
            })}
          </ul>
        </section>
      </Fragment>
    );
  }
}

SingleRoom.propTypes = {};

export default SingleRoom;
