import { RolEntity } from '../../rol/rol.entity';

export interface UserInterface {
  readonly firstname: string;
  readonly lastname: string;
  readonly address: string;
  readonly electorkey: string;
  readonly telephone: string;
  readonly email: string;
  readonly password: string;
  readonly id_rol: RolEntity;
}
