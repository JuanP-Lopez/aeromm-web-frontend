import Navbar from "../../../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";


export default function RootLayout({ children }) {
  return (

    <div className={"main"}>
      <div className={"start"}>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"></link>
        <Navbar />
        {children}
      </div>
    </div>
  );
}
