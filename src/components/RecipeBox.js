import React, { Component } from 'react';
import ContextMenu from './ReactContextMenu';
import MoreIcon from '../images/moreIcon.png';

class RecipeBox extends Component {
    starRecipeHandler(event) {
      console.log("Starring " + this.props.recipeName)
    }
    render() {
       const name = "recipe-box-"+this.props.recipeId
        return (
           <div className="recipeBox">
				      <img src={this.props.recipeImage}></img>
              <div className="recipeDesc">
                <img id={name} className="more-icon" src={MoreIcon}></img>
                <h3>{this.props.recipeName}</h3>
              </div>

              <ContextMenu contextID={name} items={[{'icon': MoreIcon, 'label': 'Star', 'function': this.starRecipeHandler.bind(this)}]} />
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
