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
  pubs: {
    path: "/publications",
    title: "publications",
  },
  presos: {
    path: "/presentations",
    title: "presentations",
  },
  about: {
    path: "/about",
    title: "about",
  },
};

export const SITE = {
  // Your site's detail?
  name: "Remote Synthesis",
  title: "Remote Synthesis",
  description: "The personal blog of Brian Rinaldi",
  url: "https://remotesynthesis.com",
  mastodonUrl: "https://mastodon.xyz/@remotesynth",
  listDrafts: true,
  // description ?
};

export const PAGE_SIZE = 8;
