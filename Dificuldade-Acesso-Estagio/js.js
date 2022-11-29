const cartaz = (data) => {
    let html = '';
    let json = JSON.parse(data.target.response);
    localStorage.setItem("db_filmes",data.target.response);
    for (var i = 0; i < json.results.length; i++) {
        let posicao = json.results[i];
        html += `<div class="col-md-4">
        <div class="card">
            <img class="card-img-top" src="https://image.tmdb.org/t/p/w500${posicao.poster_path}" alt="Card image cap">
            <div class="card-block p-3">
                <h4 class="card-title">${posicao.title}</h4>
                <p class="card-text">${posicao.overview}</p>
                <h4>Avaliação: ${posicao.vote_average} </h4>
                <a href="lm.html?id=${posicao.id}"
                class="btn btn-primary rounded-0 mb-2">Leia Mais</a>
            </div>
        </div>
    </div>`
    }
    document.getElementById('cards').innerHTML = html;
}

const carregado = () => {
    let xhr = new XMLHttpRequest();
    let link = "https://api.themoviedb.org/3/movie/popular?api_key=660e30118fd6f4f15bbc4c22ac6778d5&language=pt-BR";
    xhr.onload = cartaz;
    xhr.open('GET', link, true);
    xhr.send();
};

document.body.onload = carregado;