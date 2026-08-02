import { UserRole } from '../../../../common/enums/user-role.enum';

export class RegisterResponseDto {
  id!: string;

  email!: string;

  isVerified!: boolean;

  role!: UserRole;
}
