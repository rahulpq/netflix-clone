import axios from "axios";
// base Url is to make the request to the movies database
const instance= axios.create({
    baseURL:"https://api.themoviedb.org/3",
});

export default instance;