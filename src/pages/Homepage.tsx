import React from 'react';

import { trpc } from '../utils/trpc';

export function Homepage() {
  const hello = trpc.useQuery(['example.hello', { text: 'from tRPC' }]);

  return (
    <div className='p-8'>
      <div className='grid justify-center w-full h-40 grid-cols-1 p-4 space-y-4 text-xl text-white bg-gray-600'>
        <h3>Show a file-select field which allows multiple files:</h3>
        <form>
          <label htmlFor='myfile'>Select files:</label>
          <input type='file' id='myfile' name='myfile' multiple />
          <input className='flex my-2' type='submit' />
        </form>
      </div>

      <div className='flex items-center justify-center w-full pt-6 text-2xl text-blue-500'>
        {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
      </div>
    </div>
  );
}
