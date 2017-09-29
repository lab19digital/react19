/* @flow */

// The payload carries the error
// when the error boolean is true
export const handleActionError = ( action, result ) => {
  const err = action.error ? action.payload : false;
  return result( err );
}

// FSA compliance means that our action
// carries a payload that supports an error
// and a meta object if we need it
// https://github.com/acdlite/flux-standard-action
export const createFSACompliantAction = ( type:string ) => {
  return function( data = {}, error ): Type {
    const actionData = {
      type: type,
      payload: (error: Error|void) || data,
      meta: data && data.meta || {}
    };

    if( error ){
      actionData.error = true;
    }

    return actionData;
  };
}

// Build actions into an object
// that we'll use inside components
// to dispatch actions
export const makeActions = ( obj:Object ) => {
  const actions = {};
  Object.keys(obj).forEach((k) => {
    const each = obj[k];
    actions[k] = createFSACompliantAction(each);
  });
  return actions;
}
