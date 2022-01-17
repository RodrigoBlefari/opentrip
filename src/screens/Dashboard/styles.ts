import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";


export const Container = styled.View`
  padding: 10px;
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(20)}px;

  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const DashBackIcon = styled(MaterialIcons)`
  width: 10%;

  text-align: right;

  font-size: ${RFValue(26)}px;

  color: ${({ theme }) => theme.colors.title};
`;

export const MenuIcons = styled.View`
  width: 90%;
  height: ${RFPercentage(10)}px;
  padding: 0px 20px;

  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const MenuIcon = styled(Ionicons)`
  padding: 4px 14px;
  border-radius: 25px;
  font-size: ${RFValue(30)}px;

  background-color: ${({ theme, name }) =>
        name === "md-airplane-outline"
            ? theme.colors.title
            : theme.colors.background};

  color: ${({ theme, name }) =>
        name === "md-airplane-outline" ? theme.colors.shape : theme.colors.title};
`;

export const ContainerBody = styled.View`
    width: 100%;
    padding: 0px 20px;
`;

export const AirplaneBusinessSection = styled.View``;

export const AirplaneLazerSection = styled.View``;

export const AirplaneTypes = styled.View`
  width: 100%;
  align-items:center;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 50px;
  margin-top: -15px;
`;

export const AirplaneSubTypes = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

export const AirportWrapper = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 2px;
`;

export const AirportFormIcon = styled(Ionicons)`
  padding: 1px 5px;
  margin-top: 0px;
  border-radius: 25px;
  background-color: rgba(212, 212, 212, 0.2);
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const AirportDateWrapper = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 10px 0px 0px 0px;
`;
export const AirporAirplaneFullWrapper = styled.View`
  width: 100%;
  padding: 10px 0px 0px 0px;
`;

export const BackgroundImage = styled.Image`
  margin-top: 20px;
    position: absolute;
  bottom: 5px;
`;

export const ContainerFooter = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const AirporAirplaneEnviarWrapper = styled.View`
  width: 100%;
   padding: 0px 30px 10px 30px;
`;

export const AirplaneLazerText = styled.Text`
  font-size: ${RFValue(22)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const ImageLazerContainer = styled.View`
    width: 10%;
    flex: 2;
    height: 100%;
    overflow: scroll;
`;