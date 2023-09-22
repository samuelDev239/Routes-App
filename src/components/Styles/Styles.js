import { styled } from "styled-components/native";

export const Container = styled.View`

width: 100vw;
min-height: 100vh;
max-height: auto;
background-color: #141a29; 
display: flex;
justify-content: start;
align-items: start;
gap: 2rem;
padding: 1rem;
`
export const Align = styled.View`

width: auto;
max-height: auto;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
gap: 2rem;
`
export const ImageAtt = styled.Image`
width: 100%;
height: 400px;
border-radius: 50px;
object-fit:cover;
   object-position:50% 50%;
`
export const TItulo = styled.Text`
font-size: 2rem;
color: #d4d4d4;
font-weight: 600;
font-family: system-ui;
`
export const Nota = styled.Text`
font-size: 1rem;
color: #d4d4d4;
font-weight: 600;
font-family: system-ui;
`
export const Descricao = styled.Text`
font-size: 16px;
color: #d4d4d4;
font-weight: 400;
font-family: system-ui;
`