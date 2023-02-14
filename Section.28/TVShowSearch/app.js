const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.nextElementSibling.querySelector.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`https//api.tvmaze.com/search/shows`, config);
    makeImages(res.data)
})

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img)
        }
    }
}