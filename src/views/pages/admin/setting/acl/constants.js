export const RESOURCE = 'setting';

// Actions
export const ACTIONS = {
  INDEX: 'index',
  ABOUT_US: 'about_us',
}

// Resource Actions
export const RESOURCE_ACTIONS = {
  RESOURCE_INDEX: ACTIONS.INDEX + '-' + RESOURCE,
  RESOURCE_ABOUT_US: ACTIONS.ABOUT_US + '-' + RESOURCE,
}
