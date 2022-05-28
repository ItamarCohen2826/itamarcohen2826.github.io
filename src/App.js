import './App.css';
import "animate.css/animate.min.css";
import lom from './images/lom.png';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn, Zoom, ZoomOut } from "react-scroll-motion";
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());


function App() {
  return (
    <div className="wrapper">
      <h1 className='title'>L.O.M - Life On Mars</h1>
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={FadeUp}>
            <h2 className='slogan'>Launching the present to the future</h2>
            <img src={lom} alt="" height={200} width={280}/>  
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={FadeIn}>
            <span style={{ fontSize: '50px' }}>Who are we?</span>
            <br />
            <span style={{ fontSize: '25px' }}>We are Yishay Space Team, we created a project called Life On Mars</span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={FadeUp}>
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
    </div>
  );
}

export default App;
