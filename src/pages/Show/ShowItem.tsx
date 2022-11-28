import { showPageType } from '../../types/show/showPage.types'
import { regex } from '../../utils/StripHtmlElements'

interface ShowItemProps {
    show: showPageType
}

const ShowItem = ({ show }: ShowItemProps) => {

    return (
        <>
            <h2>{show.name}</h2>
            <p>{show.summary.replace(regex, '')}</p>
        </>
    )
}

export default ShowItem