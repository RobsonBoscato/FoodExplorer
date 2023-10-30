import styled from "styled-components";
import theme from '../../pages/Styles/theme'

const variants = {
	primary: {
		display: 'flex',
		background: theme.COLORS.RED_400,
		width: '100%'
	},
	secondary: {
		display: 'flex',
		background: theme.COLORS.BD_DARK_800,
		width: '50%'
	}
}

export const Container = styled.button`
	cursor: pointer;
	width: ${(props) => variants[props.$variant]?.width ?? '100%'};
	height: 56px;
	padding: 12px 32px;

	font-size: 18px;
	line-height: 12px;
	font-weight: 500;
	margin: 32px 0px;
	border: 0;

	border-radius: 5px;
	background-color: ${(props) => variants[props.$variant]?.background ?? theme.COLORS.RED_100};

	color: ${({ theme }) => theme.COLORS.GRAY_100};
	font-family: ${({ theme }) => theme.FONTS.POPPINS};
`;
