


document.addEventListener('DOMContentLoaded',()=>{
    let foto = "https://avatars.githubusercontent.com/u/85469419?v=4"
    let contenedor = document.getElementById('f10');
    contenedor.innerHTML =`<div class="p-3 bg-info card border-dark bg-gray mr-9" style="width: 18rem;">
    <img class="card-img-top" src=${foto} alt="Card image cap">
    <div class="card-body">
    <h5 class="card-title">Miguel Arias</h5>
    <p class="card-text">Soy de Bogota tengo 27 años me apasiona mucho la programacion me gusta viajar compartir con amigos.</p>
  </div>
</div>`
})