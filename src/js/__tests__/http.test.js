import fetchData from "../http.js";

test("should throw error", () => {
    expect(()=>{fetchData("https://test")}).toThrow("Mock this!");
});
