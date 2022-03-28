const myDiv = document.getElementById("f10");

myDiv.innerHTML = `
    <div class="container w-50">
        <div class="row">
            <div class="card">
                <div class="card-body d-flex flex-column justify-content-between">
                    <h2 class="card-title text-center">Sobre mí</h2>
                    <div class="w-100 mx-auto d-flex justify-content-center">
                    <img src='https://res.cloudinary.com/dp9zv16le/image/upload/v1648506286/foto_y11noe.jpg' class="img-fluid img-thumbnail w-25 h-75 rounded-circle" alt="img">
                    </div>                    
                    <p class="card-text">
                        Nombre: <strong>Dilan Enrique Espindola Gil</strong><br>
                    </p>
                    <p class="card-text">
                        Edad: <strong>20 años</strong><br>                    
                    </p>
                    <p class="card-text">
                        Conocimientos: <strong>
                        Tengo pocos conocimientos en programacion, conozco html, css, javascript y he trabajado un poco bases de datos
                        </strong><br>
                    </p>
                    <p class="card-text">
                        Ubicacion <strong>Vivo en Bogotá</strong><br>
                    </p>
            </div>
        </div>
    </div>

`;
