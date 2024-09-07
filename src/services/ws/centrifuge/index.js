import { singleton } from './init'

/**
 * @var { Centrifuge } centrifuge
 **/
export const useCentrifuge = () => singleton.getInstance();
