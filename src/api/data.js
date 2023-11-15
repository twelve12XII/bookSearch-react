import { makeRequest } from "./makeRequest";

// const URL = 'time&printType=books';

export const getData = (config, URL) => makeRequest({
    method: 'GET',
    url: URL,
    ...config,
})