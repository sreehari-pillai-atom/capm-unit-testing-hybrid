const cds = require("@sap/cds");

const chai = require("chai");
// const chaiHttp = require("chai-http");
// chai.use(chaiHttp);
chai.should();

let service = cds.test("serve",'--profile' ,'hybrid','--resolve-bindings' );
const { GET, POST , expect , axios } = service; 

jest.setTimeout(30000);
const auth = {
    auth: {
        username: 'sreeharip',
        password: 'password'
    }
};

describe("Starting service", () => {

    it("Metadata retrieval", async () => {
        let metadata = await GET("/odata/v4/my/$metadata", auth);
        expect(metadata).status(200);
        //this fails because the database binding is not resolved
    });

    it("Northwind Connection", async () => {
        let testOutcome = await GET("/odata/v4/my/northWindProducts()", auth);
        expect(testOutcome).status(200);
    });

});