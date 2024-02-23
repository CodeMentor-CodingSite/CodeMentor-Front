import {
  PlanItem,
  PlanList,
  ProblemCategory,
  ProblemList,
} from '@/containers/home';

export const studyPlanItems = [
  {
    imgUrl: '/mocks/mock_studyplan_img_1.png',
    label: 'Top Interview 150',
    description: 'Must_Do List for Interview Prep',
  },
  {
    imgUrl: '/mocks/mock_studyplan_img_2.png',
    label: 'Leet Code 75',
    description: 'Must_Do List for Interview Prep',
  },
  {
    imgUrl: '/mocks/mock_studyplan_img_3.png',
    label: 'SQL 50',
    description: 'Must_Do List for Interview Prep gggggggggggggggg',
  },
  {
    imgUrl: '/mocks/mock_studyplan_img_4.png',
    label: 'Top Interview 120',
    description: 'Must_Do List for Interview Prep',
  },
  {
    imgUrl: '/mocks/mock_studyplan_img_5.png',
    label: 'Top Interview 140',
    description: 'Must_Do List for Interview Prep',
  },
  {
    imgUrl: '/mocks/mock_studyplan_img_6.png',
    label: 'Top Interview 130',
    description: 'Must_Do List for Interview Prep',
  },
  {
    imgUrl: '/mocks/mock_studyplan_img_7.png',
    label: 'Top Interview 15000',
    description: 'Must_Do List for Interview Prep',
  },
  {
    imgUrl: '/mocks/mock_studyplan_img_8.png',
    label: 'Top Interview 15011',
    description: 'Must_Do List for Interview Prep',
  },
  {
    imgUrl: '/mocks/mock_studyplan_img_1.png',
    label: 'Top Interview 1520',
    description: 'Must_Do List for Interview Prep',
  },
  {
    imgUrl: '/mocks/mock_studyplan_img_2.png',
    label: 'Top Interview 1530',
    description: 'Must_Do List for Interview Prep',
  },
  {
    imgUrl: '/mocks/mock_studyplan_img_3.png',
    label: 'Top Interview 1540',
    description: 'Must_Do List for Interview Prep',
  },
  {
    imgUrl: '/mocks/mock_studyplan_img_4.png',
    label: 'Top Interview 1550',
    description: 'Must_Do List for Interview Prep',
  },
  {
    imgUrl: '/mocks/mock_studyplan_img_5.png',
    label: 'Top Interview 150',
    description: 'Must_Do List for Interview Prep',
  },
  {
    imgUrl: '/mocks/mock_studyplan_img_6.png',
    label: 'Top Interview 15066',
    description: 'Must_Do List for Interview Prep',
  },
];

export default function Home() {
  return (
    <>
      <section className="my-16">
        <PlanList>
          {studyPlanItems
            .map(({ imgUrl, label, description }) => (
              <PlanItem
                imgUrl={imgUrl}
                label={label}
                description={description}
              />
            ))
            .slice(0, 6)}
        </PlanList>
      </section>

      <section className="flex flex-col gap-6">
        <ProblemCategory />
        <ProblemList />
      </section>
    </>
  );
}
