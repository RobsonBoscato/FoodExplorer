import styled from "styled-components";

export const Container = styled.button`
	display: flex;
	margin: 48px auto;
	cursor: pointer;
	width: 100%;
	height: 48px;
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
	`
