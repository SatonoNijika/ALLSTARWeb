import { createRouter, createWebHashHistory } from "vue-router";
import LayoutHome from '@/layout/index.vue'
import LayoutAbout from '@/layout/index2.vue'
import LayoutService from '@/layout/index3.vue'
import LayoutCommunicate from '@/layout/index4.vue'
import LayoutProduct from '@/layout/index5.vue'
import LayoutTest from '@/layout/index6.vue'
import LayoutSTARPJ from '@/layout/index7.vue'
import LayoutUSTAR from '@/layout/index8.vue'
import LayoutDownload from '@/layout/index9.vue'
import LayoutRequire from '@/layout/index10.vue'
import LayoutCommentQA from '@/layout/index11.vue'
import LayoutCompanySNS from '@/layout/index12.vue'
import LayoutJoinUS from '@/layout/index13.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: LayoutHome,
        children: [
            {
                path: "Home",
                name: "Home",
                component: () => import("@/views/Home/index.vue"),
            },
        ]
    },
    {
        path: '/',
        name: 'About',
        component: LayoutAbout,
        children: [
            {
                path: "About",
                name: "About",
                component: () => import("@/views/About/index.vue"),
            },
        ]
    },
    {
        path: '/',
        name: 'Communicate',
        component: LayoutCommunicate,
        children: [
            {
                path: "Communicate",
                name: "Communicate",
                component: () => import("@/views/Communicate/index.vue"),
            },
        ]
    },
    {
        path: '/',
        name: 'Service',
        component: LayoutService,
        children: [
            {
                path: "Service",
                name: "Service",
                component: () => import("@/views/Service/index.vue"),
            },
        ]
    },
    {
        path: '/',
        name: 'Product',
        component: LayoutProduct,
        children: [
            {
                path: "Product",
                name: "Product",
                component: () => import("@/views/Product/index.vue"),
            },
        ]
    },
    {
        path: '/',
        name: 'STARPJ',
        component: LayoutSTARPJ,
        children: [
            {
                path: "STARPJ",
                name: "STARPJ",
                component: () => import("@/views/STARPJ/index.vue"),
            },
        ]
    },
    {
        path: '/',
        name: 'USTAR',
        component: LayoutUSTAR,
        children: [
            {
                path: "USTAR",
                name: "USTAR",
                component: () => import("@/views/USTAR/index.vue"),
            },
        ]
    },
    {
        path: '/',
        name: 'Test',
        component: LayoutTest,
        children: [
            {
                path: "Test",
                name: "Test",
                component: () => import("@/views/Test/index.vue"),
            },
        ]
    },
    {
        path: '/',
        name: 'Download',
        component: LayoutDownload,
        children: [
            {
                path: "Download",
                name: "Download",
                component: () => import("@/views/Download/index.vue"),
            },
        ]
    },
    {
        path: '/',
        name: 'Require',
        component: LayoutRequire,
        children: [
            {
                path: "Require",
                name: "Require",
                component: () => import("@/views/Require/index.vue"),
            },
        ]
    },
    {
        path: '/',
        name: 'CommentQA',
        component: LayoutCommentQA,
        children: [
            {
                path: "CommentQA",
                name: "CommentQA",
                component: () => import("@/views/CommentQA/index.vue"),
            },
        ]
    },
    {
        path: '/',
        name: 'CompanySNS',
        component: LayoutCompanySNS,
        children: [
            {
                path: "CompanySNS",
                name: "CompanySNS",
                component: () => import("@/views/CompanySNS/index.vue"),
            },
        ]
    },
    {
        path: '/',
        name: 'JoinUS',
        component: LayoutJoinUS,
        children: [
            {
                path: "JoinUS",
                name: "JoinUS",
                component: () => import("@/views/JoinUS/index.vue"),
            },
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router