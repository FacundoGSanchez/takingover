const models = {
    
    userModel : require('./nosql/modelSystemAdmin/user'),
    contactModel : require('./nosql/modelData/contact'),
    propertyModel : require('./nosql/modelData/property'),
    moduleModel : require('./nosql/modelData/module'),
    
    clientModel : require('./nosql/modelModules/client'),
    productModel : require('./nosql/modelModules/product'),
    providerModel : require('./nosql/modelModules/provider'),
    salesModel : require('./nosql/modelModules/sales'),
    shoppingModel : require('./nosql/modelModules/shopping'),
    
    typePropertyModel : require('./nosql/modelReferences/typeProperty'),
    typeValueTransactionModel : require('./nosql/modelReferences/typeValueTransaction'),
    
    userModel : require('./nosql/modelSystemAdmin/user'),

}

module.exports = models