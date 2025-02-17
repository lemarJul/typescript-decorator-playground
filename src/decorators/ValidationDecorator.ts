// src/decorators/ValidationDecorator.ts

type ValidationSchema = {
  [key: string]: (value: any) => boolean;
};

function Validate(schema: ValidationSchema) {
  return function (target: any, context: ClassMethodDecoratorContext) {
    return function (this: any, ...args: any[]) {
      // Validate arguments based on the schema
      for (const [key, validator] of Object.entries(schema)) {
        if (!validator(args[Number(key)])) {
          throw new Error(
            `Validation failed for argument ${key}: ${args[Number(key)]}`
          );
        }
      }

      return target.call(this, ...args);
    };
  };
}

export { Validate };
