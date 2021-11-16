import React, { FC, FormEvent, useCallback } from 'react';
import './Form.scss';
import Input from './Input';

interface FormProps {
  countTests: number;
  searchItem: (itemName: string) => void;
}

const Form: FC<FormProps> = ({ countTests, searchItem }) => {
  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      searchItem((event.target as HTMLFormElement).searchString.value);
    },
    [searchItem],
  );

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input countTests={countTests} />
    </form>
  );
};

export default React.memo(Form);
