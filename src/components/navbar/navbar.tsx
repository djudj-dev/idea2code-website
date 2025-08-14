
import octocat from '../../../../public/octocat.png';
import { DesktopNav } from './desktop-nav';
import { PhoneNav } from './phone-nav'

export const links = [
  {
    text: 'Acceuil',
    url: '/'
  },
  {
    text: 'Services',
    url: '/services',
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