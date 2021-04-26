import {Content} from "./styles";

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
        </Content>
    );
}
