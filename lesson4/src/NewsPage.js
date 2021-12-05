import React from "react";
import { NewsList } from './components/NewsList';
import { NewsFilters } from './components/NewsFilters';
import newsData from './news.json';
import { textFieldClasses } from "@mui/material";
import { textAlign } from "@mui/system";

export class NewsPage extends React.Component {
    state = {
        photoFilter: false,
        linkFilter: false,
        specialFilter: false,
        searchFilter: '',

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

    searchFilter(text){
        this.setState({
            searchFilter: text,
        });
    }


    getNews(){
        const {photoFilter, linkFilter, specialFilter, searchFilter} = this.state;
        const searchFilterText = searchFilter.toLowerCase();
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
            if (searchFilter) {
                const searchByTitle = item.title.toLowerCase().indexOf(searchFilterText) >= 0;
                const searchByContent = item.content.toLowerCase().indexOf(searchFilterText) >= 0;
                const searchByAuthor = item.author.toLowerCase().indexOf(searchFilterText) >= 0;
                return (searchByTitle || searchByContent || searchByAuthor);
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
                        handleSearchFilter={(text) => this.searchFilter(text)}
                />
                 <NewsList data={this.getNews()}/>
            </div>
         
        );
    }
}


