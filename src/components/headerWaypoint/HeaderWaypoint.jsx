import { Fragment } from 'react';

import LocationIcon from './icons/LocationIcon.jsx';
import TrashIcon from './icons/TrashIcon.jsx';
import TruckIcon from './icons/TruckIcon.jsx';
import PermitIcon from './icons/PermitIcon.jsx';
import CalendarIcon from './icons/CalendarIcon.jsx';
import PaymentIcon from './icons/PaymentIcon.jsx';

/** Some initial data for our check points */
/** We can move this inside component (keep as state) and use for further development process */
const buttonsCtx = [
  {
    icon: <LocationIcon styles={'stroke-active'} />,
    buttonLabel: 'Postcode',
    disabled: false,
    isPassed: true,
  },
  {
    icon: <TrashIcon styles={'stroke-active'} />,
    buttonLabel: 'Waste Type',
    disabled: false,
    isPassed: true,
  },
  {
    icon: <TruckIcon styles={'stroke-active'} />,
    buttonLabel: 'Select Skip',
    disabled: false,
    isPassed: false,
  },
  {
    icon: <PermitIcon styles={''} />,
    buttonLabel: 'Permit Check',
    disabled: true,
    isPassed: false,
  },
  {
    icon: <CalendarIcon styles={''} />,
    buttonLabel: 'Choose Date',
    disabled: true,
    isPassed: false,
  },
  {
    icon: <PaymentIcon styles={''} />,
    buttonLabel: 'Payment',
    disabled: true,
    isPassed: false,
  },
];

const HeaderWaypoint = () => {
  return (
    <div className="w-full overflow-x-auto mb-8 pb-[15px] ">
      <div className="flex items-center space-x-4 min-w-max px-4">
        {buttonsCtx.map((i, index) => (
          /** Binding keys is essential in React because it's the only way to identify and update the corresponding fiber node */
          <Fragment key={i.buttonLabel}>
            <button
              key={i.buttonLabel}
              disabled={i.disabled}
              className={`flex items-center whitespace-nowrap transition-colors
               ${
                 i.isPassed || buttonsCtx[index - 1].isPassed
                   ? 'text-[#0037C1] cursor-pointer hover:text-[#0037C1]'
                   : 'text-white/60 cursor-not-allowed opacity-50'
               }`}
            >
              {i.icon}
              <span className="ml-2 text-white">{i.buttonLabel}</span>
            </button>
            {index < buttonsCtx.length - 1 ? (
              <div
                key={index}
                className={`w-16 h-px ${
                  i.isPassed ? 'bg-[#0037C1]' : 'bg-[#2A2A2A]'
                }`}
              ></div>
            ) : (
              <></>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default HeaderWaypoint;
