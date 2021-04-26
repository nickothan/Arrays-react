import {Content} from "./styles";

const user = {
    id: 1,
    name: "Pepe ",
    apellido: "Juarez",
    telCelular: {
        indicativo: "+57",
        numCel: "30123456789",
    },
    correo: "PepesJ@mail.com",
    ubicacion: {
        pais: "colombia",
        ciudad: "bogotá",
        localidad: "Antonio nariño",
    },
};

function Perfil({
    user: {
        name: nombre,
        apellido,
        telCelular: {indicativo: indCel, numCel},
        correo,
        ubicacion: {pais, ciudad, localidad},
    },
}) {
    return (
        <div>
            <h4>{`${nombre} ${apellido}`}</h4>
            <p>{`Numero Celular:  ${indCel} ${numCel}`}</p>
            <p>{`Correo Electronico:  ${correo}`}</p>
            <p>{`ubicado en el pais de ${pais}, en la ciudad de ${ciudad} en la localidad ${localidad}`}</p>
        </div>
    );
}

export default function EjerDes1_3() {
    return (
        <Content>
            <h3>Ejercicio 1_3</h3>
            <Perfil user={user} />
        </Content>
    );
}
