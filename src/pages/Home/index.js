import React from 'react';
import {HomePageArea} from './styled';
import {PageContainer} from '../../components/mainComponents';
import neymar from '../../images/neymar.JPG';
import felipe from '../../images/felipe.JPG';
import gambit from '../../images/gambit.JPG';
import nerd from '../../images/nerd.JPG';
import vitor from '../../images/vitor.JPG';
import {Link} from 'react-router-dom';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
const Page = () => {
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
										<Slide autoplay={false} indicators={true} arrows={false}>
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
										<Slide autoplay={false} indicators={true} arrows={false}>
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

									</div>
								</div>

							</main>
							<aside>
								aside aside
							</aside>
						</div>
					</PageContainer>
			</HomePageArea>
		);
}
export default Page;