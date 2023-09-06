import axios from "axios";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "./Home.css";


const Home = () => {

// resgatar os dados dos posts em uma variável, no react usamos o useState 
// (manipular e visualizar dados)
  const [posts, setposts] = useState([]);

  const getPosts = async() => {

    try {

      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
        );

      const data = response.data;

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

// Para executar para coordenar a execução qts vzs quiser, 
//  algo q nós determinamos e ñ deixa a cargo do react 
// O array vazio após o colchete fechado faz com que execute apenas uma vez
  useEffect(() => {
    getPosts();
  }, []); 


  return (
    <div>Home</div>
  )
}

export default Home