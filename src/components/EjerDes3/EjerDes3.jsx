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

for (const {
    name: n,
    family: {father: f},
} of people) {
    console.log("Nombre: " + n + ", Padre: " + f);
}

// "Nombre: Mike Smith, Padre: Harry Smith"
// "Nombre: Tom Jones, Padre: Richard Jones"

export default function EjerDes3() {
    return (
        <Content>
            <h2>Ejercicio 3</h2>
            <p>Iteración "for...of" y desestructuración</p>
        </Content>
    );
}
