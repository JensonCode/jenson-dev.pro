import React from 'react';
import StackIcon from './StackIcon';

export default function StackList({
  stacks,
}: {
  stacks: Record<string, string[]>;
}) {
  return (
    <div className='flex flex-col space-y-2 p-4 bg-main-green/80 '>
      {Object.keys(stacks).map((key, index) => (
        <div
          key={index}
          className='flex space-x-1'
        >
          <div className='basis-3/12 font-semibold text-black'>{key}</div>
          <div className='basis-9/12 flex space-x-6 '>
            {stacks[key].map((stack, index) => (
              <StackIcon
                stack={stack}
                key={index}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
