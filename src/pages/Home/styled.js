import styled from 'styled-components';

export const HomePageArea = styled.div`
	margin-top: 20px;
	.posts-area {
		display: flex;
		main {
			width: 63%;
			min-height: 100vh;
			.full-posts {
				margin: 20px 0 20px 0;
				border: 1px solid #dbdbdb;
				border-radius: 3px;
				.fp-picture {
					background-color: red;
					height: 500px;
					.each-slide img {
						width: 100%;
						height: 500px;
						object-fit: cover;
					}
				}
				.three-points {
					font-size: 2rem;
					cursor: pointer;
				}
				.fp-top-container {
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 15px;
					background-color: #fff;
				}
				.fp-top {
					display: flex;
					align-items: center;
					.fp-name {
						a {
							text-decoration: none;
							font-weight: bold;
							color: #262626;
							margin-left: 10px;
							&: hover {
								text-decoration: underline;
							}
						}
					}
					.fp-top-img {
						width: 40px;
						height: 40px;
						border-radius: 50%;
						padding: 2px;
						background-color: #c82d8e;
						.fp-top-img-inner {
							background-color: #fff;
							width: 100%;
							height: 100%;
							border-radius: 50%;
							padding: 2px;
							img {
								width: 100%;
								height: 100%;
								object-fit: cover;
								clip-path: circle(50%);
							}
						}
					}
				}
			}
			.posters {
				display: flex;
				align-items: center;
				background-color: #fff;
				padding: 20px 20px 15px 12px;
				border: 1px solid #dbdbdb;
				border-radius: 3px;
				a {
					text-decoration: none;
					margin-right: 15px;
					.sp-poster-name {
						small {
							color: #262626;
						}
					}
				}
				a: last-child {
					margin-right: 0;
				}
				.small-post {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					.sp-img {
						width: 70px;
						height: 70px;
						border-radius: 50%;
						padding: 2px;
						background-color: #c82d8e;
						.sp-img-inner {
							background-color: #fff;
							width: 100%;
							height: 100%;
							border-radius: 50%;
							padding: 2px;
								img {
									width: 100%;
									height: 100%;
									clip-path: circle(50%);
									object-fit: cover;
								}
							
						}
					}
				}
			}
		}
		aside {
			position: fixed;
			right: 205px;
			width: 25%;
		}
	}
`;