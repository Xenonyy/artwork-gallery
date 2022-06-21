import clsx from 'clsx';
import type { Dispatch, FC, SetStateAction } from 'react';
import { useMemo, useCallback, memo } from 'react';

import { PaginationButton } from 'components/common/pagination/paginationButton';
import { PaginationText } from 'components/common/pagination/paginationText';

interface PaginationTypes {
  resultFrom: number;
  resultTo: number;
  resultTotal: number;
  pageTotal: number;
  pageSet: Dispatch<SetStateAction<unknown>>;
  pageCurrent: number;
}

const PaginationComponent: FC<PaginationTypes> = ({
  resultFrom,
  resultTo,
  resultTotal,
  pageTotal,
  pageSet,
  pageCurrent,
}) => {
  const smoothScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handlePrevPage = useCallback(() => {
    smoothScroll();
    pageSet(pageCurrent - 1);
  }, [pageCurrent, pageSet]);

  const handleNextPage = useCallback(() => {
    smoothScroll();
    pageSet(pageCurrent + 1);
  }, [pageSet, pageCurrent]);

  const handleClickPage = useCallback(
    (e: number) => () => {
      smoothScroll();
      pageSet(e);
    },
    [pageSet],
  );

  const getRenderButtonsData = useMemo(() => {
    if (pageCurrent > 2) {
      return [pageCurrent - 2, pageCurrent - 1, pageCurrent, pageCurrent + 1, pageCurrent + 2];
    }

    return [1, 2, 3, 4, 5];
  }, [pageCurrent]);

  const renderButtons = useMemo(() => {
    return getRenderButtonsData.map(e => {
      return (
        <button
          key={e.toString()}
          className={clsx(
            'inline-flex relative items-center py-2 px-4 mx-4 text-sm bg-primary/40 hover:bg-primary/30 border border-primary',
            { 'bg-primary/70 text-white': pageCurrent === e },
          )}
          type="button"
          onClick={handleClickPage(e)}
        >
          {e}
        </button>
      );
    });
    // return [...Array(pageTotal).keys()].map((e: number) => {
    //   return (
    //     <button
    //       key={e.toString()}
    //       className={clsx(
    //         'inline-flex relative items-center py-2 px-4 mx-4 text-sm bg-secondary/10 hover:bg-secondary/40 border border-secondary',
    //         { 'bg-opacity-80 text-white': pageCurrent === e + 1 },
    //       )}
    //       type="button"
    //       onClick={handleClickPage(e)}
    //     >
    //       {e + 1}
    //     </button>
    //   );
    // });
  }, [getRenderButtonsData, pageCurrent, handleClickPage]);

  return (
    <div className="flex justify-between flex-row flex-wrap items-center py-6 pl-4 w-1/2 bg-white rounded-xl border border-secondary sm:pl-6">
      <PaginationText resultFrom={resultFrom} resultTo={resultTo} resultTotal={resultTotal} />
      <nav className="inline-flex relative space-x-0 w-auto px-6">
        <PaginationButton start handleClick={handlePrevPage} />
        {renderButtons}
        <PaginationButton handleClick={handleNextPage} />
      </nav>
    </div>
  );
};

export const Pagination = memo(PaginationComponent);
