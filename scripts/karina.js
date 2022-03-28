const fullname = "Karina Vargas Rios";
const age = 25;
const experience = "si, en JavaScript y Python";
const location = "Medellín, Colombia";
const image =
  "https://media-exp1.licdn.com/dms/image/C5603AQGOiSeAhCMmng/profile-displayphoto-shrink_200_200/0/1639787498943?e=1652918400&v=beta&t=4_P-tp59VsacDiYwSqzmOu2Yn49a4WGpN03KYdvIHp0";

const presentation = `
    <div class="card" style="width: 18rem;">
        <img src="${image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${fullname}</h5><br>
            <h5 class="card-title">edad: ${age}</h5>
            <h5 class="card-title">De: ${location}</h5>
            <p class="card-text">${experience}</p>
        </div>
    </div>
`;  
const div10 = document.querySelector("#10");
div10.innerHTML(presentation);

