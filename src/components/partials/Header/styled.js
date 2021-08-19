import styled from 'styled-components';

export const HeaderArea = styled.header`
	display: flex;
	align-items: center;
	position: sticky;
	top: 0;
	z-index: 99;
	background-color: #fff;
	min-height: 55px;
	border-bottom: 1px solid #dbdbdb;
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		.menuArea {
			ul {
				display: flex;
				align-items: center;
				list-style: none;
				li {
					i {
						font-size: 1.7rem;
						color: #262626;
					}
					margin-right: 25px;
				}
				li: last-child {
					cursor: pointer;
					margin-right: 0;
				}
			}
		}
		.searchArea {
			form {
				display: flex;
				align-items: center;
			}
			input {
				padding: 4px 0 4px 70px;
				outline: 0;
				border: 1px solid #dbdbdb;
				border-radius: 3px;
				background-color: #fafafa;
			}
		}
		.logoArea {
			cursor: pointer;
		}
	}
	@media (max-width: 600px) {
		.header {
			.logoArea {
				margin-right: 30px;
			}
			.menuArea {
				ul {
					li {
						margin-right: 20px;
						i {
							font-size: 1.4rem;
						}
					}
				}
			}
			.searchArea {
				display: none;
			}
		}
	}
	@media (min-width: 768px) and (max-width: 1023px) {
		.header {
			.logoArea {
				margin-right: 30px;
			}
			.searchArea {
				margin-right: 30px;
			}
		}
	}
`;
export const ExitButton = styled.div`
	display: ${props=>props.exitVisibility};
	text-align: center;
	line-height: 15px;
	color: #fff;
	width: 15px;
	height: 15px;
	font-size: 0.7rem;
	cursor: default;
	border-radius: 50%;
	background-color: #c7c7c7;
	margin-left: ${props=>props.margin}px;
`;
export const SearchButton = styled.button`
		display: ${props=>props.searchVisibility};
		position: relative;
		left: -190px;
		background: none;
		border: 0;
		outline: 0;
		i {
			color: #b0b2b4;
			font-size: 0.7rem;
		}
`;