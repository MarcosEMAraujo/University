const botao = document.querySelector("#enviar");
botao.addEventListener("click",function(oi){
    oi.preventDefault();
    const name = document.querySelector("#buscape");
    const value = name.value;
    let xhr = new XMLHttpRequest();
    let link = "https://api.themoviedb.org/3/search/movie?api_key=660e30118fd6f4f15bbc4c22ac6778d5&language=pt-BR&query="+value;
    xhr.onload = cartaz;
    xhr.open('GET', link, true);
    xhr.send();
});