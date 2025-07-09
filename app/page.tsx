import { Button } from '@/components/ui/button';
import  Image  from 'next/image';
import Logo from '@/assets/logo.svg'
import LandingImg from '@/assets/main.svg'
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <header className='max-w-6xl mx-auto h-24 px-4 sm:px-8 py-6'>
        <Image src={Logo} alt='logo'/>
      </header>
      <section className='max-w-6xl mx-auto px-4 sm:px-8 h-[calc(100vh-96px)] mt-0 grid lg:grid-cols-[1fr,400px] items-center'>
        <div>
          <h1 className='capitalize text-4xl md:text-7xl font-bold'>job <span className='text-primary'>tracking</span> app</h1>
          <p className='leading-loose max-w-md mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea commodi explicabo, corporis sequi inventore facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, et?</p>
          <Button asChild className='mt-4'>
            <Link href='/add-job' className='capitalize'>get started</Link>
          </Button>
        </div>
        <Image src={LandingImg} alt='landing image'className='hidden lg:block'/>
      </section>
    </main>
  );
}
