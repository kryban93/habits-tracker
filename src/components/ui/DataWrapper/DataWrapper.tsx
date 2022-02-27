import styled from 'styled-components';
import DataCard from '../DataCard/DataCard';
import exampleData from './exampleData';

export default function DataWrapper() {
	return (
		<StyledWrapper>
			{exampleData.map((data) => (
				<DataCard title={data.title} data={data.data} id={data.id} />
			))}
		</StyledWrapper>
	);
}

const StyledWrapper = styled.div`
	display: flex;
	gap: 20px;
`;
