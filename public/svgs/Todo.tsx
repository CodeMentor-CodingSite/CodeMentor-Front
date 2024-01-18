import { useTheme } from 'next-themes';

export default function IconTodo() {
  const { theme } = useTheme();

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="4"
        y1="11.5"
        x2="20"
        y2="11.5"
        stroke={theme === 'dark' ? 'white' : 'black'}
      />
    </svg>
  );
}
