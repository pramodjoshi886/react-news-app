import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../card/Card";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import {readLaterService} from '../../Services/readnews.service'

function Dashboard() {
  const [trending, setTrending] = useState([]);
  const [readlaterdb, setReadlaterdb] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apikey=53d1cc299b0b4a3e8fe0794de18c2759&page=2"
      )
      .then((res) => {
        setTrending(res.data.articles);
      });
  }, []);

  const readLater = async (newCard) => {
    const token = localStorage.getItem('token')
    // await axios
    //   .post('http://localhost:3001/api/v1/news', newCard, {
    //     headers: { "Authorization": `Bearer ${token}` },
    //   })
    const response = readLaterService(newCard,token);
      
        if (response.status === 201) {
          console.log('News Item Saved')
          setReadlaterdb([...readlaterdb, response.data]);
        }
      else{
        console.log(response);
      }
  };
  return (
    <div>
      <Header/>
    
    <div className="container">
      <div className="row" style={{ width: "max" }}>
        {trending.map((news) => (
          <Card
            urlToImage={news.urlToImage}
            title={news.title}
            author={news.author}
            readLater={readLater}
            description={news.description}
            url={news.url}
          />
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Dashboard;
