<template>
  <div class="layout">
    <header class="header">
      <router-link to="/" class="logo">
        <img src="@/assets/icons/YJQSES.png" alt="logo" class="logo-img" />
        <span class="logo-text">七十二时.的工具箱</span>
      </router-link>
    </header>
    <main class="content">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
/* 重置默认样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100%;
  overflow-x: hidden;
  background-image: url('@/assets/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
}

/* 页面切换动画 */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.layout {
  width: 100%;
  height: 100vh;
  background: transparent;
}

.header {
  height: 64px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(229, 229, 229, 0.5);
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}

.logo-img {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.logo-img:hover {
  transform: scale(1.05);
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 600;
  color: #594134;
  letter-spacing: 0.5px;
}

.content {
  padding: 24px;
  background: rgba(255, 255, 255, 0.15);
  min-height: calc(100vh - 64px);
  box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.03);
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.02);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  transition: background 0.3s ease;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.25);
}

.back-button {
  position: absolute;
  left: 24px;
  top: 50%;
  width: 40px;
  height: 40px;
  font-size: 24px;
  z-index: 100;
  background-color: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 16px;
  transition: background-color 0.3s ease;
}

.back-button:hover {
  background-color: #f5f5f5;
  transform: scale(1.1);
}
</style>