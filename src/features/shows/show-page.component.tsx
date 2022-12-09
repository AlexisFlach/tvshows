import { useParams } from 'react-router-dom'
import { useShow } from './hooks/useShow';
import { ShowItem } from './show-page--item.component';


export const Page = () => {

    const params = useParams();

    const show = useShow(Number(params.id));

    if (!show) return null;

    return (
        <>

            <ShowItem show={show} />
        </>
    )
}