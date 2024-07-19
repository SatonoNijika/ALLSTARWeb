import { createRouter, createWebHashHistory } from "vue-router";
import LayoutHome from '@/layout/index.vue';
import LayoutAbout from '@/layout/index2.vue';
import LayoutService from '@/layout/index3.vue';
import LayoutCommunicate from '@/layout/index4.vue';
import LayoutProduct from '@/layout/index5.vue';
import LayoutTest from '@/layout/index6.vue';
import LayoutSTARPJ from '@/layout/index7.vue';
import LayoutUSTAR from '@/layout/index8.vue';
import LayoutDownload from '@/layout/index9.vue';
import LayoutRequire from '@/layout/index10.vue';
import LayoutCommentQA from '@/layout/index11.vue';
import LayoutCompanySNS from '@/layout/index12.vue';
import LayoutJoinUS from '@/layout/index13.vue';

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: LayoutHome,
        children: [
            {
                path: "",
                name: "HomePage",
                component: () => import("@/views/Home/index.vue"),
            },
        ]
    },
    {
        path: '/about',
        name: 'About',
        component: LayoutAbout,
        children: [
            {
                path: "",
                name: "AboutPage",
                component: () => import("@/views/About/index.vue"),
            },
        ]
    },
    {
        path: '/communicate',
        name: 'Communicate',
        component: LayoutCommunicate,
        children: [
            {
                path: "",
                name: "CommunicatePage",
                component: () => import("@/views/Communicate/index.vue"),
            },
        ]
    },
    {
        path: '/service',
        name: 'Service',
        component: LayoutService,
        children: [
            {
                path: "",
                name: "ServicePage",
                component: () => import("@/views/Service/index.vue"),
            },
        ]
    },
    {
        path: '/product',
        name: 'Product',
        component: LayoutProduct,
        children: [
            {
                path: "",
                name: "ProductPage",
                component: () => import("@/views/Product/index.vue"),
            },
        ]
    },
    {
        path: '/starpj',
        name: 'STARPJ',
        component: LayoutSTARPJ,
        children: [
            {
                path: "",
                name: "STARPJPage",
                component: () => import("@/views/STARPJ/index.vue"),
            },
        ]
    },
    {
        path: '/ustar',
        name: 'USTAR',
        component: LayoutUSTAR,
        children: [
            {
                path: "",
                name: "USTARPage",
                component: () => import("@/views/USTAR/index.vue"),
            },
        ]
    },
    {
        path: '/test',
        name: 'Test',
        component: LayoutTest,
        children: [
            {
                path: "",
                name: "TestPage",
                component: () => import("@/views/Test/index.vue"),
            },
        ]
    },
    {
        path: '/download',
        name: 'Download',
        component: LayoutDownload,
        children: [
            {
                path: "",
                name: "DownloadPage",
                component: () => import("@/views/Download/index.vue"),
            },
        ]
    },
    {
        path: '/require',
        name: 'Require',
        component: LayoutRequire,
        children: [
            {
                path: "",
                name: "RequirePage",
                component: () => import("@/views/Require/index.vue"),
            },
        ]
    },
    {
        path: '/commentqa',
        name: 'CommentQA',
        component: LayoutCommentQA,
        children: [
            {
                path: "",
                name: "CommentQAPage",
                component: () => import("@/views/CommentQA/index.vue"),
            },
        ]
    },
    {
        path: '/companysns',
        name: 'CompanySNS',
        component: LayoutCompanySNS,
        children: [
            {
                path: "",
                name: "CompanySNSPage",
                component: () => import("@/views/CompanySNS/index.vue"),
            },
        ]
    },
    {
        path: '/joinus',
        name: 'JoinUS',
        component: LayoutJoinUS,
        children: [
            {
                path: "",
                name: "JoinUSPage",
                component: () => import("@/views/JoinUS/index.vue"),
            },
        ]
    },
    // 捕获所有未定义的路由并重定向到主页或404页面
    {
        path: '/:catchAll(.*)',
        redirect: '/home'
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;
