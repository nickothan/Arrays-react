import {Content} from "./styles";

const user = {
    id: 20,
    name: "Orlando",
    ubicacion: {
        pais: "Colombia",
        ciudad: "Bogotá",
        barrio: "engativa",
        direccion: {
            calle: "15 sur",
            carrera: "11 B",
        },
    },
};

function WhoIs({
    user: {
        name,
        ubicacion: {
            ciudad,
            direccion: {calle, carrera},
        },
    },
}) {
    return (
        <p>{`${name} vive en la ciudad de ${ciudad} en la direccion ${carrera} con calle ${calle}`}</p>
    );
}

export default function EjerDes1_2() {
    return (
        <Content>
            <h4> Ejercicio 1_2</h4>
            <WhoIs user={user} />
        </Content>
    );
}
