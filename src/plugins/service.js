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
    let response =await request.json()
    return response
}
callAPI(456)
/** Show IDs we're going to use:
 * 
 * Simpsons: 456
 * George Lopez: 3308
 * The Office: 2316
 * Seinfeld: 1400
 * 
*/ 

