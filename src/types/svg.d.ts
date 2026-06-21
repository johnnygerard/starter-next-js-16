// This file is needed because Next.js use `any` type for SVG imports in order to avoid conflicts with SVG plugins such as `@svgr/webpack`.

declare module "*.svg" {
  const content: import("next/image").StaticImageData;
  export default content;
}
