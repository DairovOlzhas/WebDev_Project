
export interface Restaurant {
  id: number;
  name: string;
  address: string;
  phoneNumber: string;
}

export interface Menu {
  id: number;
  restaurant: Restaurant;
}

export interface Category {
  id: number;
  name: string;
}

export interface FoodItem {
  id: number;
  name: string;
  price: number;
  count: number;
  category: Category;
}
