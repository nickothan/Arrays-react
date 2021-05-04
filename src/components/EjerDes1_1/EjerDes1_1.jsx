import {Content} from "./styles";

/**/

const user = {
    id: 10,
    nickName: "PREJS",
    fullName: {
        firstName: "Pedro",
        lastName: "Jase",
    },
};

function WhoIs({
    user: {
        nickName,
        fullName: {firstName: name},
    },
}) {
    return <p>{`El nombre real de ${nickName} es ${name}`}</p>;
}

export default function EjerDes1_1() {
    return (
        <Content>
            <h3>Ejercicio 1_1</h3>

            <WhoIs user={user} />
        </Content>
    );
}
