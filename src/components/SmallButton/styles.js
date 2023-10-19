import styled from "styled-components";

export const Container = styled.button`
	display: flex;
	cursor: pointer;
	margin: 0 auto;
	width: 162px;
	height: 32px;
	padding: 12px 24px;

	justify-content: center;
	align-items: center;
	font-size: 14px;
	line-height: 12px;
	font-weight: 500;
	color: ${({ theme }) => theme.COLORS.GRAY_100};
	font-family: ${({ theme }) => theme.FONTS.POPPINS};

	border-radius: 5px;
	border: 0;
	background-color: ${({ theme }) => theme.COLORS.RED_100};

	
	`;

export const Heading = styled.div`
display: flex;
`

export const EditionButton = styled.div`
	margin: 0 auto;
	font-size: 12px;
`

