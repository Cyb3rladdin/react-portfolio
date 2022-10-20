import { Container, Col, Row, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

    const projects = [
        {
            title: "Hotel Booking Website",
            description: "Website Desing/Development",
            imgUrl: projImg1
        },
        {
            title: "Latest Movies Website",
            description: "Website Desing/Development",
            imgUrl: projImg2
        },
        {
            title: "Basic Java Snake Game",
            description: "Website Desing/Development",
            imgUrl: projImg3
        },
        {
            title: "Clothing E-Commerce Website",
            description: "Website Desing/Development",
            imgUrl: projImg1
        },
        {
            title: "Password Generator",
            description: "Software Development",
            imgUrl: projImg2
        },
        {
            title: "Java Encrypt/Decrypt",
            description: "Software Development",
            imgUrl: projImg3
        }
    ];

    return (

        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                                    <h2>Projects</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta tempus est, a interdum felis facilisis eu. Praesent luctus congue maximus. Maecenas condimentum est sit amet sagittis luctus.</p>

                                    {/* use the "pills" navbar code from react-bootstrap.github.io. Wrap in Tab.Container for more customizability */}
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab One</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                            </Nav.Item>
                                        </Nav>

                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {projects.map((project, index) => {
                                                        return (
                                                            <ProjectCard
                                                                key={index}
                                                                {...project}    //this is a spreader which will pass all of the project cards
                                                            />
                                                        )
                                                    })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}/>
        </section>

    )
}