import {Content} from "./styles.js";

const alimento = {
    frutas: ["manzana", "banano", "pera", "uva", "melon", "papaya", "sandia"],
    verduras: ["tomate", "acelga", "espinaca", "auyama", "papa"],
};

const Fruta = ({fruta}) => {
    return <li>{fruta}</li>;
};
const Verdura = ({verdura}) => {
    return <li>{verdura}</li>;
};

export default function Resume() {
    return (
        <Content>
            <div className="descripcion">
                <h2>Alimentos</h2>
                <p></p>
            </div>
            <div className="listados">
                <ul>
                    <h3>Frutas</h3>
                    {alimento.frutas.map((fruta) => {
                        return <Fruta key={Math.random() * 10} fruta={fruta} />;
                    })}
                </ul>
                <ul>
                    <h3>Verduras</h3>
                    {alimento.verduras.map((verdura) => {
                        return <Verdura key={Math.random() * 10} verdura={verdura} />;
                    })}
                </ul>
            </div>

            <div className="desarrollo"></div>
        </Content>
    );
}
