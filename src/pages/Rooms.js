import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import RoomContainer from "../components/RoomContainer";

const Rooms = () => {
  return (
    <Fragment>
      <Hero hero={"roomsHero"}>
        <Banner title="Our Rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </Fragment>
  );
};

export default Rooms;
