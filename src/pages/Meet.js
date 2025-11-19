import Navbaring from '../Components/Nav';
import Footer from '../Components/Foot';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Meet.css';
import { Link } from 'react-router-dom';
const Meet = () => {
    return (  
        <div>
            <Navbaring />
            
            <Container className="my-4">
                {/* Faculty Coordinators */}
                <div className="section-1">
                    <header className="text-center mb-4">
                        <h1  className="section-header">Faculty Coordinators</h1>
                    </header>
                </div>
                    <Row className="justify-content-center">
                        <Col xs={12} sm={6} md={4} className="mx-auto">
                           <a href="profile" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Card className="team-card">
                                <Card.Img variant="top" src="/images/Archana_H_R.jpg" alt="Faculty Coordinator 1" className="team-image" />
                                <Card.Body>
                                    <Card.Title className="team-name">Dr Archana H R</Card.Title>
                                    <Card.Text className="team-role">Branch Counsellor</Card.Text>
                                </Card.Body>
                            </Card>
                            </a>
                        </Col>
                        <Col xs={12} sm={6} md={4} className="mx-auto">
                            <a href="profile" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Card className="team-card">
                                <Card.Img variant="top" src="/images/Gururaj.jpg" alt="Faculty Coordinator 2" className="team-image" />
                                <Card.Body>
                                    <Card.Title className="team-name">Dr Gururaja H S</Card.Title>
                                    <Card.Text className="team-role">Branch Mentor</Card.Text>
                                </Card.Body>
                            </Card>
                            </a>
                        </Col>
                    </Row>

                {/* Executive Committee Section */}
                <div className="section-2">
                    <header className="text-center my-4">
                        <h1  className="section-header">Executive Committee</h1>
                    </header>
                </div>
                    <Row>
                        <Col xs={12} sm={6} md={3}>
                            <a href="profile" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Card className="team-card">
                                <Card.Img variant="top" src="/images/nakul.png" alt="Team Member 1" className="team-image" />
                                <Card.Body>
                                    <Card.Title className="team-name">Nakul N Nimbalkar</Card.Title>
                                    <Card.Text className="team-role">Chairperson</Card.Text>
                                </Card.Body>
                            </Card>
                            </a>
                        </Col>
                        <Col xs={12} sm={6} md={3}>

                            <a href="profile" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Card className="team-card">
                                <Card.Img variant="top" src="/images/uday.png" alt="Team Member 2" className="team-image" />
                                <Card.Body>
                                    <Card.Title className="team-name">Uday Kumar</Card.Title>
                                    <Card.Text className="team-role">Vice Chairperson</Card.Text>
                                </Card.Body>
                            </Card>
                            </a>
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                           <a href="profile" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Card className="team-card">
                                <Card.Img variant="top" src="/images/ninaada.png" alt="Team Member 3" className="team-image" />
                                <Card.Body>
                                    <Card.Title className="team-name">Ninaada Ranga</Card.Title>
                                    <Card.Text className="team-role">Treasurer</Card.Text>
                                </Card.Body>
                            </Card>
                            </a>
                        </Col>
                        <Col xs={12} sm={6} md={3}>

                            <a href="profile" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Card className="team-card">
                                <Card.Img variant="top" src="/images/sushanth.png" alt="Team Member 4" className="team-image" />
                                <Card.Body>
                                    <Card.Title className="team-name">Sushanth C</Card.Title>
                                    <Card.Text className="team-role">Joint Treasurer</Card.Text>
                                </Card.Body>
                            </Card>
                            </a>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col xs={12} sm={6} md={4}>
                           <a href="profile" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Card className="team-card">
                                <Card.Img variant="top" src="/images/aadhya.png" alt="Team Member 5" className="team-image" />
                                <Card.Body>
                                    <Card.Title className="team-name">Aadhya Melvanki</Card.Title>
                                    <Card.Text className="team-role">Secretary</Card.Text>
                                </Card.Body>
                            </Card>
                            </a>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                           <a href="profile" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Card className="team-card">
                                <Card.Img variant="top" src="/images/namratha.png" alt="Team Member 6" className="team-image" />
                                <Card.Body>
                                    <Card.Title className="team-name">Namratha P Manor</Card.Title>
                                    <Card.Text className="team-role">Joint Secretary</Card.Text>
                                </Card.Body>
                            </Card>
                            </a>
                        </Col>
                
                    </Row>
            

                {/* SAC Coordinators Section */}
                <div className="section-3">
                    <header className="text-center my-4">
                        <h1  className="section-header">SAC Coordinators</h1>
                    </header>
                </div>
                    <Row className='team-row'>
                        <Col xs={12} sm={6} md={3}>
                        <a href="https://www.linkedin.com/in/dhanyasri-nalluri-53b403330/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Card className="team-card">
                                <Card.Img variant="top" src="/images/dhanyasri.png" alt="Team Member 1" className="team-image" />
                                <Card.Body>
                                    <Card.Title className="team-name">Nalluri Dhanyasri</Card.Title>
                                </Card.Body>
                            </Card>
                        </a>
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                         <a href="https://www.linkedin.com/in/neharamiah06?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Card className="team-card">
                                <Card.Img variant="top" src="/images/neha.png" alt="Team Member 2" className="team-image" />
                                <Card.Body>
                                    <Card.Title className="team-name">Neha Ramiah</Card.Title>
                                </Card.Body>
                            </Card>
                        </a>
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                         <a href="https://linkedin.com/in/nith27" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Card className="team-card">
                                <Card.Img variant="top" src="/images/nithyaneshwar.png" alt="Team Member 3" className="team-image" />
                                <Card.Body>
                                    <Card.Title className="team-name">Nithyaneshwar A</Card.Title>
                                </Card.Body>
                            </Card>
                            </a>
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                         <a href="https://www.linkedin.com/in/ratik-agrawal-65850bb4/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Card className="team-card">
                                <Card.Img variant="top" src="/images/rathik.png" alt="Team Member 4" className="team-image" />
                                <Card.Body>
                                    <Card.Title className="team-name">Ratik Agrawal</Card.Title>
                                </Card.Body>
                            </Card>
                            </a>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col xs={12} sm={6} md={4}>
                         <a href="https://www.linkedin.com/in/sahana-k-8a3562373/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Card className="team-card">
                                <Card.Img variant="top" src="/images/sahana.png" alt="Team Member 5" className="team-image" />
                                <Card.Body>
                                    <Card.Title className="team-name">K Sahana </Card.Title>
                                </Card.Body>
                            </Card>
                            </a>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                         <a href="http://www.linkedin.com/in/shashwat-goyal-b73b73187" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Card className="team-card">
                                <Card.Img variant="top" src="/images/shashwath.png" alt="Team Member 6" className="team-image" />
                                <Card.Body>
                                    <Card.Title className="team-name">Shashwat Goyal</Card.Title>
                                </Card.Body>
                            </Card>
                            </a>
                        </Col>
                    </Row>

                {/* Sponsor Section */}
                {/* <header className="text-center my-4 sponsor-header">
                    <h1>Our Sponsors</h1>
                </header>
                <div className="sponsor-marquee my-4">
                    <div className="marquee-inner">
                        <img src="./sponsor1.png" alt="Sponsor 1" className="sponsor-image" />
                        <img src="./sponsor2.png" alt="Sponsor 2" className="sponsor-image" />
                        <img src="./sponsor3.png" alt="Sponsor 3" className="sponsor-image" />
                        <img src="./sponsor4.png" alt="Sponsor 4" className="sponsor-image" />
                    </div>
                </div> */}
            </Container>
            <Footer />
        </div>
    );
}

export default Meet;
