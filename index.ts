import { TestClass } from "./src/TestClass";
const { log } = console;

log("=============================================");

log("= 🛠 TypeScript Decorator Playground Loaded!");
log(`=============================================`);
//test 1
log(`1. Creating a new instance of TestClass...`);
const test = new TestClass();
log(`---------------------------------------------`);
log(`2. Calling the greet method...`);
test.greet();
log(`---------------------------------------------`);
log(`3.  Validation decorator test...`);

try {
  test.performAction(10); // Should pass validation
  test.performAction(-5); // Should fail validation
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error("An unknown error occurred");
  }
}

log(`---------------------------------------------`);
