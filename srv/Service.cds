using { db  } from '../db/Database';

service MyService {

    entity Products as projection on db.Product;
    function northWindProducts() returns array of {
        ProductID : Integer; 
        ProductName : String(50);
    }

}