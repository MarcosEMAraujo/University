const carregado = () => {
    const parametros = new URLSearchParams(location.search);
    let id = parametros.get('id');
    dados = JSON.parse(localStorage.getItem('db_filmes'));
    let index = dados.results.findIndex((elem) => elem.id == id);
    if (index >= 0) {
        let filmes = dados.results[index];
        document.getElementById('cardi').innerHTML = `
        <div class="card mb-3" style="max-width: 1080px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="https://image.tmdb.org/t/p/w500${filmes.poster_path}" class="img-fluid rounded-start" alt="...">
                        </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h2 class="card-title">${filmes.title}</h2>
                                    <h5 class="card-text">Sinopse: </h5>
                                    <p> ${filmes.overview} </p>
                                    <h5>Data de Lançamento: ${filmes.release_date}</h5>
                                    <h1>  .  </h1>
                                    <h5 class="card-text">Avaliação: <i class="fa fa-solid fa-star"></i> ${filmes.vote_average}/10</h5>
                                    <h1>  .  </h1>
                                    <h5></h5>
                                    <h1>  .  </h1>
                                </div>
                            </div>
                        </div>
                    </div> `
    };
}

document.body.onload = carregado;