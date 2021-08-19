import styled from 'styled-components';

export const Template = styled.div``;
export const PageContainer = styled.div`
	width: 950px;
	margin: auto;
	@media (max-width: 600px) {
		width: auto;

	}
	@media (min-width: 768px) and (max-width: 1023px) {
		& {
			width: auto;
		}
	}
`;