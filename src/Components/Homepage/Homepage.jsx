import React from "react";
import ProfileCard from "./Cards/ProfileCard";
import WeatherDateCard from "./Cards/WeatherDateCard";
import Notes from "./Cards/Notes";
import TimerCard from "./Cards/TimerCard";
import NewsCard from "./Cards/NewsCard";
import { Link } from "react-router-dom";
export default function Homepage() {
  return (
    <div className="h-[100dvh] w-[100dvw] bg-black flex mx-auto justify-center">
      <div className="left w-[60%] h-[100dvh] flex flex-col  ">
        <div className="w-[100%] h-[65%]  flex justify-around items-center">
          <div className="flex flex-col w-[50%] gap-8 ">
            <ProfileCard />
            <WeatherDateCard />
          </div>
          <Notes />
        </div>
        <TimerCard />
      </div>
      <div className="w-[28%]  mx-5">
        <NewsCard />
      </div>
      <Link to="/Entertainment">
        <button className="font-dm-sans font-medium text-2xl bg-[#148A08] text-white rounded-full w-[200px] h-[55px] absolute right-20 bottom-5 mx-10 hover:bg-[#50a946]">
          Browse
        </button>
      </Link>
    </div>
  );
}
