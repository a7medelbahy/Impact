import React from "react";
import "./portfolio.css";
import { PortfolioData } from "../../data";
import PortfolioBox from "./PortfolioBox";
import SectionHead from "./../SectionHead";
import { useState } from "react";

const Portfolio = () => {

  const [items, setItems] = useState(PortfolioData);
  const filterPortfolio = (catItem) => {
    let filteredItems = PortfolioData.filter((filtItem) => {
      return filtItem.categoary === catItem;
    });
    setItems(filteredItems);
  };
  let myBtns = document.querySelectorAll(
    ".portfolio .portfolio-filters li button"
  );
  myBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      myBtns.forEach((element) => {
        element.classList.remove("active");
      });
      e.currentTarget.classList.add("active");
    });
  });

  return (
    <div className="portfolio section-padding" id="portfolio">
      <div className="container">
        <SectionHead
          sectionName="Portfolio"
          desc="Quam sed id excepturi ccusantium dolorem ut quis dolores"
        />
        <ul className="portfolio-filters d-flex flex-wrap gap-2 mb-5 align-items-center justify-content-center">
          <li>
            <button className="active" onClick={() => setItems(PortfolioData)}>
              All
            </button>
          </li>
          <li>
            <button onClick={() => filterPortfolio("App")}>Apps</button>
          </li>
          <li>
            <button onClick={() => filterPortfolio("Books")}>Books</button>
          </li>
          <li>
            <button onClick={() => filterPortfolio("Product")}>Products</button>
          </li>
          <li>
            <button onClick={() => filterPortfolio("Branding")}>
              Branding
            </button>
          </li>
        </ul>
        <div className="row gy-4">
          {items.map((portItem) => {
            return <PortfolioBox key={portItem.id} portItem={portItem} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
