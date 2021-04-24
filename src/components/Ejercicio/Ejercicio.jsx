const data = {
    user: "Nico",
    age: 25,
    hobbies: ["programar", " escuchar musica", "hacer ejercicio"],
};

const Hobby = ({hobby}) => {
    return <li>{hobby}</li>;
};

export default function Presentacion() {
    return (
        <div className="App">
            <h1>Presentandome.</h1>
            <h3>Hola, yo soy {data.user}.</h3>
            <h4>Mi edad es de {data.age}.</h4>
            <h4>Mis hobies son: </h4>
            <ul>
                {data.hobbies.map((hobby) => {
                    return <Hobby key={Math.random() * 10} hobby={hobby} />;
                })}
            </ul>
        </div>
    );
}
