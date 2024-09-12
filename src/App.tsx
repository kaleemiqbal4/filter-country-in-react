import { useState } from "react";

function App() {
  const [country, setCountry] = useState([]);
  const countries: any = ["India", "Russia", "China", "Rome"];
  const lookUpCountry = (e: any) => {
    const result = countries.filter((item: any) =>
      item.toLowerCase().startsWith(e.target.value.toLowerCase())
    );

    setCountry(result);
  };

  return (
    <>
      <input type="text" onChange={lookUpCountry} />
      <label htmlFor="">{country.join(", ")}</label>
    </>
  );
}

export default App;
