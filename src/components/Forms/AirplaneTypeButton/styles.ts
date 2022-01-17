import styled from "styled-components/native";
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

interface TypeProps {
    ativo: true | false;
    type: 'business' | 'lazer';
}

export const Container = styled(TouchableOpacity)<TypeProps>`
    flex-direction: row;
    align-items: center;
    border-radius: 25px;
    padding: 10px 66px 10px 10px;
    
    background-color: ${({ theme, ativo, type }) => 
        ativo ? theme.colors.secondary : theme.colors.secondary_light
    };
    
    margin-left: ${({ type }) =>
        type === 'lazer'? "-110px" : "0px"
    };

    padding-left: ${({ type }) =>
        type === 'business'? "45px" : "50px"
    };
`;

export const Icon = styled(MaterialCommunityIcons )`
    font-size: ${(RFValue(26))}px;
    margin-right: 8px;
    color: ${({ theme }) => theme.colors.shape};
    `;
export const Title = styled.Text`
    font-size: ${(RFValue(14))}px;
    color: ${({ theme }) => theme.colors.shape};
`;