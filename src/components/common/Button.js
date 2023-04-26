import styled from "styled-components";

const accentColor = 'rgb(29, 161, 249)';
const textColor = props => props.variant === 'primary' ? 'white' : accentColor;

const Button = styled.button `
    cursor: pointer;
    background-color: ${props => props.variant === 'primary' ?  accentColor: 'white'};
    display: inline-flex;
    aling-items: center;
    border-radius: 9999px;
    border-style: solid;
    border-width: 1px;
    border-color: ${accentColor}
    color: ${textColor};
    color: ${props => props.variant === 'secondary' ?  accentColor: 'white'};
    font: inherit;
    font-weight: bold;
    min-height: 36px;
    justify-content: center;
    min-width: 76px;
    outline-style:none;
    opacity: ${props => (props.disabled ? 0.5 : 1)};
    pointer-events:${props => (props.disabled ? 'none' : 'auto')};
    padding: 0  30px;
    text-decoration: none;
    transition: background-color 0.5s;
    &:hover  {
        background-color: ${props=> props.variant === 'primary'
        ? 'rgb(26, 80, 118)'
        : 'rgba (29, 161, 142, 0.1)'
        };
    }

` ;

export default Button;