import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import "./Components.css";
import Abilities_Child from "./Abilities_Child";
import Effect_Changes from './Effect_Changes';
import Flavor_Text_Entries from "./Flavor_Text_Entries";
import Names from "./Names";

function Abilities() {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState("tab1");
  const [openIndex, setOpenIndex] = useState(null);
  const { name } = useParams();
  const location = useLocation();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [name]);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Check if we are exactly on "/poke_card/:name/abilities"
  const isBaseAbilities = location.pathname.endsWith("/abilities");

  return (
    <div className="abilities-container">
  <div className="abilities-inner">
    {/* Tab Buttons */}
    <div className="tabs">
      <button
        className={`tab-button ${activeTab === "tab1" ? "active" : ""}`}
        onClick={() => setActiveTab("tab1")}
      >
        {data?.abilities && data.abilities[0].ability.name}
      </button>
      <button
        className={`tab-button ${activeTab === "tab2" ? "active" : ""}`}
        onClick={() => setActiveTab("tab2")}
      >
        {data?.abilities && data.abilities[1].ability.name}
      </button>
    </div>

    {/* Tab Content */}
    <div className="tab-content">
      {activeTab === "tab1" && (
        <div className="accordion">
          <div className="accordion-item">
            <button className="accordion-header" onClick={() => toggleAccordion(0)}>
              Effect Changes
            </button>
            {openIndex === 0 && (
              <div className="accordion-content">
                {data?.abilities?.[0]?.ability?.url && (
                  <Effect_Changes url={data.abilities[0].ability.url} />
                )}
              </div>
            )}
          </div>

          <div className="accordion-item">
            <button className="accordion-header" onClick={() => toggleAccordion(1)}>
              Flavor Text Entries
            </button>
            {openIndex === 1 && (
              <div className="accordion-content">
                {data?.abilities?.[0]?.ability?.url && (
                  <Flavor_Text_Entries url={data.abilities[0].ability.url} />
                )}
              </div>
            )}
          </div>

          <div className="accordion-item">
            <button className="accordion-header" onClick={() => toggleAccordion(2)}>
              Names
            </button>
            {openIndex === 2 && (
              <div className="accordion-content">
                {data?.abilities?.[0]?.ability?.url && (
                  <Names url={data.abilities[0].ability.url} />
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === "tab2" && (
        <div className="accordion">
          <div className="accordion-item">
            <button className="accordion-header" onClick={() => toggleAccordion(0)}>
              Effect Changes
            </button>
            {openIndex === 0 && (
              <div className="accordion-content">
                {data?.abilities?.[1]?.ability?.url && (
                  <Effect_Changes url={data.abilities[1].ability.url} />
                )}
              </div>
            )}
          </div>

          <div className="accordion-item">
            <button className="accordion-header" onClick={() => toggleAccordion(1)}>
              Flavor Text Entries
            </button>
            {openIndex === 1 && (
              <div className="accordion-content">
                {data?.abilities?.[1]?.ability?.url && (
                  <Flavor_Text_Entries url={data.abilities[1].ability.url} />
                )}
              </div>
            )}
          </div>

          <div className="accordion-item">
            <button className="accordion-header" onClick={() => toggleAccordion(2)}>
              Names
            </button>
            {openIndex === 2 && (
              <div className="accordion-content">
                {data?.abilities?.[1]?.ability?.url && (
                  <Names url={data.abilities[1].ability.url} />
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  </div>
</div>

  );
}

export default Abilities;
