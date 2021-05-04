import {Content} from "./styles";

const perros = [
    {
        id: 1234,
        raza: "Pastor Aleman",
        origen: "Alemania",
        distribucion: [
            {
                ciudad: "bogotá",
                cantidad: 20,
            },
            {
                ciudad: "Cali",
                cantidad: 50,
            },
            {
                ciudad: "Medellin",
                cantidad: 80,
            },
            {
                ciudad: "Barranquilla",
                cantidad: 100,
            },
            {
                ciudad: "Santander",
                cantidad: 120,
            },
            {
                ciudad: "Bucaramanga",
                cantidad: 140,
            },
        ],
    },
    {
        id: 1345,
        raza: "Labrador",
        origen: "Terranova",
        distribucion: [
            {
                ciudad: "bogotá",
                cantidad: 103,
            },
            {
                ciudad: "Cali",
                cantidad: 130,
            },
            {
                ciudad: "Medellin",
                cantidad: 150,
            },
            {
                ciudad: "Barranquilla",
                cantidad: 109,
            },
            {
                ciudad: "Santander",
                cantidad: 160,
            },
            {
                ciudad: "Bucaramanga",
                cantidad: 100,
            },
        ],
    },
    {
        id: 9876,
        raza: "Akita",
        origen: "Japon",
        distribucion: [
            {
                ciudad: "bogotá",
                cantidad: 10,
            },
            {
                ciudad: "Cali",
                cantidad: 2,
            },
            {
                ciudad: "Medellin",
                cantidad: 6,
            },
            {
                ciudad: "Barranquilla",
                cantidad: 9,
            },
            {
                ciudad: "Santander",
                cantidad: 2,
            },
            {
                ciudad: "Bucaramanga",
                cantidad: 8,
            },
        ],
    },
    {
        id: 5345,
        raza: "Pit bull terrier",
        origen: "USA",
        distribucion: [
            {
                ciudad: "bogotá",
                cantidad: 160,
            },
            {
                ciudad: "Cali",
                cantidad: 180,
            },
            {
                ciudad: "Medellin",
                cantidad: 210,
            },
            {
                ciudad: "Barranquilla",
                cantidad: 510,
            },
            {
                ciudad: "Santander",
                cantidad: 250,
            },
            {
                ciudad: "Bucaramanga",
                cantidad: 120,
            },
        ],
    },
    {
        id: 9876,
        raza: "Bajensi",
        origen: "Africa",
        distribucion: [
            {
                ciudad: "bogotá",
                cantidad: 10,
            },
            {
                ciudad: "Cali",
                cantidad: 15,
            },
            {
                ciudad: "Medellin",
                cantidad: 19,
            },
            {
                ciudad: "Barranquilla",
                cantidad: 30,
            },
            {
                ciudad: "Santander",
                cantidad: 20,
            },
            {
                ciudad: "Bucaramanga",
                cantidad: 8,
            },
        ],
    },
];

const Perros = ({perros}) => {
    return (
        <ul className="ulPerros">
            {perros.map(({raza, origen, distribucion}) => (
                <li className="perro">
                    <h4>
                        {raza} su pais de origen es {origen}
                    </h4>
                    <br />
                    <p>se distribuyen en: </p>
                    <ul>
                        {distribucion.map(({ciudad, cantidad}) => {
                            return <li>{`${ciudad} con ${cantidad}`}</li>;
                        })}
                    </ul>
                </li>
            ))}
        </ul>
    );
};

export default function EjerDes3_3() {
    return (
        <Content>
            <h3>conectado</h3>
            <Perros perros={perros} />
        </Content>
    );
}
