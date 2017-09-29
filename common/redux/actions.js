import { makeActions } from './actionHelpers';
import { Type, Types } from './actionTypes';

/* @flow */

// Dynamically create all actions. We also
// create the action with a specific Flow type
// Then we return FSA-compliant actions, see:
// https://github.com/acdlite/flux-standard-action
export const Actions = makeActions(Types);
