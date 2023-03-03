import styled from "styled-components";

export const Box = styled.section`
	width: 40%;
	padding: 1.5rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;

	border-radius: 32px;
	background-color: rgba(125, 139, 157, 0.56);

	.content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}

	p {
		max-width: 70%;
		font-weight: 500;
		font-size: min(1rem, 4vw);
		color: #ff5e03;
		text-align: center;
	}

	@media (max-width: 800px) {
		width: 80%;
	}
`;

export const BoxNumber = styled.div`
	width: 70%;
	height: 170px;
	padding: 2rem 0;

	display: flex;
	justify-content: center;
	align-items: center;

	border-radius: 32px;
	background-color: #ffffff;

	h1 {
		font-weight: 600;
		text-align: center;
		font-size: min(4.6rem, 20vw);
	}
`;

export const GroupBtns = styled.div`
	height: 170px;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

export const ButtonPlus = styled.button`
	width: 100%;
	padding: 12px 0;
	cursor: ${(props) => (props.disabled ? "auto" : "pointer")};
	border-radius: 24px 24px 0 0;
	background-color: rgba(21, 93, 24, 0.56);
`;

export const ButtonReset = styled.button`
	background-color: rgba(75, 75, 75, 0.4);
	padding: 12px;
	border-radius: 50%;
	display: flex;
	cursor: pointer;
`;

export const ButtonMinus = styled(ButtonPlus)`
	border-radius: 0 0 24px 24px;
	background-color: rgba(145, 11, 8, 0.55);
`;
