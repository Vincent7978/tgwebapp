import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    // { path: "/", redirect: '/market' },
    // { path: "/", component: "index" },
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: "/", redirect: '/index' },
        { path: "/index", component: "@/pages/index" },
      ],
    },
    // { path: "/", component: "@/pages/index" },
    // {
    //   path: '/',
    //   component: '@/layouts/navTabLayout',
    //   routes: [
    //     { path: "/", redirect: '/market' },
    //     { path: "/market", component: "@/pages/market/index.tsx" },
    //     { path: "/me", component: "@/pages/me/index.tsx" },
    //   ],
    // },
    // { path: "/market", component: "@/pages/market/index.tsx" },
    // { path: "/me", component: "@/pages/me/index.tsx" },
    // { path: "/docs", component: "docs" },
  ],
  plugins: ['umi-plugin-keep-alive'],
  npmClient: 'pnpm',
});
