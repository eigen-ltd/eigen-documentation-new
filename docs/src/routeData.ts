import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

export const onRequest = defineRouteMiddleware(context => {
  const { entry, sidebar } = context.locals.starlightRoute;

  // --- Sidebar filtering ---
  const currentPath = context.url.pathname;

  if (currentPath.startsWith('/bsp')) {
    // On BSP pages, only show BSP sidebar items
    context.locals.starlightRoute.sidebar = sidebar.filter(
      item => item.label === 'Getting Started with BSP' || item.label === 'User Guide'
    );
  } else {
    // On all other pages, hide BSP sidebar items
    context.locals.starlightRoute.sidebar = sidebar.filter(
      item => item.label !== 'Getting Started with BSP' && item.label !== 'User Guide'
    );
  }

  // Existing OG Image Logic ---
  const ogImageUrl = '/open-graph/' + (entry.id || 'index') + '.png';
  const canonicalImageSrc = new URL(ogImageUrl, context.site);

  const { head } = context.locals.starlightRoute;

  head.push({
    tag: 'meta',
    attrs: { property: 'og:image', content: canonicalImageSrc.href },
  });
  head.push({
    tag: 'meta',
    attrs: { name: 'twitter:image', content: canonicalImageSrc.href },
  });
});
