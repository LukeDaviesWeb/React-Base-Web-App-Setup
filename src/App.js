import React from 'react';
import styled from 'styled-components'
import { ContactForm } from './components/Forms/ContactForm'
const Wrapper = styled.div`
    background: ${(props) => props.theme.colors.darkBlue};
`

const ComponentContainer = styled.div`
    max-width: ${(props) => props.theme.sizes.maxWidth};
    margin: 0 auto;
`

function App() {
    return (
        <Wrapper>
            <ComponentContainer>
                {/* //nav
            //header

            //intro

            //projects 
            
            //contactform
            */}
                <h1>Welcome</h1>
                <p>base web app starter pack</p>
                <p>includes: </p>
                <ul>
                    <li>formik</li>
                    <li>styled components</li>
                    <li>motion x</li>
                </ul>
            </ComponentContainer>
        </Wrapper>
    );
}

export default App;
