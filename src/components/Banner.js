import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";  //terminal command 'npm install react-bootstrap-icons --save'
//import headerImg from "../assets/img/header-img.svg";
import bannerImg from "../assets/img/robo&pal-trans2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import bgImage from '../assets/img/robo-lab.jpg';

export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);  //loopNum is used as an index for which word to display, set to 0 (first word)
    const [isDeleting, setIsDeleting] = useState(false);  //isDeleting set to false because we will be typing the word to start
    const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);  //used for how fast one letter is typed
    const [index, setIndex] = useState(1);
    const period = 1000;  //used for how much time between each letter typed

    //function for typing effect
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        //clear interval on return
        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;  //index uses modulus in order to start over once words in toRotate have finished
        let fullText = toRotate[i];
        //if deleting then set the text to one letter less than the current fullText to give deleting effect
        //if not deleting then add a letter to make word closer to the fullText for typing effect
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        //if deleting the pace changes so we update to delta to equal half of the previous delta
        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2);
        }

        //if not deleting and finished typing then set isDelting back to true and set delta back to normal pace
        if (!isDeleting && updatedText ===fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        }
        else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        }
        else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }


    return (
        <section className="banner" id="home">
          <Container>
            <Row className="align-items-center">
              <Col xs={12} md={6} xl={7}>
                <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hi! I'm Jonathan`}<br/> <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /></button>
                  </div>}
                </TrackVisibility>
              </Col>
              <Col xs={12} md={6} xl={5}>
                <TrackVisibility>
                  {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>  {/* animate options come form the 'animate.css' package */}
                      <img className="hero-img" src={bannerImg} alt="Header Img"/>
                    </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
        </section>
      )
    }