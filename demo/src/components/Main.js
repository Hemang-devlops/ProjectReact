// import React, { useState } from 'react'
// import SideBar from './SideBar/SideBar'
// import Concepts from './SideBar/Concepts';
// import Resources from './SideBar/Resources';
// import Scenarios from './SideBar/Scenarios';
// // import VideoPlayer from './VideoCard'

// function Main() {
//   const [selectedTab, setSelectedTab] = useState(null);
//   const tabComponents = {
//     'Concepts': <Concepts />,
//     'Resources': <Resources />,
//     'Scenarios': <Scenarios />
//   };
//   function handleTab(data) {
//     setSelectedTab(data);
//   }

//   // const SelectedTabComponent = tabComponents[selectedTab];
//   return (
//     <div className='grid grid-flow-col'>
//       <div className='col-span-4'>
//         <SideBar handleTab={handleTab} />
//         {selectedTab}
//         <Concepts />
//       </div>
//     </div>

//   )
// }

// export default Main

import React, { useState } from 'react';
import SideBar from './SideBar/SideBar';
import Concepts from './SideBar/Concepts';
import Resources from './SideBar/Resources'; // Import your other components here
import Scenarios from './SideBar/Scenarios';

function Main() {
  const [selectedTab, setSelectedTab] = useState('Concepts');

  // Define your tabComponents object with actual components
  const tabComponents = {
    'Concepts': <Concepts />,
    'Resources': <Resources />,
    'Scenarios': <Scenarios />,
  };

  function handleTab(data) {
    setSelectedTab(data);
  }

  // Use tabComponents[selectedTab] to render the selected component
  return (
    <div className='grid grid-flow-col'>
      <div className='col-span-4'>
        <SideBar handleTab={handleTab} />
      </div>
      <div className='col-span-4'>
        {selectedTab && tabComponents[selectedTab]}
      </div>
    </div>
  );
}

export default Main;
