import { type RouteConfig, index, layout } from "@react-router/dev/routes";

export default [
    layout("routes/admin/admin-layout.tsx", [
        index("routes/admin/dashboard.tsx"),
        index("routes/admin/all-user.tsx"),
    ]),
    
] satisfies RouteConfig;