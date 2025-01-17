import { useRouter } from "next/router";
import '@/styles/routes/main.scss';
import MainHero from "@/components/MainHero/MainHero";
import { useState } from "react";
import MainFoot from "@/components/MainFoot/MainFoot";
import MainCust from "@/components/MainCust/MainCust";
import MainMeet from "@/components/MainMeet/MainMeet";
import MainMission from "@/components/MainMission/MainMission";
import Image from 'next/image';
import Hero from "@/components/Hero/Hero";
import Waste from "@/components/Waste/Waste";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {

  const router = useRouter();
  const [sidebar, setSidebar] = useState(false);

  const handleLoginClick = () => {
    router.push('/auth/login');
  };

  return (
    <>
      <div className="Main">
        <div className="Main__content">
          <div className="section">
            <Navbar/>
          </div>
          <div className="section">
            <Hero />
          </div>
          <div className="section">
            <MainHero />
          </div>
          <div className="section">
            <img src="/Images/main_model.png" alt="main_model" className="Main__content--img" />
          </div>
          <div className="section">
            <MainCust />
          </div>
          <div className="section">
            <Waste />
          </div>
          <div className="section">
            <MainMeet />
          </div>
          <div className="section">
            <img src="/Images/multiple_models.png" alt="main_model2" className="Main__content--img" />
          </div>
          <div className="section">
            <MainFoot />
          </div>
        </div>
      </div >

    </>
  );
}
