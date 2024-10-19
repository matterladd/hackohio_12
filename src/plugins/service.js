import dotenv from 'dotenv';
dotenv.config();

const { VITE_API_ACCESS_TOKEN } = process.env;


const callAPI = async (show_id) => {
    let request = await fetch(`https://api.themoviedb.org/3/tv/${show_id}`, {
        method: 'GET',
        headers: {
            accept: 'application.json',
            Authorization: `Bearer ${VITE_API_ACCESS_TOKEN}`
        }
    })
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));
}