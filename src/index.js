import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {CardTableWrapper} from './card-table-wrapper.js';

function App(props) {
  return ( 
    <div className="App">
      <CardTableWrapper 
        url="http://localhost:3000/cards/"
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();