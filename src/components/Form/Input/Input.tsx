import React, { FC, useState } from 'react';

interface InputProps {
  countTests: number;
}

const Input: FC<InputProps> = ({ countTests }) => {
  const [searchString, setSearchString] = useState<string>('');
  return (
    <label className="input-label" htmlFor="input">
      <img src="./img/Search.svg" alt="search" className="img-search" />
      <input
        name="searchString"
        className="input"
        placeholder="What test are you looking for?"
        type="search"
        value={searchString}
        onChange={(event) => setSearchString(event.target.value)}
      />
      <span className="test-counter">{`${countTests} tests`}</span>
    </label>
  );
};

export default Input;
