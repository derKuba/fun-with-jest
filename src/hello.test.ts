import {sayHello} from "./hello";

describe("SayHello", ()=> {

    it("should say hello", ()=>{

        expect(sayHello("Kuba")).toBe("Hello Kuba!");
    });
});