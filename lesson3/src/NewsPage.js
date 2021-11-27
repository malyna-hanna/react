import React from "react";
import { NewsList } from './components/NewsList';
import { NewsFilters } from './components/NewsFilters';
import newsData from './news.json';

export class NewsPage extends React.Component {
    state = {
        photoFilter: false,
        linkFilter: false,
        specialFilter: false
    }

    photoFilter(){
        const {photoFilter} = this.state;
        this.setState({
            photoFilter: !photoFilter
        });
    }

    linkFilter(){
        const {linkFilter} = this.state;
        this.setState({
            linkFilter: !linkFilter
        });
    }

    specialFilter(){
        const {specialFilter} = this.state;
        this.setState({
            specialFilter: !specialFilter
        });
    }


    getNews(){
        const {photoFilter, linkFilter, specialFilter} = this.state;
        const news = newsData.filter((item) => {
            if (linkFilter && !item.link) {
                return false;
            }
            if (specialFilter && !item.isSpecial) {
                return false;
            }
            if (photoFilter && !item.photo) {
                return false;
            }
            return true;
        });
        return news
    }

    render() {
        return (
            <div>
                <NewsFilters 
                        handlePhotoFilter={() => this.photoFilter()}
                        handleLinkFilter={() => this.linkFilter()}
                        handlespecialFilter={() => this.specialFilter()}
                />
                 <NewsList data={this.getNews()}/>
            </div>
         
        );
    }
}


