module.exports = {
  name: "D7ecode Digital Theme",
  handle: "d7ecode-digital",
  version: "1.0.0",
  author: "Custom",
  entrypoints: {
    styles: ["assets/main.css"],
    scripts: ["assets/main.js"]
  },
  rtl: true,
  templates: {
    index: "templates/index.html",
    product: "templates/product.html",
    collection: "templates/collection.html",
    cart: "templates/cart.html",
    search: "templates/search.html",
    page: "templates/page.html"
  },
  sections: {
    header: "sections/header.html",
    "hero-slider": "sections/hero-slider.html",
    "categories-icons": "sections/categories-icons.html",
    "featured-products": "sections/featured-products.html",
    "products-slider": "sections/products-slider.html",
    testimonials: "sections/testimonials.html",
    steps: "sections/steps.html",
    faq: "sections/faq.html",
    "blog-preview": "sections/blog-preview.html",
    footer: "sections/footer.html"
  },
  snippets: {
    "product-card": "snippets/product-card.html",
    "rating-stars": "snippets/rating-stars.html",
    price: "snippets/price.html",
    "add-to-cart": "snippets/add-to-cart.html",
    "section-title": "snippets/section-title.html"
  }
};

