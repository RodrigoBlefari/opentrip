import React from "react";
import { TextInputProps } from "react-native";

import { 
    Container,
    InputAirport,
    Span }
from "./styles";

interface Props extends TextInputProps{
    airport: string,
    sigla: string
}

export function AirportInput({airport, sigla, ...rest} : Props){
    return(
        <>
            <Container>
                <InputAirport value={sigla}{ ...rest } />
                <Span>{airport}</Span>
            </Container>
        </>
    )
}