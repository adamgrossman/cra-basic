import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "./Home.css";

const Home = () => {
  const [fakeData, setFakeData] = useState();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      const persons = res.data;
      setFakeData(persons);
    });
  }, []);

  console.log("fakeData :>> ", fakeData);

  return (
    <div className="container">
      <h1>Hi there!</h1>
    </div>
  );
};

export default Home;
