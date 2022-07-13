import styled from 'styled-components'

const FONT_SIZE = {
    extraSmall: 10,
    small: 12,
    medium: 14,
    large: 18,
};

const FONT_COLOR = {
    dark: 'rgb(26, 26, 26)'
}

export const StyledButton = styled.button`
    width: fit-content;
    cursor: pointer;
    background-color: transparent;
    color: whitesmoke;
    font-size: ${props => FONT_SIZE[props.size]}px;
    border: ${props => props.border ? '1px solid whitesmoke' : 'none'};
    border-radius: 5px;
    padding: 6px;
    &:hover {
        color: ${props => props.border ? FONT_COLOR[props.color] : undefined};
        background-color: ${props => props.border ? 'rgba(245, 245, 245)' : undefined};
        text-decoration: ${props => props.border ? undefined : 'underline'};
    }
`;

export const StyledChevron = styled.img`
    width: 8px;
    transform: ${props => props.direction === 'down' ? 'rotate(270deg)' : 'rotate(90deg)'};
    margin-right: 5px;
`;

// export const StyledSpan = styled.span`
//     &:hover {
//         color: transparent;
//     }
// `;