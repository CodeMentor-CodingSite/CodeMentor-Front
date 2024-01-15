'use client';

import {
  Select,
  SelectItem,
  Autocomplete,
  AutocompleteItem,
  Button,
  Input,
} from '@nextui-org/react';
import { studyPlanItems } from '@/app/page';
import { IconSearch, IconAttempted, IconSolved, IconTodo } from '@/public/svgs';

const difficultyItems = [
  {
    label: 'easy',
  },
  {
    label: 'medium',
  },
  {
    label: 'hard',
  },
];

const statusItems = [
  {
    label: 'todo',
  },
  {
    label: 'solved',
  },
  {
    label: 'attempted',
  },
];

const TagsItems = [
  {
    label: 'array',
  },
  {
    label: 'string',
  },
  {
    label: 'hash table',
  },
  {
    label: 'dynamic programming',
  },
  {
    label: 'math',
  },
  {
    label: 'sorting',
  },
  {
    label: 'greedy',
  },
  {
    label: 'depth first search',
  },
  {
    label: 'binary search',
  },
  {
    label: 'database',
  },
  {
    label: 'tree',
  },
  {
    label: 'matrix',
  },
];

export default function ProblemCategory() {
  return (
    <div className="flex gap-3">
      <div className="flex w-full gap-2">
        <Select items={studyPlanItems} label="Lists">
          {({ label }) => (
            <SelectItem key={label} value={label}>
              {label}
            </SelectItem>
          )}
        </Select>
        <Select items={difficultyItems} label="Difficulty">
          {({ label }) => (
            <SelectItem key={label} value={label}>
              {label}
            </SelectItem>
          )}
        </Select>
        <Select items={statusItems} label="Status">
          {({ label }) => (
            <SelectItem
              key={label}
              value={label}
              startContent={
                // eslint-disable-next-line no-nested-ternary
                label === 'solved' ? (
                  <IconSolved />
                ) : label === 'attempted' ? (
                  <IconAttempted />
                ) : (
                  <IconTodo />
                )
              }
            >
              {label}
            </SelectItem>
          )}
        </Select>
        <Autocomplete defaultItems={TagsItems} label="Tags">
          {({ label }) => (
            <AutocompleteItem key={label} value={label}>
              {label}
            </AutocompleteItem>
          )}
        </Autocomplete>
        <Input
          type="text"
          placeholder="Search question"
          startContent={<IconSearch />}
          style={{ width: '280px', fontSize: '16px' }}
        />
      </div>

      <Button
        color="success"
        radius="full"
        size="lg"
        className="text-xl font-semibold text-white"
      >
        Random Pick
      </Button>
    </div>
  );
}
