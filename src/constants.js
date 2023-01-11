export const AppRoute = {
  CATALOG: '/',
  PET: '/pet/:slug',
};

export const NotionApiType = {
  TABLE: 'table',
  PAGE: 'page',
};

/* ==============================
  Sorting
  =============================== */

// TODO: добавить сортировку по популярности

export const SortValue = {
  NEWNESS_DESC: 'newness-desc',
  NEWNESS_ASC: 'newness-asc',
};

export const SortLabel = {
  [SortValue.NEWNESS_DESC]: 'Сначала новые',
  [SortValue.NEWNESS_ASC]: 'Сначала старые',
};

export const DEFAULT_SORTING = SortValue.NEWNESS_DESC;
