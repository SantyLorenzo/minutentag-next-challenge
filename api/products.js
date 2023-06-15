// Welcome!

// In this challenge we want to build a beer e-commerce.

// We have a file with all the products information (products.js), and the images we want to
// show for each product (one image per product).

// We also have a separate file with stock and price information, which is in a different file
// because that information gets updated more frequently.

// We want to build a Next.js app with two pages: a Product Listing Page (PLP) that displays the
// brand and image of all the products (this page should be the home page); a Product Detail Page(PDP)
// that displays all the information for a single product.

// Technical requirements:
//  - Build an API endpoint that returns stock and price information for a given product SKU code.
//  - The PDP must update the stock and price information every 5 seconds using the API endpoint.
//  - The products.js file should not be modified.
//  - The stock-price.js file should only be modified to test the update every 5 seconds requirement.
//  - The PLP should be the home page
//  - The PDP should be accessible through the URL /productId-productBrand (i.e. for a product with id 5
// and brand "Modelo Especial", the URL should be /5-modelo-especial)
//  - The API endpoint to get the stock and price information should be GET /api/stock-price/code
// (i.e. for a product SKU with code 123, the URL should be /api/stock-price/123)

// Keep in mind that the prices are stored in cents, but should be displayed in dollars with 2 digits
// cents (e.g. if a product's price is 4350, then it should be shown as $43.50).

export default [
  {
    id: 127,
    brand: "Modelo Especial",
    image: "/products/modelo-especial.jpeg",
    style: "Lager",
    substyle: "Light Lager",
    abv: "4.4%",
    origin: "Import",
    information:
      '#2 selling imported beer in the US with nearly 60 million cases in annual sales (2), growing more than 15 million cases over the past 2 years (3). A full flavored Mexican lager consistently delivering a crisp, clean taste that has stood the test of time for 90 years. Modelo Especial embodies substance with style - a straightforward, uncomplicated and consistent experience with an understated style.\nModelo Especial earned the 2012 Market Watch "Beer Brand of the Year" due to 20 straight years of double-digit growth earning.',
    skus: [
      {
        code: "10167",
        name: "12 - 24oz Cans",
      },
      {
        code: "10166",
        name: "18 - 12oz Cans",
      },
      {
        code: "10170",
        name: "Half Barrel",
      },
    ],
  },
  {
    id: 374,
    brand: "Miller Lite",
    image: "/products/miller-lite.png",
    style: "Lager",
    substyle: "Light Lager",
    abv: "4.17%",
    origin: "Wisconsin",
    information:
      "Miller Lite is the great tasting, less filling beer that created the American light beer category in 1975. Triple-hops brewed for great pilsner taste, Miller Lite is the only beer to win four gold awards in the World Beer Cup for best American-Style light lager (2006, 2002, 1998 and 1996). It also won the gold medal for best American-style Lager or Light Lager at the 2010 Great American Beer Festival.",
    skus: [
      {
        code: "10035",
        name: "24 - 12oz Bottles, 6 Pack",
      },
      {
        code: "10041",
        name: "24 - 12oz Bottles, 12 Pack",
      },
    ],
  },
  {
    id: 743,
    brand: "Corona Premier",
    image: "/products/corona.jpg",
    style: "Lager",
    substyle: "Mexican Lager",
    abv: "4.0%",
    origin: "Mexico",
    information:
      "Consumers define Corona Extra as a light, refreshing beer with a distinct flavor and crisp bite. Constellation Brands, owner of Corona and other leading Mexican imports, saw a natural opportunity for the Corona brand to expand into the growing low carb light beer category. Corona Premier was born from the desire to deliver the refreshing taste and authentic Mexican escape of the Corona brand with fewer calories, lower carbs, and full alcohol to appeal to beer drinkers looking to make healthier choices.",
    skus: [
      {
        code: "35678",
        name: "24 - 12oz Bottles, 6 Pack",
      },
      {
        code: "35681",
        name: "Quarter Barrel Slim",
      },
    ],
  },
  {
    id: 841,
    brand: "Lagunitas IPA",
    image: "/products/lagunitas.jpg",
    style: "Ale",
    substyle: "Indian Pale Ale",
    abv: "6.2%",
    origin: "California",
    information:
      "This exceptional IPA is a very well balanced American version of the style. It is also the original “West Coast IPA”, and is still the best selling IPA in California. A beautiful amber hue presents a distinct citrus hop aroma and a full-bodied malt character. A very approachable IPA, this beer is well rounded with distinct hop notes throughout and a subtle weight for “session” drinkability. Pairs very well with peppery/spicy foods, hearty meats, rich seafood & fish, and savory sauces.",
    skus: [
      {
        code: "15337",
        name: "24 - 12oz Bottles, 12 Pack",
      },
    ],
  },
];
