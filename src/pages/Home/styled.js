import styled from 'styled-components';

export const HomePageArea = styled.div`
	margin-top: 20px;
	.posts-area {
		display: flex;
		main {
			width: 63%;
			min-height: 100vh;
			.full-posts {
				margin: 20px 0 40px 0;
				border: 1px solid #dbdbdb;
				border-radius: 3px;
				.fp-comments {
					background-color: #fff;
					.fp-comments-bottom {
						padding: 20px;
						display: flex;
						align-items: center;
						.emoji {
							font-size: 1.6rem;
							cursor: pointer;
							margin-right: 20px;
						}
						.form {
							flex: 1;
							form {
								display: flex;
								justify-content: space-between;
								input {
									border: 0;
									outline: 0;
								}
								button {
									background: 0;
									outline: 0;
									border: 0;
									cursor: pointer;
									color: #0095f6;
									font-weight: bold;
								}
							}
						}
					}
					.fp-comments-middle {
						padding: 10px;
						span {
							color: #8e8e8e;
							cursor: pointer;
						}
						.time {
							small {
								color: #8e8e8e;
								font-size: 0.6rem;
							}
						}
						.other-person-comment {
							display: flex;
							justify-content: space-between;
							margin-bottom: 5px;
							i {
								cursor: pointer;
							}
							.text {
								color: #262626;
								font-size: 0.9rem;
							}
							a {
								font-size: 0.9rem;
							}
						}
						.comments {
							a {
								color: #8e8e8e;
								font-size: 0.8rem;
								font-weight: normal;
							}
						}
						a {
							color: #262626;
							font-weight: bold;
							text-decoration: none;
							&: hover {
								text-decoration: underline;
							}
						}
					}
					.fp-comments-top {
						padding: 15px;
						border-top: 1px solid #dbdbdb;
						.comments-top {
							display: flex;
							justify-content: space-between;
							align-items: center;
							.comments-top-right {
								width: 25px;
								height: 25px;
								border: 1px solid #262626;
								cursor: pointer;
								&: hover {
									border: 2px solid #eaeaea;
								}
							}
							.comments-top-left {
								.number-of-likes {
									small {
										font-weight: bold;
										font-size: 0.9rem;
									}
								}
								i {
									margin-right: 20px;
									font-size: 1.6rem;
									cursor: pointer;
									color: #323232;
								}
							}
						}
					}
					.fp-comments-bottom {
						border-top: 1px solid #dbdbdb;
					}
				}
				.fp-picture.minHeight {
					min-height: 400px;
					video {
						width: 100%;
						height: 100%;
					}
				}
				.fp-picture {
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
								border-radius: 50%;
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
			padding: 30px;
			.all-rights-reserved {
				color: #c7c7c7;
				font-size: 0.7rem;
			}
			nav {
				margin-top: 40px;
				margin-bottom: 15px;
				ul {
					display: flex;
					flex-wrap: wrap;
					list-style: none;
					
					a {
						text-decoration: none;
						font-size: 0.7rem;
						color: #c7c7c7;
					}
				}
			}
			.suggestions {
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				margin-top: 25px;
				.follow {
					text-align: right;
					button {
						border: 0;
						outline: 0;
						background: none;
						color: #0095f6;
						cursor: pointer;
					}
				}
				.seeAll {
					text-align: right;
					a {
						color: #262626;
						text-decoration: none;
						font-size: 0.8rem;
					}
				}
				.sugg-for-you {
					color: #8e8e8e;
					font-size: 0.9rem;
				}
				.suggested-person {
					display: flex;
					align-items: center;
					margin-top: 13px;
					.pic {
						width: 30px;
						height: 30px;
						border-radius: 50%;
						img {
							width: 100%;
							height: 100%;
							border-radius: 50%;
							object-fit: cover;
						}
					}
					.sp-wrapper {
						display: flex;
						flex-direction: column;
						margin-left: 13px;
					}
					small {
						color: #8e8e8e;
						font-size: 0.7rem;
					}
					a {
						color: #262626;
						text-decoration: none;
						font-size: 0.9rem;
						&: hover {
							text-decoration: underline;
						}
					}
				}
			}
			.account-details {
				display: flex;
				align-items: center;
				justify-content: space-between;
				.change {
					button {
						background: none;
						border: 0;
						outline: 0;
						color: #0095f6;
						cursor: pointer;
					}
				}
				.user-name {
					display: flex;
					align-items: center;
					.user {
						.user2 {
							color: #8e8e8e;
							font-size: 0.9rem;
						}
						.user1 {
							a {
								color: #262626;
								text-decoration: none;
								font-size: 0.9rem;
								font-weight: bold;
							}
						}
					}
					.user-pic {
						margin-right: 15px;
						i {
							font-size: 3.6rem;
						}
					}
				}
			}
		}
	}
	@media (max-width: 600px) {
		& {

			.posts-area {
				flex-direction: column;
				main {
					width: 100%;
					.full-posts {
						.fp-comments-bottom {
							.form {
								form {
									input {
										font-size: 1rem;
									}
								}
							}
						}
					}
					.posters {
						overflow-x: hidden;
						a {
							.sp-poster-name {
								small {
									font-size: 0.7rem;
								}
							}
						}
					}
				}
				aside {
					position: static;
					width: 100%;
					padding: 30px;
					.account-details {
						display: none;
					}
					.suggestions {
						display: none;
					}
				}
				
					.fp-picture.minHeight {
						height: 280px;
						video {
							width: 100%;
							height: 100%;
						}
					}
				}
			}
		}
	}
	@media (min-width: 768px) and (max-width: 1023px) {
		.posts-area {
			flex-direction: column;
			main {
				width: 80%;
				margin: auto;
				.posters {
					overflow-x: hidden;
					a {
						.sp-poster-name {
							small {
								font-size: 0.7rem;
							}
						}
					}
				}
			}
							aside {
									position: static;
									width: 100%;
									padding: 30px;
									.account-details {
										display: none;
									}
									.suggestions {
										display: none;
									}
								}
		}
		
	}
`;
export const VideoControls = styled.div`
	display: ${props=>props.visibility};
	position: relative;
	opacity: ${props=>props.opac};
	transtion: all ease-in 0.6s;
	top: -265px;
	left: 300px;
	color: #e0e0e0;
	font-size: 4rem;
	cursor: pointer;
	@media (max-width: 600px) {
		& {
			position: absolute;
			top: 3200px;
			left: 150px;
		}
	}
	@media (min-width: 768px) and (max-width: 1023px) {
		& {
			position: absolute;
			top: 3150px;
			left: 350px;
		}
	}
`;