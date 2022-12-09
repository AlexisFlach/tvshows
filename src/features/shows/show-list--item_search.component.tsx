import { useNavigate } from "react-router-dom";
import { StyledCard } from "../../components/UI/Card/Card.styled";
import { StyledCardInfo } from "../../components/UI/Card/CardInfo.styled";
import { showListSearchType } from "../../types/show/showListSearch.types";

import vhsImage from '../../assets/FreeVector-VHS-Tape.jpg'

export const ShowSearchList = ({ show }: showListSearchType) => {

    const navigate = useNavigate();
    const showPage = (id: number) => navigate(`/shows/${id}`);
    return (
        <div
            onClick={() => showPage(show.id)}
            key={show.id}>
            <StyledCard>
                {show.image == null && !show.image ? <img style={{ height: 282 }} src={vhsImage} alt={show.name} /> : <img src={show.image?.medium} alt={show.name} />
                }
                <StyledCardInfo>
                    <h6>{show.name}</h6>
                    <h6>Rating: {show.rating.average}</h6>
                </StyledCardInfo>
            </StyledCard>
        </div>
    )
}
