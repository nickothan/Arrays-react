import Presentacion from "../Ejercicio";
import Ejercicio2 from "../Ejercicio2";
import Ejercicio3 from "../Ejercicio3";
import Ejercicio4 from "../Ejercicio4";

import {Plantilla} from "./styles.js";

export default function Resume() {
    return (
        <Plantilla>
            <Presentacion></Presentacion>

            <Ejercicio2></Ejercicio2>

            <Ejercicio3></Ejercicio3>
            <Ejercicio4></Ejercicio4>
        </Plantilla>
    );
}
