import React from 'react';

export class NewsFilters extends React.Component {
   
    state = {
        photoButton: false,
        linkButton: true,
        specialButton: false,
        search: '',
    }

    photoButtonClick(){
        const { handlePhotoFilter } = this.props;
        handlePhotoFilter();
        const { photoButton } = this.state;
        this.setState({
            photoButton: !photoButton
        });
    }

    linkButtonClick(){
        const { handleLinkFilter } = this.props;
        handleLinkFilter();
        const { linkButton } = this.state;
        this.setState({
            linkButton: !linkButton
        })
    }

    specialButtonClick(){
        const { handlespecialFilter } = this.props;
        handlespecialFilter();
        const { specialButton } = this.state;
        this.setState({
            specialButton: !specialButton
        })
    }

    handleSearch = (e) => {
        const { handleSearchFilter } = this.props;
        let { currentTarget } = e;
        handleSearchFilter(currentTarget.value);
        this.setState({
          search: currentTarget.value,
        });
        
      };    

    render() {
        const { specialButton, linkButton, photoButton, search } = this.state;
 
        return (
            <div>
            <h3>FILTERS</h3>
            <button onClick={() => this.linkButtonClick()}>HAS LINK?</button>
            {linkButton ? (<p>ON</p>) : (<p>OFF</p>)}
            <button onClick={() => this.photoButtonClick()}>HAS PHOTO?</button>
            {photoButton ? (<p>ON</p>) : (<p>OFF</p>)}
            <button onClick={() => this.specialButtonClick()}>IS SPECIAL?</button>
            {specialButton ? (<p>ON</p>) : (<p>OFF</p>)}   
            <div>
                <label>
                    <input type="text" value={search} onChange={this.handleSearch}/>
                </label>
                <hr></hr>
            </div>
        </div>
         
        );
    }
}