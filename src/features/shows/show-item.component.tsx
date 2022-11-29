import { useNavigate } from "react-router-dom";
import { showListType } from '../../types/show/showList.types';
import { StyledCard } from '../../components/UI/Card/Card.styled'
import { StyledCardInfo } from '../../components/UI/Card/CardInfo.styled'

interface ShowListItemProps {
    show: showListType
}

export const Item = ({ show }: ShowListItemProps) => {

    const navigate = useNavigate();
    const showPage = (id: number) => navigate(`/shows/${id}`);

    return (
        <div onClick={() => showPage(show.id)}>
            <StyledCard>
                <img src={show.image.medium} alt={show.name} />
                <StyledCardInfo>
                    <h6>{show.name}</h6>
                    <h6>Rating: {show.rating.average}</h6>
                </StyledCardInfo>
            </StyledCard>
        </div>
    )
}