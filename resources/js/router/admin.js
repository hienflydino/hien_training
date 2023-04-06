const admin = [
    {
        path: "/admin",
        component: () => import("../layouts/Admin.vue"),
        children: [
            {
                path: "users",
                name: "admin.users",
                component: () => import("../pages/admin/users/index.vue"),
            },
            {
                path: "users/create",
                name: "create",
                component: () => import("../pages/admin/users/create.vue"),
            },
            {
                path: "users/edit/:id",
                name: "edit",
                component: () => import("../pages/admin/users/edit.vue"),
            },
        ],
    },
];

export default admin;
