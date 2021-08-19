import React, {useState} from 'react';
import {HeaderArea, ExitButton, SearchButton} from './styled';
import {PageContainer} from '../../mainComponents';
import logo from '../../../images/logo.png';
import {Link} from 'react-router-dom';
const Page = () => {
	const [isVisibleExit, setIsVisibleExit] = useState('none');
	const [isVisibleSearch, setIsVisibleSearch] = useState('block');
	const [exitMargin, setExitMargin] = useState(150);
	const handleInputFocus = () => {
			setIsVisibleExit('block');
			setIsVisibleSearch('none');
			setExitMargin(-25);
	}
	const handleInputBlur = () => {
		setIsVisibleExit('none');
		setIsVisibleSearch('block');
	}
	const handleExitClick = () => {
		setIsVisibleExit('none');
		setIsVisibleSearch('block');
	}
	return(
			<HeaderArea>
				<PageContainer>
					<div className="header">
						<Link to="">
							<div className="logoArea">
								<img src={logo} alt="Instagram logo" />
							</div>
							</Link>
						<div className="searchArea">
							<form method="GET" action="/search">
								<input type="text" placeholder="Pesquisar" onFocus={handleInputFocus}
								onBlur={handleInputBlur}/>
								<SearchButton searchVisibility={isVisibleSearch} margin={exitMargin}>
								<i className="fas fa-search"></i></SearchButton>
								<ExitButton exitVisibility={isVisibleExit}
								margin={exitMargin} onClick={handleExitClick}>x</ExitButton>
							</form>
						</div>

						<div className="menuArea">
							<nav>
								<ul>
									<li><Link to=""><i className="fas fa-home"></i></Link></li>
									<li><Link to=""><i className="fas fa-location-arrow"></i></Link></li>
									<li><Link to=""><i className="fas fa-compass"></i></Link></li>
									<li><Link to=""><i className="far fa-heart"></i></Link></li>
									<li><i className="far fa-user-circle"></i></li>
								</ul>
							</nav>
						</div>
					</div>
				</PageContainer>
			</HeaderArea>
		);
}
export default Page;