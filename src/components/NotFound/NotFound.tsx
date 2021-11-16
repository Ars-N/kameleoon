import React, { FC } from 'react';

interface NotFoundProps {
  onClick: () => void;
}

const NotFound: FC<NotFoundProps> = ({ onClick }) => {
  return (
    <div>
      <span>Your search did not match any results.</span>
      <button type="button" onClick={onClick} className="btn btn-green">
        Reset
      </button>
    </div>
  );
};

export default NotFound;
