import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import HeaderWaypoint from './components/headerWaypoint/HeaderWaypoint.jsx';
import SkipSizeContainer from './components/skipSizeContainer/SkipSizeContainer.jsx';
import SelectedSkipContainer from './components/selectedSkipContainer/SelectedSkipContainer.jsx';
import { getSkips } from '~/services/actions/skips.js';
import './styles/App.css';
import './styles/font.css';

const App = () => {
  const { get_skips_loading, selectedSkip } = useSelector(
    (state) => state.skip,
  );
  const dispatch = useDispatch();

  /** Let's call API */
  useEffect(() => {
    dispatch(getSkips('NR32&area=Lowestoft'));
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <HeaderWaypoint />
        {/** Show loading when data is not ready */}
        {get_skips_loading ? (
          <div className="text-center">Loading ...</div>
        ) : (
          <div className="max-w-7xl mx-auto px-4 pb-32">
            <h2 className="text-2xl font-bold text-center mb-4">
              Choose Your Skip Size
            </h2>
            <p className="text-gray-400 text-center mb-8">
              Select the skip size that best suits your needs
            </p>
            <SkipSizeContainer />
          </div>
        )}
        {selectedSkip ? <SelectedSkipContainer /> : <></>}
      </main>
    </div>
  );
};

export default App;
