"use strict";

module.exports = function(Item) {
  // operstionsl hookd for restrct access to the model
  Item.observe("access", function limitToTenant(ctx, next) {
    if (ctx.query.tanantId){
      var tanantId = ctx.query.tanantId;
      ctx.query.where = ctx.query.where || { tanantId: tanantId };
      
    }
    next();
  });
};
