//Include shared-utils to get the base controller functionalities
var base = require("./base.data");

var AppConfig = {

    //Methods
    GetAppConfig: function () {
        debugger;
        base.MongoClient.connect(con => {
            const collection = base.MongoClient.db(base.Settings.dbname).collection("AppResource");
            d = collection.find().toArray(function (err, result) {                
                if (err) throw err;
                AppConfig.Configs = result;
                base.MongoClient.close();
                return result;
            });
        });
    },

    GetAppConfigByKey: function (_key) {
        base.MongoClient.connect(err => {
            var query = { Key: _key };
            const collection = base.MongoClient.db(base.Settings.dbname).collection("ApplicationConfiguration");
            d = collection.find(query).toArray(function (err, result) {
                base.MongoProvider.Client.close();
                if (err) throw err;
                Configs = result;
            });
        });
    }
};


module.exports = AppConfig;

