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
  { name: "Pastries", heb: "מאפים" }]
  ;


  export const translate = (word: string) => {
    let hebWord = englishToHebrew.find((item) => item.name === word);
    if (hebWord) {
      return hebWord.heb;
    }
    return word;
  }

  export const groupBy = (products: Array<any>, property: string) => {
    return products.reduce(function (memo, x) {
      if (!memo[x[property]]) { memo[x[property]] = []; }
      memo[x[property]].push(x);
      return memo;
    }, {});
  }
  

  export const groupByDate = (data: any) => {
    const groups = data.reduce((groups: any, product: any) => {
      console.log('groups product', groups, product)
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
  