import React, {useState,useEffect} from 'react'
import DisplayCard from '../displayCard/DisplayCard'
import {readnowService} from '../../Services/readnews.service'
import Header from '../header/Header'
import Footer from '../footer/Footer'

function ReadNow() {
    const [state, setstate] = useState([])
    useEffect(() => {
        getDbNews()
    }, [])

    const getDbNews = async () =>{
        const token = localStorage.getItem('token')
        console.log(token)
        let response = await readnowService(token);
        console.log(response);
        if(response.status===200){         
                setstate(response.data)
                console.log(response)           
        }else{
            console.log(response);
        }
    }
    return (
        <div>
            <Header/>
           {state.map(val => {
               return (
               <DisplayCard {...val}/>
               )
           })}
           <Footer/>
        </div>
    )
}

export default ReadNow
