import { loggedClass } from "./decorators/CLassDecorator";
import { loggedMethod } from "./decorators/MethodDecorator";

@loggedClass
export class TestClass {
  name = "Jhon";
  constructor() {
    console.log("📌 TestClass Constructor called!");
  }

  @loggedMethod
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}
