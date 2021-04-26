import {Content} from "./styles";

const buses = {
    id: "439-HTO",
    nombre: "cheto",
    indumentaria: [
        {
            extintor: "1",
            puertas: "3",
            asientos: [
                {
                    filaA: ["A1", "A2", "A3", "A4"],
                    filaB: ["B1", "B2", "B3", "B4"],
                },
            ],
        },
    ],
    empresa: "buses blancos",
};

const FilaA = ({s}) => {
    return <li>{s}</li>;
};

const FilaB = ({s}) => {
    return <li>{s}</li>;
};

const Bus = ({b}) => {
    let {
        id,
        empresa,
        nombre: nick,
        indumentaria: [
            {
                asientos: [{filaA: fA, filaB: fB}],
            },
        ],
    } = b;

    console.log("asientos fila A", fA);

    return (
        <div className="bus">
            <h4>{`El bus denominado ${nick} con el id ${id}`}</h4>
            <p> {`Pertenece a la empresa ${empresa}`}</p>
            <div className="tablaSillas">
                <ul>
                    <p>Fila A</p>
                    {fA.map((s) => {
                        return <FilaA s={s} />;
                    })}
                </ul>
                <ul>
                    <p>Fila B</p>
                    {fB.map((s) => {
                        return <FilaB s={s} />;
                    })}
                </ul>
            </div>
        </div>
    );
};

export default function EjerDes2_2() {
    return (
        <Content>
            <h4>Ejercicio 2_2</h4>

            <Bus b={buses} />
        </Content>
    );
}
