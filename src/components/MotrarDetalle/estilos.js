import styled from 'styled-components';

const CajaMayor = styled.div`
    width: 98%;
    max-width: 1000px;
    margin: 20px auto;
    display: grid;
	  grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, auto);
	  grid-gap: 30px;
   div{
     text-align: left;
   }
   b{
    text-align: left;
   }
   @media only screen and (max-width:800px){
      grid-column: 1 /-1;
  }
  @media only screen and (min-width: 800px) and (max-width:1000px){
    column-gap:0%;
    margin-right: 40px;
  }
`
const Titulo = styled.div`
  height:60px;
  grid-column-start:1;
  grid-column-end:4;
  h1{
    text-transform: uppercase;
  }
  @media only screen and (max-width:800px){
    grid-column: 1 / -1;
  }
`

const Imagen = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 4;
  h4{
    text-transform: uppercase;
  }
  img{
    display:block;
    margin:auto;
    max-width: 100%;
    width: 80%;
    border: 4px solid #000000;
    }
    @media only screen and (max-width:800px){
      grid-column: 1 / -1;
    }

  
`
const Detalle = styled.div`
   display:grid;
   grid-column: span 2;
   grid-gap:50px;

   @media only screen and (max-width:800px){
    grid-column: 1 / -1;
    margin:35px;
  }
  @media only screen and (min-device-width: 801px){
    column-gap:0%;
    margin-right: 50px;
  }
`
const Parrafos = styled.div`
   padding: 0 10px 0 10px;
   font-size: 16px;
   font-weight: bold;

   text-transform: lowercase;
   
`
const Otros = styled.div`
   display:grid;
   grid-template-columns: repeat(2, auto);
   column-gap:40px;
  @media only screen and (max-width:800px){
      column-gap:0%;
  }
`

const Subtitulos = styled.div`
  padding: 0 10px 0 10px;
  font-size: 17px;
  text-transform: uppercase;
  font-weight: bold;
  
`

export { CajaMayor, Titulo, Imagen, Detalle, Parrafos, Subtitulos, Otros };