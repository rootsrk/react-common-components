import React from 'react';

import { ExampleComponent, ExampleComponent1 } from 'react-common-components';
import 'react-common-components/dist/index.css';

const App = () => {
  return (
    <div>
      <ExampleComponent text="Create React Library Example 😄" />
      <ExampleComponent1 text="Create React Library Example 1 😄" />
    </div>
  );
};

export default App;
