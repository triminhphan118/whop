import { Category } from '@/payload-types';
import { FC } from 'react';
import CategoryDropdown from './category-dropdown';

interface CategoriesProps {
  data: any;
}

const Categories: FC<CategoriesProps> = ({ data }) => {
  return (
    <div>
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
  );
};

export default Categories;
