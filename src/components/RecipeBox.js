import React, { Component } from 'react';

class RecipeBox extends Component {
    render() {
        return (
            <div className="recipeBox">
				<img src={this.props.image}></img>
				<div className="recipeDesc">
					<h3>{this.props.recipeName}</h3>
					<p>{this.props.description}</p>
				</div>
			</div>
        );
    }
}

RecipeBox.propTypes = {
    image: React.PropTypes.string,
    recipeName: React.PropTypes.string,
    description: React.PropTypes.string
}

export default RecipeBox;
