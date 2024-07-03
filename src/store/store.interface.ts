import { IAuthUser } from 'src/features/auth/interfaces/auth.interface';
import { INotification } from 'src/shared/header/interfaces/header.interface';

export interface IReduxState {
  authUser: IAuthUser;
  header: string;
  logout: boolean;
  // buyer: string;
  // seller: string;
  showCategoryContainer: boolean;
  notification: INotification;
}
