import {Content} from "./styles";

const people = [
    {
        name: "Mike Smith",
        family: {
            mother: "Jane Smith",
            father: "Harry Smith",
            sister: "Samantha Smith",
        },
        age: 35,
    },
    {
        name: "Tom Jones",
        family: {
            mother: "Norah Jones",
            father: "Richard Jones",
            brother: "Howard Jones",
        },
        age: 25,
    },
];

const User = ({info}) => {
    let usuarios = [];

    for (const {
        name: n,
        family: {father: f},
    } of info) {
        usuarios.push(<p> {`Nombre: ${n} y su padre es ${f} `}</p>);
    }
    return <div>{usuarios.map((u) => u)}</div>;
};

// "Nombre: Mike Smith, Padre: Harry Smith"
// "Nombre: Tom Jones, Padre: Richard Jones"

export default function EjerDes3() {
    return (
        <Content>
            <h2>Ejercicio 3</h2>
            <p>Iteración "for...of" y desestructuración</p>

            <User info={people} />
        </Content>
    );
}
