import React, { Component } from "react";
import { MdSchool } from "react-icons/md";
import { ImOffice } from "react-icons/im";
import { AiOutlineSchedule } from "react-icons/ai";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <MdSchool />,
        title: "Sertifikat Kelulusan",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus perferendis quae, ratione assumenda cupiditate officiis?",
      },
      {
        icon: <AiOutlineSchedule />,
        title: "Jadwal Produktif",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus perferendis quae, ratione assumenda cupiditate officiis?",
      },
      {
        icon: <ImOffice />,
        title: "Penyaluran Kerja",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus perferendis quae, ratione assumenda cupiditate officiis?",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="Apa yang di dapat di Academy" />
        <div className="services-center">
          {this.state.services.map((s, i) => (
            <article key={i} className="service">
              <span>{s.icon}</span>
              <h6>{s.title}</h6>
              <p>{s.info}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }
}
