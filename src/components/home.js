import React from "react";
import "animate.css/animate.min.css";
import lom from '../images/lom.png';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn, Zoom, ZoomOut } from "react-scroll-motion";
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

const Home = (props) => {
    return (
        <>
        <h1 className='title' style={{
          fontSize: props.fontSize
        }}>L.O.M - Life On Mars</h1>
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={FadeUp}>
            <h2 className='slogan'>Launching the present to the future</h2>
            <img src={lom} alt="" height={200} width={280}/>  
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={FadeIn}>
            <span style={{ fontSize: '50px' }}>About our project</span>
            <br />
            <span style={{ fontSize: '25px' }}>
              The L.O.M project is an integrated facility that 
              <br />
              regularly provides water for domestic uses and agriculture,
              <br />
              air and electricity in environmentally friendly 
              <br />
              ways using clean and economical methods,
            </span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={FadeUp}>
            <span style={{ fontSize: '50px' }}>Why us?</span>
            <br />
            <span style={{ fontSize: '25px' }}>
              We are the only company in the market 
              <br />
              that provides the three basic life needs:
              <br />
              Oxygen, water and electricity
             </span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={3}>
          <Animator animation={ZoomInScrollOut}>
            <span style={{ fontSize: '50px' }}>Pictures</span>
            <br />
            <span style={{ fontSize: '25px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            <br />
            Donec aliquam eget erat sed auctor. Fusce placerat efficitur ante at ultrices. 
            <br />
            Mauris dolor urna, finibus non consectetur a, imperdiet ac quam. 
            <br />
            Vivamus in commodo massa. Duis efficitur varius nisi, a pretium purus pellentesque et.
            <br />
             Aliquam aliquam tortor quis lectus suscipit, id tincidunt justo lobortis.
            <br />
             Morbi euismod viverra nulla ut pretium.
            </span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={4}>
          <Animator animation={FadeIn}>
            <span style={{ fontSize: '50px' }}>Lorem Ipsum</span>
            <br />
            <span style={{ fontSize: '25px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            <br />
            Donec aliquam eget erat sed auctor. Fusce placerat efficitur ante at ultrices. 
            <br />
            Mauris dolor urna, finibus non consectetur a, imperdiet ac quam. 
            <br />
            Vivamus in commodo massa. Duis efficitur varius nisi, a pretium purus pellentesque et.
            <br />
             Aliquam aliquam tortor quis lectus suscipit, id tincidunt justo lobortis.
            <br />
             Morbi euismod viverra nulla ut pretium.
             </span>
          </Animator>
        </ScrollPage>
      </ScrollContainer>   
      </>
    )
}

export default Home;