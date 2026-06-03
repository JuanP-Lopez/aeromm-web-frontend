//importar bootstrap antes de los estilos propios
//Componentes
import Statistics from "./statisticspage/page";
import "./globals.css"

//Incluir filtrado de elementos, ver si cambiando de componente los botones se arregla movimiento

export default function Home() {
  return (
    <div className={"dashboard"}>
        <Statistics />
      </div>
  );
}
