// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import("@docusaurus/types").Config} */
const config = {
    title: "CloudStudio Docs",
    tagline: 'Visualizing Cloud IaC for Seamless Infrastructure Management',
    // url: "https://cloudrawdev.github.io",
    url: "https://docs.cstudio.app",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/simbol3.png",
    organizationName: "cloudrawdev",
    projectName: "cloudstudio-docs",
    i18n: {
        defaultLocale: "ko",
        locales: ["ko", "en", "ja", "de", "it", "es"]
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
                    }
                },
                blog: {
                    routeBasePath: "release",
                    blogSidebarTitle: "Release Note",
                    blogSidebarCount: "ALL",
                    path: "blog"
                },
                theme: {
                    customCss: require.resolve("./src/scss/_custom.scss")
                }
            })
        ]
    ],

    plugins: [
        "docusaurus-plugin-sass",
        [
            "@docusaurus/plugin-content-docs",
            {
                id: "docs-faq",
                path: "docs-faq",
                routeBasePath: "docs-faq",
                sidebarPath: require.resolve("./sidebars.js")
            }
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
                highlightSearchTermsOnTargetPage: true
            }
        ]
    ],

    themeConfig:
        /** @type {import("@docusaurus/preset-classic").ThemeConfig} */
        ({
            metadata: [
                {
                    name: 'keywords',
                    content: 'CloudStudio, IaC Visualization, Cloud Infrastructure, Terraform GUI, DevOps, Cloud Security'
                },
                {
                    name: 'description',
                    content: 'CloudStudio Official Docs: Visualize cloud infrastructure with an intuitive GUI. Manage IaC, estimate costs, and audit security all in one place.'
                },
                {
                    property: 'og:title',
                    content: 'CloudStudio Docs | Visual IaC Management Service'
                },
                {
                    property: 'og:description',
                    content: 'Design, deploy, and manage your cloud infrastructure visually with CloudStudio.'
                },
                {
                    property: 'og:image',
                    content: 'https://cstudio.app/images/mainLogo/mainCloudStudio.png'
                },
            ],
            navbar: {
                title: "",
                logo: {
                    alt: "cloudstudio Logo",
                    src: "img/cloudstudio_logo.png",
                    srcDark: "img/cloudstudio_logo_white.png",
                    className: "navbarLogo"
                },
                items: [
                    {
                        to: "/docs/category/시작하기",
                        label: "Docs",
                        position: "left",
                        activeBaseRegex: `/docs/`
                    },
                    {
                        to: "/release",
                        label: "Release",
                        position: "left",
                        activeBaseRegex: `/release/`
                    },
                    {
                        href: "https://cstudio.app/",
                        label: "CloudStudio",
                        position: "right",
                        className: "btnTrial"
                    },
                    {
                        type: "localeDropdown",
                        position: "right"
                    }
                ]
            },
            footer: {},
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme
            }
        })
}

module.exports = config
