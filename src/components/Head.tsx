const CustomHead = ({
    title = "Nextjs Learning",
    description = "Learning ecommerce website",
    keywords = "learning",
    ogImage = "https://www.bnn.in.th/_nuxt/img/icon-search-not-found.5976b67.svg",
    canonicalUrl

}: {
    title?: string;
    description?: string;
    keywords?: string;
    ogImage?: string;
    canonicalUrl?: string;
}) => (
    <head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:image" content={ogImage} />
        <link rel="canonical" href={canonicalUrl} />
    </head>
);

export default CustomHead;
