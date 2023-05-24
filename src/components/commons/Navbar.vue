<template>
<header class="border-b border-gray-100">
  <generic-panel>
    <div class="navbar">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-50 rounded-box w-52">
            <li><a>Home</a></li>
            <li><a>Doctors</a></li>
            <li tabindex="0">
              <a class="justify-between">
                Clinics
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
              </a>
              <ul class="p-2 shadow bg-slate-50 rounded-box">
                <li><a>Outpatient Clinics</a></li>
                <li><a>Hospital OPD</a></li>
                <li><a>Skin Clinics</a></li>
                <li><a>Dental Clinics</a></li>
                <li><a>Corporate Clinics</a></li>
              </ul>
            </li>
            <li tabindex="0">
              <a class="justify-between">
                Diagnostics
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
              </a>
              <ul class="p-2 shadow bg-slate-50 rounded-box">
                <li><a>Diagnostic Centers</a></li>
                <li><a>Mobile Labs</a></li>
              </ul>
            </li>
            <li><a>Booking</a></li>
          </ul>
        </div>
        <img class="w-[120px] md:w-[160px]" src="../../assets/images/mycure-logo.png" alt="">
      </div>

      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li><a>Home</a></li>
          <li><a>Doctors</a></li>
          <li tabindex="0">
            <a>
              Clinics
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
            </a>
            <ul class="p-2 shadow bg-slate-50 rounded-box">
              <li><a>Outpatient Clinics</a></li>
              <li><a>Hospital OPD</a></li>
              <li><a>Skin Clinics</a></li>
              <li><a>Dental Clinics</a></li>
              <li><a>Corporate Clinics</a></li>
            </ul>
          </li>
          <li tabindex="0">
            <a>
              Diagnostics
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
            </a>
            <ul class="p-2 shadow bg-slate-50 rounded-box">
              <li><a>Diagnostic Centers</a></li>
              <li><a>Mobile Labs</a></li>
            </ul>
          </li>
          <li><a>Booking</a></li>
        </ul>
      </div>

      <div class="navbar-end">
        <a class="btn btn-sm md:btn-md btn-outline btn-primary mr-3">
          Log In
        </a>
        <a class="btn btn-sm md:btn-md btn-primary">
          Try for Free
          <i class="las la-arrow-right text-2xl"></i>
        </a>
      </div>
    </div>
  </generic-panel>
</header>
</template>

<script>
import GenericPanel from '@/components/commons/GenericPanel';
export default {
  components: {
    GenericPanel,
  },
  setup () {
    return {};
  },
};
</script>
