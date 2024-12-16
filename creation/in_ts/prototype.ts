interface Prototype {
  clone(): Prototype;
}

// class concreta que implementa prototype
class Person implements Prototype {
  constructor(
    public name: string,
    public age: number,
    public address: Address,
  ) {}

  public clone(): Person {
    return new Person(
      this.name,
      this.age,
      this.address.clone(), // clonar tambien los objetos anidados
    );
  }
}

// clase relacionado para demostrar cloanción profundac
class Address implements Prototype {
  constructor(
    public street: string,
    public city: string,
  ) {}

  clone(): Address {
    return new Address(this.street, this.city);
  }
}

const originalPerson = new Person(
  "Alice",
  30,
  new Address("123 Main St", "Wonder land"),
);

// crear una copia
const clonedPerson = originalPerson.clone();

// modificar la copia
clonedPerson.name = "Pablo";
clonedPerson.address.street = "mz Q cs 7";

// verificar que son diferentes objetos
console.log("Original:", originalPerson);
console.log("Cloned:", clonedPerson);
