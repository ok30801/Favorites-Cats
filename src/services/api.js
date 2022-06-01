import axios from "axios";

export function getAllCats() {
    const request = axios.get('https://api.thecatapi.com/v1/images/search?limit=20')
    return request.then(response => response)
}
