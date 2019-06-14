import { expect, should } from "chai";

import User from "../../src/models/user.model";

let testUser;
let defaultUser;

const masterUser = {
    email: "test@gmail.com",
    password: "password1",
    cities: ["Budapest"]
};

describe("Model: User", () => {
    before(async () => {
        await User.drop();
        await User.sync();
        testUser = await User.create(masterUser);
    });

    beforeEach(() => {
        defaultUser = {
            ...masterUser
        };
    });

    describe("#save()", () => {
        it("should required email and password", async () => {
            const user = new User();

            try {
                await user.validate();
            } catch ({ errors }) {
                expect(errors.filter(e => e.path === "email").length).to.equal(
                    1
                );
                expect(
                    errors.filter(e => e.path === "password").length
                ).to.equal(1);
            }
        });

        it("should required a valid email", async () => {
            defaultUser.email = "notgoodemail";
            const user = new User(defaultUser);

            try {
                let validation = await user.validate();
            } catch ({ errors }) {
                expect(errors.filter(e => e.path === "email").length).to.equal(
                    1
                );
                user.email = "test@gmail.com";
                let validation = await user.validate();
                expect(validation).to.not.equal(null);
            }
        });

        it("should required a strong password", async () => {
            defaultUser.password = "not";
            const user = new User(defaultUser);
            try {
                let validation = await user.validate();
                expect(validation).to.equal(null);
            } catch ({ errors }) {
                if (errors) {
                    expect(
                        errors.filter(e => e.path === "password").length
                    ).to.equal(1);

                    user.password = "password1";
                    validation = await user.validate();
                    expect(validation).to.not.equal(null);
                }
            }
        });
    });

    describe("#authenticateUser()", () => {
        it("should be authenticated if good password", () => {
            expect(testUser.authenticateUser(masterUser.password)).to.equal(
                true
            );
        });

        it("should return an error if no good password", () => {
            expect(testUser.authenticateUser("notgoodpassword")).to.equal(
                false
            );
        });
    });

    describe("#toJSON()", () => {
        it("should return _id", () => {
            const jsonUser = testUser.toJSON();
            expect(jsonUser).to.haveOwnProperty("id");
        });

        it("should return email", () => {
            const jsonUser = testUser.toJSON();
            expect(jsonUser).to.haveOwnProperty("email");
        });

        it("should not return password", () => {
            const jsonUser = testUser.toJSON();
            expect(jsonUser).to.not.haveOwnProperty("password");
        });
    });

    describe("#toAuthJSON()", () => {
        it("should return _id", () => {
            const jsonUser = testUser.toAuthJSON();
            expect(jsonUser).to.haveOwnProperty("id");
        });

        it("should return token", () => {
            const jsonUser = testUser.toAuthJSON();
            expect(jsonUser).to.haveOwnProperty("token");
        });

        it("should not return password", () => {
            const jsonUser = testUser.toAuthJSON();
            expect(jsonUser).to.not.haveOwnProperty("password");
        });
    });

    describe("#toReset", () => {
        it("should reset user", () => {
            User.drop();
            User.sync();
        });
    });
});
