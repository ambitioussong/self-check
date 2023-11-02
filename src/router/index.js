import { createRouter, createWebHistory } from 'vue-router';
import SelfCheckView from '../components/SelfCheckView.vue';
import SettingsPage from '../components/SettingsPage.vue';

const routes = [
  { path: '/', component: SelfCheckView },
  { path: '/settings', component: SettingsPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
