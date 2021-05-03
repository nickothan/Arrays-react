import {Content} from "./styles";

const carros = [
    {
        id: "6544",
        marca: "BMW ",
        año: " 2010 ",
        color: " rojo ",
        mantenimiento: ["2019-11-05", "2010-10-15", "2001-11-20"],
        kilometraje: "123.543 ",
        precio: "  70.000.000",
    },
    {
        id: "6854",
        marca: "Mercedes-Benz ",
        año: " 2009 ",
        color: " morado ",
        mantenimiento: ["2019-11-05", "2010-10-15", "2001-11-20"],
        kilometraje: "123.543 ",
        precio: "  80.000.000",
    },
    {
        id: "9244",
        marca: "Audi ",
        año: " 2001 ",
        color: " naranja ",
        mantenimiento: ["2019-11-05", "2010-10-15", "2001-11-20"],
        kilometraje: "123.543 ",
        precio: "  78.000.000",
    },
    {
        id: "7344",
        marca: "Lexus ",
        año: " 2015 ",
        color: " salmon ",
        mantenimiento: ["2019-11-05", "2010-10-15", "2001-11-20"],
        kilometraje: "123.543 ",
        precio: "  56.000.000",
    },
    {
        id: "2944",
        marca: "Renault ",
        año: " 2018 ",
        color: " purpura ",
        mantenimiento: ["2019-11-05", "2010-10-15", "2001-11-20"],
        kilometraje: "123.543 ",
        precio: "  40.000.000",
    },
    {
        id: "6594",
        marca: "Ford ",
        año: " 2007 ",
        color: " azul",
        mantenimiento: ["2019-11-05", "2010-10-15", "2001-11-20"],
        kilometraje: "123.543 ",
        precio: "  60.000.000",
    },
    {
        id: "6924",
        marca: "BMW ",
        año: " 2019 ",
        color: " negro ",
        mantenimiento: ["2019-11-05", "2010-10-15", "2001-11-20"],
        kilometraje: "123.543 ",
        precio: "  75.000.000",
    },
    {
        id: "6014",
        marca: "Ford ",
        año: " 2011 ",
        color: " blanco ",
        mantenimiento: ["2019-11-05", "2010-10-15", "2001-11-20"],
        kilometraje: "123.543 ",
        precio: "  64.000.000",
    },
];

const Carros = ({carros}) => {
    return (
        <ul className="ulCarros">
            {carros.map(({id, marca, color, año, precio, mantenimiento, kilometraje}) => (
                <li className="carros">
                    <h3>
                        {marca} {color}
                    </h3>
                    <br />
                    <p>
                        año {año} con {kilometraje} recorridos
                    </p>
                    <ul>
                        {mantenimiento.map((mantenimiento) => {
                            return <li>{mantenimiento}</li>;
                        })}
                    </ul>
                </li>
            ))}
        </ul>
    );
};

export default function EjerDes3_2() {
    return (
        <Content>
            <h2>Conectado</h2>

            <Carros carros={carros} />
        </Content>
    );
}
