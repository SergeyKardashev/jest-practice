const Ajax = require("./async");

describe("Ajax: echo", () => {
  // async based test of resolve
  test("should return value async", async () => {
    const result = await Ajax.echo("some data");
    expect(result).toBe("some data");
  });

  // promise based test of resolve
  test("should return value with promise", () => {
    return Ajax.echo("some data").then((data) => {
      expect(data).toBe("some data");
    });
  });

  // promise based test of reject with promise
  test("should return 'error' with promise", () => {
    return Ajax.echo().catch((err) => {
      expect(err).toBeInstanceOf(Error);
    });
  });

  // async based test of reject with async
  test("should return 'error' with async", async () => {
    try {
      await Ajax.echo();
    } catch (error) {
      expect(error.message).toBe("error");
    }
  });
});
