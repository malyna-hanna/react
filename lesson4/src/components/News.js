import React from 'react';
import CategoriesList from './CategoriesList';

class News extends React.Component {
    render()
    {
        const { dataNews }=this.props;
        return (
            
            <div key = {dataNews.id}>
                <p><b>{dataNews.author}</b></p>
                {dataNews.title}
                <div dangerouslySetInnerHTML={{ __html: dataNews.content }}/>
                {dataNews.isSpecial && <u>IS SPECIAL NEWS</u>}
                <p>{dataNews.dateCreated}</p>
                <p>{dataNews.link && <a href="URL">{dataNews.link}</a>}</p>
                {dataNews.photo && <img style={{ maxHeight: 150}} src={dataNews.photo + dataNews.id}/>}
                <hr></hr>
                <CategoriesList categories={dataNews.categories}/>
            </div>
        )
    }
}

export default News