import { RolEntity } from '../../rol/rol.entity';

export interface UserInterface {
   id: number;
   firstname: string;
   lastname: string;
   address: string;
   electorkey: string;
   telephone: string;
   email: string;
   password: string;
   updatedAt: Date;
   id_rol: RolEntity;
}
