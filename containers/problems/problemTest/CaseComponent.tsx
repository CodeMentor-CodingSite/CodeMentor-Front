interface CaseComponentProps {
  left: string;
  right: string;
}

export default function CaseComponent({ left, right }: CaseComponentProps) {
  return (
    <div className="flex flex-col mb-1 gap-1">
      <p className="text-subtext dark:text-subtextDark">{left} =</p>
      <div className="px-4 py-3 rounded-lg bg-chip dark:bg-chipDark">
        {right}
      </div>
    </div>
  );
}
