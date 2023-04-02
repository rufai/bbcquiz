import React, { useState } from "react";

const CountrySelector = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [capital, setCapital] = useState("");

  const handleCountrySelect = (event) => {
    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry);

    // Call an API or fetch data from a source to get the capital of the selected country
    // For this example, I'll just hard-code some values
    switch (selectedCountry) {
      case "USA":
        setCapital("Washington D.C.");
        break;
      case "Canada":
        setCapital("Ottawa");
        break;
      case "Mexico":
        setCapital("Mexico City");
        break;
      case "Germany":
        setCapital("Berlin");
        break;
      case "France":
        setCapital("Paris");
        break;
      case "Spain":
        setCapital("Madrid");
        break;
      default:
        setCapital("");
        break;
    }
  };

  return (
    <div>
      <select value={selectedCountry} onChange={handleCountrySelect}>
        <option value="">--Select a country--</option>
        <option value="USA">United States</option>
        <option value="Canada">Canada</option>
        <option value="Mexico">Mexico</option>
        <option value="Germany">Germany</option>
        <option value="France">France</option>
        <option value="Spain">Spain</option>
      </select>
      <div>{capital ? `Capital: ${capital}` : ""}</div>
    </div>
  );
};

export default CountrySelector;
