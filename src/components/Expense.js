import React from "react";
import { Link } from "react-router-dom";

const Expense = props => {
  const { note, amount, createdAt, id } = props;
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{note}</h3>
      </Link>
      <h4>
        {amount} - {createdAt}
      </h4>
    </div>
  );
};

export default Expense;
