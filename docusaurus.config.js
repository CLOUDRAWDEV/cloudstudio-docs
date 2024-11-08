// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import("@docusaurus/types").Config} */
const config = {
    title: "CloudStudio Documents",
    tagline: "",
    // url: "https://cloudrawdev.github.io",
    url: "https://docs.cloudraw.kr",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/simbol3.png",
    organizationName: "cloudrawdev",
    projectName: "cloudstudio-docs",
    i18n: {
        defaultLocale: "ko",
        locales: ["ko", "en", "ja"],
    },

    presets: [
        [
            "classic",
            /** @type {import("@docusaurus/preset-classic").Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    routeBasePath: "docs",
                    path: "docs",
                    sidebarItemsGenerator: async ({
                        defaultSidebarItemsGenerator,
                        ...args
                    }) => {
                        const sidebarItems = await defaultSidebarItemsGenerator(
                            args
                        )
                        return sidebarItems
                    },
                },
                blog: {
                    routeBasePath: "release",
                    blogSidebarTitle: "Release Note",
                    blogSidebarCount: "ALL",
                    path: "blog",
                },
                theme: {
                    customCss: require.resolve("./src/scss/_custom.scss"),
                },
            }),
        ],
    ],

    plugins: [
        "docusaurus-plugin-sass",
        [
            "@docusaurus/plugin-content-docs",
            {
                id: "docs-faq",
                path: "docs-faq",
                routeBasePath: "docs-faq",
                sidebarPath: require.resolve("./sidebars.js"),
            },
        ]
    ],

    themes: [
        // ... Your other themes.
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            {
                hashed: true,
                language: ["en"],
                searchBarShortcutHint: true,
                searchResultContextMaxLength: 20,
                highlightSearchTermsOnTargetPage: true,
            },
        ],
    ],

    themeConfig:
        /** @type {import("@docusaurus/preset-classic").ThemeConfig} */
        ({
            navbar: {
                title: "",
                logo: {
                    alt: "cloudstudio Logo",
                    src: "img/cloudstudio_logo.png",
                    srcDark: "img/cloudstudio_logo_white.png",
                    className: "navbarLogo",
                },
                items: [
                    {
                        to: "/docs/category/시작하기",
                        label: "Docs",
                        position: "left",
                        activeBaseRegex: `/docs/`,
                    },
                    {
                        to: "/release",
                        label: "Release",
                        position: "left",
                        activeBaseRegex: `/release/`,
                    },
                    {
                        href: "https://cstudio.app/",
                        label: "CloudStudio",
                        position: "right",
                        className: "btnTrial",
                    },
                    {
                        type: "localeDropdown",
                        position: "right",
                    },
                ],
            },
            footer: {},
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
}

module.exports = config
