import {RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),

  },

  {
    path: '/intro',
    component: () => import('layouts/MainLayoutIntro.vue'),
    children: [
      {path: '', component: () => import('pages/index_IndexPage.vue')},
      {path: 'intro1', component: () => import('pages/index_leaflet_foo.vue')},
      {path: 'intro2', component: () => import('pages/index_openlayers_foo.vue')},
      {path: 'intro3', component: () => import('pages/index_maptalks_foo.vue')},
    ],
  },


  {
    path: '/leaflet',
    component: () => import('layouts/MainLayoutLeaflet.vue'),
    children: [
      {path: '', component: () => import('pages/IndexPage.vue')},
      {path: 'lf1', component: () => import('pages/leaf/leaf_leaflet_f1.vue')},
      {path: 'lf3', component: () => import('pages/leaf/leaf_leaflet_f3.vue')},
      {path: 'lf4', component: () => import('pages/leaf/leaf_leaflet_f4.vue')},
      {path: 'lf5', component: () => import('pages/leaf/leaf_leaflet_f5.vue')},
      {path: 'bleaflet', component: () => import('pages/leaf/leaf_leaflet_foo.vue')},
      {path: 'bmaptalks', component: () => import('pages/maptalks_foo.vue')},
      {path: 'bmapbox', component: () => import('pages/mapbox_dde/mapdde_foo.vue')},
      {path: 'bcesium', component: () => import('pages/cesium_foo.vue')},
      {path: 'bwind', component: () => import('pages/leaf/leaf_leaflet_wind.vue')},
    ],
  },


  {
    path: '/openlayers',
    component: () => import('layouts/MainLayoutOpenLayers.vue'),
    children: [
      {path: '', component: () => import('pages/IndexPage.vue')},

      {path: 'ol1', component: () => import('pages/ol_openlayers_foo.vue')},
      {path: 'ol2', component: () => import('pages/ol_openlayers_show2.vue')},

    ],
  },

  {
    path: '/maptalks',
    component: () => import('layouts/MainLayoutMaptalks.vue'),
    children: [
      {path: '', component: () => import('pages/IndexPage.vue')},
    ],
  },
  {
    path: '/cesium',
    component: () => import('layouts/MainLayoutMapbox.vue'),
    children: [
      {path: '', component: () => import('pages/IndexPage.vue')},
      {path: 'bcesium', component: () => import('pages/cesium_foo.vue')},
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
