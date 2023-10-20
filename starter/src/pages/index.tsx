import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Team from "../components/Team";
import { BannerProps, HomepageData, ServiceProps, ServicesProps, TeamProps } from "../types/types";

interface HomeProps {
  banner: BannerProps;
  servicesPage: ServicesProps;
  services: ServiceProps[];
  team: TeamProps;
}


const Home = ({ banner, servicesPage, services, team }: HomeProps) => {
  return (
    <>
      <Head>
        <title>Arhitektur</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner title={banner.title} content={banner.content} />
      <Services
        preTitle={servicesPage.preTitle}
        title={servicesPage.title}
        services={services}
      />
      <Team
        preTitle={team.preTitle}
        title={team.title}
        teamItems={team.teamItems}
      />
    </>
  );
};

async function fetchData(url: string) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export const getStaticProps: GetStaticProps = async () => {
  const homepageData: HomepageData = await fetchData("http://localhost:5001/homepage");
  const services: HomeProps = await fetchData("http://localhost:5001/services");
  const teamData: HomeProps = await fetchData("http://localhost:5001/team");

  return {
    props: {
      banner: homepageData.banner_content,
      servicesPage: homepageData.services_block,
      services,
      team: { ...homepageData.team_block, teamItems: teamData },
    },
  };
  
};

export default Home;
