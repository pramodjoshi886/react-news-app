import axios from 'axios';

// export class NewsReaderService{

//     readNowService = async(token)=>{
//         const response = await axios({
//             method: 'GET',
//             url:'http://localhost:3001/api/v1/news',
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         });
//         return response;
//     }
// }

export const readnowService = async(token)=>{
    try{
    const response = await axios({
                    method: 'GET',
                    url:'http://localhost:3001/api/v1/news',
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log(response)
                return response;
        }
        catch(e){
            return e;
        }
        }

export const readLaterService  = async(newCard, token)=>{
    try{
    const response = await axios
    .post('http://localhost:3001/api/v1/news', newCard, {
      headers: { "Authorization": `Bearer ${token}` },
    });

    return response;
}catch(e){
    return e;
}
}       
