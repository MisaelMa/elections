// import { RolEntity } from '../../rol/rol.entity';

export class CreateUserDTO {
  readonly firstname: string;
  readonly lastname: string;
  readonly address: string;
  readonly electorkey: string;
  readonly telephone: string;
  readonly email: string;
           password: string;
  readonly confirm_password: string;
  // readonly id_rol: RolEntity;
}
