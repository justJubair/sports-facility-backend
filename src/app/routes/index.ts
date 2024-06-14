import { Router } from 'express';
// import { UserRoutes } from '../modules/user/user.route';
import { FacilityRoutes } from '../modules/facility/facility.route';
import { BookingRoutes } from '../modules/booking/booking.route';
import { AuthRoutes } from '../modules/auth/auth.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/facility',
    route: FacilityRoutes,
  },
  {
    path: '/',
    route: BookingRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
