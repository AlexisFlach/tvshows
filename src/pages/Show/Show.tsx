import { useEffect, useContext } from "react";
import ShowContext from "../../context/ShowsContext";
import { useParams } from "react-router-dom";
import ShowItem from "./ShowItem";

const Show = () => {
  const { isLoading, fetchShow, show } = useContext(ShowContext);

  const { id } = useParams();

  useEffect(() => {
    fetchShow(Number(id));
  }, []);

  return (
    <div>
      <h1>Show</h1>
      {isLoading && <p>Loading...</p>}
      {show && (
        <ShowItem show={show} />
      )}
    </div>
  );
};

export default Show;