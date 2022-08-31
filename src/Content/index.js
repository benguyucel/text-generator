import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useSelector, useDispatch } from 'react-redux';
import remarkGfm from 'remark-gfm'
import styled from 'styled-components';
import { changceText } from '../redux/slice/markdownSlice';

const ContentSection = styled.div`
  flex: 1;
  height: 100vh;
  border-radius: 24px;
background: linear-gradient(145deg, #7e6ecf, #9683f6);
box-shadow:  22px 22px 39px #7768c4,
             -22px -22px 39px #a18cff;
             padding: ${props => props.padding ? props.padding : "1rem 2rem"};
`
const TextArea = styled.textarea`
width: 100%;
resize: none;
border: none;
height: 100%;
background: linear-gradient(145deg, #7e6ecf, #9683f6);
border-radius: .5rem;
font-size: 15px;
  color: #fff;
padding:1rem;
&:focus{
  outline: .2rem solid #8c7ae6;
}
`
const Content = () => {
    const { markText } = useSelector(state => state.markdownText)
    const [markdownData, setMarkdownData] = useState("");
    const dispatch = useDispatch("")
    const handleChange = (e) => {
        setMarkdownData(prev => e.target.value)
    }
    useEffect(() => {

        dispatch(changceText(markdownData))


    }, [markdownData, dispatch])
    return (
        <>
            <ContentSection>
                <TextArea onChange={(e) => handleChange(e)} />
            </ContentSection>
            <ContentSection style={{ color: "#fff" }}>
                <ReactMarkdown children={`${markText}`} remarkPlugins={[remarkGfm]} />
            </ContentSection>
        </>
    )
}

export default Content