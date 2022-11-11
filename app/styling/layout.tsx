import { TabGroup } from '#/ui/TabGroup';
import React from 'react';

const items = [
  {
    text: 'Styled JSX',
    slug: 'styled-jsx',
  },
  {
    text: 'Tailwind CSS',
    slug: 'tailwind',
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-9">
      <TabGroup
        path="/styling"
        items={[
          {
            text: 'Home',
          },
          ...items,
        ]}
      />
      <div>{children}</div>
    </div>
  );
}
