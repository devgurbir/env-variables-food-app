import SearchForm from "./components/SearchForm";
import "./styles.css";
import { useState } from "react";
import axios from "axios";
import FoodCard from "./components/FoodCard";

export default function App() {
  const [data, setData] = useState([]);

  const baseUrl = process.env.REACT_APP_BASE_URL;

  const handleSubmit = async (e, query) => {
    e.preventDefault();
    const meals = await axios({
      method: "get",
      url: baseUrl,
      params: {
        c: query
      }
    }).then((res) => res.data.meals);

    setData(meals);
  };

  console.log(baseUrl);

  return (
    <div className="App">
      <SearchForm onSubmit={handleSubmit} />
      <div
        style={{
          margin: "20px auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px"
        }}
      >
        {data.map((item) => (
          <FoodCard props={item} />
        ))}
      </div>
    </div>
  );
}
