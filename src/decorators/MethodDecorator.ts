export function loggedMethod<This, Args extends any[], Return>(
  target: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<
    This,
    (this: This, ...args: Args) => Return
  >
) {
  const methodName = String(context.name);

  function replacementMethod(this: This, ...args: Args): Return {
    console.log(`[METHOD DECORATOR] Entering method '${methodName}'.`);
    const result = target.call(this, ...args);
    console.log(`[METHOD DECORATOR] Exiting method '${methodName}'.`);
    return result;
  }

  return replacementMethod;
}
