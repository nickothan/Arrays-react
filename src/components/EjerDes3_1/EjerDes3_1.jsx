import {Content} from "./styles";

const estudiantes = [
    {
        id: "234908",
        nombre: "Pedro",
        apellido: "Perez",
        telefono: "12345",
        correo: "pperez1@mail.com",
        ubicacion: {
            pais: "colombia",
            city: "bogota",
            localidad: "suba",
            barrio: "aures II",
        },
        materias: ["calculo", "programacion", "redes"],
    },
    {
        id: "234908",
        nombre: "Pedro",
        apellido: "Perez",
        telefono: "12345",
        correo: "pperez1@mail.com",
        ubicacion: {
            pais: "colombia",
            city: "bogota",
            localidad: "suba",
            barrio: "aures II",
        },
        materias: ["calculo", "programacion", "redes"],
    },
    {
        id: "234908",
        nombre: "Pedro",
        apellido: "Perez",
        telefono: "12345",
        correo: "pperez1@mail.com",
        ubicacion: {
            pais: "colombia",
            city: "bogota",
            localidad: "suba",
            barrio: "aures II",
        },
        materias: ["calculo", "programacion", "redes"],
    },
    {
        id: "234908",
        nombre: "Pedro",
        apellido: "Perez",
        telefono: "12345",
        correo: "pperez1@mail.com",
        ubicacion: {
            pais: "colombia",
            city: "bogota",
            localidad: "suba",
            barrio: "aures II",
        },
        materias: ["calculo", "programacion", "redes"],
    },
];

const Estudiante = ({info}) => {
    let est = [];

    for (const {
        id,
        nombre: nom,
        apellido: ape,
        telefono: tel,
        correo: mail,
        ubicacion: {city: ciudad},
    } of info) {
        est.push(
            <li className="estudiante">
                <h4>{`${nom} ${ape}`}</h4>
                <p>{`El id es: ${id}`}</p>
                <br />
                <p>{`Vive en la ciudad de ${ciudad}, en el barrio `} </p>
                <br />
                <p>
                    <span>{`su numero de contacto es ${tel}`}</span>
                    <br />
                    <span>{`su correo de contacto es ${mail}`}</span>
                </p>
            </li>
        );
    }
    return <ul>{est.map((datos) => datos)}</ul>;
};

const Estudiantes = ({estudiantes}) => {
    return (
        <ul>
            {estudiantes.map(
                ({
                    id,
                    nombre: nom,
                    apellido: ape,
                    telefono: tel,
                    correo: mail,
                    ubicacion: {city: ciudad},
                    materias,
                }) => (
                    <li className="estudiante">
                        <h4>{`${nom} ${ape}`}</h4>
                        <p>{`El id es: ${id}`}</p>
                        <br />
                        <p>{`Vive en la ciudad de ${ciudad}, en el barrio `} </p>
                        <br />
                        <p>
                            <span>{`su numero de contacto es ${tel}`}</span>
                            <br />
                            <span>{`su correo de contacto es ${mail}`}</span>
                        </p>
                        <ul>
                            {materias.map((materia) => {
                                return <li> {materia}</li>;
                            })}
                        </ul>
                    </li>
                )
            )}
        </ul>
    );
};

export default function EjerDes3_1() {
    return (
        <Content>
            <h3> Estudiantes </h3>

            <Estudiante info={estudiantes} />

            <Estudiantes estudiantes={estudiantes} />
        </Content>
    );
}
