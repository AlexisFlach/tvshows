import { showPageType } from '../../types/show/showPage.types'
import { regex } from '../../utils/StripHtmlElements'
import { ShowHeader } from '../../components/UI/Header/ShowHeader.styled'
import { StyledLink } from '../../components/UI/Link/Link.styled'


interface ShowItemProps {
    show: showPageType
}

export const ShowItem = ({ show }: ShowItemProps) => {

    return (
        <ShowHeader>
            <div>
                <img src={show.image.medium} alt={show.name} />
                <h2>{show.name}</h2>
                <p>{show.summary.replace(regex, '')}</p>
                <StyledLink to="/shows">Back to search</StyledLink>
            </div>
        </ShowHeader>
    )
}