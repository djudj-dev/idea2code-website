
import octocat from '../../../../public/octocat.png';
import { DesktopNav } from './DesktopNav';
import { PhoneNav } from './PhoneNav'

export const links = [
  {
    text: 'Services',
    url: '/',
  },
  {
    text: 'Réalisations',
    url: '/',
  },
  {
    text: 'Contact',
    url: '/',
  },
];

export const Navbar = () => (
  <>
    <DesktopNav links={links} />
    <PhoneNav links={links} />
  </>
);