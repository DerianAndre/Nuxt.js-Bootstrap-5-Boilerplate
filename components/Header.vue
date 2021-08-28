<template>
  <header 
    class="header bg-light shadow py-3 mb-3"
    :class="{
      'navbar-top':    scrollPosition < scrollOffset,
      'navbar-scroll': scrollPosition > scrollOffset,
      'navbar-open':   navbarOpen
    }"
  >
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <button type="button" @click="navbarOpen = !navbarOpen" class="navbar-toggler collapsed d-none" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <i class="bi bi-list fs-1 text-light"></i>
        </button>

        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
          <i class="bi bi-bootstrap"></i>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-2 link-secondary">Overview</a></li>
          <li><a href="#" class="nav-link px-2 link-dark">Inventory</a></li>
          <li><a href="#" class="nav-link px-2 link-dark">Customers</a></li>
          <li><a href="#" class="nav-link px-2 link-dark">Products</a></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" class="form-control" placeholder="Search...">
        </form>

        <div class="dropdown text-end">
          <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/derianandre.png" alt="Derian André" width="32" height="32" class="avatar rounded-circle">
          </a>
          <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
            <li><a class="dropdown-item" href="#">New project...</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        navbarOpen:     false,
        scrollOffset:   100,
        scrollPosition: null,
      }
    },

    methods: {
      updateScroll() {
        this.scrollPosition = window.scrollY
      }
    },
    
    mounted() {
      this.updateScroll();
      window.addEventListener('scroll', this.updateScroll);
    }
  }
</script>