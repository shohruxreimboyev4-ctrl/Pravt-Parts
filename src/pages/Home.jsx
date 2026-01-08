import React from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import AboutCompany from "../components/AboutCompany";

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories/>
      <AboutCompany/>
    </div>
  );
}