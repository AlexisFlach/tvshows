import { useNavigate } from "react-router-dom";
import { showListType } from '../../types/show/showList.types';
import { StyledCard } from '../../components/UI/Card/Card.styled'
import { StyledCardInfo } from '../../components/UI/Card/CardInfo.styled'

import vhsImage from '../../assets/FreeVector-VHS-Tape.jpg'

interface ShowListItemProps {
    show: showListType
}

export const Item = ({ show }: ShowListItemProps) => {

    const navigate = useNavigate();
    const showPage = (id: number) => navigate(`/shows/${id}`);

    return (
        <div onClick={() => showPage(show.id)}>
            <StyledCard>
                {show.image == null && !show.image ? <img style={{ height: 282 }} src={vhsImage} alt={show.name} /> : <img src={show.image?.medium} alt={show.name} />}

                <StyledCardInfo>
                    <h6>{show.name}</h6>
                    <h6>Rating: {show.rating.average}</h6>
                </StyledCardInfo>
            </StyledCard>
        </div>
    )
}