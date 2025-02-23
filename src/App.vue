<template>
  <n-config-provider :theme="lightTheme">
    <n-layout class="layout">
      <n-layout-header class="header">
        <div class="logo">
          <img src="./assets/icons/YJQSES.png" alt="logo" class="logo-img" />
          <span class="logo-text">七十二时.的工具箱</span>
        </div>
      </n-layout-header>
      <n-layout-content class="content">
        <router-view />
      </n-layout-content>
    </n-layout>
  </n-config-provider>
</template>

<script setup>
import { lightTheme } from 'naive-ui'
import { NConfigProvider, NLayout, NLayoutHeader, NLayoutContent } from 'naive-ui'
</script>

<style>
.layout {
  height: 100vh;
}

.header {
  height: 64px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  background: #fff9f5;
  border-bottom: 1px solid #e5e5e5;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-img {
  width: 32px;
  height: 32px;
  border-radius: 6px;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: bold;
  color: #714722;
}

.content {
  padding: 24px;
  background: #fff;
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #c0c0c0;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a0a0a0;
}
</style>