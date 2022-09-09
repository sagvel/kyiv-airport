import React, { useEffect } from 'react';

import SearchFlights from './SearchFlights';

import './styles.scss';
import Departures from './Departures';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Arrivals from './Arrivals';

const Flights = () => {
  return (
    <>
      <h1 className="title">Search flight</h1>
      <SearchFlights />
      <div className="search-results">
        <div className="tabs">
          <ul className="nav nav-tabs">
            <li className="nav-tabs__item nav-tabs__item_active">
              <Link to="departures" className="nav-tabs__link nav-tabs__link-departures">
                <i>
                  <svg
                    data-v-7746f986=""
                    width="40px"
                    height="28px"
                    viewBox="0 0 40 28"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      data-v-7746f986=""
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        data-v-7746f986=""
                        id="Path-403"
                        transform="translate(-1.000000, -1.000000)"
                        fill="#FFFFFF"
                        fillRule="nonzero"
                      >
                        <g data-v-7746f986="" id="Group">
                          <path
                            data-v-7746f986=""
                            d="M40.9190312,14.2925525 C40.731055,13.5210761 40.2396434,12.8581323 39.5561585,12.4539552 C38.8726735,12.0497781 38.0549837,11.9385881 37.2883912,12.1455827 L26.8096581,15.0218819 L13.1945082,2 L9.38678826,3.03046545 L17.5564785,17.5510243 L7.75204986,20.2442408 L3.86129243,17.1278331 L1,17.9171897 L4.59162231,24.3200818 L6.11030829,27.0112974 L9.26373268,26.1409043 L19.7414654,23.2656055 L28.3253427,20.9165445 L38.8070772,18.0372439 C40.4055057,17.5625364 41.3397513,15.9060318 40.9190312,14.2925525 Z"
                            id="Path_403"
                            transform="translate(21.009879, 14.505649) rotate(-4.012171) translate(-21.009879, -14.505649) "
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </i>
                Departures
              </Link>
            </li>
            <li className="nav-tabs__item">
              <Link to="arrivals" className="nav-tabs__link nav-tabs__link-arrivals">
                <i>
                  <svg
                    data-v-7746f986=""
                    width="40px"
                    height="28px"
                    viewBox="0 0 40 28"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      data-v-7746f986=""
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g data-v-7746f986="" id="Group" transform="translate(-4.000000, -7.000000)">
                        <g data-v-7746f986="" id="Path-402"></g>
                        <path
                          data-v-7746f986=""
                          d="M43.8940167,20.2848496 C43.7061583,19.5138567 43.2150547,18.8513283 42.531998,18.4474045 C41.8489414,18.0434806 41.031764,17.9323603 40.2656518,18.1392252 L29.793485,21.013722 L16.1868667,8 L12.3815328,9.02981973 L20.5461037,23.5412796 L10.7478188,26.2328084 L6.85949946,23.1183536 L4,23.9072155 L7.5893717,30.3060954 L9.10710602,32.9956246 L12.2585544,32.1257769 L22.7297214,29.2522799 L31.3082198,26.9046908 L41.7833862,24.0271945 C43.3808131,23.5527844 44.3144732,21.8973179 43.8940167,20.2848496 Z"
                          id="Path_402"
                          fill="#FFFFFF"
                          fillRule="nonzero"
                          transform="translate(23.997341, 20.497812) rotate(27.974730) translate(-23.997341, -20.497812) "
                        ></path>
                      </g>
                    </g>
                  </svg>
                </i>
                Arrivals
              </Link>
            </li>
          </ul>
        </div>
        <div className="calendar">
          <input type="date" />
          <div className="datas">
            <div className="prev-data">
              <div className="data__num">02/09</div>
              <div className="data__title">Yesterday</div>
            </div>
            <div className="current-data">
              <div className="data__num">03/09</div>
              <div className="data__title">Today</div>
            </div>
            <div className="next-data">
              <div className="data__num">03/09</div>
              <div className="data__title">Tomorrow</div>
            </div>
          </div>
        </div>
        <table className="result-table">
          <thead>
            <tr>
              <th>Terninal</th>
              <th>Local time</th>
              <th>Destination</th>
              <th>Status</th>
              <th>Airline</th>
              <th>Flight</th>
            </tr>
          </thead>
          <tbody>
            <Routes>
              <Route path="/" element={<Navigate to="departures" replace />} />
              <Route path="departures" element={<Departures />} />
              <Route path="arrivals" element={<Arrivals />} />
            </Routes>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Flights;
