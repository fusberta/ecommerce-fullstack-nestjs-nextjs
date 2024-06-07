import { EnumProductSort } from "@/types/product.interface";
import { ISelectItem } from "../../select/select.interface";

/**
 * Defines the available options for sorting products in the catalog.
 */
export const SORT_SELECT_DATA: ISelectItem<EnumProductSort>[] = [
   {
      key: EnumProductSort.HIGH_PRICE,
      label: 'Убыванию цены'
   },
   {
      key: EnumProductSort.LOW_PRICE,
      label: 'Возрастанию цены'
   },
   {
      key: EnumProductSort.NEWEST,
      label: 'Самым новым'
   },
   {
      key: EnumProductSort.OLDEST,
      label: 'Самым старым'
   }
]