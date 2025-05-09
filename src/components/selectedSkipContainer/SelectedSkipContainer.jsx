import { useDispatch, useSelector } from 'react-redux';
import RightArrow from '../skipSizeContainer/icons/RightArrow.jsx';
import { setSelectedSkip } from '~/services/actions/skips';
import useMediaQuery from '~/hooks/useMediaQuery';

const SelectedSkipContainer = () => {
  const dispatch = useDispatch();
  const { selectedSkip } = useSelector((state) => state.skip);

  /** Lat's check screen size and configure it for UI */
  const isMobile = useMediaQuery('(max-width: 1023px)');

  /** We should display the selected skip container only if a skip is selected. */
  if (!selectedSkip) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1C1C1C] border-t border-[#2A2A2A] p-4 animate-slideUp z-50">
      <div className="max-w-7xl mx-auto">
        <div
          className={`flex ${
            isMobile
              ? 'flex-col space-y-4'
              : 'flex-row justify-between items-center'
          }`}
        >
          {/** Info Section */}
          <div
            className={`flex ${
              isMobile ? 'flex-col space-y-1' : 'flex-row items-center gap-6'
            }`}
          >
            <p
              className={`${
                isMobile ? 'text-base font-medium' : 'text-sm text-gray-400'
              }`}
            >
              {selectedSkip.size} Yard Skip
            </p>
            <div>
              <span
                className={`${
                  isMobile ? 'text-xl' : 'text-2xl'
                } font-bold text-[#0037C1]`}
              >
                £{selectedSkip.price_before_vat}
              </span>
              <span className="text-sm text-gray-400 ml-2">
                {selectedSkip.hire_period_days} {isMobile ? 'days' : 'day hire'}
              </span>
            </div>
          </div>

          {/** Actions Section */}
          <div
            className={`${
              isMobile ? 'grid grid-cols-2 gap-3' : 'flex gap-4'
            } w-full lg:w-auto`}
          >
            <button
              className={`bg-[#2A2A2A] py-[0.5rem] ${
                isMobile ? '' : 'px-[1rem]'
              } rounded hover:bg-[#3A3A3A] hover:border-[#0037C1]`}
              onClick={() => dispatch(setSelectedSkip(null))}
            >
              Back
            </button>
            <button
              onClick={() => console.log('Do nothing.')}
              className={`flex items-center justify-center py-[0.5rem] ${
                isMobile ? '' : 'px-[1rem]'
              } rounded gap-2 bg-[#0037C1] hover:bg-[#002da1]`}
            >
              Continue
              <RightArrow />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedSkipContainer;
