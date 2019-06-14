import { expect, should } from "chai";

import City from "../../src/models/city.model";

describe("Model: City", () => {
    it("should total cities match", async () => {
        let count = await City.count();
        expect(count).equal(209579);
    });
});
