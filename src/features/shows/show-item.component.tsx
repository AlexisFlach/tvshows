import { useNavigate } from "react-router-dom";
import { showListType } from '../../types/show/showList.types';

interface ShowListItemProps {
    show: showListType
}

export const Item = ({ show }: ShowListItemProps) => {

    const navigate = useNavigate();
    const showPage = (id: number) => navigate(`/shows/${id}`);

    return (
        <>
            <h2>{show.name}</h2>
            <button onClick={() => showPage(show.id)}>Go to page</button>
        </>
    )
}