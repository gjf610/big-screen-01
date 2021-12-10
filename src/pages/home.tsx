import React, { useEffect, useRef } from 'react';
import './home.scss';
import headerImage from '../images/header.png'
import * as echarts from 'echarts'
import ReactEcharts from 'echarts-for-react';
import { Chart1 } from "../component/chart-1";

const px = (n: number) => n / 2420 * (window as any).pageWidth;
export const Home = () => {

  return (
    <div className="home">
      <header style={{ backgroundImage: `url(${headerImage})` }}></header>
      <main>
        <section className="section1">
          <Chart1 />
        </section>
        <section className="bordered section2"></section>
        <section className="bordered section3"></section>
        <section className="bordered section4"></section>
        <section className="bordered section5"></section>
      </main>
    </div>
  );
};