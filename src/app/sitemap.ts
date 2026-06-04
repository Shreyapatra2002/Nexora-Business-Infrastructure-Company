import type { MetadataRoute } from "next";

const base = "https://nexoraglobal.in";

const routes = [
  "",
  "/about",
  "/verticals",
  "/verticals/zivara",
  "/verticals/bengal-aura",
  "/verticals/beautyglam",
  "/verticals/yugabyte",
  "/saas",
  "/industries",
  "/process",
  "/case-studies",
  "/engagement",
  "/blog",
  "/blog/infrastructure-before-campaigns",
  "/blog/kpi-layers-for-msmes",
  "/blog/event-led-brand-lift",
  "/contact",
  "/client-login",
  "/employee-login",
  "/landing/consultation",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
