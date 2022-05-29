import {createRouter, createWebHistory} from 'vue-router'
import AddNewBusiness from './components/AddNewBusiness'
import AddNewShopper from './components/AddNewShopper'
import AddNewUser from './components/AddNewUser'
import AllGroupMarchants from './components/AllGroupMarchants'
import AllGroups from './components/AllGroups'
import AllGroupShoppers from './components/AllGroupShoppers'
import AllMarchants from './components/AllMarchants'
import AllMarchantsWithFilter from './components/AllMarchantsWithFilter'
import GroupPageMarchants from './components/GroupPageMarchants'
import GroupPageShopper from './components/GroupPageShopper'
import Limits from './components/Limits'
import LoanPaymentOptions from './components/LoanPaymentOptions'
import MarchantDetail from './components/MarchantDetail'
import MarchantsFees from './components/MarchantsFees'
import Merchantswithgraphs from './components/Merchantswithgraphs'
import Messages from './components/Messages'
import NewRolePermission from './components/NewRolePermission'
import NotificationList from './components/NotificationList'
import Notifications from './components/Notifications'
import Overview from './components/Overview'
import Profile from './components/Profile'
import Shoppers from './components/Shoppers'
import ShopperDetail from './components/ShopperDetail'
import ShoppersWithGraph from './components/ShoppersWithGraph'
import Shopperswithgraphs from './components/Shopperswithgraphs'
import TransactionDetail from './components/TransactionDetail'
import Transactions from './components/Transactions'
import RolesAndPermissions from './components/RolesAndPermissions'
import Comp from './components/Comp'
import Error from './components/Error'

const routes = [
    {
        name: 'Overview',
        component: Overview,
        path: '/'
    },
    {
        name: 'Comp',
        component: Comp,
        path: '/comp'
    },
    {
        name: 'ShoppersWithGraph',
        component: ShoppersWithGraph,
        path: '/money'
    },
    {
        name: 'AllMarchants',
        component: AllMarchants,
        path: '/marchants'
    },
    {
        name: 'Shopperswithgraphs',
        component: Shopperswithgraphs,
        path: '/shoppers'
    },
    {
        name: 'Transactions',
        component: Transactions,
        path: '/transactions'
    },
    {
        name: 'AllGroups',
        component: AllGroups,
        path: '/groups'
    },
    {
        name: 'Messages',
        component: Messages,
        path: '/messages'
    },
    {
        name: 'Profile',
        component: Profile,
        path: '/settings'
    },
    {
        name: 'Notifications',
        component: Notifications,
        path: '/notifications'
    },
    {
        name: 'Limits',
        component: Limits,
        path: '/limits'
    },
    {
        name: 'RolesAndPermissions',
        component: RolesAndPermissions,
        path: '/rolesandpermissions'
    },
    {
        name: 'MarchantsFees',
        component: MarchantsFees,
        path: '/marchantsfees'
    },
    {
        name: 'LoanPaymentOptions',
        component: LoanPaymentOptions,
        path: '/loanpaymentoptions'
    },
    {
        name: 'Error',
        component: Error,
        path: '/:pathMatch(.*)*'
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;