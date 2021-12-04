import React from 'react';
import Category from './Category';



class CategoriesList extends React.Component {
    render()
    {
        const {categories} = this.props;
        const categoriesList = categories.map((item) => {
            return <Category key={item.id} categoryData={item}/>
        });

        return (
            <ul> {categoriesList} </ul>
        );

    }
}

export default CategoriesList