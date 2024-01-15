import { Divider } from '@nextui-org/react';

export default function Footer() {
  return (
    <footer className="flex items-center h-16 mx-auto w-desktop gap-11">
      <p className="text-inactiveDark">Copyright @ Code Mentor</p>
      <ul className="flex mr-[44px] text-subtextDark gap-3">
        <li className="flex items-center gap-3">
          <p>724thomas</p>
          <Divider orientation="vertical" className="h-4 bg-subtextDark" />
        </li>
        <li className="flex items-center gap-3">
          <p>EUNSUN23</p>
          <Divider orientation="vertical" className="h-4 bg-subtextDark" />
        </li>
        <li className="flex items-center gap-3">
          <p>hoonii2</p>
          <Divider orientation="vertical" className="h-4 bg-subtextDark" />
        </li>
        <li className="flex items-center gap-3">
          <p>ijaesinii</p>
        </li>
      </ul>
    </footer>
  );
}
