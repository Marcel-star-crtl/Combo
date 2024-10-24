import React from 'react';

const Image = ({ imageUrl }) => {
  return (
    <div className="section__padding-img">
        <img src={imageUrl} alt="Hero Background"  />
    </div>
  );
};

export default Image;