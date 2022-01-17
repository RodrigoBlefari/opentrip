import styled from "styled-components/native";

import { TextInput } from "react-native";

interface TypeProps {
    tipo: string;
}

export const Container = styled.View`
    width: 50%;
`;

export const InputDateAirport = styled(TextInput)<TypeProps>`
    padding: 6px 0px 10px 24px;

    border-top-left-radius: ${({ tipo }) =>
        tipo === 'ida'? "50px" : "0px"
    };
    border-bottom-left-radius: ${({ tipo }) =>
        tipo === 'ida'? "50px" : "0px"
    };

    border-right-width: ${({ tipo }) =>
        tipo === 'ida'? "0px" : "1.5px"
    };
    
    border-left-width: ${({ tipo }) =>
        tipo === 'volta'? "0px" : "1.5px"
    };
    
    border-top-right-radius: ${({ tipo }) =>
        tipo === 'volta'? "50px" : "0px"
    };

    border-bottom-right-radius: ${({ tipo }) =>
        tipo === 'volta'? "50px" : "0px"
    };

    border: solid rgba(212, 212, 212, 0.6);
    background-color: white;
    font-family: ${({ theme }) => theme.fonts.bold};
    
    text-align:${({ tipo }) =>
        tipo === 'volta'? "right"  : "left"
    };
    padding-right: 20px;
`;


export const AirportSpanWrapper = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-top: -20px;
  padding: 0px 48px 10px 19px;
`;
