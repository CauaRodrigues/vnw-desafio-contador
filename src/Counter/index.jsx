import React, { Component } from "react";
import {
	Box,
	BoxNumber,
	ButtonMinus,
	ButtonPlus,
	ButtonReset,
	GroupBtns,
} from "./counter.styled";

export default class Counter extends Component {
	state = {
		number: 0,
	};

	plus = () => {
		this.setState({
			number:
				this.state.number >= 10 ? this.state.number : this.state.number + 1,
		});
	};

	minus = () => {
		this.setState({
			number:
				this.state.number <= 0 ? this.state.number : this.state.number - 1,
		});
	};

	reset = () => {
		this.setState({
			number: 0,
		});
	};

	render() {
		const { number } = this.state;

		const MaxLimitReached = number >= 10 ? true : false;
		const MinLimitReached = number <= 0 ? true : false;

		return (
			<Box>
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
							<img src="./assets/plus.svg" alt="Adicionar +1" />
						</ButtonPlus>

						<ButtonReset title="reset" onClick={this.reset}>
							<img src="./assets/reset.svg" alt="Resetar Número" />
						</ButtonReset>

						<ButtonMinus
							title="-1"
							onClick={this.minus}
							disabled={MinLimitReached}
						>
							<img src="./assets/minus.svg" alt="Remover -1" />
						</ButtonMinus>
					</GroupBtns>
				</div>

				{MinLimitReached && <p>Limite Mínimo Atingindo</p>}
			</Box>
		);
	}
}
