"use strict";

module.exports = function(Tanantuser) {
  
  Tanantuser.observe('access', function logQuery(ctx, next) {
    console.log('Accessing %s matching %s', ctx.Model.modelName, ctx.query.where);
    next();
  });
  
  // operstionsl hookd for restrct access to the model
  Tanantuser.observe("access", function limitToTenant(ctx, next) {
    console.log("tanantuser observe access" );
    if(ctx.query.accessToken && ctx.query.userId){
      console.log("ctx.options.accessToken.userId = " +ctx.query.userId);
      console.log("ctx.options.accessToken = " +ctx.query.accessToken);
    }
    //ctx.options.accessToken.userId
    if(ctx.query.accessToken && ctx.query.userId ) {
      ctx.query.where = ctx.query.where || { id: ctx.query.userId };
    }else{
      console.log("else");
    }
 
    next();
  });
};
