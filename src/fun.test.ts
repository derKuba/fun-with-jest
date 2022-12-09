jest.mock("uuid", () => {
  const originalModule = jest.requireActual("uuid");
  return {
    __esModule: true,
    ...originalModule,

    v4: () => "42",
  };
});

const myPromise = new Promise((resolve, reject) => {
  resolve("kuba");
});

jest.mock("node-fetch", () => {
  const originalModule = jest.requireActual("uuid");
  return {
    __esModule: true,
    ...originalModule,
    default: () => ({
      ok: true,
      json: () => myPromise,
    }),
  };
});

import Fun from "./fun";

describe("Fun", () => {
  let fun;
  beforeEach(() => {
    fun = new Fun();
  });

  test.each([
    [1, 1, 2],
    [1, 2, 3],
    [2, 1, 3],
  ])(".add(%i, %i)", (a, b, expected) => {
    expect(fun.sum(a, b)).toBe(expected);
  });

  it("should printId", () => {
    const expected = ["odd", "even"];
    expect(expected).toContain(fun.printId());
  });

  // https://derkuba.de/content/posts/stenciljs/adress-app-tests-part-iii/
  xit("should create a uuid", async () => {
    const uuid = fun.createUUID();
    expect(uuid.replace("kuba_", "")).toMatch(
      /\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/
    );
  });

  it("should create a uuid", async () => {
    const uuid = fun.createUUID();
    expect(uuid).toBe("kuba_42");
  });

  it("should make a snapshot of renderHTML", () => {
    expect(fun.renderHTML({ title: "Jest", name: "jacob" }))
      .toMatchInlineSnapshot(`
"
            <html>
                <head>
                    <title>Jest</title>
                </head>
                <body>
                    Hello jacob
                </body>
            </html>
        "
`);
  });

  it("should send a request", async () => {
    const character = await fun.fetchCharacter();
    expect(character).toBe("kuba");
  });
});
