import React from 'react';
import News from './News';


class NewsList extends React.Component
{
    render()
    {
        const { data } = this.props;
        const items = data.map((item) => {
            return <News dataNews = {item}/>
        });

        return items;
    }
}

export default NewsList