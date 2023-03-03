import React, { Component } from "react";
import {
	Box,
	BoxNumber,
	ButtonMinus,
	ButtonPlus,
	ButtonReset,
	GroupBtns,
} from "./counter.styled";

import { ReactComponent as Plus } from "../assets/plus.svg";
import { ReactComponent as Reset } from "../assets/reset.svg";
import { ReactComponent as Minus } from "../assets/minus.svg";
import { createGlobalStyle } from "styled-components";

export default class Counter extends Component {
	state = {
		number: 0,
		color: "#ffffff",
	};

	plus = () => {
		this.setState({
			number:
				this.state.number >= 10 ? this.state.number : this.state.number + 1,
		});

		this.handlerBackground();
	};

	minus = () => {
		this.setState({
			number:
				this.state.number <= 0 ? this.state.number : this.state.number - 1,
		});

		this.handlerBackground();
	};

	reset = () => {
		this.setState({
			number: 0,
		});
	};

	handlerBackground = () => {
		let [Hexa, color] = ["0123456789ABCDEF", "#"];
		for (let i = 0; i < 6; i++) {
			color += Hexa[Math.floor(Math.random() * 16)];
		}
		this.setState({
			color,
		});
	};

	render() {
		const { number, color } = this.state;

		const MaxLimitReached = number >= 10 ? true : false;
		const MinLimitReached = number <= 0 ? true : false;

		return (
			<Box>
				<ChangeBg color={color} />

				{MaxLimitReached && <p>Limite Máximo Atingindo</p>}

				<div className="content">
					<BoxNumber>
						<h1>{number}</h1>
					</BoxNumber>

					<GroupBtns>
						<ButtonPlus
							title="+1"
							onClick={this.plus}
							disabled={MaxLimitReached}
						>
							<Plus />
						</ButtonPlus>

						<ButtonReset
							title="reset"
							onClick={this.reset}
							disabled={MinLimitReached}
						>
							<Reset />
						</ButtonReset>

						<ButtonMinus
							title="-1"
							onClick={this.minus}
							disabled={MinLimitReached}
						>
							<Minus />
						</ButtonMinus>
					</GroupBtns>
				</div>

				{MinLimitReached && <p>Limite Mínimo Atingindo</p>}
			</Box>
		);
	}
}

const ChangeBg = createGlobalStyle`
	body {
		background: ${(props) => props.color};
	}
`;
