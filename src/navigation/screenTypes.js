import AppTabViewBottom from '../component/AppTabViewBottom';
import GiftDetail from '../screen/authentication/Home/GiftDetail';

export const APP_SCREEN = {
  UN_AUTHORIZE: 'UN_AUTHORIZE',
  LOGIN: 'LOGIN',
};

export const StackAuthentication = [
  { name: 'Home', component: AppTabViewBottom },
  { name: 'GiftDetail', component: GiftDetail },
];
