// Interfaces
interface HttpAdapterInterface {
  get(): void;
  post(): void;
  put(): void;
  delete(): void;
}

interface HttpAdapterFactoryInterface {
  makeAdapter(type: AdapterServicesType): HttpAdapterInterface;
}

// types
type AdapterServicesType = "Express" | "Fastify";

// express adapter
class ExpressAdapter implements HttpAdapterInterface {
  public get(): void {
    console.log("Método get Express");
  }

  public post(): void {
    console.log("Método post Express");
  }

  public put(): void {
    console.log("Método put Express");
  }

  public delete(): void {
    console.log("Método delete Express");
  }
}

// fastify adapter
class FastifyAdapter implements HttpAdapterInterface {
  public get(): void {
    console.log("Método get Fastify");
  }

  public post(): void {
    console.log("Método post Fastify");
  }

  public put(): void {
    console.log("Método put Fastify");
  }

  public delete(): void {
    console.log("Método delete Fastify");
  }
}

// Http Adapter (factory)
class HttpAdapterFactory implements HttpAdapterFactoryInterface {
  makeAdapter(type: AdapterServicesType): HttpAdapterInterface {
    switch (type) {
      case "Express":
        return new ExpressAdapter();
      case "Fastify":
        return new FastifyAdapter();
      default:
        throw new Error(`Adapter type "${type}" no es válido...`);
    }
  }
}

// example
const factory = new HttpAdapterFactory();

// test Express
const express_service: ExpressAdapter = factory.makeAdapter("Express");
express_service.get();
express_service.post();

// test Fastify
const fastify_services: FastifyAdapter = factory.makeAdapter("Fastify");
fastify_services.put();
fastify_services.delete();
