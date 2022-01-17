import React from "react";
import { TextInputProps } from "react-native";

import { 
    Container,
    InputAirport,
    Span }
from "./styles";

interface Props extends TextInputProps{
    title: string,
    span: string
}

export function AirPlaneInputFull({title, span, ...rest} : Props){
    return(
        <Container>
            <InputAirport value={span}{ ...rest } />
            <Span>{title}</Span>
        </Container>
    )
}