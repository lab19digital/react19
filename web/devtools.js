// Get the Redux Chrome inspector running
// https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd

const devtool = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

// Ignore redux form since it spams redux devtools
// You can change this to ignore whatever else you want
export default devtool && devtool({
  actionsBlacklist: [
    '@@redux-form/BLUR',
    '@@redux-form/CHANGE',
    '@@redux-form/DESTROY',
    '@@redux-form/FOCUS',
    '@@redux-form/TOUCH',
    '@@redux-form/UNTOUCH',
    '@@redux-form/INITIALIZE',
    '@@redux-form/RESET',
    '@@redux-form/REGISTER_FIELD',
    '@@redux-form/UNREGISTER_FIELD',
    '@@init'
  ]
}) || false;
