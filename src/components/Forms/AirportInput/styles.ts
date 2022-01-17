import styled from "styled-components/native";

import { TextInput } from "react-native";

export const Container = styled.View`
    width: 45%;
`;

export const InputAirport = styled(TextInput)`
    padding: 10px 0px 12px 24px;
    border-radius: 50px;
    border: 1.5px solid rgba(212, 212, 212, 0.6);
    background-color: white;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const AirportSpanWrapper = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-top: -20px;
  padding: 0px 48px 10px 19px;
`;

export const Span = styled.Text`
    font-size: 11px;
    color: gray;
    margin-top: -21px;
    padding-left: 24px;
    font-family: ${({ theme }) => theme.fonts.regular}
`;
