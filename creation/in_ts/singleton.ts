// Product
class Product {
  private id: number;
  private name: string;
  private cost: number;

  constructor(id: number, name: string, cost: number) {
    this.id = id;
    this.name = name;
    this.cost = cost;
  }

  // obtener nombre
  public getName(): string {
    return this.name;
  }

  // obtener costo
  public getCost(): number {
    return this.cost;
  }

  // obtener ID
  public getId(): number {
    return this.id;
  }
}

// ShoppingCar (singleton)
class ShoppingCar {
  private static instance: ShoppingCar;
  private list_products: Product[] = [];

  // constructor privado
  private constructor() {}

  // agregar producto
  public add(product: Product): void {
    const existingProduct: number = this.list_products.findIndex((p) => {
      return p.getId() === product.getId();
    });

    if (existingProduct === -1) this.list_products.push(product);
    else console.warn(`El producto ${product.getName()} ya esta en la lista.`);
  }

  // eliminar producto por ID
  public deleteById(id: number): void {
    const i: number = this.list_products.findIndex(
      (product: Product): boolean => product.getId() === id,
    );

    if (i !== -1) this.list_products.splice(i, 1);
    else console.error(`Producto con ID ${id} no encontrado`);
  }

  // obtener lista de productos
  public getProducts(): Product[] {
    return [...this.list_products]; // Devuelve una copia para proteger la encapsulación
  }

  // método estatico para obtener la instancia única
  static getInstance(): ShoppingCar {
    if (!ShoppingCar.instance) ShoppingCar.instance = new ShoppingCar();
    return ShoppingCar.instance;
  }
}

// carro de productos
const shopping_car: ShoppingCar = ShoppingCar.getInstance();

// productos
const productOne: Product = new Product(1, "monitor", 1500),
  productTwo: Product = new Product(2, "audifonos", 346),
  productThree: Product = new Product(3, "gorra", 105);

// agregamos al carro
shopping_car.add(productOne);
shopping_car.add(productTwo);
shopping_car.add(productThree);

shopping_car.add(productTwo); // da error en consola

shopping_car.deleteById(53);

console.log(shopping_car.getProducts());

shopping_car.deleteById(2);

console.log(shopping_car.getProducts());

// son de la misma instancia?
const shopping_car_two = ShoppingCar.getInstance();

console.log(shopping_car === shopping_car_two);
