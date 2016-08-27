import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Logo from '../components/Logo';
import Recipes from '../components/Recipes';

class App extends Component {
  render() {
    const {actions} = this.props;
    return (
      <div>
        <Logo/>
        <Recipes/>
      </div>
    );
  }
}
/* HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
  actions: PropTypes.object.isRequired
};
function mapStateToProps(state) {
  const props = {};
  return props;
}
function mapDispatchToProps(dispatch) {
  const actions = {};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
