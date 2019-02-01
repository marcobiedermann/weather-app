import React from 'react';
import Results from '../../components/Results';
import Search from '../../containers/Search';

const data = {
  message: 'accurate',
  cod: '200',
  count: 5,
  list: [{
    id: 2950159,
    name: 'Berlin',
    coord: {
      lat: 52.517,
      lon: 13.3889,
    },
    main: {
      temp: -0.51,
      pressure: 1000,
      humidity: 95,
      temp_min: -1,
      temp_max: 0,
    },
    dt: 1548919200,
    wind: {
      speed: 2.6,
      deg: 140,
    },
    sys: {
      country: 'DE',
    },
    rain: null,
    snow: null,
    clouds: {
      all: 75,
    },
    weather: [{
      id: 803,
      main: 'Clouds',
      description: 'broken clouds',
      icon: '04d',
    }],
  },
  {
    id: 4831725,
    name: 'Berlin',
    coord: {
      lat: 41.6215,
      lon: -72.7457,
    },
    main: {
      temp: -16.67,
      pressure: 1022,
      humidity: 37,
      temp_min: -18.3,
      temp_max: -14.4,
    },
    dt: 1548920100,
    wind: {
      speed: 2.6,
      deg: 300,
      gust: 5.1,
    },
    sys: {
      country: 'US',
    },
    rain: null,
    snow: null,
    clouds: {
      all: 1,
    },
    weather: [{
      id: 800,
      main: 'Clear',
      description: 'sky is clear',
      icon: '01n',
    }],
  },
  {
    id: 5163076,
    name: 'Berlin',
    coord: {
      lat: 40.5612,
      lon: -81.7944,
    },
    main: {
      temp: -19.45,
      pressure: 1026,
      humidity: 76,
      temp_min: -20.6,
      temp_max: -18.3,
    },
    dt: 1548918960,
    wind: {
      speed: 2.1,
      deg: 250,
    },
    sys: {
      country: 'US',
    },
    rain: null,
    snow: null,
    clouds: {
      all: 1,
    },
    weather: [{
      id: 800,
      main: 'Clear',
      description: 'sky is clear',
      icon: '01n',
    }],
  },
  {
    id: 1019330,
    name: 'Berlin',
    coord: {
      lat: -32.8834,
      lon: 27.5794,
    },
    main: {
      temp: 22,
      pressure: 1015,
      humidity: 88,
      temp_min: 22,
      temp_max: 22,
    },
    dt: 1548919860,
    wind: {
      speed: 5.1,
      deg: 220,
    },
    sys: {
      country: 'ZA',
    },
    rain: null,
    snow: null,
    clouds: {
      all: 75,
    },
    weather: [{
      id: 803,
      main: 'Clouds',
      description: 'broken clouds',
      icon: '04d',
    }],
  },
  {
    id: 2950158,
    name: 'Berlin',
    coord: {
      lat: 54.0364,
      lon: 10.4461,
    },
    main: {
      temp: 0.39,
      pressure: 998,
      humidity: 74,
      temp_min: 0,
      temp_max: 1,
    },
    dt: 1548919200,
    wind: {
      speed: 2.1,
      deg: 150,
    },
    sys: {
      country: 'DE',
    },
    rain: null,
    snow: null,
    clouds: {
      all: 75,
    },
    weather: [{
      id: 803,
      main: 'Clouds',
      description: 'broken clouds',
      icon: '04d',
    }],
  },
  ],
};


const SearchPage = () => (
  <div>
    <Search />
    <Results results={data.list} />
  </div>
);

export default SearchPage;
