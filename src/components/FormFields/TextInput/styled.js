import styled, { css } from "styled-components"

export const TextInputStyles = css`
    background: transparent;
    border: 2px solid black;   
    font-size: 16px;
    padding: 13px 1rem;
    width: 100%;
    transition: all .3s ease;
    color: black;

    ::-webkit-input-placeholder {
        color: black;
        opacity: 1;
        text-transform: uppercase;
        font-weight: bold;
    }

    :disabled {
        background: #f9f9f9;
        border-color: #f9f9f9;
    }

    &:focus,
    &:hover {
        outline: none;
        border-color:red;
    }
`

export const InputWrapper = styled.div`
    position: relative;
`

export const TextInputStyled = styled.input`
    ${TextInputStyles}
`

export const LabelStyled = styled.label`
    display: ${(props) => (props.noLabel == true ? 'none' : 'block')};
`