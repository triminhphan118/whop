import { Category } from '@/payload-types';
import Link from 'next/link';
import { FC } from 'react';

interface SubCategoryMenuProps {
  category: Category;
  isOpen: boolean;
  position: {
    top: number;
    left: number;
  };
}

export const SubcategoryMenu: FC<SubCategoryMenuProps> = ({
  category,
  isOpen,
  position,
}) => {
  if (
    !category?.subCategories ||
    category?.subCategories?.length === 0 ||
    !isOpen
  )
    return null;

  const backgroundColor = category.color || '#f5f5f5';

  return (
    <div
      className="fixed z-100"
      style={{
        top: position.top,
        left: position.left,
      }}
    >
      <div className="h-3  w-60"></div>
      <div className="w-60">
        <div
          style={{
            background: backgroundColor,
          }}
          className="w-60 text-black rounded-md overflow-hidden border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-x-[2px] -translate-y-[2px]"
        >
          <div>
            {category.subCategories?.map(subCategory => {
              return (
                <Link
                  href="/"
                  key={subCategory.slug}
                  className="w-full text-left p-4 text-black hover:text-white hover:bg-black flex justify-between items-center underline font-medium"
                >
                  {subCategory.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubcategoryMenu;
