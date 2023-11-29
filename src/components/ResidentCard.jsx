import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import "./styles/ResidentCard.css";

const residentCard = ({ url }) => {
  const [resident, getResident] = useFetch(url);
  useEffect(() => {
    getResident();
  }, []);

  return (
    <article className="resident">
      <header className="resident_header">
        <img className="resident_image" src={resident?.image} alt="" />
        <div className="resident_status">
          <div className={`resident-status_circle ${resident?.status}`}>
            <span className='resident-status_value'>{resident?.status}</span>
          </div>
        </div>
      </header>
      <section className="resident_body">
        <h3 className="resident_name">{resident?.name}</h3>
        <hr className="resident_separator" />
        <ul className="resident_stats">
          <li className="resident_stat_item">
            <span className="resident_stat_label">Specie</span>
            <span className="resident_stat_value">{resident?.species}</span>
          </li>
          <li className="resident_stat_item">
            <span className="resident_stat_label">Origin</span>
            <span className="resident_stat_value">{resident?.origin.name}</span>
          </li>
          <li className="resident_stat_item">
            <span className="resident_stat_label">eppisodes where appear</span>
            <span className="resident_stat_value">
              {resident?.episode.length}
            </span>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default residentCard;
