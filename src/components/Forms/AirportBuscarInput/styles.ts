import styled from "styled-components/native";

export const Container = styled.View`
    
    width: 100%;
    text-align: center;
    align-items: center;
    border-radius: 10px;
    border: 1.5px solid rgba(212, 212, 212, 0.6);
    background-color:${({ theme }) => theme.colors.blue_light};
    font-size: 12px;
    color: ${({ theme }) => theme.colors.text};
    padding: 10px;

`;

export const Title = styled.Text`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.medium};
`;