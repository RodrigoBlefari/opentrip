import styled from "styled-components/native";

export const Container = styled.View``;
interface Props {
    active: boolean;
}
export const Title = styled.Text<Props>`
    margin: 20px 0px;
    font-family: ${({theme, active}) =>
    active === true ? theme.fonts.bold : theme.fonts.regular
}
opacity: ${({active}) =>
    active === true ? '1' : '0.5'
    };
`;