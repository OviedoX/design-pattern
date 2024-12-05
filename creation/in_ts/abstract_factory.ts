// Productos Abstractos
abstract class Cpu {
  abstract setSeries(serie: string): void;
}

abstract class Memory {
  abstract setCapacityInGB(gb: number): void;
}

abstract class Display {
  abstract setResolution(): void;
}

// Interfaz de fábrica abstracta
interface DeviceFactory {
  createCpu(): Cpu;
  createMemory(): Memory;
  createDisplay(): Display;
}

// Productos concretos para Phone
class PhoneCpu extends Cpu {
  private readonly type = "Phone";
  private serie: string = "";

  public setSeries(serie: string): void {
    this.serie = serie;
    console.log(`${this.type} Cpu serie set to ${this.serie}`);
  }
}

class PhoneMemory extends Memory {
  private readonly type = "Phone";
  private capacityInGB: number = 0;

  public setCapacityInGB(gb: number): void {
    this.capacityInGB = gb;
    console.log(`${this.type} memory capacity set to ${this.capacityInGB}`);
  }
}

class PhoneDisplay extends Display {
  private readonly type = "Phone";

  public setResolution(): void {
    console.log(`${this.type} display resolution set`);
  }
}

// Fábrica concreta para Phone
class PhoneFactory implements DeviceFactory {
  createCpu(): Cpu {
    return new PhoneCpu();
  }

  createMemory(): Memory {
    return new PhoneMemory();
  }

  createDisplay(): Display {
    return new PhoneDisplay();
  }
}

// Productos concretos para Laptop
class LaptopCpu extends Cpu {
  private readonly type = "Laptop";
  private serie: string = "";

  public setSeries(serie: string): void {
    this.serie = serie;
    console.log(`${this.type} Cpu series set to ${this.serie}`);
  }
}

class LaptopMemory extends Memory {
  private readonly type = "Laptop";
  private capacityInGB: number = 0;

  public setCapacityInGB(gb: number): void {
    this.capacityInGB = gb;
    console.log(`${this.type} memory capacity set to ${this.capacityInGB}`);
  }
}

class LaptopDisplay extends Display {
  private readonly type = "Laptop";

  public setResolution(): void {
    console.log(`${this.type} display resolution set`);
  }
}

// Fábrica concreta para Laptop
class LaptopFactory implements DeviceFactory {
  createCpu(): Cpu {
    return new LaptopCpu();
  }

  createMemory(): Memory {
    return new LaptopMemory();
  }

  createDisplay(): Display {
    return new LaptopDisplay();
  }
}

// Productos concretos para Tablet
class TabletCpu extends Cpu {
  private readonly type = "Tablet";
  private serie: string = "";

  public setSeries(serie: string): void {
    this.serie = serie;
    console.log(`${this.type} Cpu series set to ${this.serie}`);
  }
}

class TabletMemory extends Memory {
  private readonly type = "Tablet";
  private capacityInGB: number = 0;

  public setCapacityInGB(gb: number): void {
    this.capacityInGB = gb;
    console.log(`${this.type} memory capacity set to ${this.capacityInGB}`);
  }
}

class TabletDisplay extends Display {
  private readonly type = "Tablet";

  public setResolution(): void {
    console.log(`${this.type} display resolution set`);
  }
}

// Fábrica concreta para Tablet
class TabletFactory implements DeviceFactory {
  createCpu(): Cpu {
    return new TabletCpu();
  }

  createMemory(): Memory {
    return new TabletMemory();
  }

  createDisplay(): Display {
    return new TabletDisplay();
  }
}

// Creador de fabricas
enum DeviceType {
  Phone = "phone",
  Laptop = "laptop",
  Tablet = "tablet",
}

class DeviceFactoryCreator {
  static createDevice(type: DeviceType): DeviceFactory {
    switch (type) {
      case DeviceType.Phone:
        return new PhoneFactory();
      case DeviceType.Laptop:
        return new LaptopFactory();
      case DeviceType.Tablet:
        return new TabletFactory();
      default:
        throw new Error(`${type} not found in the factory...`);
    }
  }
}

// example
const phoneFactory = DeviceFactoryCreator.createDevice(DeviceType.Phone);
const phoneCpu = phoneFactory.createCpu();
phoneCpu.setSeries("Snapdragon 888");

const laptopFactory = DeviceFactoryCreator.createDevice(DeviceType.Laptop);
const laptopMemory = laptopFactory.createMemory();
laptopMemory.setCapacityInGB(32);
