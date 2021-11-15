import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import newsData from './news.json';
import NewsList from './components/NewsList'


ReactDOM.render(<NewsList data={newsData}/>, document.getElementById('root')
);

