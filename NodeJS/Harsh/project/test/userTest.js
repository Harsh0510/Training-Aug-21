const chai = require("chai");
const should = require("chai").should();
const server = require("../app");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

// Assertion Style
describe("test service api", () => {
  describe("GET /categories", () => {
    it("should return all categories", (done) => {
      chai
        .request(server)
        .get("/category")
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("array");
          done();
        });
    });
  });
});
