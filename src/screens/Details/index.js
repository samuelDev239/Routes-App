import React from 'react'
import {View, Text} from 'react-native'
import { useRoute } from '@react-navigation/native';
import { Align, Container, Descricao, ImageAtt, Nota, TItulo } from '../../components/Styles/Styles';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Routes from '../../routes';


export default function Details(){

  const routes = useRoute();

    return(
      <Container>
        <ImageAtt source = {require(`../../Img/${routes.params.imagem}`)}></ImageAtt>
        <Align>  <Stars
    default={routes.params.nota}
    count={10}
    half={true}
    starSize={100} 
    fullStar={<Icon name={'star'}/>}
    emptyStar={<Icon name={'star-outline'}/>}
    halfStar={<Icon name={'star-half'}/>}
  />  <Nota>{routes.params.nota}</Nota></Align>
   <TItulo>{routes.params.titulo}</TItulo>
        
       
        <Descricao>{routes.params.descricao}</Descricao>
       
        
      </Container>
          
    
        )


}