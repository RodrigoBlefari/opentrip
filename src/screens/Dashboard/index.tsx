import React, { useState } from "react";

import { AirplaneTypeButton } from "../../components/Forms/AirplaneTypeButton";
import { AirportDateInput } from "../../components/Forms/AirportDateInput";
import { AirportInput } from "../../components/Forms/AirportInput";
import { AirplaneSubTypeButton } from "../../components/Forms/AirplaneSubTypeButton";
import { AirPlaneInputFull } from "../../components/Forms/AirplaneInputFull";
import { AirportPassageiroInput } from "../../components/Forms/AirplanePassageiroInput";
import { AirportBuscarInput } from "../../components/Forms/AirportBuscarInput";
import { FlatList } from "react-native-gesture-handler";
import { Image, Text } from "react-native";

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
  AirportDateWrapper,
  AirporAirplaneFullWrapper,
  BackgroundImage,
  ContainerFooter,
  AirporAirplaneEnviarWrapper,
  AirplaneBusinessSection,
  AirplaneLazerSection,
  AirplaneLazerText,
  ImageLazerContainer
} from "./styles";
import { listLazer } from "../../utils/listLazer";

export function Dashboard() {
  const [AirplaneTypesSection, setAirplaneTypesSection] = useState('business');
  
  function handleAirplaneTypesSectionBusiness() {
    setAirplaneTypesSection('business');
}
  function handleAirplaneTypesSectionLazer() {
    setAirplaneTypesSection('lazer');
}

  return (
    <>
          <Container >
          <Header>
            <DashBackIcon name="arrow-back-ios" />
            <MenuIcons>
              <MenuIcon name="md-airplane-outline" />
              <MenuIcon name="home-outline" />
              <MenuIcon name="car-outline" />
              <MenuIcon name="bus-outline" />
            </MenuIcons>
          </Header>
          <ContainerBody>
            <AirplaneTypes>
              <AirplaneTypeButton onPress={handleAirplaneTypesSectionBusiness} ativo={AirplaneTypesSection === 'business'? true: false} title="Business" type="business" />
              <AirplaneTypeButton onPress={handleAirplaneTypesSectionLazer} ativo={AirplaneTypesSection === 'lazer'? true: false} title="Lazer" type="lazer" />
            </AirplaneTypes>

          { AirplaneTypesSection == 'business' ? (

            <AirplaneBusinessSection>

            <AirplaneSubTypes>
              <AirplaneSubTypeButton title="Ida e Volta" active={true} />
              <AirplaneSubTypeButton title="Somente Ida" active={false} />
              <AirplaneSubTypeButton title="Multitrecho" active={false} />
            </AirplaneSubTypes>

            <AirportWrapper>
              <AirportInput
                sigla="CGH"
                airport="Congonhas-sp"
                placeholder="Aeroporto..."
              />
              <AirportFormIcon name="repeat" />
              <AirportInput
                sigla="CGH"
                airport="Santos Dumond - RJ"
                placeholder="Aeroporto"
              />
            </AirportWrapper>

            <AirportDateWrapper>
              <AirportDateInput
                date="16/06/2021"
                tipo="ida"
                placeholder="Ida"
                />
              <AirportDateInput
                date="18/06/2021"
                tipo="volta"
                placeholder="Volta"
              />
            </AirportDateWrapper>
            <AirporAirplaneFullWrapper>

            <AirPlaneInputFull 
              title="Sem Bagagem"
              span="Bagagem"
              />
            </AirporAirplaneFullWrapper>
            <AirporAirplaneFullWrapper>
              <AirPlaneInputFull 
                title="Econômica"
                span="Classe Preferida"
                />
            </AirporAirplaneFullWrapper>
            <AirporAirplaneFullWrapper>
              <AirportPassageiroInput />
            </AirporAirplaneFullWrapper>
            
            </AirplaneBusinessSection>
          
          ): 
          
            <AirplaneLazerSection>
              <AirplaneLazerText>Destinos abertos para brasileiros</AirplaneLazerText>
                <ImageLazerContainer>
                  <Image
                      width={100}
                      source={require('../../global/images/Lazer1.png')}>
                  </Image>
                </ImageLazerContainer>
                {/* <FlatList
                  data={listLazer}
                  keyExtractor={(item) => item.key}
                  style={{ height: '100%'}}
                  renderItem={({ item }) => (
                    <>
                    <Image  
                    style={{
                      width:359,
                      height:452,
                    }}
                      // Verificar depois o porque comando não funciona.
                      source={item.url}>
                    </Image>
                    </>
                  )}
                  
                /> */}
            </AirplaneLazerSection>
          }   
          </ContainerBody>
      
        </Container>
        { AirplaneTypesSection == 'business' ? (
          <ContainerFooter>
          <BackgroundImage source={require('../../global/images/Imagem_Fundo.png')}></BackgroundImage>
            <AirporAirplaneEnviarWrapper>
                <AirportBuscarInput />
            </AirporAirplaneEnviarWrapper>
          </ContainerFooter>
      ): null }
    </>
    );
}
