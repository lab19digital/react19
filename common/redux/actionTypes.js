/* @flow */

// Define all our action types

// Note: Avoid adding actions like
// LOGIN_ERROR

// Since we're using FSA compliant actions
// we can specify the error in the payload
// of the action that failed, and handle
// the error within the corresponding reducer.
export const Types = {

  // User interface
  UI_DRAWER_OPEN:     'APP/UI/DRAWER_OPEN',
  UI_DRAWER_CLOSE:    'APP/UI/DRAWER_CLOSE',

  // Login
  LOGIN_REQUEST:      'APP/LOGIN/REQUEST',
  LOGIN_SUCCESS:      'APP/LOGIN/SUCCESS',
};

// Prepare action types as special Flow types
// This enforces the correct structure
// of each action creator
// Using flow-runtime we'll observe errors
// unless the structure is respected
// FSA is observed, for more info see:
// https://github.com/acdlite/flux-standard-action

export type Type =
  { type: Types.LOGIN_REQUEST,      payload: { username: string, password: string}, meta: ?Object }
| { type: Types.LOGIN_SUCCESS,      payload: { user: Object}, meta: ?Object }
| { type: Types.UI_DRAWER_OPEN,     payload: void, meta: ?Object }
| { type: Types.UI_DRAWER_CLOSE,    payload: void, meta: ?Object };
