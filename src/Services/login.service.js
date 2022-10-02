import axios from 'axios';

export class LoginService{
    login = async (username,password) =>{
        
          const response = await axios({
            method: 'post',
            url: 'http://localhost:3001/auth/v1',
            data:{
              username: username,
              password: password
            },
          })
          //if(response.status)
          console.log(response)
          return response;
        
      }
}