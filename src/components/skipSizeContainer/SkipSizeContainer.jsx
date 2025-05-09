import { useDispatch, useSelector } from 'react-redux';

import { setSelectedSkip } from '~/services/actions/skips';
import WarningIcon from './icons/WarningIcon.jsx';
import RightArrow from './icons/RightArrow.jsx';

const SkipSizeContainer = () => {
  const dispatch = useDispatch();
  const { get_skips, selectedSkip } = useSelector((state) => state.skip);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {get_skips.map((i) => (
        <div
          key={i.id}
          className="group relative rounded-lg border-2 p-4 md:p-6 transition-allborder-[#2A2A2A] hover:border-[#0037C1]/50 bg-[#1C1C1C] text-white cursor-pointer"
        >
          <div className="relative">
            <img
              /** Let's keep all secrets in .env */
              src={`${import.meta.env.VITE_IMG_BUCKET_URL}${
                i.size
              }-yarder-skip.jpg`}
              /** SEO friendly to user alt-s, also src-set, width ... (but let's do it simple for now) */
              alt={`${i.size} Yard Skip`}
              className="w-full h-36 md:h-48 object-cover rounded-md mb-4"
            />
            <div className="absolute top-3 right-2 z-20 bg-[#0037C1] text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
              {i.size} Yards
            </div>
            {!i.allowed_on_road ? (
              <div className="absolute bottom-3 left-2 z-20 space-y-2">
                <div className="bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-2">
                  <WarningIcon />
                  <span className="text-xs font-medium text-yellow-500">
                    Not Allowed On The Road
                  </span>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-2 text-white">
            {i.size} Yard Skip
          </h3>
          <p className="text-sm text-gray-400 mb-4 md:mb-6">
            {i.hire_period_days} day hire period
          </p>
          <div className="flex justify-between items-center mb-4">
            <div>
              <span className="text-xl md:text-2xl font-bold text-[#0037C1]">
                £{i.price_before_vat}
              </span>
            </div>
          </div>
          <button
            className={`w-full py-2.5 md:py-3 px-4 rounded-md transition-all flex items-center justify-center space-x-2 text-white
              ${
                selectedSkip && i.id === selectedSkip.id
                  ? 'bg-[#0037C1] hover:bg-[#002da1]'
                  : 'bg-[#2A2A2A]  hover:bg-[#3A3A3A] hover:border-[#0037C1]'
              }`}
            /** Disable redundant clicks */
            disabled={selectedSkip && i.id === selectedSkip.id}
            /** Let's keep data inside global state to avoid passing it through all components */
            onClick={() => dispatch(setSelectedSkip(i))}
          >
            {selectedSkip && i.id === selectedSkip.id ? (
              <span>Selected</span>
            ) : (
              <>
                <span>Select This Skip</span>
                <RightArrow />
              </>
            )}
          </button>
        </div>
      ))}
    </div>
  );
};

export default SkipSizeContainer;
