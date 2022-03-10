import { useState } from 'react';
import styled from 'styled-components';
import IconComponent from '../IconComponent/IconComponent';
import icons from '../../../assets/icons';
import Button from '../Button/Button';

export default function DataCard({
	title = '',
	created,
	id,
	data,
}: DataCardProps) {
	const [isPreviewMoreVisible, setPreviewMoreVisibleState] =
		useState<boolean>(false);

	const handleOpenDetails = () => {};
	const handlePreviewMore = () => {
		setPreviewMoreVisibleState(!isPreviewMoreVisible);
	};
	return (
		<StyledWrapper id={id}>
			<StyledContentWrapper>
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
						onClick={() => handlePreviewMore()}
					>
						<IconComponent src={icons.caret} alt="more info icon" size={30} />
					</Button>
				</StyledIconContainer>
			</StyledContentWrapper>

			{isPreviewMoreVisible && (
				<StyledDataWrapper>
					{data.map(({ value, unit }) => (
						<p>
							{value}
							{unit}
						</p>
					))}
				</StyledDataWrapper>
			)}
		</StyledWrapper>
	);
}

const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) => theme.secondary};
	padding: 10px 20px;
	border-radius: 3px;
	height: max-content;
`;

const StyledIconContainer = styled.div`
	display: flex;
	gap: 10px;
`;

const StyledContentWrapper = styled.div`
display: flex;
	align-items: center;
	gap 30px;`;

const StyledHeading = styled.h3`
	width: 150px;
`;

const StyledDataWrapper = styled.div``;

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
