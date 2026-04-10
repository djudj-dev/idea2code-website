import { string } from '@/utils/string';
import { DesktopNav } from './desktop-nav';
import { PhoneNav } from './phone-nav';

export const links = string.nav.links;

export const Navbar = () => (
  <>
    <DesktopNav links={links} />
    <PhoneNav links={links} />
  </>
);
