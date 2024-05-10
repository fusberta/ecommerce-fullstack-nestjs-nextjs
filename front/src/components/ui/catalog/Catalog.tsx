'use client'

import { EnumProductSort, IProduct } from "@/types/product.interface";
import { FC, useState } from "react";
import ProductItem from "./product-item/ProductItem";
import Heading from "../Heading";
import { CategoriesMenu } from "../Categories-menu";
import SortDropdown from "./sort/SortDropdown";
import { TbError404 } from "react-icons/tb";

interface ICatalogProps {
  data: IProduct[];
  title?: string;
}

const Catalog: FC<ICatalogProps> = ({ data, title }) => {
  const [sortType, setSortType] = useState<EnumProductSort>(EnumProductSort.NEWEST)

  return (
    <section className="">
      <div className="flex justify-between items-center mb-7">
        {title && <Heading title={title}></Heading>}
        <CategoriesMenu />
        <SortDropdown />
      </div>
      {
        data.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {data?.map(product => <ProductItem key={product.id} product={product} />)}
          </div>
        ) : (
          <div className="mt-12 flex items-center gap-5">
            <TbError404 size={100} />
            <p className="border-l border-white pl-6">Не нашлось продуктов соответствующих запросу</p>
          </div>
        )
      }
    </section>
  );
};

export default Catalog;