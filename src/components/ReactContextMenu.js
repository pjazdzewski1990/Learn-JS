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

    componentDidMount() {
       const context = document.getElementById(this.props.contextID);
       context.addEventListener('click', () => {this.openContextMenu(event)});

       const menu = document.getElementById(this.elementUniqueId);
        menu.addEventListener('mouseleave', () => {this.closeContextMenu()});
    }

    render () {
      const visibilityClass = (this.state.visible)? 'visible context-menu' : 'invisible context-menu';
      return (
        <div id={this.elementUniqueId} className={visibilityClass} >

          {this.props.items.map((item) => {
            const clickHandler = () => {
              this.closeContextMenu();
              item.function(this.state.target);
            }

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
        event.preventDefault();
        this.setState({target: event.target, visible: true});
    }

    closeContextMenu() {
      this.setState({visible: false});
    }
}
