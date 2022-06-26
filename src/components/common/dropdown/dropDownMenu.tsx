export {};
// import { Menu, Transition } from '@headlessui/react';
// import type { FC, MouseEvent } from 'react';
// import { useEffect, useState, useCallback, Fragment } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// import { DropdownIcon } from 'assets/dropdown';
// import { setArtworkLimitAction } from 'redux/actions/setArtworkLimit';
// import type { AppDispatch, RootState } from 'redux/store';

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(' ');
// }

// interface DropDownMenuTypes {
//   translation: string;
//   options: string;
// }

// export const DropDownMenu: FC<DropDownMenuTypes> = ({ translation, options }) => {
//   const dispatch = useDispatch<AppDispatch>();
//   const artworkLimitData = useSelector((state: RootState) => state.artworkLimit);

//   const [currentOption, setCurrentOption] = useState<string>(() => {
//     return artworkLimitData !== '' ? artworkLimitData : '25';
//   });

//   useEffect(() => {
//     console.log(artworkLimitData);
//   }, [artworkLimitData]);

//   const handlePerPageClick = useCallback((e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
//     setCurrentOption(e.currentTarget.value);

//     return dispatch(setArtworkLimitAction(e.currentTarget.value));
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <Menu as="div" className="relative inline-block text-left text-black z-10">
//       <div>
//         <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gra:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
//           {currentOption + options}
//           <DropdownIcon aria-hidden="true" className="-mr-1 ml-2 h-5 w-5" />
//         </Menu.Button>
//       </div>

//       <Transition
//         as={Fragment}
//         enter="transition ease-out duration-100"
//         enterFrom="transform opacity-0 scale-95"
//         enterTo="transform opacity-100 scale-100"
//         leave="transition ease-in duration-75"
//         leaveFrom="transform opacity-100 scale-100"
//         leaveTo="transform opacity-0 scale-95"
//       >
//         <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
//           <div className="py-1">
//             <Menu.Item>
//               {({ active }) => (
//                 <button
//                   className={classNames(
//                     active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                     'block px-4 py-2 text-sm',
//                   )}
//                   type="button"
//                   value={'15'}
//                   onClick={handlePerPageClick}
//                 >
//                   {'15' + options}
//                 </button>
//               )}
//             </Menu.Item>
//             <Menu.Item>
//               {({ active }) => (
//                 <button
//                   className={classNames(
//                     active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                     'block px-4 py-2 text-sm',
//                   )}
//                   type="button"
//                   value={'25'}
//                   onClick={handlePerPageClick}
//                 >
//                   {'25' + options}
//                 </button>
//               )}
//             </Menu.Item>
//             <Menu.Item>
//               {({ active }) => (
//                 <button
//                   className={classNames(
//                     active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                     'block px-4 py-2 text-sm',
//                   )}
//                   type="button"
//                   value={'50'}
//                   onClick={handlePerPageClick}
//                 >
//                   {'50' + options}
//                 </button>
//               )}
//             </Menu.Item>
//             <Menu.Item>
//               {({ active }) => (
//                 <button
//                   className={classNames(
//                     active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                     'block px-4 py-2 text-sm',
//                   )}
//                   type="button"
//                   value={'75'}
//                   onClick={handlePerPageClick}
//                 >
//                   {'75' + options}
//                 </button>
//               )}
//             </Menu.Item>
//             <form action="#" method="POST">
//               <Menu.Item>
//                 {({ active }) => (
//                   <button
//                     className={classNames(
//                       active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
//                       'block w-full text-left px-4 py-2 text-sm',
//                     )}
//                     type="submit"
//                     value={'100'}
//                     onClick={handlePerPageClick}
//                   >
//                     {'100' + options}
//                   </button>
//                 )}
//               </Menu.Item>
//             </form>
//           </div>
//         </Menu.Items>
//       </Transition>
//     </Menu>
//   );
// };
