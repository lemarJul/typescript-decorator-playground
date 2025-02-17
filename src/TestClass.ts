import { Validate } from "./decorators/ValidationDecorator";
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

  @Validate({
    0: (value: number) => value > 0, // Validate that the first argument is a positive number
  })
  performAction(value: number): void {
    console.log(`Performing action with value: ${value}`);
  }
}
