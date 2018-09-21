import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-fe8d7.firebaseio.com/'
    
});

export default instance;