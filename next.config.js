/** @type {import('next').NextConfig} */
const nextConfig = {
    // Strict Mode enables the following checks in development: /
    // Your components will re-render an extra time to find bugs caused by impure rendering.
    // Your components will re-run Effects an extra time to find bugs caused by missing Effect cleanup.
    // Your components will be checked for usage of deprecated APIs.
    reactStrictMode: true,
    /* The application has enabled swcMinify in next.config.js. 
        By opting in minification will happen using the SWC minifier instead of Terser. 
        This new minifier is 7x faster than Terser with comparable output. 
        We're actively working on optimizing the output size and minification speed further.  */
    swcMinify: true,
    // by adding TRUE, Maintain previous page scroll position on browser back button on Next.js site
    // experimental: { scrollRestoration: false },
    images: { domains: ["lh3.googleusercontent.com"] },
};

module.exports = nextConfig;
