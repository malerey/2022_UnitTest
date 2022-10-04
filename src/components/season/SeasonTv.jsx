import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import {
  SeasonTvContainer,
  EpisodeCardContainer,
  EpisodeCard,
} from "./SeasonTV.style";

const SeasonTv = ({ seasons }) => {
  const history = useHistory();

  const params = useParams();

  const [seasonNumber, setSeasonNumber] = useState(params.seasonNumber);

  const info = useFetch([3, params.media, params.id, "season", seasonNumber]);

  const handleChange = (e) => {
    setSeasonNumber(e.target.value);
    history.push(e.target.value);
  };

  return (
    <SeasonTvContainer>
      <select value={seasonNumber} onChange={handleChange}>
        {seasons.map((element) => {
          return (
            <option value={element.season_number} key={element.season_number}>
              Temporada {element.season_number}
            </option>
          );
        })}
      </select>
      <EpisodeCardContainer>
        {info &&
          info.episodes.map((e) => {
            return (
              <EpisodeCard key={e.id}>
                {e.still_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/original${e.still_path}`}
                    alt={e.name}
                  />
                ) : (
                  <div className="image-not-available">
                    <svg
                      height="50px"
                      viewBox="0 -36 512 511"
                      width="40px"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#a8aaad"
                      data-testid="Not available"
                    >
                      <path d="m231.898438 198.617188c28.203124 0 51.152343-22.945313 51.152343-51.148438 0-28.207031-22.949219-51.152344-51.152343-51.152344-28.203126 0-51.148438 22.945313-51.148438 51.152344 0 28.203125 22.945312 51.148438 51.148438 51.148438zm0-72.300782c11.664062 0 21.152343 9.488282 21.152343 21.152344 0 11.660156-9.488281 21.148438-21.152343 21.148438-11.660157 0-21.148438-9.488282-21.148438-21.148438 0-11.664062 9.488281-21.152344 21.148438-21.152344zm0 0" />
                      <path d="m493.304688.5h-474.609376c-10.308593 0-18.695312 8.386719-18.695312 18.695312v401.726563c0 10.308594 8.386719 18.695313 18.695312 18.695313h474.609376c10.308593 0 18.695312-8.386719 18.695312-18.695313v-401.726563c0-10.308593-8.386719-18.695312-18.695312-18.695312zm-11.304688 30v237.40625l-94.351562-94.355469c-6.152344-6.140625-16.15625-6.136719-22.304688.011719l-133.441406 133.441406-85.238282-85.234375c-2.980468-2.984375-6.945312-4.628906-11.164062-4.628906-4.214844 0-8.175781 1.640625-11.15625 4.621094l-94.34375 94.34375v-285.605469zm-452 379.117188v-51.085938l105.5-105.5 85.234375 85.234375c2.984375 2.984375 6.949219 4.632813 11.167969 4.632813 4.210937 0 8.175781-1.644532 11.152344-4.625l133.445312-133.445313 105.503906 105.503906v99.285157zm0 0" />
                    </svg>
                  </div>
                )}
                <h3>
                  <span>
                    S{e.season_number}E{e.episode_number}
                  </span>
                  {e.name}
                </h3>
                <p>{e.overview}</p>
              </EpisodeCard>
            );
          })}
      </EpisodeCardContainer>
    </SeasonTvContainer>
  );
};

export default SeasonTv;
