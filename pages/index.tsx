import Head from 'next/head'
import Header from '../components/Header';
import Banner from '../components/HomeBanner';
import BrandLogo from '../components/BrandLogo';
import Arc from '../components/Arc';
import Learning from '../components/LearningPrograme';
import Programme from '../components/ProgramBenefits';
import Growth from '../components/GrowthJourney';
import Testimonials from '../components/Testimonials';
import App from '../components/App';
import Footer from '../components/Footer';
import { NextSeo } from 'next-seo';

export default function Home() {
  return (
    <>
      <Head>
        <title>Learning program for MSME entrepreneurs</title>
        <meta name="description" content="Walmart Vriddhi initiative is designed to support MSMEs in modernising, expanding, and reaching their domestic ambitions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> 
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" async />
      </Head>

      <NextSeo
      title="Learning program for MSME entrepreneurs"
      description="This example uses more of the available config options."
      canonical="https://www.walmartvriddhi.org/"
      openGraph={{
        url: 'https://www.walmartvriddhi.org/',
        title: 'Learning program for MSME entrepreneurs',
        description: 'Walmart Vriddhi initiative is designed to support MSMEs in modernising, expanding, and reaching their domestic ambitions.',
        images: [
          {
            url: '/images/banner_1_1.png',
            width: 800,
            height: 600,
            alt: 'Walmart Vriddhi initiative is designed to support MSMEs in modernising, expanding, and reaching their domestic ambitions.',
            type: 'image/jpeg',
          },
          {
            url: '/images/banner_1_1.png',
            width: 900,
            height: 800,
            alt: 'Walmart Vriddhi initiative is designed to support MSMEs in modernising, expanding, and reaching their domestic ambitions.',
            type: 'image/jpeg',
          },
          { url: '/images/banner_1_1.png' },
          { url: '/images/banner_1_1.png' },
        ],
        siteName: 'SiteName',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    />

    
    <div>
      <Header/>
      <Banner/>
      <BrandLogo/>
      <Learning/>
      <Programme/>  
      <Arc/>
      <Growth/>
 <Testimonials/>
 <App/>
<Footer/>
    </div>
    </>
  )
}




