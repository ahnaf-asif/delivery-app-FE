import React from 'react';
import styled from '@emotion/styled';

export const StyledRegisterTitle = styled.div`
	margin-bottom: 50px;
	* {
		font-size: 50px;
		font-weight: bold;
	}
	@media (max-width: 760px) {
		font-size: 24px;
	}
`;

export const StyledCenteredDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 80vh;
	width: 100vw;
`;

export const StyledDivInside = styled.div`
	display: flex;
	justify-content: center;
	gap: 80px;
	@media (max-width: 760px) {
		flex-direction: column;
	}
`;

export const StyledCard = styled.div`
	width: 400px;
	height: 250px;
	border: 1px solid lightgray;
	padding: 10px;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	&:hover {
		background: #f5f5f5;
	}
	@media (max-width: 760px) {
		padding: 5px;
		max-width: 90vw;
		height: auto;
	}
`;

export const StyledCardInside = styled.div`
	* {
		font-size: 30px;
	}
	@media (max-width: 760px) {
		font-size: 20px;
	}
`;
