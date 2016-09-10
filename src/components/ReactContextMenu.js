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

    componentDidMount () {
        let context = document.getElementById(this.props.contextID);
        context.addEventListener('click', () => {this.openContextMenu(event)});

        let menu = document.getElementById(this.elementUniqueId);
        menu.addEventListener('mouseleave', () => {this.closeContextMenu()});

    }

    render () {
        return (
            <div id={this.elementUniqueId} className={'context-menu'}>
                {this.props.items.map((item) => {
                        let clickHandler = () => {
                            this.closeContextMenu();
                            item.function(this.state.target);
                        }
                        let label = item.label;
                        let icon = item.icon;
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

    openContextMenu = (event) => {
        event.preventDefault();
        this.setState({target: event.target});

        let xOffset = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
        let yOffset = Math.max(document.documentElement.scrollTop, document.body.scrollTop);

        let menu = document.getElementById(this.elementUniqueId);
        console.log("Opening!", menu);
        menu.style.cssText =
            //'left: ' + (event.clientX + xOffset) + 'px;' +
            //'top: ' + (event.clientY + yOffset) + 'px;' +
            'visibility: visible;';
    }

    closeContextMenu = () => {
        let menu = document.getElementById(this.elementUniqueId);
        menu.style.cssText = 'visibility: hidden;';

    }
}