import { EnumProductSort } from "@/types/product.interface";
import { ISelectItem } from "../../select/select.interface";

/**
 * Defines the available options for sorting products in the catalog.
 */
export const SORT_SELECT_DATA: ISelectItem<EnumProductSort>[] = [
   {
      key: EnumProductSort.HIGH_PRICE,
      label: 'High Price'
   },
   {
      key: EnumProductSort.LOW_PRICE,
      label: 'Low Price'
   },
   {
      key: EnumProductSort.NEWEST,
      label: 'Newest'
   },
   {
      key: EnumProductSort.OLDEST,
      label: 'Oldest'
   }
]