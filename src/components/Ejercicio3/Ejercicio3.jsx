import {Content} from "./styles.js";

const animales = {
    domesticos: [
        {
            id: 1,
            nombre: "caballo",
        },
        {
            id: 2,
            nombre: "cerdo",
        },
        {
            id: 3,
            nombre: "galina",
        },
        {
            id: 4,
            nombre: "pato",
        },
        {
            id: 5,
            nombre: "ganzo",
        },
        {
            id: 6,
            nombre: "pavo",
        },
        {
            id: 7,
            nombre: "perro",
        },
        {
            id: 8,
            nombre: "gato",
        },
    ],
    salvajes: [
        {id: 9, nombre: "oso"},
        {id: 10, nombre: "leon"},
        {id: 11, nombre: "tigre"},
    ],
};

const Domestico = ({domestico}) => {
    return <li>{domestico}</li>;
};

export default function Resume() {
    return (
        <Content>
            <div>
                <ul>
                    {animales.domesticos.map((domestico) => {
                        return <Domestico key={domestico.id} domestico={domestico.nombre} />;
                    })}
                </ul>
            </div>
        </Content>
    );
}
