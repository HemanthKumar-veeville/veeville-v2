import React, { useState } from "react";
import { clientsData, clientCategories, ClientData } from "./data";
import TabFilter from "../../components/ui/TabFilter";
import "./Client.css";

const Client = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredClients =
    selectedCategory === "All"
      ? clientsData
      : clientsData.filter((client) => client.category === selectedCategory);

  return (
    <div className="client-section">
      <div className="client-intro">
        <h1>Our Clients</h1>
        <p>
          Since our inception we have had the good fortune of being the
          communication and marketing partner for organizations across different
          industries. These include retail, banking & finance, FMCG,
          pharmaceuticals, oil & gas, automobiles, healthcare, information
          technology, education, food & beverage, etc.
        </p>
        <p className="mt-4">Here's a partial list of our clients.</p>
      </div>

      <div className="client-grid"></div>
    </div>
  );
};

export default Client;
