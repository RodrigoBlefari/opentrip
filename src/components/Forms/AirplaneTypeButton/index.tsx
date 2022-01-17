import React from "react";
import { TouchableOpacityProps } from 'react-native'

import { 
    Container,
    Icon,
    Title
 } from "./styles";

 const icons = {
     business: 'briefcase-outline',
     lazer: 'palm-tree'
 }

interface Props extends TouchableOpacityProps {
    title: string;
    type: 'business' | 'lazer';
    ativo: boolean;
}
export function AirplaneTypeButton({ title, type, ativo, ...rest }: Props){
    return (
        <Container 
            type={type}
            {...rest}
            ativo={ativo}
        >
            <Icon
                name={icons[type]}
                type={type}
                active={ativo}
            />
            <Title>
                {title}
            </Title>
        </Container>
    )
}