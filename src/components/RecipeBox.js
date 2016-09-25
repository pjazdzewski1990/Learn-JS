import React, { Component, PropTypes } from 'react';
import ContextMenu from './ReactContextMenu';
import MoreIcon from '../images/moreIcon.png';
import NotStarredIcon from '../images/emptyStarIcon.png';
import StarredIcon from '../images/starIcon.png';
import PdfIcon from '../images/pdfIcon.png';

class RecipeBox extends Component {
    constructor() {
      super();
      this.state = {isHovering: false};
    }
    printRecipeHandler() {
      window.open('/pdf/dummyRecipe.pdf');
    }
    hoverHandler(){
      this.setState({isHovering: !this.state.isHovering})
    }
    openMenuHandler(event){
      event.preventDefault();

      const name = event.target.id;
      const id = event.target.dataset.recipeId;

      const menu = this.refs[name];
      if(menu != null) {
        menu.openContextMenu({'target': name, 'recipeId': id});
      }
    }
    render() {
      const {recipe, onStarClick} = this.props;
      const starIcon = (recipe.isStarred)? StarredIcon : NotStarredIcon;

      const name = 'recipe-box-' + recipe.id;
      const contextMenuItems = [
        {'icon': starIcon, 'label': 'Add to favourites', 'function': onStarClick.bind(this)},
        {'icon': PdfIcon, 'label': 'Get as file', 'function': this.printRecipeHandler.bind(this)}
      ];
      const hoverClass = (this.state.isHovering)? 'recipeBox recipe-hover' : 'recipeBox recipe-no-hover';

      return (
        <div className={hoverClass}
          onMouseOver={this.hoverHandler.bind(this)}
          onMouseOut={this.hoverHandler.bind(this)}>

				  <img src={recipe.image}></img>

          <div className="recipeDesc">
            <img id={name} data-recipe-id={recipe.id} className="more-icon" src={MoreIcon} onClick={this.openMenuHandler.bind(this)}></img>
            <h3 className="recipe-box-text">{recipe.name}</h3>
          </div>

          <ContextMenu ref={name} contextID={name} items={contextMenuItems}></ContextMenu>
        </div>
      );
    }
}

RecipeBox.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    isStarred: PropTypes.bool.isRequired
  }).isRequired,
  onStarClick: React.PropTypes.func.isRequired
};

export default RecipeBox;
