
let danilo ={ 
    name:"Danilo",
    age:19,
    localidad:"Medellin",
    experiencia:"si,cursos basicos antes de la academia",
}
export let contenedor= document.querySelector("#f10")

contenedor.innerHTML += `<div class="card" style="width: 18rem;">
<img src="${"https://res.cloudinary.com/dpyo5aklw/image/upload/v1648506711/143_p5e96s.jpg"}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Danilo Vergara</h5><br>
  <h5 class="card-title">edad: 19</h5>
  <h5 class="card-title">De: Medellin</h5>
  <p class="card-text">con poca experiencia en javascript pero con lo fundamental.</p>
  
</div>
</div>`