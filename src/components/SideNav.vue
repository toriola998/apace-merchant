<template>
    <div class="col-md-6 col-lg-3 col-xl-3">
          <ul class="list-group list-group-flush ml-5 mt-6">
            <li class="list-group-item bg-black">
              <i class="fa fa-user-circle-o color-white"></i>
              <router-link class="color-white ml-1 setting-lin" to="/settings">Profile</router-link>
            </li>
            <li class="list-group-item bg-black">
              <i class="fa fa-bell color-gray"></i>
              <router-link class="color-gray ml-1 setting-link" to="/notifications">Notifications</router-link>
            </li>
            <li class="list-group-item bg-black">
              <img src="@/assets/img/setting1.png" alt="" class="color-gray setting-img">
              <router-link class="color-gray ml-1 setting-link" to="/limits">Limits & Plans</router-link>
            </li>
            <li class="list-group-item bg-black">
              <img src="@/assets/img/setting2.png" alt="" class="color-gray setting-img">
              <router-link class="color-gray ml-1 setting-link" to="/rolesandpermissions">Roles & Permissions</router-link>
            </li>
            <li class="list-group-item bg-black">
              <img src="@/assets/img/setting3.png" alt="" class="color-gray setting-img">
              <router-link class="color-gray ml-1 setting-link" to="/marchantsfees">Merchant fees</router-link>
            </li>
            <li class="list-group-item bg-black">
              <img src="@/assets/img/setting4.png" alt="" class="color-gray setting-img">
              <router-link class="color-gray ml-1 setting-link" to="/loanpaymentoptions">Loan repayment options</router-link>
            </li>
          </ul>
        </div>
</template>

<script>
export default {
  name: 'SideNav'
}
</script>

<style scoped>
</style>
