import { Response } from "node-fetch";

const randomRequestMealMock = {
  "meals": [
    {
      "idMeal": "52843",
      "strMeal": "Lamb Tagine",
      "strDrinkAlternate": null,
      "strCategory": "Lamb",
      "strArea": "Moroccan",
      "strInstructions": "Heat the olive oil in a heavy-based pan and add the onion and carrot.",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/yuwtuu1511295751.jpg",
      "strTags": null,
      "strYoutube": "https://www.youtube.com/watch?v=bR5Cqu84S_k",
      "strIngredient1": "Olive Oil",
      "strMeasure1": "2 tblsp ",
      "strSource": "https://www.bbcgoodfood.com/recipes/2303638/family-meals-easy-lamb-tagine-",
      "strImageSource": null,
      "strCreativeCommonsConfirmed": null,
      "dateModified": null
    }
  ]
};

const randomRequestDrinkMock = {
  "drinks": [
    {
      "idDrink": "12436",
      "strDrink": "Van Vleet",
      "strDrinkAlternate": null,
      "strTags": null,
      "strVideo": null,
      "strCategory": "Ordinary Drink",
      "strIBA": null,
      "strAlcoholic": "Alcoholic",
      "strGlass": "Old-fashioned glass",
      "strInstructions": "Shake all ingredients with ice, strain into an old-fashioned glass over ice cubes, and serve.",
      "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/fgq2bl1492975771.jpg",
      "strIngredient1": "Light rum",
      "strMeasure1": "3 oz ",
      "strImageSource": null,
      "strImageAttribution": null,
      "strCreativeCommonsConfirmed": "No",
      "dateModified": "2017-04-23 20:29:31"
    }
  ]
};

export {randomRequestMealMock, randomRequestDrinkMock};
