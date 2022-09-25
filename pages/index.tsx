import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import Game from "../components/Game/Game";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Wordle for Sans</title>
        <meta name="description" content="App for Sans to play Wordle" />
      </Head>
      <Game />
    </Fragment>
  );
};

export default Home;
