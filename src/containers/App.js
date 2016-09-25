import React from 'react';
import FilteredRecipesContainer from './FilteredRecipesContainer';

class App extends React.Component {
    render() {
        return (
            <div>
                     <div id = "mainImg">
                            <img src = { require('../images/banner.jpg') }/>
                     </div>
                     <FilteredRecipesContainer />
              </div>
        )
    }
}

export default App;
