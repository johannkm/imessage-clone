import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

const DynamicRoute = () => {
  const { url, path, hash } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Dynamic Route</h1>
      <ul>
        <li><b>Url:</b> {url}</li>
        <li><b>Path:</b> {path}</li>
        <li><b>Hash:</b> {hash}</li>
        <li>
          <b>Params:</b>
          <ul>
            {Object.entries(location.state?.params || {}).map(([key, value]) => (
              <li key={key}>
                <b>{key}:</b> {value}
              </li>
            ))}
          </ul>
        </li>
        <li>
          <b>Query:</b>
          <ul>
            {new URLSearchParams(location.search).entries().map(([key, value]) => (
              <li key={key}>
                <b>{key}:</b> {value}
              </li>
            ))}
          </ul>
        </li>
        <li>
          <b>Route:</b> {location.pathname}
        </li>
      </ul>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default DynamicRoute;
