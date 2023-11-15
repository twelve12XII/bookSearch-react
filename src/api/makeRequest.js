import axios from "axios"

const API_ENDPOINT = 'https://www.googleapis.com/books/v1/volumes'

export const makeRequest = (config) => {
    config.url = `${API_ENDPOINT}?q=${config.url}&key=AIzaSyBV67YdmECkltL4HlVcJz9m6-2Aii50KnU`
    return axios(config)
}