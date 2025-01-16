import axios from "axios";

const API_URL = 'https://pixabay.com/api/?'
const API_KEY = '44360334-36ebf903b1de9e2c9dc7dfbf4'

const fetchPhotos = async (searchQuery = '', page = 1) => {
    //console.log('searchQuery:',searchQuery);

    //const response = await axios.get(`https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
    const response = await axios.get(`${API_URL}key=${API_KEY}&q=${searchQuery}&page=${page}&image_type=photo&orientation=horizontal&per_page=4`);
    //console.log('response:', response.data);

    return response.data;
};



const api = { fetchPhotos }

export default api;