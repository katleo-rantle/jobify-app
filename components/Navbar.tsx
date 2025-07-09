import LinksDropdown from './LinksDropdown';
import { UserButton } from '@clerk/nextjs';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className='bg-muted py-4 px-4 sm:px-16 lg:px-24 flex justify-between items-center'>
      <div>
        <LinksDropdown />
      </div>
      <div className='flex items-center gap-x-2'>
        <ThemeToggle />
        <UserButton afterSignOutUrl='/' />
      </div>
    </nav>
  );
};
export default Navbar;
