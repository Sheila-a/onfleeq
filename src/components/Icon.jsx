/* eslint-disable react/prop-types */
import { Icon } from '@iconify/react';
const Icons = ({ icon, className, width, fill, rotate, hFlip, vFlip }) => {
  return (
    <>
      <Icon
        width={width}
        rotate={rotate}
        flip={hFlip}
        fill={fill}
        icon={icon}
        className={className}
        vFlip={vFlip}
      />
    </>
  );
};

export default Icons;
