// axios.get("https://swapi.dev/api/people/1/").then((res) => {
//     console.log("RESPONSE: ", res);
// })
//     .catch((e) => {
//         console.log("ERROR! ", e);
//     });

// const getStarWarsPerson = async () => {
//     try {
//         const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//         console.log(res.data);
//     } catch (e) {
//         console.log("ERROR", e);
//     }
// };

// getStarWarsPerson(5);
// getStarWarsPerson(10);

const jokes = document.querySelectorAll('#jokes');
const button = document.querySelector('button');


const addNewJoke = async () => {
    const jokeText = getDadJoke();
    console.log(jokeText)
    const newLI = document.createElement('LI');
    newLI.append(res.data.joke);
    jokes.append(newLI)
}
const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    } catch (e) {
        return "NO JOKES AVAILABLE! SORRY :("
    }

}

button.addEventListener('click', addNewJoke)