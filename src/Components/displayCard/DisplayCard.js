import React from 'react'

function DisplayCard(props) {
    
        return (
            <div className="card" data-testid="NewsCard">
            <div className="card-body">
            <div className="cardsContainer img" ><img className="image" src={props.urlToImage} alt="news-img"/> </div>
            <br/>
            <h4><p className="card-title" >{props.title}</p></h4>
            <p className="author"><b>{props.author}</b></p>
            <p className="description">{props.description}</p>
          </div>
        </div>
        )
}

export default DisplayCard
