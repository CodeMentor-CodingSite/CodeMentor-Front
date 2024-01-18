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
import capitalizeFirstChar from '@/utils/capitalizeFirstChar';

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
    <div className="flex items-center gap-3">
      <div className="flex w-full gap-2">
        <Select items={studyPlanItems} label="Lists">
          {({ label }) => (
            <SelectItem key={label} value={label}>
              {capitalizeFirstChar(label)}
            </SelectItem>
          )}
        </Select>
        <Select items={difficultyItems} label="Difficulty">
          {({ label }) => (
            <SelectItem key={label} value={label}>
              {capitalizeFirstChar(label)}
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
              {capitalizeFirstChar(label)}
            </SelectItem>
          )}
        </Select>
        <Autocomplete defaultItems={TagsItems} label="Tags">
          {({ label }) => (
            <AutocompleteItem key={label} value={label}>
              {capitalizeFirstChar(label)}
            </AutocompleteItem>
          )}
        </Autocomplete>
        <Input
          type="text"
          placeholder="Search questions"
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
