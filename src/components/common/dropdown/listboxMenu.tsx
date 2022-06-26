import { Listbox, Transition } from '@headlessui/react';
import type { FC } from 'react';
import { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { CheckIcon } from 'assets/check';
import { DropdownIcon } from 'assets/dropdown';
import { messages } from 'components/pages/gallery-list/messages';
import { setArtworkLimitAction } from 'redux/actions/setArtworkLimit';
import type { AppDispatch, RootState } from 'redux/store';

const perPageOptions = [
  { value: '15' },
  { value: '25' },
  { value: '50' },
  { value: '75' },
  { value: '100' },
];

const activeClass = ({ active }: { active: boolean }) =>
  `relative cursor-pointer py-2 flex flex-row justify-center items-center  ${
    active ? 'bg-secondary bg-opacity-50 text-white' : 'text-black'
  }`;

export const ListboxMenu: FC = ({}) => {
  const dispatch = useDispatch<AppDispatch>();
  const artworkLimitData = useSelector((state: RootState) => state.artworkLimit);

  const [selectedOption, setSelectedOption] = useState(
    artworkLimitData !== '' ? artworkLimitData : perPageOptions[1].value,
  );

  useEffect(() => {
    void dispatch(setArtworkLimitAction(selectedOption));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOption]);

  return (
    <div className="h-10 text-white flex flex-col justify-center items-end">
      <Listbox value={selectedOption} onChange={setSelectedOption}>
        <div className="relative mt-1 z-20 min-w-[12em] w-fit text-black">
          <Listbox.Button className="relative w-full cursor-default flex flex-row justify-center items-center rounded-lg bg-white py-2 pl-3 pr-1 text-left shadow-md focus:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary sm:text-sm">
            {selectedOption + messages.per_page.defaultMessage}
            <DropdownIcon aria-hidden="true" className="mx-2 h-3 w-3" />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5  sm:text-sm">
              {perPageOptions.map(data => {
                return (
                  <Listbox.Option
                    key={data.value}
                    className={activeClass}
                    // disabled={data.unavailable}
                    value={data.value}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ml-5 mr-2 ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {data.value + messages.per_page.defaultMessage}
                        </span>
                        {selected ? (
                          <span className="absolute left-0 flex items-center ml-1">
                            <CheckIcon aria-hidden="true" className="h-7 w-7" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                );
              })}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
