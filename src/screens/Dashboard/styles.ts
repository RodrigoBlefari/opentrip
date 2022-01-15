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

  text-align: center;

  font-size: ${RFValue(32)}px;

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
  padding: 6px 16px;
  border-radius: 25px;
  font-size: ${RFValue(32)}px;

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
export const AirplaneTypes = styled.View`
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

export const AirplaneSubType = styled.Text`
    font-size: ${(RFValue(16))}px;
`;

export const AirportWrapper = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const AirportFormIcon = styled(Ionicons)`
  padding: 1px 5px;
  border-radius: 25px;
  background-color: gray;
  font-size: ${RFValue(20)}px;
  opacity: 0.4;
  color: ${({ theme }) => theme.colors.title};
`;
