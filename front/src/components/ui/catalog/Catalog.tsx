'use client'

import { EnumProductSort, IPaginationProducts, IProduct } from "@/types/product.interface";
import { FC, useState } from "react";
import ProductItem from "./product-item/ProductItem";
import Heading from "../Heading";

interface ICatalogProps {
  data: IProduct[];
  title?: string;
}

const Catalog: FC<ICatalogProps> = ({ data, title }) => {

  return (
    <section className="py-28 snap-start">
      {title && <Heading title={title} className="mb-5"></Heading>}
      {
        data.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {data?.map(product => <ProductItem key={product.id} product={product} />)}
          </div>
        ) : (
          <div>There are no products</div>
        )
      }
    </section>
  );
};

export default Catalog;