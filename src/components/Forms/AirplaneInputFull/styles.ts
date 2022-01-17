import styled from "styled-components/native";

import { TextInput } from "react-native";

export const Container = styled.View`
    width: 100%;
`;

export const InputAirport = styled(TextInput)`
    padding: 0px 0px 18px 24px;
    border-radius: 50px;
    border: 1.5px solid rgba(212, 212, 212, 0.6);
    background-color: white;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.text};
`;

export const Span = styled.Text`
    font-size: 14px;
    margin-top: -24px;
    padding-left: 24px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.title}
`;
