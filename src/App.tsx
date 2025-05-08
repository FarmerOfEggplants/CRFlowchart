import React from 'react';
import logo from './logo.svg';
import './App.css';
import EventButton from './components/eventButton';
import { ConnectArrow } from './components/connectArrow';
import { FlowArrow } from './components/flowArrow';
import BlackPanthers from "./images/BlackPanthers.webp";
import WWII from "./images/WWII.png"
import BrownVsBoard from './images/BrownVsBoard.png'
import EmmettTill from "./images/EmmetTill.png"
import RosaParks from "./images/rosaparks.png"
import Arrow from './images/Arrow.png' 
import MLK from './images/MLK.png'
import MBP from "./images/MontgomeryBusBoycott.png"
import FreedomRiders from "./images/FreedomRiders.png"
import FreedomSummer from './images/FreedomSummer.png'
import JamesMeredith from './images/JMUOfM.png'
import MarchOnWashington from './images/MarchOnWashington.png'
import ChildrensMarch from './images/ChildrensMarch.png'
import BCBombed from './images/BCBombed.png'
import TwentyFouthAmmendement from './images/24thAmmendment.png'
import CRA from './images/CivilRightsAct.png'
import SelmaCampaign from './images/SelmaCampaign.png'
import VRA from "./images/CivilRightsAct.png"
import MalcolmX from './images/MalcolmX.png'
import LBJ from './images/LBJ.png'
import TurgoodMarshall from './images/ThurgoodMarshall.png'
function Button() {
  return (
    
    <button>
      why
    </button>
  );
}

function App() {
  return (
    <body style={{background: "pink", position: "absolute", minHeight: 10000}}>
      <h1 style={{textAlign: "center", position: 'relative', left: 600,}}>Civil Rights Flowchart</h1>
      {/* When you reference functions in react, you don't put the () next to the function,
       you just say the name followed by a space and a / */}
       <div className='ButtonStyle'>
        <Button />
        <div style={{height: 100, padding: "10px", fontSize: "20", backgroundColor: "lightgoldenrodyellow", border: "3px solid black" }}>
          Notes:
          <br />
          You can click on the red dashed arrows to see
          <br />
          how the two events are connected

        </div>
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
        <FlowArrow 
          svgX='250'
          svgY='250'
          x1='600'
          y1='15'
          x2='750'
          y2='40'
        />
        <EventButton
          name='Brown vs. Board of Education'
          year='1954'
          definition='The brown V. The Board of Education was a court case against public schools for their segregation of students due to race. Segregation in schools was declared unconstitutional.'
          bwidth={150}
          boxwidth={300}
          positionX={800}
          positionY={50}
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
        <div style={{position: "absolute", top: 100, left:400, padding:"10px"}}>
            <FlowArrow 
            svgX='1000'
            svgY='1000'
            x1='500'
            y1='50'
            x2='670'
            y2='100'
            />
          </div>
        <EventButton 
          name='Emmet Till Case'
          year='1955'
          definition='This was a tragic event where A young black man was murdered for the baseless accusation of aggressively flirting with a white woman in a grocery store.'
          bwidth={150}
          boxwidth={300}
          positionX={1100}
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
        <div style={{position: "absolute", top: 200, left:400, padding:"10px"}}>
            <FlowArrow 
            svgX='1000'
            svgY='1000'
            x1='690'
            y1='50'
            x2='510'
            y2='70'
            />
          </div>
        <EventButton 
          name='Rosa Parks'
          year='1955'
          definition='Rosa Parks was a woman that got onto a bus in Montgomery, Alabama and Refused to go to the back of the bus where the designated black area was. Even when a white person wanted the seat. She was arrested for this and served as an example for the discrimination and unfair treatment.'
          bwidth={150}
          boxwidth={300}
          positionX={750}
          positionY={240}
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
        <div style={{position: "absolute", top: 200, left:100, padding:"10px"}}>
            <FlowArrow 
            svgX='1000'
            svgY='1000'
            x1='690'
            y1='70'
            x2='410'
            y2='90'
            />
          </div>
        <EventButton 
          name='Montgomery Bus Boycott'
          year='1955'
          definition='A 13 month protest in Montgomery, Alabama that strived to desegregate buses after Rosa Parks was arrested.'
          bwidth={150}
          boxwidth={300}
          positionX={350}
          positionY={260}
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
        <div style={{position: "absolute", top: 250, left:0, padding:"10px"}}>
            <FlowArrow 
            svgX='1000'
            svgY='1000'
            x1='350'
            y1='70'
            x2='200'
            y2='180'
            />
          </div>
        <EventButton 
          name='MLK'
          year='1957'
          definition='Spoke out against discrimination and for the 1964 civil rights act and 1965 voting rights act that protected the rights of black americans.'
          bwidth={150}
          boxwidth={300}
          positionX={100}
          positionY={450}
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
          <div style={{position: "absolute", top: 250, left:0, padding:"10px"}}>
            <FlowArrow 
            svgX='1000'
            svgY='1000'
            x1='200'
            y1='220'
            x2='420'
            y2='240'
            />
          </div>
          <div style={{position: "absolute", top: 0, left:400, padding:"10px"}}>
            <FlowArrow 
            svgX='500'
            svgY='500'
            x1='190'
            y1='50'
            x2='370'
            y2='100'
            />
          </div>
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
            positionX={800}
            positionY={2000}
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
          <EventButton 
              name='Freedom Riders'
              year='1961'
              definition='They were a group of people(both black and white) who rode interstate buses and used “White Only” facilities to protest segregation.'
              bwidth={150} 
              boxwidth={300} 
              positionX={450}
              positionY={550}
              color='grey'
              color2='#758078'
              colorHover='#525c54'
              imagesrc={FreedomRiders}
              imageSizeX={100}
              imageSizeY={90}
              imagealt='FreedomRiders'
          
          />
          <div style={{position: "absolute", top: 250, left:200, padding:"10px"}}>
            <FlowArrow 
            svgX='1000'
            svgY='1000'
            x1='380'
            y1='340'
            x2='540'
            y2='330'
            />
          </div>
          <EventButton
          name='Freedom Summer'
          year='1964'
          definition='June 1964, to register as many black voters as possible in the state of Mississippi.'
          bwidth={150} 
          boxwidth={300} 
          positionX={770}
          positionY={530}
          color='#e2e872'
          color2='#eff2b6'
          colorHover='#dade99'
          imagesrc={FreedomSummer}
          imageSizeX={120}
          imageSizeY={70}
          imagealt='FreedomSummer'
          />
          <div style={{position: "absolute", top: 250, left:550, padding:"10px"}}>
            <FlowArrow 
            svgX='1000'
            svgY='1000'
            x1='350'
            y1='320'
            x2='475'
            y2='370'
            />
          </div>
          <EventButton
          name='James Meredith'
          year='1962'
          definition='He was the first black student to attend Mississippi university and started the integration of it. There were so many people that did not want him to be there, that he started to need police escorts to attend classes for fear of someone hurting him.'
          bwidth={150} 
          boxwidth={300} 
          positionX={1050}
          positionY={590}
          color='#fcfcf7'
          color2='#f2f2f2'
          colorHover='#d6d6d6'
          imagesrc={JamesMeredith}
          imageSizeX={200}
          imageSizeY={120}
          imagealt='JamesMeredith'
          fact1='eee'
          />
          <div style={{position: "absolute", top: 400, left:550, padding:"10px"}}>
            <FlowArrow 
            svgX='1000'
            svgY='1000'
            x1='570'
            y1='220'
            x2='525'
            y2='390'
            />
          </div>
          <EventButton
            name='March on Washington'
            year='1963'
            definition='This was a speech given by Martin Luther King Jr. calling for equality and justice for all people'
            bwidth={150} 
            boxwidth={300} 
            positionX={1000}
            positionY={820}
            color='#c95bae'
            color2='#bd4aa0'
            colorHover='#91367a'
            imagesrc={MarchOnWashington}
            imageSizeX={250}
            imageSizeY={200}
            imagealt='MOW'
            fact1='There was about 250,000 people present at the speech.'
            />
          <div style={{position: "absolute", top: 600, left:350, padding:"10px"}}>
            <FlowArrow 
            svgX='1000'
            svgY='1000'
            x1='650'
            y1='260'
            x2='500'
            y2='390'
            />
          </div>
          <EventButton
            name='Childrens March'
            year='1963'
            definition='Initiated and organized by Rev. James Bevel, the purpose of the march was to walk downtown to talk to the mayor about segregation in their city.'
            bwidth={150} 
            boxwidth={300} 
            positionX={700}
            positionY={950}
            color='#4cbd4a'
            color2='#51cf4e'
            colorHover='#45ad44'
            imagesrc={ChildrensMarch}
            imageSizeX={250}
            imageSizeY={170}
            imagealt='CM'
            fact1='Over 1,000 students skipped school to join this march. It was widely covered and brought more attention to the segregation of the city.'
          />
          <div style={{position: "absolute", top: 600, left:50, padding:"10px"}}>
            <FlowArrow 
            svgX='1000'
            svgY='1000'
            x1='640'
            y1='390'
            x2='360'
            y2='430'
            />
          </div>
          <EventButton
            name='Birmingham Church Bombed'
            year='1963'
            definition='A 1963 bombing of a Birmingham church by the KKK claims the lives of four African-American girls.'
            bwidth={150} 
            boxwidth={300} 
            positionX={250}
            positionY={1000}
            color='#636363'
            color2='#7d7d7d'
            colorHover='#696969'
            imagesrc={BCBombed}
            imageSizeX={260}
            imageSizeY={320}
            imagealt=''
            />
          <div style={{position: "absolute", top: 800, left:50, padding:"10px"}}>
            <FlowArrow 
            svgX='1000'
            svgY='1000'
            x1='230'
            y1='250'
            x2='525'
            y2='430'
            />
          </div>
          <EventButton
            name='24th Amendment'
            year='1964'
            definition='Abolished and forbids the federal and state governments from imposing taxes on voters during federal elections.'
            bwidth={150} 
            boxwidth={300} 
            positionX={600}
            positionY={1200}
            color='#7dd2db'
            color2='#9ff3fc'
            colorHover='#91e2eb'
            imagesrc={TwentyFouthAmmendement}
            imageSizeX={200}
            imageSizeY={250}
            imagealt=''
            />
          <div style={{position: "absolute", top: 800, left:400, padding:"10px"}}>
            <FlowArrow 
            svgX='1000'
            svgY='1000'
            x1='320'
            y1='450'
            x2='472'
            y2='450'
            />
          </div>
          <EventButton
            name='Civil Rights Act'
            year='1964'
            definition='Outlawed discrimination based on race, color, religion, sex or national origin within the United States'
            bwidth={150} 
            boxwidth={300} 
            positionX={900}
            positionY={1220}
            color='#d3eda1'
            color2='#cfed98'
            colorHover='#c0db8f'
            imagesrc={CRA}
            imageSizeX={200}
            imageSizeY={170}
            imagealt=''
            />
            <div style={{position: "absolute", top: 1000, left:400, padding:"10px"}}>
            <FlowArrow 
            svgX='1000'
            svgY='1000'
            x1='575'
            y1='290'
            x2='300'
            y2='478'
            />
          </div>
            <EventButton
            name='Selma Marches & Bloody Sunday'
            year='1965'
            definition='These were marches organized to protest voter suppression and the lack of justice for Jim Lee Jackson (A black civil rights activist killed by police). Bloody Sunday was when peaceful protestors were attacked by police and exposed the brutality of the justice system.'
            bwidth={150} 
            boxwidth={300} 
            positionX={600}
            positionY={1500}
            color='#ff7d19'
            color2='#fc8326'
            colorHover='#ed7b24'
            imagesrc={SelmaCampaign}
            imageSizeX={200}
            imageSizeY={150}
            imagealt=''
            />
          <div style={{position: "absolute", top: 1100, left:400, padding:"10px"}}>
            <FlowArrow 
            svgX='1000'
            svgY='1000'
            x1='320'
            y1='450'
            x2='472'
            y2='490'
            />
          </div>
            <EventButton
            name='Voting Rights Act'
            year='1965'
            definition='Prohibited states from imposing qualifications or practices to deny the right to vote.'
            bwidth={150} 
            boxwidth={300} 
            positionX={900}
            positionY={1550}
            color='#fc6094'
            color2='#fc4482'
            colorHover='#fa3275'
            imagesrc={VRA}
            imageSizeX={120}
            imageSizeY={200}
            imagealt=''
            />
          <div style={{position: "absolute", top: 1300, left:400, padding:"10px"}}>
            <FlowArrow 
            svgX='1000'
            svgY='1000'
            x1='580'
            y1='300'
            x2='692'
            y2='475'
            />
          </div>
            <EventButton
            name='Malcolm X'
            year='1965'
            definition='Supported the plans to gain more rights for black people but thought that the efforts should be more forceful.'
            bwidth={150} 
            boxwidth={300} 
            positionX={1050}
            positionY={1800}
            color='#a896e0'
            color2='#9182c2'
            colorHover='#7c6fa6'
            imagesrc={MalcolmX}
            imageSizeX={200}
            imageSizeY={225}
            imagealt=''
            />
          <div style={{position: "absolute", top: 1300, left:300, padding:"10px"}}>
            <FlowArrow 
            svgX='1000'
            svgY='1000'
            x1='792'
            y1='520'
            x2='110'
            y2='550'
            />
          </div>
            <EventButton
            name='LBJ & Legistaltive Actions'
            year='1964-1965'
            definition='Johnsons presidency saw many important legislative achievements, including the civil rights act of 1964, the voting rights act (1965) and the social security amendments of  1965.'
            bwidth={150} 
            boxwidth={300} 
            positionX={250}
            positionY={1800}
            color='#d490bb'
            color2='#ad7699'
            colorHover='#8f617e'
            imagesrc={LBJ}
            imageSizeX={200}
            imageSizeY={220}
            imagealt=''
            />
          <div style={{position: "absolute", top: 1400, left:300, padding:"10px"}}>
            <FlowArrow 
            svgX='1000'
            svgY='1000'
            x1='20'
            y1='515'
            x2='470'
            y2='715'
            />
          </div>
            <EventButton
            name='Thurgood Marshall'
            year='1967'
            definition='When he was confirmed by the U.S. senate as the first african american supreme court justice.'
            bwidth={150} 
            boxwidth={300} 
            positionX={700}
            positionY={2400}
            color='#c9a79b'
            color2='#ab8f85'
            colorHover='#917a71'
            imagesrc={TurgoodMarshall}
            imageSizeX={250}
            imageSizeY={170}
            imagealt=''
            />
          <div style={{position: "absolute", top: 1700, left:300, padding:"10px"}}>
            <FlowArrow 
            svgX='1000'
            svgY='1000'
            x1='560'
            y1='470'
            x2='470'
            y2='672'
            />
          </div>
    </body>
  );
}

export default App;
