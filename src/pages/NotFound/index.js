import foto from "./imagem.svg";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

export default function NotFound() {
    return (
        <div style={{textAlign: 'center'}}>
            <h2>Pagina não Encontrada</h2>
            <img width="30%" src={foto}/>

        <Link to="/">
            <Button variant="outlined">Voltar para o Inicio</Button>
        </Link>
        </div>


    )
}