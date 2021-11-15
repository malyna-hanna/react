import React from 'react';


class Category extends React.Component
{
    render()
    {
        const { categoryData } = this.props;

        return(
            <li key = {categoryData.id}>
            {categoryData.name}
            </li>
        );
    }
}

export default Category