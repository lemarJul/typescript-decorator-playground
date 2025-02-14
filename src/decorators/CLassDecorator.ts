export function loggedClass<T extends { new (...args: any[]): {} }>(
  target: T,
  context: ClassDecoratorContext
) {
  // Triggered once, when the class is defined.
  // context is an object that contains information about the class being decorated.
  console.log(
    `[LOGGED_CLASS DECORATOR] Definition of ${target.name} Intercepted`
  );

  // Triggered each time an instance of the class is created.
  // return a new class that extends the original one
  return class extends target {
    constructor(...args: any[]) {
      super(...args);
      console.log(
        `[LOGGED_CLASS DECORATOR] Instance of ${context.name} Created.`
      );
    }
  };
}
