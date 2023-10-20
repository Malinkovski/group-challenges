import { GetStaticProps, NextPage } from "next";
import React from "react";
import PageBanner from "../components/PageBanner";
import AboutBlock from "../components/AboutBlock";
import FeatureBlock from "../components/FeatureBlock";
import Team from "../components/Team";
import { PageBannerProps, AboutBlockProps, FeatureBlockProps, TeamProps } from "../types/types";

interface Props {
  pageBannerProps: PageBannerProps;
  aboutBlockProps: AboutBlockProps;
  featureBlockProps: FeatureBlockProps;
  teamProps: TeamProps;
}

const About: NextPage<Props> = ({ pageBannerProps, aboutBlockProps, featureBlockProps, teamProps }) => {
  return (
    <div>
{/*       <PageBanner {} />
      <AboutBlock {} />
      <FeatureBlock {} />
      <Team {} /> */}
    </div>
  );
};

export default About;

/* export const getStaticProps: GetStaticProps = async () => {

  }; */
  