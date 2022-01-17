import React from "react";
import { TextInputProps } from "react-native";

import { 
    Container,
    InputDateAirport 
}
from "./styles";

interface Props extends TextInputProps{
    date: string,
    tipo: string
}

export function AirportDateInput({date, tipo, ...rest} : Props){
    return(
        <>
            <Container>
                <InputDateAirport 
                    tipo={tipo}
                    value={date}{ ...rest } />
            </Container>
        </>
    )
}