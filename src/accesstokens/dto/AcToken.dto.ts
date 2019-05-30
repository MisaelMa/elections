export class AcTokenDto {

  readonly user_id: number;
  readonly name: string;
  readonly token: string;
  readonly revoked: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly expiresAt: Date;
}
