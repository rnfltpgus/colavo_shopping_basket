import { Item } from "../types/colavo.types";
import { CartItem, CartDiscount } from "../types/cart.types";

export const calculateTotalPrice = (items: Item[]): number => {
  return items.reduce(
    (acc: number, item: Item) => acc + item.price * item.count,
    0
  );
};

export const calculateItemPrice = (item: CartItem): number => {
  return item.price * item.count * (item.discount || 1);
};

export const calculateTotalDiscounts = (
  discounts: CartDiscount[],
  items: CartItem[]
): number => {
  let totalDiscount = 0;

  discounts.forEach((discount: CartDiscount) => {
    const { appliedItemIds, rate } = discount;

    appliedItemIds.forEach((id: string) => {
      const targetItem = items.find((item) => item.id === id);

      if (targetItem) {
        const { price, count } = targetItem;
        totalDiscount += price * count * rate;
      }
    });
  });

  return totalDiscount;
};
