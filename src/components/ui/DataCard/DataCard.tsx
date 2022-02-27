import styled from 'styled-components';
import IconComponent from '../IconComponent/IconComponent';
import icons from '../../../assets/icons';

export default function DataCard({ title = '', created, id }: DataCardProps) {
	return (
		<StyledWrapper id={id}>
			<StyledHeading>{title}</StyledHeading>
			<StyledIconContainer>
				<IconComponent src={icons.chart} alt="go to details" size={30} />
				<IconComponent src={icons.trash} alt="delete data" size={30} />
				<IconComponent src={icons.caret} alt="more info icon" size={30} />
			</StyledIconContainer>
		</StyledWrapper>
	);
}

const StyledWrapper = styled.div`
	display: flex;
	background-color: ${({ theme }) => theme.secondary};
	padding: 10px 20px;
`;

const StyledIconContainer = styled.div`
	display: flex;
`;

const StyledHeading = styled.h3``;

export type DataCardProps = {
	title: string;
	created?: Date;
	data: dataTypes[];
	id: string;
};

type dataTypes = {
	value: string | number;
	unit: string;
};
