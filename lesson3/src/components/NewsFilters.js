import React from 'react';

export class NewsFilters extends React.Component {
   
    state = {
        photoButton: false,
        linkButton: true,
        specialButton: false,
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

    render() {
        const { specialButton, linkButton, photoButton } = this.state;
 
        return (
            <div>
            <h3>FILTERS</h3>
            <button onClick={() => this.linkButtonClick()}>HAS LINK?</button>
            {linkButton ? (<p>ON</p>) : (<p>OFF</p>)}
            <button onClick={() => this.photoButtonClick()}>HAS PHOTO?</button>
            {photoButton ? (<p>ON</p>) : (<p>OFF</p>)}
            <button onClick={() => this.specialButtonClick()}>IS SPECIAL?</button>
            {specialButton ? (<p>ON</p>) : (<p>OFF</p>)}
            
        </div>
         
        );
    }
}