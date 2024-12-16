// clase producto que queremos construir
class Car {
  public edition!: string;
  public engine!: string;
  public wheels!: number;
  public airbags!: number;
  public color!: string;
  public gps!: boolean;

  public showSpecifications(): void {
    console.log(
      `Engine: ${this.engine}, Wheels: ${this.wheels}, Color: ${this.color}, GPS: ${this.gps}, Editon: ${this.edition}, Airbags: ${this.airbags}.`,
    );
  }
}

// interfaz para el builder
interface CarBuilder {
  setEdition(edition: string): this;
  setEngine(engine: string): this;
  setWheels(wheels: number): this;
  setAirBags(airbags: number): this;
  setColor(color: string): this;
  setGPS(gps: boolean): this;
  build(): Car;
  reset(): void;
}

// Implementación concreta del Builder
class ConcreteCarBuilder implements CarBuilder {
  private car: Car;

  constructor() {
    this.car = new Car();
  }

  public setEdition(edition: string): this {
    this.car.edition = edition;
    return this;
  }

  public setEngine(engine: string): this {
    this.car.engine = engine;
    return this;
  }

  public setWheels(wheels: number): this {
    this.car.wheels = wheels;
    return this;
  }

  public setAirBags(airbags: number): this {
    this.car.airbags = airbags;
    return this;
  }

  public setColor(color: string): this {
    this.car.color = color;
    return this;
  }

  public setGPS(gps: boolean): this {
    this.car.gps = gps;
    return this;
  }

  public reset(): void {
    this.car = new Car();
  }

  public build(): Car {
    const builtCar = this.car;
    this.car = new Car(); // reinicia el car para próximas construcciones
    return builtCar;
  }
}

// Director (opcional) facilita la construcción predefinida
class CarDirector {
  private builder: CarBuilder;

  constructor(builder: CarBuilder) {
    this.builder = builder;
  }

  public constructSportCar(): Car {
    return this.builder
      .setEdition("sport")
      .setAirBags(6)
      .setEngine("v8")
      .setWheels(4)
      .setColor("red")
      .setGPS(true)
      .build();
  }

  public constructSuvCar(): Car {
    return this.builder
      .setEdition("suv")
      .setAirBags(8)
      .setEngine("diesel")
      .setWheels(4)
      .setColor("black")
      .setGPS(false)
      .build();
  }

  public constructHatchbackCar(): Car {
    return this.builder
      .setEdition("hatchback")
      .setAirBags(4)
      .setColor("yellow")
      .setEngine("v6")
      .setWheels(4)
      .setGPS(true)
      .build();
  }
}

// Uso del patrón Builder
const builder = new ConcreteCarBuilder();
const director = new CarDirector(builder);

const sport = director.constructSportCar();
sport.showSpecifications();

const suv = director.constructSuvCar();
suv.showSpecifications();

const hatchback = director.constructHatchbackCar();
hatchback.showSpecifications();

// construcción personalizada sin el director
const customCar = builder
  .setEngine("electric")
  .setWheels(3)
  .setColor("white")
  .setGPS(true)
  .build();

customCar.showSpecifications();
