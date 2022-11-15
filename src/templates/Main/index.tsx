import Link from 'next/link';
import type { FC, ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

interface IMain {
  meta: ReactNode;
  children: ReactNode;
}

export const Main: FC<IMain> = ({ meta, children }) => (
  <>
    <div className='w-full px-4 text-gray-700 antialiased'>
      {meta}
      <div className='mx-auto max-w-screen-md'>
        <div className='border-b border-gray-300'>
          <div className='pt-16 pb-8'>
            <div className='text-3xl font-bold text-gray-900'>
              {AppConfig.title}
            </div>
            <div className='text-xl'>{AppConfig.description}</div>
          </div>
          <div>
            <ul className='flex flex-wrap text-xl'>
              <li className='mr-6'>
                <Link
                  href='/'
                  className='border-none text-gray-700 hover:text-gray-900'
                >
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='content py-5 text-xl'>{children}</div>
      </div>
    </div>
  </>
);
