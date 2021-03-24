import { Action } from '../entities/action.entity';

// @ts-ignore
const actions: Array<Partial<Action>> = [
  {
    id: 1,
    name: 'CREATE',
    // @ts-ignore
    description: 'Permite la creacion de cualquier valor en el modulo selecionado',
    icon: '',
    isDefault: true,
  },
  {
    id: 2,
    name: 'READ',
    // @ts-ignore
    description: 'Permite ver cualquier valor en el modulo selecionado',
    icon: '',
    isDefault: true,
  },
  {
    id: 3,
    name: 'UPDATE',
    // @ts-ignore
    description: 'Permite la actualizacion de cualquier valor en el modulo selecionado',
    icon: '',
    isDefault: true,
  },
  {
    id: 4,
    name: 'DELETE',
    // @ts-ignore
    description: 'Permite la eliminacion de cualquier valor en el modulo selecionado siempre y cuando se permita por el sistema',
    icon: '',
    isDefault: true,
  },
];

export enum ActionsEnum {
  CREATE = 1,
  READ = 2,
  UPDATE = 3,
  DELETE = 4,
}

export default actions;
