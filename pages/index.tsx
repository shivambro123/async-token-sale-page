import { Footer, Header } from "@components/common";
import Navbar from "@components/common/Navbar";
import Heading from "@components/Heading";
import { AppConstant } from "constant/AppConstant";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout className="page-home">
      <Head>
        <title>{AppConstant.meta.title}</title>
        <meta name="description" content={AppConstant.meta.description} />
      </Head>
      {/* <Header /> */}
      <Navbar />
      <Heading />
    </Layout>
  );
};

export default Home;
