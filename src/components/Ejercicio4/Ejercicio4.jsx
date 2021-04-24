import {Content} from "./styles";

const usuario = {
    estudiantes: [
        {
            id: 1,
            nombre: "sergio ",
            apellido: "Garcia",
            Telefono: "3209317494",
            correo: "s1nicolasrg@gmail.com",
        },
        {
            id: 1,
            nombre: "nicolas ",
            apellido: "ramirez",
            Telefono: "3112953589",
            correo: "NicoPro@gmail.com",
        },
        {
            id: 1,
            nombre: "Paola ",
            apellido: "Jerez",
            Telefono: "3209317494",
            correo: "PaoJerez@gmail.com",
        },
        {
            id: 1,
            nombre: "orlando ",
            apellido: "Jimenez",
            Telefono: "3209317494",
            correo: "Orlandinho@gmail.com",
        },
        {
            id: 1,
            nombre: "Nicolas ",
            apellido: "Garcia",
            Telefono: "3209317494",
            correo: "s1nicolasrg@gmail.com",
        },
    ],
};

const User = ({user}) => {
    return (
        <li>
            <h4 className="nombre">
                {user.nombre}
                {user.apellido}
            </h4>
            <p className="telefono">{user.Telefono}</p>
            <p className="correo">{user.correo}</p>
        </li>
    );
};

export default function Usuarios() {
    return (
        <Content>
            <h2>Usuarios</h2>

            <ul>
                {usuario.estudiantes.map((user) => {
                    return <User key={user.id} user={user} />;
                })}
            </ul>
        </Content>
    );
}
