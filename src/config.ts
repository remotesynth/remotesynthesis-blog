import type { NavItems } from "./types";

export const NAV_ITEMS: NavItems = {
  home: {
    path: "/",
    title: "home",
  },
  blog: {
    path: "/blog",
    title: "blog",
  },
  tags: {
    path: "/tags",
    title: "tags",
  },
  media: {
    path: "/publications",
    title: "publications",
  },
  about: {
    path: "/about",
    title: "about",
  },
};

export const SITE = {
  // Your site's detail?
  name: "Remote Synthesis",
  title: "Astro - Ink",
  description: "The personal blog of Brian Rinaldi",
  url: "https://astro-ink.vercel.app",
  mastodonUrl: "https://mastodon.xyz/@remotesynth",
  listDrafts: true,
  // description ?
};

export const PAGE_SIZE = 8;
