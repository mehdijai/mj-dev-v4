/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ["./"],
    prependData: `@import "~@styles/vars.scss";`,
  },
};

export default nextConfig;
