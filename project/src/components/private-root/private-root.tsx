import {AppRoute, AuthorizationStatus} from '../../const';
import {Navigate} from 'react-router-dom';

type PrivateRootProps = {
  status: AuthorizationStatus,
  children: JSX.Element
}
const PrivateRoot = ({status, children}: PrivateRootProps): JSX.Element => (
  status === AuthorizationStatus.Auth
    ? children
    : <Navigate to={AppRoute.SignIn}/>
);

export default PrivateRoot;
