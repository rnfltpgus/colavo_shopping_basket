import { Items, Discounts, Item, Discount } from "../types/colavo.types";

type FormatObject = Items | Discounts;

interface formattedObject {
  [key: string]: Item | Discount;
}

const formatWithIds = (object: FormatObject): formattedObject => {
  const result: FormatObject = {};
  const keys = Object.keys(object);

  keys.forEach((key) => {
    result[key] = {
      ...object[key],
      id: key,
    };
  });

  return result;
};

export default formatWithIds;
