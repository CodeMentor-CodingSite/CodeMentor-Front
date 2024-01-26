'use client';

import { useState, useCallback } from 'react';
import { Button, Divider, Tabs, Tab } from '@nextui-org/react';
import {
  IconTestCase,
  IconTestResult,
  IconAscendingOrder,
} from '@/public/svgs';
import CaseComponent from './CaseComponent';

const caseItems = [
  {
    key: '1',
    title: 'Case 1',
    values: {
      inputs: ['nums = [2, 7, 11, 15]', 'target = 9'],
      output: '[0, 1]',
      expected: '[0, 1]',
    },
  },
  {
    key: '2',
    title: 'Case 2',
    values: {
      inputs: ['nums = [3, 2, 4]', 'target = 6'],
      output: '[2, 3]',
      expected: '[1, 2]',
    },
  },
];

export default function ProblemTest() {
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState('1');

  const onClickToggle = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

  return (
    <section
      className={`${toggle ? 'h-[calc(100%-52px)]' : 'h-9'} bg-component dark:bg-componentDark w-[636px] rounded-xl border dark:border-borderDark overflow-hidden`}
    >
      <h1
        className={`h-9 flex justify-between items-center pl-3 dark:bg-[#333333] bg-[#FAFAFA] ${toggle ? 'border-b dark:border-borderDark' : ''}`}
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <IconTestCase />
            <p>Test Case</p>
          </div>

          <Divider className="w-[1px] h-6" />

          <div className="flex items-center gap-2">
            <IconTestResult />
            <p>Test Result</p>
          </div>
        </div>

        <Button isIconOnly className="bg-transparent" onClick={onClickToggle}>
          <IconAscendingOrder />
        </Button>
      </h1>

      <div className="p-6">
        <Tabs
          key="1"
          variant="light"
          aria-label="Tabs variants"
          selectedKey={selected}
          onSelectionChange={setSelected}
        >
          {caseItems.map(({ key, title, values }) => (
            <Tab key={key} title={title}>
              {values.inputs.map((input) => (
                <CaseComponent
                  left={input.split(' = ')[0]}
                  right={input.split(' = ')[1]}
                />
              ))}
            </Tab>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
