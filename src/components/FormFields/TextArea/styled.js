import styled, { css } from "styled-components"

const TextAreaStyles = css`
    position: relative;
    border: 2px solid black;
`

export const TextAreaStyled = styled.textarea`
    background: transparent;
    font-size: 16px;
    width: 100%;
    min-height: 140px;
    resize: none;
    padding: 1.25rem;
    border: 2px solid black;
    color: black;

    ::-webkit-input-placeholder {
        color: black;
        opacity: 1;
    }

    :disabled {
        background: #f9f9f9;
        border-color: #f9f9f9;
    }

    &:focus,
    &:hover {
        outline: none;
        border-color: red;
    }
`

export const TextAreaContainer = styled.div`
    ${TextAreaStyles}
    padding-bottom: 2rem;
`

export const WordCountStyled = styled.div`
    text-transform: uppercase;
    font-weight: 600;
    color: #c6cdd5;
    position: absolute;
    bottom: 0.15rem;
    right: 1rem;
    font-size: 14px;
    pointer-events: none;
`
