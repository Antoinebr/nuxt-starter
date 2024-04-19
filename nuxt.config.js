export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    // ssr: false,
    mode: "spa",
    router: {
        mode: 'hash'
    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Antoine project starter',
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: ''
            },
            {
                name: 'format-detection',
                content: 'telephone=no'
            }
        ],
        link: [{
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap' // font-family: 'Roboto', sans-serif;
            }
        ],
        // script:[
        //   {
        //     src:"https://maps.googleapis.com/maps/api/js?key=AIzaSyAL1Irzjqs89Z2XRhmcPclbK_eTW8yuKfA&libraries=places"
        //   }
        // ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/static/css/main.css',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['~/plugins/main.js'],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        [
            '@nuxtjs/firebase',
            {
                config: {
                    apiKey: "qsdqsdqdsqsdqds",
                    authDomain: "hs-app-2ab94.firebaseapp.com",
                    projectId: "hs-app-2ab94",
                    storageBucket: "hs-app-2ab94.appspot.com",
                    messagingSenderId: "207230362199",
                    appId: "1:207230362199:web:e4f4f4ab8ecae185a47912"
                },
                services: {
                    auth: true, // Just as example. Can be any other service.
                    firestore: true,
                    functions: true,
                    storage: true,
                    database: true
                }
            }
        ]
    ],

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            "name": "Antoine project starter",
            "short_name": "Antoine starter",
            "icons": [
                {
                    "src": "./static/android-chrome-192x192.png",
                    "sizes": "192x192",
                    "type": "image/png"
                },
                {
                    "src": "./static/android-chrome-512x512.png",
                    "sizes": "512x512",
                    "type": "image/png"
                }
            ],
            "theme_color": "#ffffff",
            "background_color": "#ffffff",
            "display": "standalone"
        },
        icon: {
            /* icon options */
            source: './static/icon.png'
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    publicRuntimeConfig: {
        devAPI: process.env.DEV_API,
        prodAPI: process.env.PROD_API,
    },
    layoutTransition: {
        name: 'layout',
        mode: 'out-in'
    }
}