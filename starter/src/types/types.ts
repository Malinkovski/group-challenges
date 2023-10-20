/* HOME */


export interface BannerProps {
  title: string;
  content: string;
}


export interface Block {
  preTitle: string;
  title: string;
}

export interface HomepageData {
  banner_content: BannerProps;
  services_block: Block;
  team_block: Block;
}

export interface ServicesProps {
  preTitle: string;
  title: string;
  services:ServiceProps[];
}

export interface ServiceProps {
  id: string;
  image: string;
  title: string;
  description: string;
  icon: string;
}

export interface TeamProps {
  preTitle: string;
  title: string;
  teamItems: {
    id: string;
    first_name: string;
    last_name: string;
    avatar: string;
    position: string;
  }[];
}

/* ABOUT */

export interface AboutPageData extends PageBannerProps, AboutBlockProps, FeatureBlockProps {}

export interface PageBannerProps {
  preTitle: string;
  title: string;
}

export interface AboutBlockProps {
  preTitle: string;
  title: string;
  firstParagraph: string;
  secondParagraph: string;
  years: string;
  slogan: string;
  imageOne: string;
  imageTwo: string;
}

export interface FeatureBlockProps {
  preTitle: string;
  title: string;
  firstParagraph: string;
  imageOne: string;
  imageTwo: string;
  uspItems: {
    id: string;
    title: string;
    content: string;
    icon: string;
  }[];
}
