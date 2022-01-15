import React from "react";
import { Text, TextProps } from "react-native";
import { AirplaneTypeFormButton } from "../../components/Forms/AirplaneTypeFormButton";
import { Input } from "../../components/Forms/Input";

import {
    Container, 
    Header,
    DashBackIcon,
    MenuIcons,
    MenuIcon,
    AirportWrapper,
    AirportFormIcon,
    AirplaneTypes,
    ContainerBody,
    AirplaneSubTypes,
    AirplaneSubType

 } from "./styles";

interface AirplaneSubTypeProps extends TextProps {
    active: boolean
}
export function Dashboard({
}: AirplaneSubTypeProps){
    return (
        <Container>
            <Header>
                <DashBackIcon name="arrow-back-ios"/>
                <MenuIcons>
                    <MenuIcon name="md-airplane-outline"/>
                    <MenuIcon name="home-outline"/>
                    <MenuIcon name="car-outline"/>
                    <MenuIcon name="bus-outline"/>
                </MenuIcons>
            </Header>
            
            <ContainerBody>
                <AirplaneTypes>
                    <AirplaneTypeFormButton
                        title="Business"
                        type="business"
                        
                        />
                    <AirplaneTypeFormButton
                        title="Lazer"
                        type="lazer"
                        />
                </AirplaneTypes>

                <AirplaneSubTypes>
                        
                    <AirplaneSubType>Ida e Volta</AirplaneSubType>
                    <AirplaneSubType>Somente Ida</AirplaneSubType>
                    <AirplaneSubType>Multitrecho</AirplaneSubType>

                </AirplaneSubTypes>

                <AirportWrapper>
                    <Input placeholder="CGH"></Input>
                    <AirportFormIcon name="repeat"/>
                    <Input placeholder="CGH"></Input>
                </AirportWrapper>
                <Input placeholder="CGH"></Input>
                <Input placeholder="CGH"></Input>
                <Input placeholder="CGH"></Input>
            </ContainerBody>
        </Container>
    )
}