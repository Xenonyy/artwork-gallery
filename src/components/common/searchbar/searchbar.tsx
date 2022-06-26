import type { ChangeEvent, FC } from 'react';
import { useCallback, useRef, useState, memo } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';

import { setSearchDataAction } from 'redux/actions/setSearchData';
import type { AppDispatch } from 'redux/store';

interface SearchBarTypes {
  onClick(): void;
}
const SearchBarComponent: FC<SearchBarTypes> = ({ onClick }) => {
  const intl = useIntl();

  const dispatch = useDispatch<AppDispatch>();

  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputValueChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  const handleClick = useCallback(() => {
    void dispatch(setSearchDataAction(String(inputValue)));
    onClick();
  }, [dispatch, inputValue, onClick]);

  return (
    <div className="w-auto rounded-md bg-primary p-2 flex justify-between  items-center">
      <input
        ref={inputRef}
        className="rounded-md px-2 placeholder:text-sm mr-2 h-8"
        placeholder={intl.formatMessage({
          id: 'common:searchbar.placeholder',
          defaultMessage: 'Type here to search...',
        })}
        type={'search'}
        value={inputValue}
        onChange={handleInputValueChange}
      />
      <button
        className={'w-auto h-auto py-1 px-3 text-white rounded-md bg-secondary'}
        type={'button'}
        onClick={handleClick}
      >
        {intl.formatMessage({ id: 'common:searchbar.button', defaultMessage: 'Go' })}
      </button>
    </div>
  );
};

export const SearchBar = memo(SearchBarComponent);
