import { Species } from './pokemon'

export interface Ability {
	ability?: Species
	is_hidden?: boolean
	slot?: number
}
