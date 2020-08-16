import React, { Component } from "react";
import PropTypes from "prop-types";
import Title from "./Title";
import { FaCocktail, FaShuttleVan, FaHiking, FaBeer } from "react-icons/fa";
class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, eius.",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, eius.",
      },
      {
        icon: <FaShuttleVan />,
        title: "free Shuttle",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, eius.",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, eius.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title} </h6>
                <p>{item.info} </p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

Services.propTypes = {};

export default Services;
