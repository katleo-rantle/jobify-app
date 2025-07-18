import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { AlignLeft } from 'lucide-react';
import { Button } from './ui/button';
import { links } from '@/utils/links';
import Link from 'next/link';


function LinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='lg:hidden'>
        <Button variant='outline' size='icon'>
          <AlignLeft/>
          <span className="sr-only">toggle links</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-40 lg:hidden' align='start' sideOffset={25}>
        {links.map((link)=>{
          return (
            <DropdownMenuItem key={link.href}>
              <Link href={link.href} className='flex gap-x-2 items-center'>
                {link.icon}
                <span className='capitalize'>{link.label}</span>
              </Link>
            </DropdownMenuItem>
          );
        })}

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default LinksDropdown