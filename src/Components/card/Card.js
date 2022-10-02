import React from 'react'

function Card(props) {

    const saveNews = () => {      
        props.readLater(props);
    };
        return (
            <div className="card" data-testid="NewsCard">
            <div className="card-body">
            <div className="cardsContainer img" ><img className="image" src={props.urlToImage} alt="news-img"/> </div>
            <br/>
            <h4><p className="card-title" >{props.title}</p></h4>
            <p className="author"><b>{props.author}</b></p>
            <p className="description">{props.description}</p>
            <button type="submit" className="btn btn-info" onClick={() => {
                        saveNews();
                    }}>
                        Read Later
            </button>
          </div>
        </div>
        )
}

export default Card
