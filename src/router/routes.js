const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", name: "home", component: () => import("pages/HomePage.vue") },
      { path: "/upload", component: () => import("pages/UploadPage.vue") },
      {
        path: "/templates",
        component: () => import("pages/TemplatesPage.vue"),
      },
      { path: "/add_template", component: () => import("pages/AddTemplatePage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
