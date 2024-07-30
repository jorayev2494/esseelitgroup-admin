export const RESOURCE = 'degree';

// Actions
export const ACTIONS = {
  INDEX: 'index',
  CREATE: 'create',
  SHOW: 'show',
  UPDATE: 'update',
  DELETE: 'delete',
}

// Resource Actions
export const RESOURCE_ACTIONS = {
  RESOURCE_INDEX: ACTIONS.INDEX + '-' + RESOURCE,
  RESOURCE_CREATE: ACTIONS.CREATE + '-' + RESOURCE,
  RESOURCE_SHOW: ACTIONS.SHOW + '-' + RESOURCE,
  RESOURCE_UPDATE: ACTIONS.UPDATE + '-' + RESOURCE,
  RESOURCE_DELETE: ACTIONS.DELETE + '-' + RESOURCE,
}
