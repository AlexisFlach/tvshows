import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { showListType } from '../../types/show/showList.types';
import { StyledCard } from '../../components/UI/Card/Card.styled'
import { StyledCardInfo } from '../../components/UI/Card/CardInfo.styled'
import {StyledCardSummary} from '../../components/UI/Card/CardSummary.styled'
import { StyledLink } from '../../components/UI/Link/Link.styled'
import { regex } from '../../utils/StripHtmlElements'
interface ShowListItemProps {
    show: showListType
}

export const Item = ({ show }: ShowListItemProps) => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
      };
    
      const handleMouseOut = () => {
        setIsHovering(false);
      };

    const navigate = useNavigate();
    const showPage = (id: number) => navigate(`/shows/${id}`);

    return (
        <StyledCard>
            <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                {!isHovering && (
                    <>
                <img src={show.image.medium} alt={show.name} />
                <StyledCardInfo>
                <h6>{show.name}</h6>
                <h6>Rating: {show.rating.average}</h6>
            </StyledCardInfo>
            </>
            )} 

                {isHovering && (
                <StyledCardSummary>
                    
                    <h4>Info</h4>
                    <p><strong>Rating: </strong> {show.rating.average}</p>
                    <p><strong>Genres: </strong>{show.genres.join(', ')} </p>
                    <StyledLink to={`/shows/${show.id}`}>More Info</StyledLink>
                      
                    </StyledCardSummary>
                )}
                
            </div>
        </StyledCard>

    )
}