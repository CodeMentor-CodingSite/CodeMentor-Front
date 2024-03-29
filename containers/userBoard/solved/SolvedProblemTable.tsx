import React from 'react';

const solvedList = [
  {
    id: '1',
    title: 'Median of Two Sorted Arrays',
    datePassed: '2',
  },
  {
    id: '2',
    title: 'Median of Two Sorted Arrays',
    datePassed: '3',
  },
  {
    id: '3',
    title: 'Median of Two Sorted Arrays',
    datePassed: '4',
  },
  {
    id: '4',
    title: 'Median of Two Sorted Arrays',
    datePassed: '5',
  },
  {
    id: '5',
    title: 'Median of Two Sorted Arrays',
    datePassed: '6',
  },
  {
    id: '6',
    title: 'Median of Two Sorted Arrays',
    datePassed: '7',
  },
  {
    id: '7',
    title: 'Median of Two Sorted Arrays',
    datePassed: '8',
  },
  {
    id: '8',
    title: 'Median of Two Sorted Arrays',
    datePassed: '9',
  },
  {
    id: '9',
    title: 'Median of Two Sorted Arrays',
    datePassed: '10',
  },
  {
    id: '10',
    title: 'Median of Two Sorted Arrays',
    datePassed: '11',
  },
];

function SolvedProblemTable() {
  return (
    <div className="px-4 flow-root grow">
      <h3 className="pl-2 font-medium dark:text-gray-300/80">Easy</h3>
      <div className="-mx-6 max-h-[200px] overflow-y-auto">
        <div className="inline-block min-w-full px-6 py-2 align-middle ">
          <table className="min-w-full">
            <thead className="sticky top-0">
              <tr className="bg-[#f1f1f1] dark:bg-backgroundDark">
                <th
                  scope="col"
                  className="py-2 pl-4 pr-3 text-sm font-semibold text-left"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="relative py-2 pl-3 pr-4 text-sm font-semibold"
                >
                  Submitted Time
                </th>
              </tr>
            </thead>

            <tbody className="bg-white">
              {solvedList.map((v) => (
                <tr
                  key={v.id}
                  className="even:bg-[#F7F7F8] dark:even:bg-backgroundDark odd:bg-white
                                                dark:odd:bg-componentDark hover:bg-gray-300/60 dark:hover:bg-backgroundDark/85 cursor-pointer"
                >
                  <td className="whitespace-nowrap py-2.5 px-3 text-sm font-medium dark:text-gray-300">
                    {v.title}
                  </td>
                  <td
                    className="flex items-center justify-center space-x-1 whitespace-nowrap py-2.5 px-3
                                                        text-right text-sm font-medium text-[#949297]"
                  >
                    <span>{v.datePassed}</span>
                    <span className="">day ago</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SolvedProblemTable;
