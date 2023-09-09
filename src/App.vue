<script></script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/transactions" class="nav-link"
              >Transactions</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/newTransaction" class="nav-link"
              >New Transaction</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <main class="py-4">
    <router-view />
  </main>
</template>

<style scoped></style>
