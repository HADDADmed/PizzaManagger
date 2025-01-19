const DB = {
  BASES: {
    "thin crust": 5,
    traditional: 7,
    stuffed: 9,
  },
  TOPPINGS: {
    chicken: 2,
    tomato: 1,
    olives: 1.5,
    mozzarella: 1.8,
    onions: 1,
  },
  EXTRAS: {
    "extra cheese": 1.5,
    "extra salt": 0.5,
    "extra spices": 0.7,
  },
};


// Function to fetch prices for bases, toppings, and extras
function getPrices(
    base: string,
    toppings: string[],
    extras: string[]
  ): { basePrice: number; toppingsPrice: number; extrasPrice: number } {

 
    const basePrice = DB.BASES[base] ;

    const toppingsPrice = toppings.reduce((sum, topping) => {
      const price = DB.TOPPINGS[topping];
        return sum + price;
    }, 0);

    const extrasPrice = extras.reduce((sum, extra) => {
      const price = DB.EXTRAS[extra.toLowerCase()];
        return sum + price;
    }, 0);
  
   
    return { basePrice, toppingsPrice, extrasPrice };
  }
 



class Pizza {
    private basePrice: number = 0;
    private toppingsPrice: number = 0;
    private extrasPrice: number = 0;
    private totalPrice: number = 0;
  
    constructor(base: string, toppings: string[], extras: string[]) {
      this.setPrices(base, toppings, extras);
      this.totalPrice = this.basePrice + this.toppingsPrice + this.extrasPrice;

    }
  
    // Sets prices for base, toppings, and extras using getPrices  function
    private setPrices(base: string, toppings: string[], extras: string[]) {
      const { basePrice, toppingsPrice, extrasPrice } = getPrices(
        base,
        toppings,
        extras
      );
      this.basePrice = basePrice;
      this.toppingsPrice = toppingsPrice;
      this.extrasPrice = extrasPrice;
    }
    // Getter to retrieve the total price
    public getTotalPrice(): number {
      return this.totalPrice;
    }
  }
  
  // Example of creating a pizza
  const pizza = new Pizza(
    "thin crust",
    ["chicken", "mozzarella"],
    ["extra cheese", "extra salt"]
  );
  console.log(`Total Pizza Price: $${pizza.getTotalPrice()}`);