import React from 'react';
import News from './News';


export class NewsList extends React.Component {
    render()
    {
        const { data } = this.props;
        return data.map((item) => (
            <News dataNews={item}/>
          ));
    }
}
