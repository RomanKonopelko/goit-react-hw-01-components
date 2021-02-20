import React from "react";
import PropTypes from "prop-types";

const Stats = ({ title, stats }) => (
  <section className="statistics">
    {title ? <h2 className="title">Upload stats</h2> : null}
    <ul className="stat-list">
      {stats.map((el) => (
        <li key={el.id} className="item">
          <span className="label">{el.label}</span>
          <span className="percentage">{el.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
export default Stats;
