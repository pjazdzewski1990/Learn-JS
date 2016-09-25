//adapted from https://github.com/amurp/react-context-menu
import React from 'react';

export default class ContextMenu extends React.Component {
    constructor(props) {
        super(props);
        this.elementUniqueId = 'context-menu-'+props.contextID;
        this.state = {
            target: ''
        }
    }

    render () {
      const visibilityClass = (this.state.visible)? 'visible context-menu' : 'invisible context-menu';
      return (
        <div id={this.elementUniqueId} className={visibilityClass} onMouseLeave={this.closeContextMenu.bind(this)}>

          {this.props.items.map((item) => {
            const clickHandler = () => {
              this.closeContextMenu();
              item.function(this.state.recipeId);
            };

            const label = item.label;
            const icon = item.icon;

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

    openContextMenu(event) {
      this.setState({target: event.target, recipeId: event.recipeId, visible: true});
    }

    closeContextMenu() {
      this.setState({visible: false});
    }
}
