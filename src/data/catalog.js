/**
 * Sample catalog for Leeps Supply Company.
 * Product identities are limited to the three verified discovery pages.
 * on_demand_fallback stays false. The internal demo key is not a Google ID.
 */

export const siteFlags = {
  on_demand_fallback: false,
  internalDemoKey: "leeps-sample-catalog-demo",
};

export const business = {
  name: "Leeps Supply Company",
  website: "https://www.leeps.com/",
  phone: "1-800-854-4373",
  phoneTel: "tel:+18008544373",
  phoneObserved: "1-219-661-7021",
  phoneObservedTel: "tel:+12196617021",
  email: null,
  town: "Lowell",
  region: "Indiana",
  street: null,
  postalCode: null,
  addressNote:
    "Lowell, Indiana was supplied as the town. Street and ZIP were not verified.",
};

export const logo = {
  src: "/img/logo.png",
  alt: "Leeps Supply Company",
  sourceUrl:
    "https://www.leeps.com/ASSETS/WEB_THEMES/ECOMMERCE_STD_TEMPLATE_V2/images/NewLeepsLog2o.png",
  retrieval:
    "Live download returned Cloudflare HTTP 403. PNG saved from the Wayback capture of the same logo URL (2025-05-01).",
};

export const homepageMedia = [
  {
    id: "banner-ion",
    sourceUrl:
      "https://www.leeps.com/ASSETS/IMAGES/CMS/BANNERLOGO/OCT_2026_ION_AD_copy.jpg",
    alt: "OCT_2026_ION_AD_copy.jpg",
    rank: 120,
    localSrc: null,
    retrieval:
      "Live download returned Cloudflare HTTP 403. No Wayback capture of this banner.",
  },
  {
    id: "banner-create-account",
    sourceUrl:
      "https://www.leeps.com/ASSETS/IMAGES/CMS/BANNERLOGO/LEEPS_CREATE_ACCOUNT.jpg",
    alt: "LEEPS_CREATE_ACCOUNT.jpg",
    rank: 120,
    localSrc: null,
    retrieval:
      "Live download returned Cloudflare HTTP 403. No Wayback capture of this banner.",
  },
  {
    id: "banner-caddy",
    sourceUrl:
      "https://www.leeps.com/ASSETS/IMAGES/CMS/BANNERLOGO/Oct_26_Caddy.jpg",
    alt: "Oct_26_Caddy.jpg",
    rank: 120,
    localSrc: null,
    retrieval:
      "Live download returned Cloudflare HTTP 403. No Wayback capture of this banner.",
  },
  {
    id: "banner-join-crew",
    sourceUrl:
      "https://www.leeps.com/ASSETS/IMAGES/CMS/BANNERLOGO/LEEPS_JOIN_THE_CREW.jpg",
    alt: "LEEPS_JOIN_THE_CREW.jpg",
    rank: 120,
    localSrc: null,
    retrieval:
      "Live download returned Cloudflare HTTP 403. No Wayback capture of this banner.",
  },
  {
    id: "banner-valpo-tour",
    sourceUrl:
      "https://www.leeps.com/ASSETS/IMAGES/CMS/BANNERLOGO/VALPO_VIRTUAL_TOUR_copy.jpg",
    alt: "VALPO_VIRTUAL_TOUR_copy.jpg",
    rank: 120,
    localSrc: null,
    retrieval:
      "Live download returned Cloudflare HTTP 403. No Wayback capture of this banner.",
  },
  {
    id: "banner-appt",
    sourceUrl: "https://www.leeps.com/ASSETS/IMAGES/CMS/BANNERLOGO/APPT_2.jpg",
    alt: "APPT_2.jpg",
    rank: 120,
    localSrc: null,
    retrieval:
      "Live download returned Cloudflare HTTP 403. No Wayback capture of this banner.",
  },
  {
    id: "account-left",
    sourceUrl:
      "https://www.leeps.com/ASSETS/IMAGES/CMS/STATIC_IMAGES/Homepage/account_left.png",
    alt: "Leeps Supply counter photo from the homepage",
    rank: 100,
    localSrc: "/img/home-account-left.png",
    retrieval:
      "Saved from the Wayback capture of this homepage image URL (2025-04-15) after the live host returned HTTP 403.",
  },
  {
    id: "more-products",
    sourceUrl:
      "https://www.leeps.com/ASSETS/IMAGES/CMS/STATIC_IMAGES/Homepage/more_products.png",
    alt: "More products",
    rank: 100,
    localSrc: "/img/home-more-products.png",
    retrieval:
      "Saved from the Wayback capture of this homepage image URL (2025-04-15) after the live host returned HTTP 403.",
  },
  {
    id: "merville",
    sourceUrl:
      "https://www.leeps.com/ASSETS/IMAGES/CMS/STATIC_IMAGES/Homepage/merville.png",
    alt: "Leeps Supply homepage photo (merville.png)",
    rank: 100,
    localSrc: "/img/home-merville.png",
    retrieval:
      "Saved from the Wayback capture of this homepage image URL (2025-04-15) after the live host returned HTTP 403.",
  },
  {
    id: "highland",
    sourceUrl:
      "https://www.leeps.com/ASSETS/IMAGES/CMS/STATIC_IMAGES/Homepage/highland.png",
    alt: "Leeps Supply homepage photo (highland.png)",
    rank: 100,
    localSrc: "/img/home-highland.png",
    retrieval:
      "Saved from the Wayback capture of this homepage image URL (2025-04-15) after the live host returned HTTP 403.",
  },
  {
    id: "crown",
    sourceUrl:
      "https://www.leeps.com/ASSETS/IMAGES/CMS/STATIC_IMAGES/Homepage/crown.png",
    alt: "Leeps Supply homepage photo (crown.png)",
    rank: 100,
    localSrc: "/img/home-crown.png",
    retrieval:
      "Saved from the Wayback capture of this homepage image URL (2025-04-15) after the live host returned HTTP 403.",
  },
  {
    id: "joel",
    sourceUrl:
      "https://www.leeps.com/ASSETS/IMAGES/CMS/STATIC_IMAGES/Homepage/joel.png",
    alt: "Leeps Supply homepage photo (joel.png)",
    rank: 100,
    localSrc: "/img/home-joel.png",
    retrieval:
      "Saved from the Wayback capture of this homepage image URL (2025-04-15) after the live host returned HTTP 403.",
  },
];

export const heroMedia =
  homepageMedia.find((item) => item.id === "account-left" && item.localSrc) ??
  null;

export const primaryNav = [
  { label: "Home", to: "/" },
  { label: "Catalog", to: "/catalog" },
  { label: "Brands", to: "/brands" },
  { label: "Locations", to: "/locations" },
  { label: "Offers", to: "/offers" },
  { label: "Contact", to: "/contact" },
];

export const counters = [
  "Merrillville",
  "De Motte",
  "Highland",
  "Lynwood",
  "Crown Point",
  "Lowell",
  "Valparaiso",
  "Michigan City",
  "St Joseph",
];

export const showrooms = ["Crown Point", "Valparaiso"];

export const locationPhotos = [
  {
    town: "Merrillville",
    kind: "Counter",
    mediaId: "merville",
    note: "File name merville.png matches the Merrillville counter. Street address was not captured.",
  },
  {
    town: "Highland",
    kind: "Counter",
    mediaId: "highland",
    note: "File name highland.png matches the Highland counter. Street address was not captured.",
  },
  {
    town: "Crown Point",
    kind: "Counter and showroom",
    mediaId: "crown",
    note: "File name crown.png matches Crown Point, which is listed as both a counter and a showroom. Street address was not captured.",
  },
];

export const categories = [
  {
    slug: "plumbing",
    name: "Plumbing",
    sourceUrl: "https://www.leeps.com/150024/category/plumbing",
    summary:
      "Shower base and toilet tank from the verified sample. Grouped here because both are plumbing items and Leeps publishes a Plumbing category. The live category assignment for each SKU was not captured.",
  },
  {
    slug: "mirrors",
    name: "Mirrors",
    sourceUrl: "https://www.leeps.com/products",
    summary:
      "Lighted makeup mirror from the verified sample. A separate mirrors category URL was not in the captured catalog surfaces, so the source link is the Leeps product index.",
  },
];

export const catalogSurfaces = [
  {
    label: "Products",
    href: "https://www.leeps.com/products",
    sampleSlug: null,
  },
  {
    label: "Shop products",
    href: "https://www.leeps.com/shopproducts",
    sampleSlug: null,
  },
  {
    label: "Counters",
    href: "https://www.leeps.com/counters",
    sampleSlug: null,
  },
  {
    label: "Plumbing",
    href: "https://www.leeps.com/150024/category/plumbing",
    sampleSlug: "plumbing",
  },
  {
    label: "Kitchen accessories",
    href: "https://www.leeps.com/150035/category/plumbing/kitchen-accessories",
    sampleSlug: null,
  },
  {
    label: "Sump pumps",
    href: "https://www.leeps.com/149644/category/pumps-motors/pumps-accessories/sump-pumps",
    sampleSlug: null,
  },
  {
    label: "Water heaters and accessories",
    href: "https://www.leeps.com/150208/category/plumbing/water-heaters-accessories",
    sampleSlug: null,
  },
  {
    label: "Valves",
    href: "https://www.leeps.com/149156/category/valves",
    sampleSlug: null,
  },
];

export const products = [
  {
    slug: "aker-by-maax-142038-000-002-084-455593",
    name: "AKER BY MAAX 142038-000-002-084",
    title: "AKER BY MAAX 142038-000-002-084 455593",
    brand: "AKER BY MAAX",
    brandSlug: "aker-by-maax",
    partNumber: "455593",
    modelNumber: "142038-000-002-084",
    categorySlug: "plumbing",
    shortDescription:
      "AKER BY MAAX SPS 142038-000-002-084 Shower Base, Right Hand Drain Location, 59-7/8 in L, 30 to 58-3/8 in W",
    price: null,
    callForPrice: false,
    priceDisplay: "Not verified",
    priceObservation:
      "Price area remained a loading indicator; no price captured.",
    availabilityDisplay: "Not verified",
    availabilityObservation:
      "Product page displayed Available at Highland and Available at All Branches labels, but inventory values remained loading indicators.",
    sourceUrl:
      "https://www.leeps.com/aker-by-maax-142038-000-002-084-455593",
    images: [
      {
        src: "/img/product-aker.jpg",
        sourceUrl:
          "https://assets.unilogcorp.com/267/ITEM/IMG/AKER_BY_MAAX_142038_000_002_084.jpg",
        alt: "AKER BY MAAX 142038-000-002-084",
      },
      {
        src: "/img/product-aker-2.jpg",
        sourceUrl:
          "https://assets.unilogcorp.com/267/ITEM/IMG/AKER_BY_MAAX_142038_000_002_084_1.jpg",
        alt: "AKER BY MAAX 142038-000-002-084, second product image",
      },
    ],
  },
  {
    slug: "toto-st784s-12-241841",
    name: "TOTO ST784S#12",
    title: "TOTO ST784S#12 241841",
    brand: "TOTO",
    brandSlug: "toto",
    partNumber: "241841",
    modelNumber: "ST784S#12",
    categorySlug: "plumbing",
    shortDescription:
      "TOTO Clayton ST784S#12 Toilet Tank and Cover, 1.6 gpf Flush Rate, 12 in Rough-In, Vitreous China, Sedona Beige",
    price: null,
    callForPrice: false,
    priceDisplay: "Not verified",
    priceObservation:
      "Price label was present but no value appeared in visible page text.",
    availabilityDisplay: "Not verified",
    availabilityObservation:
      "Page displayed Available at Highland and Available at All Branches. Exact quantities were not shown in captured text.",
    sourceUrl: "https://www.leeps.com/toto-st784s%2312-241841",
    images: [
      {
        src: "/img/product-toto.jpg",
        sourceUrl:
          "https://assets.unilogcorp.com/267/ITEM/IMG/TOTO_ST784S_12.jpg",
        alt: "TOTO ST784S#12",
      },
      {
        src: "/img/product-toto-2.jpg",
        sourceUrl:
          "https://assets.unilogcorp.com/267/ITEM/IMG/TOT-OLYVEYC6IJKXLWC43SQ5.jpg",
        alt: "TOTO ST784S#12, second product image",
      },
    ],
  },
  {
    slug: "zadro-lurv410-645626",
    name: "ZADRO LURV410",
    title: "ZADRO LURV410 645626",
    brand: "ZADRO",
    brandSlug: "zadro",
    partNumber: "645626",
    modelNumber: "LURV410",
    categorySlug: "mirrors",
    shortDescription:
      "ZADRO LURV410 Makeup Mirror With Light, 19 in H, 11 in W, Round, Metal Frame, Satin Nickel Frame",
    price: null,
    callForPrice: true,
    priceDisplay: "Call for Price",
    priceObservation: "Call for Price",
    availabilityDisplay: "Not verified",
    availabilityObservation:
      "Page displayed 0 beside Available at Highland and 0 beside Available at All Branches in the captured accessible structure.",
    sourceUrl: "https://www.leeps.com/zadro-lurv410-645626",
    images: [
      {
        src: "/img/product-zadro.jpg",
        sourceUrl:
          "https://assets.unilogcorp.com/267/ITEM/IMG/ZADRO_LURV410.jpg",
        alt: "ZADRO LURV410",
      },
    ],
  },
];

export const brands = [
  {
    slug: "aker-by-maax",
    name: "AKER BY MAAX",
    sourceUrl: "https://www.leeps.com/brands",
  },
  {
    slug: "toto",
    name: "TOTO",
    sourceUrl: "https://www.leeps.com/brands",
  },
  {
    slug: "zadro",
    name: "ZADRO",
    sourceUrl: "https://www.leeps.com/brands",
  },
];

export const footerGroups = [
  {
    title: "Shop",
    links: [
      { label: "Sample catalog", to: "/catalog" },
      { label: "Brands in this sample", to: "/brands" },
      { label: "Offers", to: "/offers" },
      { label: "Cart", to: "/cart" },
      {
        label: "Shop products on leeps.com",
        href: "https://www.leeps.com/shopproducts",
      },
      {
        label: "Counters on leeps.com",
        href: "https://www.leeps.com/counters",
      },
      {
        label: "Featured brands on leeps.com",
        href: "https://www.leeps.com/brands",
      },
    ],
  },
  {
    title: "Locations",
    links: [
      { label: "Counters and showrooms", to: "/locations" },
      { label: "Leeps Counters", href: "http://www.leepscounters.com/" },
      {
        label: "Waterplace Showrooms",
        href: "http://www.waterplaceshowrooms.com",
      },
    ],
  },
  {
    title: "Customer service",
    links: [
      { label: "Contact", to: "/contact" },
      { label: "Help", to: "/help" },
      { label: "Help on leeps.com", href: "https://www.leeps.com/help" },
      {
        label: "Returns (PDF)",
        href: "https://www.leeps.com/ASSETS/DOCUMENTS/CMS/EN/Returns.pdf",
      },
      {
        label: "FAQ (PDF)",
        href: "https://www.leeps.com/ASSETS/DOCUMENTS/CMS/EN/FAQ_Page.pdf",
      },
      {
        label: "Feedback",
        href: "http://www.leepscounters.com/feedback/",
      },
    ],
  },
  {
    title: "Policies",
    links: [
      {
        label: "Terms and conditions (PDF)",
        href: "https://www.leeps.com/ASSETS/DOCUMENTS/CMS/EN/Leeps_Supply_Terms_and_Conditions.pdf",
      },
      {
        label: "Privacy policy (PDF)",
        href: "https://www.leeps.com/ASSETS/DOCUMENTS/CMS/EN/Leeps_Supply_Privacy_Policy.pdf",
      },
      {
        label: "Navigation guide (PDF)",
        href: "https://www.leeps.com/ASSETS/DOCUMENTS/CMS/EN/Navigation.pdf",
      },
      {
        label: "B2B eCommerce platform",
        href: "https://www.unilogcorp.com/b2b-ecommerce-platform",
        observedHref: "//www.unilogcorp.com/b2b-ecommerce-platform",
      },
    ],
  },
  {
    title: "Account on leeps.com",
    note: "These links leave this demo and open the live Leeps site. This sample does not include login.",
    links: [
      { label: "Login", href: "https://www.leeps.com/Login" },
      { label: "Register", href: "https://www.leeps.com/Register" },
      {
        label: "Forgot your password?",
        href: "https://www.leeps.com/ForgotPassword",
      },
    ],
  },
];

export const helpLinks = [
  { label: "Help on leeps.com", href: "https://www.leeps.com/help" },
  {
    label: "FAQ (PDF)",
    href: "https://www.leeps.com/ASSETS/DOCUMENTS/CMS/EN/FAQ_Page.pdf",
  },
  {
    label: "Navigation guide (PDF)",
    href: "https://www.leeps.com/ASSETS/DOCUMENTS/CMS/EN/Navigation.pdf",
  },
  {
    label: "Returns (PDF)",
    href: "https://www.leeps.com/ASSETS/DOCUMENTS/CMS/EN/Returns.pdf",
  },
  { label: "Contact", to: "/contact" },
];

export function getProduct(slug) {
  return products.find((product) => product.slug === slug) ?? null;
}

export function getCategory(slug) {
  return categories.find((category) => category.slug === slug) ?? null;
}

export function productsInCategory(slug) {
  return products.filter((product) => product.categorySlug === slug);
}

export function productsByBrand(slug) {
  return products.filter((product) => product.brandSlug === slug);
}

export function mediaById(id) {
  return homepageMedia.find((item) => item.id === id) ?? null;
}
