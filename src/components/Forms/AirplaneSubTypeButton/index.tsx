import React from "react";
import { TextProps } from "react-native";
import { 
    Container,
    Title
} from "./styles";

interface Props extends TextProps {
    title: string;
    active: boolean;
}

export function AirplaneSubTypeButton({
title,
active,
...rest
}: Props){
    return (
        <Container 
        {...rest}
        >
            <Title 
                active={active}
            >
                {title}
            </Title>
        </Container>
    )
}