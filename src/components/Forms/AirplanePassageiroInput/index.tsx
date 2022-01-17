import React from "react";
import { 
    Container,
    Photo,
    Title
}
from "./styles";
export function AirportPassageiroInput(){
    return(
        <Container>
            
            <Photo source={require('../../../global/images/User.png')}></Photo>
            <Title>+ Novo Passageiro</Title>
        </Container>
    )
}
