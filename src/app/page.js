//importar bootstrap antes de los estilos propios
//Componentes
import Link from "next/link";
import "./globals.css"

//Incluir filtrado de elementos, ver si cambiando de componente los botones se arregla movimiento

export default function Home() {
  return (
    <div className={"page"}>
      <div className={"main-container"}>
        <div className={"navbar"}>
          <div className={"sections"}>
            <ul>
              <li><a href="">Acerca de</a></li>
              <li><a href="">Contacto</a></li>
              <li><a href="">Más Información</a></li>
            </ul>
          </div>
        </div>
        <div className={"titulo"}>
          <h1>ÆroMM</h1>
        </div>
        <div className={"container"}>
          <div className={"container-btns"}>
            <Link href="/Dashboard">
              <button className="btn-register">
                Registrarse
              </button>
            </Link>

            <Link href="/LoginPage">
              <button className="btn-login">
                Ingresar
              </button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}
