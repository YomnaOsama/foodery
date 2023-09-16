export type Category = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb?: string;
  strCategoryDescription?: string;
}

export type Meal = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strMealThumb: string;
  strTags: string;
}

export type Restaurant = {
  strMeal: string;
  strMealThumb: string;
  idRestaurant: string;
  strRestaurant: string;
  strRestaurantThumb: string;
  strTags: string;
}
