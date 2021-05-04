import {Content} from "./styles";

const animal = {
    id: 5,
    nombre: "tony",
    edad: "5 años",
    peso: " 20kg",
    altura: "62cm",

    ubicacion: {
        pais: "Colombia",
        ciudad: "Bogotá",
        localidad: "Engativa",
    },
};

function WhoIs({
    animalUser: {
        nombre,
        edad,
        peso,
        altura,
        ubicacion: {pais, ciudad, localidad},
    },
}) {
    return (
        <div>
            <h4>{`La mascota se llama ${nombre}`}</h4>
            <p> {`Tiene ${edad},  su altura es de ${altura} y su peso es de ${peso} `} </p>
        </div>
    );
}

export default function EjerDes1_4() {
    return (
        <Content>
            <h3>Ejercicio 1_4</h3>
            <WhoIs animalUser={animal} />
        </Content>
    );
}
