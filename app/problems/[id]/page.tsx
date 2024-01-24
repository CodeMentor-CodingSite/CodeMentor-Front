import {
  ProblemTemplate,
  ProblemDescription,
  ProblemSolving,
} from '@/containers/problems';

const problemDetailItems = [
  {
    problemNum: 1,
    title: 'Two Sum',
    difficulty: 'easy',
    tags: ['array', 'hash table'],
    description:
      'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\nYou can return the answer in any order.',
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0, 1]',
        explanation:
          'Because nums[0] + nums[1] == 9, we return [0, 1]. Because nums[0] + nums[1] == 9, we return [0, 1]. Because nums[0] + nums[1] == 9, we return [0, 1]. Because nums[0] + nums[1] == 9, we return [0, 1]. Because nums[0] + nums[1] == 9, we return [0, 1].',
      },
      {
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]',
      },
    ],
    constraints: [
      '2 <= nums.length <= 104',
      '-109 <= nums[i] <= 109',
      '-109 <= target <= 109',
      'Only one valid answer exists.',
    ],
  },
  {
    problemNum: 2,
    title: 'Two Sum',
    difficulty: 'hard',
    tags: ['array', 'hash table', 'string'],
    description:
      'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\n You may assume that each input would have exactly one solution, and you may not use the same element twice.\nYou can return the answer in any order.',
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0, 1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
      },
      {
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]',
      },
    ],
    constraints: [
      '2 <= nums.length <= 104',
      '-109 <= nums[i] <= 109',
      '-109 <= target <= 109',
      'Only one valid answer exists.',
    ],
  },
  {
    problemNum: 3,
    title: 'Two Sum',
    difficulty: 'medium',
    tags: [
      'array',
      'hash table',
      'dynamic programming',
      'math',
      'sorting',
      'greedy',
      'depth-first search',
      'binary search',
      'database',
      'breadth-depth search',
      'tree',
      'matrix',
    ],
    description:
      'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\nYou can return the answer in any order.',
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0, 1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
      },
      {
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]',
      },
    ],
    constraints: [
      '2 <= nums.length <= 104',
      '-109 <= nums[i] <= 109',
      '-109 <= target <= 109',
      'Only one valid answer exists.',
    ],
  },
  {
    problemNum: 4,
    title: 'Two Sum',
    difficulty: 'easy',
    tags: ['array', 'hash table'],
    description:
      'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\nYou can return the answer in any order.',
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0, 1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
      },
      {
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]',
      },
    ],
    constraints: [
      '2 <= nums.length <= 104',
      '-109 <= nums[i] <= 109',
      '-109 <= target <= 109',
      'Only one valid answer exists.',
    ],
  },
  {
    problemNum: 5,
    title: 'Two Sum',
    difficulty: 'easy',
    tags: ['array', 'hash table'],
    description:
      'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\nYou can return the answer in any order.',
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0, 1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
      },
      {
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]',
      },
    ],
    constraints: [
      '2 <= nums.length <= 104',
      '-109 <= nums[i] <= 109',
      '-109 <= target <= 109',
      'Only one valid answer exists.',
    ],
  },
  {
    problemNum: 6,
    title: 'Two Sum',
    difficulty: 'easy',
    tags: ['array', 'hash table'],
    description:
      'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\nYou can return the answer in any order.',
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0, 1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
      },
      {
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]',
      },
    ],
    constraints: [
      '2 <= nums.length <= 104',
      '-109 <= nums[i] <= 109',
      '-109 <= target <= 109',
      'Only one valid answer exists.',
    ],
  },
  {
    problemNum: 7,
    title: 'Two Sum',
    difficulty: 'easy',
    tags: ['array', 'hash table'],
    description:
      'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\nYou can return the answer in any order.',
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0, 1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
      },
      {
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]',
      },
    ],
    constraints: [
      '2 <= nums.length <= 104',
      '-109 <= nums[i] <= 109',
      '-109 <= target <= 109',
      'Only one valid answer exists.',
    ],
  },
  {
    problemNum: 8,
    title: 'Two Sum',
    difficulty: 'easy',
    tags: ['array', 'hash table'],
    description:
      'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\nYou can return the answer in any order.',
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0, 1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
      },
      {
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]',
      },
    ],
    constraints: [
      '2 <= nums.length <= 104',
      '-109 <= nums[i] <= 109',
      '-109 <= target <= 109',
      'Only one valid answer exists.',
    ],
  },
  {
    problemNum: 9,
    title: 'Two Sum',
    difficulty: 'easy',
    tags: ['array', 'hash table'],
    description:
      'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\nYou can return the answer in any order.',
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0, 1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
      },
      {
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]',
      },
    ],
    constraints: [
      '2 <= nums.length <= 104',
      '-109 <= nums[i] <= 109',
      '-109 <= target <= 109',
      'Only one valid answer exists.',
    ],
  },
  {
    problemNum: 10,
    title: 'Two Sum',
    difficulty: 'easy',
    tags: ['array', 'hash table'],
    description:
      'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\nYou can return the answer in any order.',
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0, 1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
      },
      {
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]',
      },
    ],
    constraints: [
      '2 <= nums.length <= 104',
      '-109 <= nums[i] <= 109',
      '-109 <= target <= 109',
      'Only one valid answer exists.',
    ],
  },
];

export default function Problem({
  params: { id },
}: {
  params: { id: string };
}) {
  const {
    problemNum,
    title,
    tags,
    difficulty,
    description,
    examples,
    constraints,
  } = problemDetailItems[parseInt(id, 10) - 1];

  return (
    <div className="flex h-screen gap-2 mt-3">
      <ProblemTemplate label="Description" svg="description">
        <ProblemDescription
          problemNum={problemNum}
          title={title}
          tags={tags}
          difficulty={difficulty}
          description={description}
          examples={examples}
          constraints={constraints}
        />
      </ProblemTemplate>
      <ProblemTemplate label="Code" svg="solving">
        <ProblemSolving id={id} />
      </ProblemTemplate>
    </div>
  );
}
