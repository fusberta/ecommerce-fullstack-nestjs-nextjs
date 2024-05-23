'use client'

import { IProduct } from "@/types/product.interface";
import { FC, useState } from "react";
import ProductItem from "./product-item/ProductItem";
import Heading from "../Heading";
import { CategoriesMenu } from "../Categories-menu";
import SortDropdown from "./sort/SortDropdown";
import { TbError404 } from "react-icons/tb";

interface ICatalogProps {
  data: IProduct[];
  title?: string;
  isCategories?: boolean
  isSort?: boolean
}

/**
 * Renders a catalog section with a title, categories menu, sort dropdown, and a grid of product items.
 *
 * @param data - An array of product data to display in the catalog.
 * @param title - An optional title to display above the catalog.
 * @param isCategories - A boolean indicating whether to display the categories menu.
 * @param isSort - A boolean indicating whether to display the sort dropdown.
 * @returns A React component that renders the catalog section.
 */
const Catalog: FC<ICatalogProps> = ({ data, title, isCategories = false, isSort = false }) => {

  return (
    <section>
      <div className="flex justify-between items-center mb-7">
        {title && <Heading title={title}></Heading>}
        {isCategories && <CategoriesMenu />}
        {isSort && <SortDropdown />}
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