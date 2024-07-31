export const RESOURCE = 'permission';

// Actions
export const ACTIONS = {
  INDEX: 'index',
  SHOW: 'show',
  UPDATE: 'update',
}

// Resource Actions
export const RESOURCE_ACTIONS = {
  RESOURCE_INDEX: ACTIONS.INDEX + '-' + RESOURCE,
  RESOURCE_SHOW: ACTIONS.SHOW + '-' + RESOURCE,
  RESOURCE_UPDATE: ACTIONS.UPDATE + '-' + RESOURCE,
}
