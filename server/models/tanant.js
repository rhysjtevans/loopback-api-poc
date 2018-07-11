'use strict';

module.exports = function(Tanant) {
    console.log("Tenant Methods");

    
    Tanant.observe('after execute', function logQuery(ctx, next) {
        console.log('Accessing %s matching %s', ctx.Model.modelName, ctx.query.where);
        next();
      });
};
