'use strict';

module.exports = function(Tanant) {
    console.log("Tenant Methods");

    
    Tanant.observe('before save', function logQuery(ctx, next) {
        console.log('before save %s matching %s', ctx.Model.name, ctx.isNewInstance);
        next();
    });

    Tanant.observe('after save', function logQuery(ctx, next) {
        console.log('after save %s matching %s', ctx.name, ctx.isNewInstance);
        next();
    });
};
