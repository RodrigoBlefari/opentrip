import styled from "styled-components/native";
import { MaterialCommunityIcons  } from '@expo/vector-icons';

import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

interface TypeProps {
    type: 'business' | 'lazer';
}
export const Container = styled(TouchableOpacity)<TypeProps>`
    width: 56%;

    flex-direction: row;
    align-items: center;
    border-radius: 25px;
    
    background-color: ${({ theme, type }) => 
        type === 'business'? theme.colors.secondary_light : theme.colors.secondary
    };
    
    margin-left: ${({ type }) =>
        type === 'lazer'? "-110px" : "0px"
    };

    padding: 10px;
    padding-left: ${({ type }) =>
        type === 'business'? "45px" : "50px"
    };
`;

export const Icon = styled(MaterialCommunityIcons )`
    font-size: ${(RFValue(28))}px;
    margin-right: 8px;
    color: ${({ theme }) => theme.colors.shape};
    `;
export const Title = styled.Text`
    font-size: ${(RFValue(16))}px;
    color: ${({ theme }) => theme.colors.shape};
`;