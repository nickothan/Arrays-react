import {Content} from "./styles";

const metadata = {
    title: "Scratchpad",
    translations: [
        {
            locale: "de",
            localization_tags: [],
            last_edit: "2020-08-29T08:43:37",
            url: "/de/docs/Tools/Scratchpad",
            title: "JavaScript-Umgebung",
        },
    ],
    url: "/es/docs/Tools/Scratchpad",
};

let {
    title: englishTitle, // renombrar
    translations: [
        {
            title: localeTitle, // renombrar
        },
    ],
} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle); // "JavaScript-Umgebung"

export default function EjerDes1() {
    return (
        <Content>
            <h2>Ejercicio 2</h2>
            <p>Desestructuración de arreglos y objetos anidados</p>
        </Content>
    );
}
