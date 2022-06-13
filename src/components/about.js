import React from "react"
import '../App.css'; 
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn, Zoom, ZoomOut } from "react-scroll-motion";
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());
const About = (props) => {
    return (
    <div className="wrapper">
        <h1 className='title' style={{
          fontSize: props.titleFontSize
        }}>about us</h1>
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={FadeIn}>
            <span style={{ fontSize: '50px' }}>The water system</span>
            <br />
            <span style={{ fontSize: '25px' }}>
            The water system recycles 90% of the water used by the settlers.
            <br />
            We supply the remaining 10% by melting glaciers near the northern pole of Mars. 
            <br />
            With this system we will be able to provide all of the water needed to live.
            </span>

          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
            <Animator animation={FadeUp}>
                <span style={{ fontSize: '50px' }}>
                    The electricity system
                </span>
                <br /> 
                <span style={{ fontSize: '25px' }}>
                The electricity system provides all the required energy to power these machines.
                <br />
                With a photovoltaic field and nuclear reactors we 
                <br />
                will be able to supply the electricity in maximum efficiency.
                </span>
            </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
            <Animator animation={ZoomInScrollOut}>
            <span style={{ fontSize: '50px' }}>
                    The gas system
                </span>
                <br /> 
                <span style={{ fontSize: '25px' }}>
                the gas system, the system that will provide you oxygen and all other useful gases. 
                <br />
                In this system we are using two electrolysis machines, a Sabatier reactor and cooling separator. 
                <br />
                This system will provide you with a lot of gases like oxygen, nitrogen, argon, and many more.
                </span>
                <br />
            </Animator>
        </ScrollPage>
      </ScrollContainer>   
     </div>
    )
}

export default About;