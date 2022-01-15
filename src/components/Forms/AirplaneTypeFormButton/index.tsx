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
}
export function AirplaneTypeFormButton({ title, type, ...rest }: Props){
    return (
        <Container 
            type={type}
            {...rest}
        >
            <Icon 
                name={icons[type]}
                type={type}
            />
            <Title>
                {title}
            </Title>
        </Container>
    )
}