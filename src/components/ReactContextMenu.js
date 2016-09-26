//adapted from https://github.com/amurp/react-context-menu
import React from 'react';

export default class ContextMenu extends React.Component {

    render () {
      const shouldDisplay = this.state && this.state.visible;
      const visibilityClass = (shouldDisplay)? 'visible context-menu' : 'invisible context-menu';

      return (
        <div className={visibilityClass} onMouseLeave={this.closeContextMenu.bind(this)}>

          {this.props.items.map((item) => {
            const clickHandler = () => {
              this.closeContextMenu();
              item.function(this.state.recipeId);
            };

            const {label, icon} = item;

            return (
              <span onClick={clickHandler} key={label}>
                <img className="icon" src={icon} role="presentation" />
                {label}
              </span>
            );
          })}
        </div>
      );
    }

    openContextMenu(clickedRecipeId) {
      this.setState({recipeId: clickedRecipeId, visible: true});
    }

    closeContextMenu() {
      this.setState({visible: false});
    }
}
