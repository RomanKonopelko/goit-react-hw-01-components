import React from "react";
import PropTypes from "prop-types";
import s from "./stats.module.css";

const Stats = ({ title, stats }) => (
  <section className={s.stats__section}>
    {title ? <h2 className={s.stats__title}>Upload stats</h2> : null}
    <ul className={s.stats__list}>
      {stats.map((el) => (
        <li key={el.id} className={s.stats__item}>
          <span className={s.label}>{el.label}</span>
          <span className={s.percentage}>{el.percentage}%</span>
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
