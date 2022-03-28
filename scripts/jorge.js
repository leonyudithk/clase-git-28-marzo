const cardJorge = () => {
    const element = document.getElementById('f10');
    element.innerHTML = `<div class="card" style="width: 30em;">
                            <div class="card-img-top d-flex">
                                <img class="rounded-circle m-auto" src="https://res.cloudinary.com/dvovmo7yu/image/upload/v1648506777/IMG_20220121_165842_938_wxetfb.jpg" style="width: 20em;">
                            </div>
                            <div class="card-body">
                                <h3 class="card-title text-center">Jorge Armando Morales</h3>
                                <p>
                                <strong>Edad:</strong> 24
                                <hr>
                                <strong>Localización:</strong> Palmira (Valle del Cauca)
                                <hr>
                                <strong>Background: </strong>Llevo aproximadamente 2 años explorando en el mundo de la programación.
                                </p>
                                <hr>
                                <strong>Hobbies:</strong> En mi tiempo libre me gusta escuchar música, salir en bicicleta y leer.
                            </div>
                         </div>`;
}
cardJorge();
