// this is the translation array
const englishToHebrew =
  [{ name: "category", heb: "קטגוריה" },
  { name: "name", heb: "שם המוצר" },
  { name: "add", heb: "הוסף" },
  { name: "Total", heb: "סהכ" },
  { name: "items", heb: "פריטים" },
  { name: "Finish Order", heb: "סיים הזמנה" },
  { name: "Cleaning Products", heb: "מוצרי ניקוי" },
  { name: "Cheeses", heb: "גבינות" },
  { name: "Vegetables and Fruits", heb: "ירקות ופירות" },
  { name: "Meat and Fish", heb: "בשר ודגים" },
  { name: "Pastries", heb: "מאפים" },
  { name: "View orders", heb: "צפייה בהזמנות" },
  { name: "New order", heb: "הזמנה חדשה" },
  ];


  // this function is used to translate the words from english to hebrew
export const translate = (word: string) => {
  let hebWord = englishToHebrew.find((item) => item.name === word);
  if (hebWord) {
    return hebWord.heb;
  }
  return word;
}

// this function is used to group the products by their category
export const groupBy = (products: Array<any>, property: string) => {
  return products.reduce(function (memo, x) {
    if (!memo[x[property]]) { memo[x[property]] = []; }
    memo[x[property]].push(x);
    return memo;
  }, {});
}

// this function is used to group the products by their date
export const groupByDate = (data: any) => {
  const groups = data.reduce((groups: any, product: any) => {
    const date = product.createdAt.split('T')[1];
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(product);
    return groups;
  }, {});
  const groupArrays = Object.keys(groups).map((date) => {
    console.log('groups[date]', groups[date])
    return {
      datetime: new Date(groups[date][0].createdAt),
      data: groups[date]
    };
  });
  return groupArrays;
}

// this function is used to get the category name by its id
export const getCategorieName = (categories: any, id: number) => {
  const categorie = categories.find((cat: any) => cat.id === id);
  if (categorie) {
    return categorie.name;
  }
  return '';
}
