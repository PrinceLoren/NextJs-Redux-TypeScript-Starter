import { FC } from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

export const Home: FC = () => {
  return (
    <Main
      meta={
        <Meta
          title='Next.js Boilerplate Presentation'
          description='Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework.'
        />
      }
    >
      <div className='rounded-lg bg-white px-6 py-8 shadow-xl ring-1 ring-slate-900/5 dark:bg-slate-800'>
        <div>
          <span className='inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg'>
            <svg
              className='h-6 w-6 text-white'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              aria-hidden='true'
            ></svg>
          </span>
        </div>
        <h3 className='mt-5 text-base font-medium tracking-tight text-slate-900 dark:text-white'>
          Writes Upside-Down
        </h3>
        <p className='mt-2 text-sm text-slate-500 dark:text-slate-400'>
          The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.
        </p>
      </div>
    </Main>
  );
};
