"use strict";

module.exports = function(Tanantuser) {
  
  Tanantuser.observe('access', function logQuery(ctx, next) {
    console.log('Accessing %s matching %s', ctx.Model.modelName, ctx.query.where);
    next();
  });
  
  // operstionsl hookd for restrct access to the model
  Tanantuser.observe("access", function limitToTenant(ctx, next) {
	  console.log("tanantuser observe access");
    if (ctx.query.tanantId) {
	    console.log("if");
      var tanantId = ctx.query.tanantId;
      ctx.query.where = ctx.query.where || { tanantId: tanantId };
    }else{
		  console.log("else");
    }
    next();
  });
};
