import React from 'react';
import logo from './logo.svg';
import './App.css';
import EventButton from './components/eventButton';
import {FlowArrow, ConnectArrow} from './components/connectArrow';
import BlackPanthers from "./images/BlackPanthers.webp"
import WWII from "./images/WWII.png"
import BrownVsBoard from './images/BrownVsBoard.png'
import Arrow from './images/Arrow.png' 
function Button() {
  return (
    
    <button>
      why
    </button>
  );
}

function App() {
  return (
    <body style={{background: "pink"}}>
      <h1 style={{textAlign: "center", position: 'absolute'}}>Civil Rights Flowchart</h1>
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
         positionX={-300}
         positionY={0}
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
        <img src={Arrow}>
        
        </img>


        
        <EventButton
          name='Brown vs. Board of Education'
          year='1954'
          definition='The brown V. The Board of Education was a court case against public schools for their segregation of students due to race. Segregation in schools was declared unconstitutional.'
          bwidth={150}
          boxwidth={300}
          positionX={0}
          positionY={100}
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
