import React from 'react'
import styled from 'styled-components'
const Title = styled.div`
text-align: center;
font-size: 2.9rem;
color:#f5f6fa;
margin-top: 2rem;
text-shadow: 2px 2px 2px rgba(150, 150, 150, 1);
`

function Header() {
    return (
        <Title>
            React Markdown
        </Title>
    )
}

export default Header