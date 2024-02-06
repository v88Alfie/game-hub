import axios from "axios"

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '452c24340f224b99a700d5dc93d45b22'
    }
})