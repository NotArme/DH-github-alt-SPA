<<<<<<< HEAD
import axios from "axios"

const api = axios.create({
    baseURL: "https://api.github.com",
    headers: {
        Authorization: "token " + process.env.REACT_APP_TOKEN
    }
})

export default api; 
=======
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: 'token ' + process.env.REACT_APP_TOKEN
  }
});

export default api;
>>>>>>> 8b9ed9da3eb63e45a23705eb817eb6c8895b1472
