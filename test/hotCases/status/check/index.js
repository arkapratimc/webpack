import { value } from "./file";

it("call module.check api with false should return updatedModules correcttly", function (done) {
	expect(value).toBe(1);
	NEXT(require("./update")(done));
});
