<template>
  <li class="nav-item dropdown noti-dropdown">
    <a href="#" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
      <i class="far fa-bell"></i> <span class="badge badge-pill">3</span>
    </a>
    <div class="dropdown-menu notifications">
      <div class="topnav-dropdown-header">
        <span class="notification-title">Notifications</span>
        <a href="javascript:void(0)" class="clear-noti"> Clear All </a>
      </div>
      <div class="noti-content">
        <ul class="notification-list">
          <li class="notification-message">
            <a href="#">
              <div class="media d-flex">
                <span class="avatar avatar-sm flex-shrink-0">
                  <img class="avatar-img rounded-circle" alt="User Image" src="@/assets/img/user/user.jpg" />
                </span>
                <div class="media-body flex-grow-1">
                  <p class="noti-details">
                    <span class="noti-title">Jonathan Doe</span> Schedule
                    <span class="noti-title">his appointment</span>
                  </p>
                  <p class="noti-time">
                    <span class="notification-time">4 mins ago</span>
                  </p>
                </div>
              </div>
            </a>
          </li>
          <li class="notification-message">
            <a href="#">
              <div class="media d-flex">
                <span class="avatar avatar-sm flex-shrink-0">
                  <img class="avatar-img rounded-circle" alt="User Image" src="@/assets/img/user/user1.jpg" />
                </span>
                <div class="media-body flex-grow-1">
                  <p class="noti-details">
                    <span class="noti-title">Julie Pennington</span> has
                    booked her appointment to
                    <span class="noti-title">Ruby Perrin</span>
                  </p>
                  <p class="noti-time">
                    <span class="notification-time">6 mins ago</span>
                  </p>
                </div>
              </div>
            </a>
          </li>
          <li class="notification-message">
            <a href="#">
              <div class="media d-flex">
                <span class="avatar avatar-sm flex-shrink-0">
                  <img class="avatar-img rounded-circle" alt="User Image" src="@/assets/img/user/user2.jpg" />
                </span>
                <div class="media-body flex-grow-1">
                  <p class="noti-details">
                    <span class="noti-title">Tyrone Roberts</span> sent a
                    amount of $210 for his
                    <span class="noti-title">appointment</span>
                  </p>
                  <p class="noti-time">
                    <span class="notification-time">8 mins ago</span>
                  </p>
                </div>
              </div>
            </a>
          </li>
          <li class="notification-message">
            <a href="#">
              <div class="media d-flex">
                <span class="avatar avatar-sm flex-shrink-0">
                  <img class="avatar-img rounded-circle" alt="User Image" src="@/assets/img/user/user4.jpg" />
                </span>
                <div class="media-body flex-grow-1">
                  <p class="noti-details">
                    <span class="noti-title">Patricia Manzi</span> send a
                    message <span class="noti-title"> to his Mentee</span>
                  </p>
                  <p class="noti-time">
                    <span class="notification-time">12 mins ago</span>
                  </p>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="topnav-dropdown-footer">
        <a href="#">View all Notifications</a>
      </div>
    </div>
  </li>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>