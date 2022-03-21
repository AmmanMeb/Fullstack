import axios from 'axios'


//communicates with the Backend
export default class apiClient {
    static async signUp(links, title) {
        const response =  await  axios
        .post('8080', {
          links: links,
          title: title
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