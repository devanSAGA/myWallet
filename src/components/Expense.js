import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Expense = props => {
  const { note, amount, createdAt, id } = props;
  return (
    <Link className="list-item" to={`/edit/${id}`}>
      <div className>
        <h4 className="list-item__title">{note}</h4>
        <span className="list-item__subtitle">
          {moment(createdAt).format("MMM Do, YYYY")}
        </span>
      </div>
      <h4 className="list-item__data">{`${amount} Rs.`}</h4>
    </Link>
  );
};

export default Expense;
