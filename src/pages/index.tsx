import type { NextPage } from "next";
import React from "react";

import { Layout, Main } from "../components/layout";
import { Details } from "../components/muppet";
import { cookieMonster } from "../data/muppets";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Main title={cookieMonster.name}>
          <Details data={cookieMonster} />
        </Main>
      </Layout>
    </>
  );
};

export default Home;
