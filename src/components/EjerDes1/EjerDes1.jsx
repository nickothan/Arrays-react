import {Content} from "./styles";

import EjerDes1_1 from "../EjerDes1_1";
import EjerDes1_2 from "../EjerDes1_2";
import EjerDes1_3 from "../EjerDes1_3";
import EjerDes1_4 from "../EjerDes1_4";

const user = {
    id: 42,
    displayName: "jdoe",
    fullName: {
        firstName: "John",
        lastName: "Doe",
    },
};

function userId({id}) {
    return id;
}

function WhoIs({
    user: {
        displayName,
        fullName: {firstName: name},
    },
}) {
    return <p>{`${displayName} es ${name}`}</p>;
}

//console.log(userId(user)); // 42
//console.log(WhoIs(user)); // "jdoe es John"

export default function EjerDes1() {
    return (
        <Content>
            <h2>Ejercicio 1</h2>
            <p>Desempacar campos de objetos pasados como parámetro de función</p>
            <WhoIs user={user} />

            <div className="practica">
                <h3>Practicando!</h3>

                <EjerDes1_1 />
                <EjerDes1_2 />
                <EjerDes1_3 />
                <EjerDes1_4 />
            </div>
        </Content>
    );
}
