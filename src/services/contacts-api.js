import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/goit-react-hw-07-phonebook';

export async function fetchContacts() {
    const { data } = await axios.get('/contacts');
    return data;
}