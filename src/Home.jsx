import React, { Component } from "react";
import { Container } from "./home.styled";
import Counter from "./Counter";

export default class Home extends Component {
	render() {
		return (
			<Container>
				<Counter />
			</Container>
		);
	}
}
