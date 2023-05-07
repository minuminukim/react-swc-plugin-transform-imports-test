/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import DirectionsRun from '@mui/icons-material/DirectionsRun';
import flatten from 'lodash/flatten';

const App = () => {
  const [showList, setShowList] = React.useState(false);
  return (
    <div>
      <h1>React Webpack SWC</h1>
      <DirectionsRun onClick={() => setShowList(true)} />
      {showList && (
        <ul>
          {flatten([[1], [2], 3]).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
