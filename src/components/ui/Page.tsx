import React from 'react';

const Page = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <main
      className={
        "py-10 sm:py-12 lg:py-16 " + className
      }
    >
      {children}
    </main>
  );
};

export default Page;
