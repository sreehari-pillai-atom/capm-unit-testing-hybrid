const cds = require("@sap/cds");

module.exports = cds.service.impl(async function (srv) {
    this.on("northWindProducts" , async(req)=>{
        let northwindConnection = await cds.connect.to({
            kind: "rest",
            credentials: {
                destination: "Northwind"
            }
        });
        console.log("read the data from northwind");
        let data = await northwindConnection.get("/northwind/northwind.svc/Products?$top=10&$format=json");
        return data.value.map((product)=>{
            return {
                ProductID : product.ProductID ,
                ProductName : product.ProductName
            }
        });
    })
});