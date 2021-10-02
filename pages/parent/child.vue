<template>
    <div>
    <h1>I am the child view</h1>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/parent/child">Child</NuxtLink>
        </li>
        <li>
          <NuxtLink to="../">Child 2</NuxtLink>
        </li>
      </ul>
    </nav>
    <NuxtChild/>
  </div>
</template>
<style scoped>
ul {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}
li {
  margin: 0 0.5rem;
  padding: 0.25rem;
  font-size: 1rem;
}
</style>