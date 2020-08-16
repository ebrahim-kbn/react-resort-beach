import React, { Component } from "react";
import PropTypes from "prop-types";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";

class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const { featuredRooms: rooms, loading } = this.context;
    let renderRooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : renderRooms}
        </div>
      </section>
    );
  }
}

FeaturedRooms.propTypes = {};

export default FeaturedRooms;
