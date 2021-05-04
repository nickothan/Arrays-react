import {Content} from "./styles";
import EjerDes2_1 from "../EjerDes2_1";
import EjerDes2_2 from "../EjerDes2_2";

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

const Datos = ({info}) => {
    return <p>{`el resultado es: ${englishTitle} `}</p>;
};

//console.log(englishTitle); // "Scratchpad"
//console.log(localeTitle); // "JavaScript-Umgebung"

export default function EjerDes1() {
    return (
        <Content>
            <h2>Ejercicio 2</h2>
            <p>Desestructuración de arreglos y objetos anidados</p>
            <Datos info={metadata} />
            <div className="practicando">
                <h3>Practicando!</h3>
                <EjerDes2_1 />
                <EjerDes2_2 />
            </div>
        </Content>
    );
}
