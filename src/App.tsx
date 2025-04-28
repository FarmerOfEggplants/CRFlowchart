import React from 'react';
import logo from './logo.svg';
import './App.css';
import EventButton from './components/eventButton';
import { ConnectArrow } from './components/connectArrow';
import { FlowArrow } from './components/flowArrow';
import BlackPanthers from "./images/BlackPanthers.webp"
import WWII from "./images/WWII.png"
import BrownVsBoard from './images/BrownVsBoard.png'
import EmmettTill from "./images/EmmetTill.png"
import RosaParks from "./images/rosaparks.png"
import Arrow from './images/Arrow.png' 
import MLK from './images/MLK.png'
import MBP from "./images/MontgomeryBusBoycott.png"
function Button() {
  return (
    
    <button>
      why
    </button>
  );
}

function App() {
  return (
    <body style={{background: "pink", position: "absolute"}}>
      <h1 style={{textAlign: "center", position: 'relative', left: 600,}}>Civil Rights Flowchart</h1>
      {/* When you reference functions in react, you don't put the () next to the function,
       you just say the name followed by a space and a / */}
       <div className='ButtonStyle'>
        <Button />
        <EventButton 
         name='World War II'
         year='1945'
         definition='Started after Nazi Germany invaded Poland and continued to invade Europe.'
         bwidth={150}
         boxwidth={300}
         positionX={450}
         positionY={15}
         color='orange'
         color2='red'
         colorHover='#f75640'
         imagesrc={WWII}
         imagealt='WWII'
         imageSizeX={300}
         imageSizeY={150}
         fact1='-The War effort created oppurtunities for African American women to get involved in the workforce.'
         fact2='-Men from different races all got involved in the battles.'
         fact3='-All of the efforts brought racial equality forward'
        />
        <img src={Arrow}  style={{left: 600, top: 15, position: "absolute", height: "100px", width: "200px"}}></img>
        <EventButton
          name='Brown vs. Board of Education'
          year='1954'
          definition='The brown V. The Board of Education was a court case against public schools for their segregation of students due to race. Segregation in schools was declared unconstitutional.'
          bwidth={150}
          boxwidth={300}
          positionX={800}
          positionY={0}
          color='#bf2c93'
          color2='#bf2c93'
          colorHover='#80045a'
          imagesrc={BrownVsBoard}
          imagealt='BrownVsBoard'
          imageSizeX={128}
          imageSizeY={99}
          fact1=''
          fact2=''
          fact3=''
        />
        <img src={Arrow}  style={{left: 950, top: 15, position: "absolute", height: "100px", width: "200px"}}></img>
        <EventButton 
          name='Emmet Till Case'
          year='1955'
          definition='This was a tragic event where A young black man was murdered for the baseless accusation of aggressively flirting with a white woman in a grocery store.'
          bwidth={150}
          boxwidth={300}
          positionX={800}
          positionY={200}
          color='purple'
          color2='#ad57a9'
          colorHover='#a832a2'
          imagesrc={EmmettTill}
          imagealt='Emmett Till'
          imageSizeX={120}
          imageSizeY={100}
          fact1='The allegations were made up and it shows a very negative stance and step in the journey of equality.'
          fact2='The mother decided to hold an open-casket funeral to show people what her son looked like. The body was almost unrecognizable.'
          fact3=''
        />
        <EventButton 
          name='Rosa Parks'
          year='1955'
          definition='Rosa Parks was a woman that got onto a bus in Montgomery, Alabama and Refused to go to the back of the bus where the designated black area was. Even when a white person wanted the seat. She was arrested for this and served as an example for the discrimination and unfair treatment.'
          bwidth={150}
          boxwidth={300}
          positionX={450}
          positionY={200}
          color='pink'
          color2='#ffd6f4'
          colorHover='#ffa8e8'
          imagesrc={RosaParks}
          imagealt='Rosa Parks'
          imageSizeX={140}
          imageSizeY={120}
          fact1='Caused the Montgomery Bus Boycott to happen in Alabama with protests'
          fact2=''
          fact3=''
        />
        <EventButton 
          name='Montgomery Bus Boycott'
          year='1955'
          definition='A 13 month protest in Montgomery, Alabama that strived to desegregate buses after Rosa Parks was arrested.'
          bwidth={150}
          boxwidth={300}
          positionX={100}
          positionY={200}
          color='#cc8b00'
          color2='#ffcf69'
          colorHover='#f7b423'
          imagesrc={MBP}
          imagealt='MBP'
          imageSizeX={150}
          imageSizeY={90}
          fact1='Was Organized by the Womans Political Cousncil and the Montgomery Improvement Association.'
          fact2=''
          fact3=''
        />
        <EventButton 
          name='MLK'
          year='1957'
          definition='Spoke out against discrimination and for the 1964 civil rights act and 1965 voting rights act that protected the rights of black americans.'
          bwidth={150}
          boxwidth={300}
          positionX={100}
          positionY={400}
          color='#ed382b'
          color2='#ba4b43'
          colorHover='#b83b32'
          imagesrc={MLK}
          imagealt='MLK'
          imageSizeX={180}
          imageSizeY={90}
          fact1=''
          fact2=''
          fact3=''
        />
        <FlowArrow 
        svgX='500'
        svgY='500'
        x1='175'
        y1='275'
        x2='175'
        y2='360'
        />
        <div style={{position: "absolute", top: 100, left: 400, padding: "10px"}}>
          <ConnectArrow
          svgX={400}
          svgY={400}
          x1={440}
          y1={200}
          x2={260}
          y2={200}
          boxWidth={300}
          text='The Montgomery Bus Boycott was a direct result of the Rosa Parks case.'
          />
        </div>
        <EventButton 
          name="The Black Panthers" 
          year="1966" 
          definition='The Black Panthers, officially known as the Black Panther Party, were a revolutionary socialist organization founded in the United States in 1966. They played a major role in the civil rights movement during the late 1960s and 1970s, especially in urban communities.'
          bwidth={150} 
          boxwidth={300} 
          positionX={250}
          positionY={30}
          color='green'
          color2='#4c753e'
          colorHover='#3a4d33'
          imagesrc={BlackPanthers}
          imagealt='The Black Panthers'
          imageSizeX={81}
          imageSizeY={100}
          fact1='-They were formed to challenge police brutality against the African American community and to promote Black empowerment, racial justice, and self-defense.'
          fact2='-They created a "Ten point Program"'
          fact3='-They were known for armed patrols of Black neighborhoods to monitor police behavior. They believed in the Second Amendment right to bear arms and used it to protect their communities.'
          />
       </div>
    </body>
  );
}

export default App;
