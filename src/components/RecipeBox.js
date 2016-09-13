import React, { Component } from 'react';
import ContextMenu from './ReactContextMenu';
import MoreIcon from '../images/moreIcon.png';
import StarIcon from '../images/starIcon.png';
import PdfIcon from '../images/pdfIcon.png';

class RecipeBox extends Component {
    constructor() {
      super();
      this.state = {isHovering: false};
    }
    starRecipeHandler(event) {
      console.log('Starring ' + this.props.recipeName, event);
    }
    printRecipeHandler(event) {
      window.open('/pdf/dummyRecipe.pdf');
    }
    hoverHandler(){
      this.setState({isHovering: !this.state.isHovering})
    }
    render() {
      const name = 'recipe-box-' + this.props.recipeId;
      const hoverClass = (this.state.isHovering)? 'recipeBox recipe-hover' : 'recipeBox recipe-no-hover';
      const contextMenuItems = [
        {'icon': StarIcon, 'label': 'Add to favourites', 'function': this.starRecipeHandler.bind(this)},
        {'icon': PdfIcon, 'label': 'Get as file', 'function': this.printRecipeHandler.bind(this)}
      ];

      return (
        <div className={hoverClass}
          onMouseOver={this.hoverHandler.bind(this)}
          onMouseOut={this.hoverHandler.bind(this)}>

				  <img src={this.props.recipeImage}></img>

          <div className="recipeDesc">
            <img id={name} className="more-icon" src={MoreIcon}></img>
            <h3 className="recipe-box-text">{this.props.recipeName}</h3>
          </div>

          <ContextMenu contextID={name} items={contextMenuItems} />
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
