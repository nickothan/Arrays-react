import {Content} from "./styles";

const metadata = {
    title: "Practica",
    translation: [
        {
            locale: "de",
            last_edit: ["2021-03-25 08:43:12", "2021-02-25 10:35:12", "2021-02-25 15:12:54"],
            url: "https://www.Practica.com",
            title: ["React", "html", "css3", "js", "sass"],
        },
    ],
    url: "https://www.OSDigital.com",
};
//desestructurando y cambiando nombre de las propiedades
let {
    title: name,
    translation: [{last_edit: ediciones, title: componente}],
} = metadata;

const Componentes = ({c}) => {
    return <li>{c}</li>;
};

const Ediciones = ({e}) => {
    return <li>{e}</li>;
};

const Plantilla = ({info}) => {
    return (
        <Content>
            <h2>{`${name}`}</h2>
            <div className="tablas">
                <ul>
                    <p>Esta desarrollada en: </p>
                    {componente.map((c) => {
                        return <Componentes c={c} />;
                    })}
                </ul>
                <ul>
                    <p>Cambios previos</p>
                    {ediciones.map((e) => {
                        return <Ediciones e={e} />;
                    })}
                </ul>
            </div>
        </Content>
    );
};

export default function EjerDes2_1() {
    return (
        <Content>
            <h3>EjerDes2_1</h3>
            <Plantilla info={metadata} />
        </Content>
    );
}
