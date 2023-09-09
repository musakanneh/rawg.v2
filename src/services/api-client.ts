import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: "7c4300bf6b2d4bf18e7d7014a274763c"
    }
})