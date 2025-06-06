import { Category } from '@/payload-types';
import { FC } from 'react';
import CategoryDropdown from './category-dropdown';

interface CategoriesProps {
  data: any;
}

const Categories: FC<CategoriesProps> = ({ data }) => {
  return (
    <div className="relative w-full">
      <div className="flex flex-nowrap items-center gap-4">
        {data?.map((category: Category) => {
          return (
            <div key={category.id}>
              <CategoryDropdown
                category={category}
                isActive={false}
                isNavigationHovered={false}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
