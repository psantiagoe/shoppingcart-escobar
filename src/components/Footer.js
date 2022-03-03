import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import logoLarge from "../assets/img/logo_large.png";

const Footer = () => {
	return (
		<footer>
			<Container>
				<Row className="d-flex align-items-center light">
					<Col md={6}>
						<img alt="Foodi logo" src={logoLarge} width={180} height={51} />
						<p>Copyright © 2022 Foodi</p>
					</Col>
					<Col md={6}>
						<Nav className="justify-content-end link-color">
							<Nav.Link href="https://www.facebook.com/">
								<FontAwesomeIcon icon={faFacebook} className="icon fb-icon"></FontAwesomeIcon>
							</Nav.Link>
							<Nav.Link href="https://www.instagram.com/">
								<FontAwesomeIcon icon={faInstagram} className="icon ig-icon"></FontAwesomeIcon>
							</Nav.Link>
							<Nav.Link href="https://twitter.com/">
								<FontAwesomeIcon icon={faTwitter} className="icon tw-icon"></FontAwesomeIcon>
							</Nav.Link>
						</Nav>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
