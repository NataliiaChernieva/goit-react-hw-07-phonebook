import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3003';

export async function fetchContacts() {
    const { data } = await axios.get('/contacts');
    return data;
}