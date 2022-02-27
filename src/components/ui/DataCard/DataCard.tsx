import styled from 'styled-components';
import IconComponent from '../IconComponent/IconComponent';
import icons from '../../../assets/icons';
import Button from '../Button/Button';

export default function DataCard({ title = '', created, id }: DataCardProps) {
	const handleOpenDetails = () => {};
	return (
		<StyledWrapper id={id}>
			<StyledHeading>{title}</StyledHeading>
			<StyledIconContainer>
				<Button
					type="button"
					iconOnly
					variant="primary"
					onClick={() => handleOpenDetails()}
				>
					<IconComponent src={icons.chart} alt="go to details" size={30} />
				</Button>
				<Button
					type="button"
					iconOnly
					variant="primary"
					onClick={() => handleOpenDetails()}
				>
					<IconComponent src={icons.trash} alt="delete data" size={30} />
				</Button>
				<Button
					type="button"
					iconOnly
					variant="primary"
					onClick={() => handleOpenDetails()}
				>
					<IconComponent src={icons.caret} alt="more info icon" size={30} />
				</Button>
			</StyledIconContainer>
		</StyledWrapper>
	);
}

const StyledWrapper = styled.div`
	display: flex;
	align-items: center;
	gap 30px;
	background-color: ${({ theme }) => theme.secondary};
	padding: 10px 20px;
	border-radius: 3px;
`;

const StyledIconContainer = styled.div`
	display: flex;
	gap: 10px;
`;

const StyledHeading = styled.h3`
	width: 150px;
`;

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
