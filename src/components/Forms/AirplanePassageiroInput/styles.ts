import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    
    width: 100%;
    flex-direction: row;
    text-align: center;
    align-items: center;
    border-radius: 50px;
    border: 1.5px solid rgba(212, 212, 212, 0.6);
    background-color: white;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.text};
    padding: 0px 2px;
`;

export const Photo = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: 50px;
    border: 2px solid ${({ theme }) => theme.colors.blue_light};
`;

export const Title = styled.Text`
    font-size: 14px;
    padding-left: 40px;
    color: ${({ theme }) => theme.colors.blue_light};
    font-family: ${({ theme }) => theme.fonts.medium};
`;