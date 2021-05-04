import {Content} from "./styles";

import EjerDes3_1 from "../EjerDes3_1";
import EjerDes3_2 from "../EjerDes3_2";
import EjerDes3_3 from "../EjerDes3_3";

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
            <br />
            <p>Iteración "for...of" y desestructuración</p>

            <br />
            <User info={people} />

            <div className="practica">
                <br />
                <h3>Practica</h3>

                <EjerDes3_1 />
                <EjerDes3_2 />
                <EjerDes3_3 />
            </div>
        </Content>
    );
}
