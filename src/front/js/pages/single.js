import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { getInfoUser } from "../service";

export const Single = (props) => {
  const { store, actions } = useContext(Context);

  const [state, setState] = useState({
    id: 0,
    email: "",
  });

  const getUser = async () => {
    console.log("estoy aqui");
    const data = await getInfoUser();
    setState(data);
  };

  useEffect(() => getUser(), []);

  return (
    <div className="jumbotron">
      <p>email: {state.email}</p>
      <p>id: {state.id}</p>
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
