import {useState} from 'react';
import {HomePageArea, VideoControls} from './styled';
import {PageContainer} from '../../components/mainComponents';
import neymar from '../../images/neymar.JPG';
import felipe from '../../images/felipe.JPG';
import gambit from '../../images/gambit.JPG';
import nerd from '../../images/nerd.JPG';
import vitor from '../../images/vitor.JPG';
import video from '../../videos/video.MP4'
import {Link} from 'react-router-dom';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Page = () => {
	const [nomeClasse, setNomeClasse] = useState("fas fa-play");
	const [visible, setVisible] = useState('block');
	const [opacity, setOpacity] = useState(1);
	const handleMouseover = () => {
			setVisible('block');
		if (nomeClasse === "fas fa-pause") {
				setOpacity(0.8);
		}
	}
	const handleMouseout = () => {
		if (nomeClasse === "fas fa-pause") {
			setVisible('none');
		}
				setOpacity(1);
	}
	const handleVideoButtonClick = () => {
		let video = document.querySelector('video');
		if (nomeClasse === "fas fa-play") {
			setNomeClasse("fas fa-pause");
			video.play();
			setVisible('none');
		}else {
			setNomeClasse("fas fa-play");
			video.pause();
		}
		
	}

	const handleEnded = () => {
		setNomeClasse("fas fa-play");
		setVisible('block');
		setOpacity(1);
	}

	return(
			<HomePageArea>
					<PageContainer>
						<div className="posts-area">
							<main>
								<div className="posters">
									<Link to="/posts">
										<div className="small-post">
											<div className="sp-img">
												<div className="sp-img-inner">
														<img src={gambit} alt="" />
												</div>
											</div>
											<div className="sp-poster-name">
												<small>gustavoga...</small>
											</div>
									</div>
									</Link>

									<Link to="/posts">
										<div className="small-post">
											<div className="sp-img">
												<div className="sp-img-inner">
													<img src={neymar} alt="" />
												</div>
											</div>
											<div className="sp-poster-name">
												<small>neymarjr</small>
											</div>
									</div>
									</Link>

									<Link to="/posts">
										<div className="small-post">
											<div className="sp-img">
												<div className="sp-img-inner">
													<img src={gambit} alt="" />
												</div>
											</div>
											<div className="sp-poster-name">
												<small>diego _pelo...</small>
											</div>
									</div>
									</Link>

									<Link to="/posts">
										<div className="small-post">
											<div className="sp-img">
												<div className="sp-img-inner">
													<img src={vitor} alt="" />
												</div>
											</div>
											<div className="sp-poster-name">
												<small>metaforand...</small>
											</div>
									</div>
									</Link>

									<Link to="/posts">
										<div className="small-post">
											<div className="sp-img">
												<div className="sp-img-inner">
													<img src={nerd} alt="" />
												</div>
											</div>
											<div className="sp-poster-name">
												<small>nerdsedutor</small>
											</div>
									</div>
									</Link>

									<Link to="/posts">
										<div className="small-post">
											<div className="sp-img">
												<div className="sp-img-inner">
													<img src={felipe} alt="" />
												</div>
											</div>
											<div className="sp-poster-name">
												<small>felipemarxsb</small>
											</div>
									</div>
									</Link>

								</div>

								<div className="full-posts">
								<div className="fp-top-container">
									<div className="fp-top">
										<div className="fp-top-img">
											<div className="fp-top-img-inner">
												<img src={gambit} alt="" />
											</div>
										</div>
										<div className="fp-name"><Link to="">gustavogambit</Link></div>
										</div>
										<div className="three-points">...</div>
									</div>

									<div className="fp-picture">
										<Slide autoplay={false} indicators={true}>
											<div className="each-slide">
												<img src={gambit} alt="" />
											</div>
											<div className="each-slide">
												<img src={gambit} alt="" />
											</div>
											<div className="each-slide">
												<img src={gambit} alt="" />
											</div>
										</Slide>
									</div>

									<div className="fp-comments">
										<div className="fp-comments-top">
											<div className="comments-top">
												<div className="comments-top-left">
												<div className="wrapper">
													<i className="far fa-heart"></i>
													<i className="far fa-comment"></i>
													<i className="fas fa-location-arrow"></i>
												</div>
												<div className="number-of-likes"><small>4 157 gostos</small>
												</div>

												</div>

												<div className="comments-top-right"></div>
											</div>
										</div>

										<div className="fp-comments-middle">
											<Link to="">gustavogambit </Link> 
											<small>Me conte em uma palavra... Você tem fome de que? 🤔
											</small>
											<span>... mais</span>
											<div className="comments">
												<Link to="">Ver todos os 191 comentários</Link>
											</div>
											<div className="other-person-comment">
												<div className="text"><Link to="">_lucca.11 </Link>Comidas</div>
												<i className="far fa-heart"></i>
											</div>
											<div className="other-person-comment">
												<div className="text"><Link to="">wil.l888 </Link>Autodesenvolvimento</div>
												<i className="far fa-heart"></i>
											</div>
											<div className="time"><small>HÁ 1 DIA</small></div>
										</div>

										<div className="fp-comments-bottom">
											<div className="emoji"><i className="far fa-surprise"></i></div>
											<div className="form">
												<form method="GET" action="/send-comment">
													<input type="text" placeholder="Adiciona um comentário..."/>
													<button>Publicar</button>
												</form>
											</div>
										</div>
									</div>

								</div>

								<div className="full-posts">
								<div className="fp-top-container">
									<div className="fp-top">
										<div className="fp-top-img">
											<div className="fp-top-img-inner">
												<img src={felipe} alt="" />
											</div>
										</div>
										<div className="fp-name"><Link to="">felipemarx</Link></div>
										</div>
										<div className="three-points">...</div>
									</div>

									<div className="fp-picture">
										<Slide autoplay={false} indicators={true}>
											<div className="each-slide">
												<img src={felipe} alt="" />
											</div>
											<div className="each-slide">
												<img src={felipe} alt="" />
											</div>
											<div className="each-slide">
												<img src={felipe} alt="" />
											</div>
										</Slide>
									</div>

									<div className="fp-comments">
										<div className="fp-comments-top">
											<div className="comments-top">
												<div className="comments-top-left">
												<div className="wrapper">
													<i className="far fa-heart"></i>
													<i className="far fa-comment"></i>
													<i className="fas fa-location-arrow"></i>
												</div>
												<div className="number-of-likes"><small>4 157 gostos</small>
												</div>

												</div>

												<div className="comments-top-right"></div>
											</div>
										</div>

										<div className="fp-comments-middle">
											<Link to="">felipemarx </Link> 
											<small>Me conte em uma palavra... Você tem fome de que? 🤔
											</small>
											<span>... mais</span>
											<div className="comments">
												<Link to="">Ver todos os 191 comentários</Link>
											</div>
											<div className="other-person-comment">
												<div className="text"><Link to="">_lucca.11 </Link>Comidas</div>
												<i className="far fa-heart"></i>
											</div>
											<div className="other-person-comment">
												<div className="text"><Link to="">wil.l888 </Link>Autodesenvolvimento</div>
												<i className="far fa-heart"></i>
											</div>
											<div className="time"><small>HÁ 1 DIA</small></div>
										</div>

										<div className="fp-comments-bottom">
											<div className="emoji"><i className="far fa-surprise"></i></div>
											<div className="form">
												<form method="GET" action="/send-comment">
													<input type="text" placeholder="Adiciona um comentário..."/>
													<button>Publicar</button>
												</form>
											</div>
										</div>
									</div>
								</div>

								<div className="full-posts">
								<div className="fp-top-container">
									<div className="fp-top">
										<div className="fp-top-img">
											<div className="fp-top-img-inner">
												<img src={neymar} alt="" />
											</div>
										</div>
										<div className="fp-name"><Link to="">neymarjr</Link></div>
										</div>
										<div className="three-points">...</div>
									</div>

									<div className="fp-picture">
											<div className="each-slide">
												<img src={neymar} alt="" />
											</div>
									</div>

									<div className="fp-comments">
										<div className="fp-comments-top">
											<div className="comments-top">
												<div className="comments-top-left">
												<div className="wrapper">
													<i className="far fa-heart"></i>
													<i className="far fa-comment"></i>
													<i className="fas fa-location-arrow"></i>
												</div>
												<div className="number-of-likes"><small>4 157 gostos</small>
												</div>

												</div>

												<div className="comments-top-right"></div>
											</div>
										</div>

										<div className="fp-comments-middle">
											<Link to="">neymarjr </Link> 
											<small>Me conte em uma palavra... Você tem fome de que? 🤔
											</small>
											<span>... mais</span>
											<div className="comments">
												<Link to="">Ver todos os 191 comentários</Link>
											</div>
											<div className="other-person-comment">
												<div className="text"><Link to="">_lucca.11 </Link>Comidas</div>
												<i className="far fa-heart"></i>
											</div>
											<div className="other-person-comment">
												<div className="text"><Link to="">wil.l888 </Link>Autodesenvolvimento</div>
												<i className="far fa-heart"></i>
											</div>
											<div className="time"><small>HÁ 1 DIA</small></div>
										</div>

										<div className="fp-comments-bottom">
											<div className="emoji"><i className="far fa-surprise"></i></div>
											<div className="form">
												<form method="GET" action="/send-comment">
													<input type="text" placeholder="Adiciona um comentário..."/>
													<button>Publicar</button>
												</form>
											</div>
										</div>
									</div>
								</div>

								<div className="full-posts">
								<div className="fp-top-container">
									<div className="fp-top">
										<div className="fp-top-img">
											<div className="fp-top-img-inner">
												<img src={vitor} alt="" />
											</div>
										</div>
										<div className="fp-name"><Link to="">metaforando.vitor</Link></div>
										</div>
										<div className="three-points">...</div>
									</div>

									<div className="fp-picture minHeight">
										<video src={video} onEnded={handleEnded} onMouseOver={handleMouseover}
										onMouseOut={handleMouseout} style={{opacity: opacity, transition: 'all ease-in 0.6s'}}></video>
										<VideoControls onClick={handleVideoButtonClick} visibility={visible}
										onMouseOver={handleMouseover} onMouseOut={handleMouseout} opac={opacity}>
											<i className={nomeClasse}></i>
										</VideoControls>
									</div>

									<div className="fp-comments">
										<div className="fp-comments-top">
											<div className="comments-top">
												<div className="comments-top-left">
												<div className="wrapper">
													<i className="far fa-heart"></i>
													<i className="far fa-comment"></i>
													<i className="fas fa-location-arrow"></i>
												</div>
												<div className="number-of-likes"><small>10 615 visualizações</small>
												</div>

												</div>

												<div className="comments-top-right"></div>
											</div>
										</div>

										<div className="fp-comments-middle">
											<Link to="">metaforando.vitor </Link> 
											<small>Está chegando a hora de um evento que vai fazer sua mente mudar
											</small>
											<span>... mais</span>
											<div className="comments">
												<Link to="">Ver todos os 8 comentários</Link>
											</div>
											<div className="other-person-comment">
												<div className="text"><Link to="">jaquelinidoula </Link>
												Preciso pq ate hj n acertei nada dos teus stories, eu sou trouxa diplomada</div>
												<i className="far fa-heart"></i>
											</div>
											<div className="other-person-comment">
												<div className="text"><Link to="">fellipecadete </Link>Tá sem marketing o homem</div>
												<i className="far fa-heart"></i>
											</div>
											<div className="time"><small>HÁ 16 HORAS</small></div>
										</div>

										<div className="fp-comments-bottom">
											<div className="emoji"><i className="far fa-surprise"></i></div>
											<div className="form">
												<form method="GET" action="/send-comment">
													<input type="text" placeholder="Adiciona um comentário..."/>
													<button>Publicar</button>
												</form>
											</div>
										</div>
									</div>
								</div>

							</main>
							<aside>
								<div className="account-details">
									<div className="user-name">
										<div className="user-pic"><i className="far fa-user-circle"></i></div>
										<div className="user">
											<div className="user1"><Link to="">chrisdrew49</Link></div>
											<div className="user2">Chris Drew</div>
										</div>
									</div>
									<div className="change"><button>Mudar</button></div>
								</div>

								<div className="suggestions">
									<div className="sugg-for-you">Sugestões para ti</div>
									<div className="seeAll"><Link to="">Ver todas</Link></div>
									<div className="suggested-person">
										<div className="pic"><Link to=""><img src={gambit} alt="" /></Link></div>
										<div className="sp-wrapper">
											<Link to="">zakir198555</Link>
											<small>Segue-te</small>
											</div>
									</div>

									<div className="follow">
										<button>Seguir</button>
									</div>

									<div className="suggested-person">
										<div className="pic"><Link to=""><img src={gambit} alt="" /></Link></div>
											<div className="sp-wrapper">
												<Link to="">nobreanseio</Link>
												<small>Segue-te</small>
											</div>
									</div>

									<div className="follow">
										<button>Seguir</button>
									</div>

									<div className="suggested-person">
										<div className="pic"><Link to=""><img src={gambit} alt="" /></Link></div>
											<div className="sp-wrapper">
												<Link to="">alpha.powerr</Link>
												<small>Segue-te</small>
											</div>
									</div>

									<div className="follow">
										<button>Seguir</button>
									</div>

									<div className="suggested-person">
										<div className="pic"><Link to=""><img src={gambit} alt="" /></Link></div>
											<div className="sp-wrapper">
												<Link to="">homemalphaagora</Link>
												<small>Segue-te</small>
											</div>
									</div>

									<div className="follow">
										<button>Seguir</button>
									</div>

									<div className="suggested-person">
										<div className="pic"><Link to=""><img src={gambit} alt="" /></Link></div>
											<div className="sp-wrapper">
												<Link to="">instagram</Link>
												<small>Conta oficial do Instagram</small>
											</div>
									</div>

									<div className="follow">
										<button>Seguir</button>
									</div>
								</div>
								<nav>
									<ul>
										<li><Link to="">Sobre .</Link></li>
										<li><Link to="">Ajuda .</Link></li>
										<li><Link to="">Imprensa .</Link></li>
										<li><Link to="">API .</Link></li>
										<li><Link to="">Empregos .</Link></li>
										<li><Link to="">Privacidade .</Link></li>
										<li><Link to="">Termos .</Link></li>
										<li><Link to="">Localizações .</Link></li>
										<li><Link to="">Contas principais .</Link></li>
										<li><Link to="">Hashtags .</Link></li>
										<li><Link to="">Idioma .</Link></li>
									</ul>
								</nav>
								<div className="all-rights-reserved">© 2021 INSTAGRAM DO FACEBOOK</div>
							</aside>
						</div>
						
					</PageContainer>
			</HomePageArea>
		);
}
export default Page;