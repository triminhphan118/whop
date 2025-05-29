import configPromise from '@/payload.config';
import { getPayload } from 'payload';
import { FC } from 'react';
import Footer from './footer';
import Navbar from './navbar';
import SearchFilters from './search-filters';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = async ({ children }) => {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: 'categories',
    depth: 1,
    pagination: false,
    where: {
      parent: {
        exists: false,
      },
    },
  });

  const formattedData = data?.docs?.map(doc => ({
    ...doc,
    subCategories: (doc.subCategories?.docs ?? [])?.map(subDoc => ({
      ...(subDoc Category),
    })),
  }));

  console.log(data);
  console.log(formattedData);
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SearchFilters data={data} />
      <div className="flex-1 bg-[#f4f4f0]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
