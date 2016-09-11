import React, { Component } from 'react';
import ContextMenu from './ReactContextMenu';
import MoreIcon from '../images/moreIcon.png';
import StarIcon from '../images/starIcon.png';

class RecipeBox extends Component {
    componentWillMount() {
      this.setState({isHovering: false});
    }  
    starRecipeHandler(event) {
      console.log('Starring ' + this.props.recipeName, event);
    }
    hoverHandler(){
      this.setState({isHovering: !this.state.isHovering})
    }
    render() {
      const name = 'recipe-box-' + this.props.recipeId;
      const hoverClass = (this.state.isHovering)? 'recipeBox recipe-hover' : 'recipeBox recipe-no-hover';
      
      return (
        <div className={hoverClass} 
          onMouseOver={this.hoverHandler.bind(this)} 
          onMouseOut={this.hoverHandler.bind(this)}>
          
				  <img src={this.props.recipeImage}></img>
          
          <div className="recipeDesc">
            <img id={name} className="more-icon" src={MoreIcon}></img>
            <h3 className="recipe-box-text">{this.props.recipeName}</h3>
          </div>

          <ContextMenu contextID={name} items={[{'icon': StarIcon, 'label': 'Add to favourites', 'function': this.starRecipeHandler.bind(this)}]} />
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
