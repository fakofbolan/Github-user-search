import React from "react";
import "./Repository.scss";

export const Repository = ({ user, repos }) => {
  return (
    <div className="repos-container">
      <div className="repos-info-wrapper">
        <img src={user.avatar_url} alt={user.name} className="repos-image" />
        <div className="repos-info">
          <div className="repos-name">
            <a href={user.url} target="_blank" rel="noreferrer">
              {user.name ? user.name : user.login}
            </a>
          </div>
          <div className="repos-follow">
            <span>
              Followers: <strong>{user.followers}</strong>
            </span>
            <span>
              {" "}
              Following: <strong>{user.following}</strong>
            </span>
          </div>
          <div className="repos-location">
            <span>
              Location: <strong>{user.location}</strong>
            </span>
          </div>
          <div className="repos-public">
            <span>Repos: <strong>{user.public_repos}</strong></span>
          </div>
        </div>
      </div>
      <div className="repos-wrapper">
        <h3 className="repos-heading">List of repositories:</h3>
        {repos.map((repo) => (
          <div key={repo.name} className="repos-card">
            <a
              className="repos-link"
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {repo.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
