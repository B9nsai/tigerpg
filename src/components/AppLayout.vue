<script setup lang="ts"></script>

<template>
  <v-responsive class="border rounded">
    <v-app>
      <v-app-bar :elevation="8">
        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Application Bar</v-app-bar-title>

        <template v-slot:append>
          <v-btn icon="mdi-heart"></v-btn>

          <v-btn icon="mdi-magnify"></v-btn>

          <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
      </v-app-bar>

      <v-navigation-drawer>
        <v-list>
          <v-list-item>
            <RouterLink to="/">Home</RouterLink>
          </v-list-item>

          <v-list-item>
            <RouterLink to="/about">About</RouterLink>
          </v-list-item>

          <v-list-item>
            <RouterLink to="/game">Game</RouterLink>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <v-container class="h-64">
          <slot />
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>
</template>
