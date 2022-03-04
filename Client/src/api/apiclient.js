import axios from 'axios'


//communicates with the Backend
export default class apiClient {
    static async signUp(user, pass) {
        const response =  await  axios
        .post('8080', {
          username: user,
          password: pass
        })
        return  response.data;
    }

    static async signIn(user, pass){    
     const response = await axios    
       .post('8080', {
          username: user,
          password: pass,
       }) 
       .then ()
         return response.data;   
    }

    
}