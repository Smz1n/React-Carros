import {Card, CardContent , CardActionArea} from "@mui/material";
import {DirectionsCar, TwoWheeler, DirectionsBike} from "@mui/icons-material";

function Informacao (props) {
    return(
        <Card style={{margininTop: 10}}>
            <CardContent>
                {props.icone}

                <strong style={{margin: '0 10px'}}>
                    {props.qtd}
                </strong>

                {props.titulo}


            </CardContent>
            
        </Card>
    )
}

export default function Dashboard() {
    return(
        <>
            <Informacao icone={<DirectionsCar/>} titulo="Carros" qtd="10"/>
            <Informacao icone={<TwoWheeler/>} titulo="motos" qtd="5"/>
            <Informacao icone={<DirectionsBike/>} titulo="Bike"  qtd="2"/>
            
            
            
        </>
    )
}