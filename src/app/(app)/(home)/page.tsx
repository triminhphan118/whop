import configPromise from '@/payload.config';
import { getPayload } from 'payload';

const Page = async () => {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: 'categories',
  });

  return (
    <div className="p-4">
      Test page
      <div>{JSON.stringify(data, null, 2)}</div>
    </div>
  );
};

export default Page;
