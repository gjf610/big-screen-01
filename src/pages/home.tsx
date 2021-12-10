import React from 'react';
import './home.scss';
import headerImage from '../images/header.png'
import { Chart1 } from "../component/chart-1";
import { Chart2 } from "../component/chart-2";
import { Chart3 } from "../component/chart-3";
import { Chart4 } from "../component/chart-4";
import { Chart5 } from '../component/chart-5';
import { Chart6 } from '../component/chart-6';

export const Home = () => {

  return (
    <div className="home">
      <header style={{ backgroundImage: `url(${headerImage})` }}></header>
      <main>
        <section className="section1">
          <Chart1 />
          <Chart2 />
        </section>
        <section className="section2">
          <Chart3 />
          <Chart4 />
        </section>
        <section className="bordered section3">
          <Chart5 />
        </section>
        <section className="section4">
          <Chart6 />

        </section>
        <section className="bordered section5"></section>
      </main>
      <footer>
        @guojianfeng
      </footer>
    </div>
  );
};