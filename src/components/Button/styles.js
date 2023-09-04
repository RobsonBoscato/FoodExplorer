import styled from "styled-components";

export const Container = styled.button`
	cursor: pointer;
	width: 100%;
	height: 48px;
	padding: 12px 32px;

	font-size: 14px;
	line-height: 12px;
	font-weight: 500;
	margin: 32px 0px;
	border: 0;

	border-radius: 5px;
	background-color: ${({ theme }) => theme.COLORS.RED_100};

	color: ${({ theme }) => theme.COLORS.GRAY_100};
	font-family: ${({ theme }) => theme.FONTS.POPPINS};
`;
