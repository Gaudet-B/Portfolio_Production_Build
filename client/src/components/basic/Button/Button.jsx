
import chevron from '../../../assets/icons/chevron-icon-light.png'
import { StyledButton, StyledChevron } from "./styles";

const Button = props => {

    const BORDER = props.arrowDirection ? undefined : true;

    const handleClick = e => {
        // console.log('click')
        e.preventDefault();
        if (props.onClick) {
            return props.onClick();
        }
    };

    const renderChevron = () => {
        return (
            <StyledChevron direction={props.arrowDirection} src={chevron}/>
        )
    };

    return (
        <StyledButton onClick={handleClick} size={props.size} color={props.color} border={BORDER} >
            {props.arrowDirection ? renderChevron() : null}
            <span>{props.text}</span>
        </StyledButton>
    )
};

export default Button;