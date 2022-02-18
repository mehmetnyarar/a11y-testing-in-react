import type { NextPage } from "next";
import React from "react";

import { Layout, Main } from "../components/layout";
import { Details } from "../components/muppet";
import { Seo } from "../components/seo";
import { cookieMonster as muppet } from "../data/muppets";

const Home: NextPage = () => {
  return (
    <>
      <Seo
        title={muppet.name}
        description={`Learn more about ${muppet.name}`}
      />
      <Layout>
        <Main title={muppet.name}>
          <Details data={muppet} />
        </Main>
      </Layout>
    </>
  );
};

export default Home;
