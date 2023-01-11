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

/* ==============================
  Difficulty Levels
  =============================== */

// TODO: брать уровни сложности с сервера

export const LevelValue = {
  EASY: 'easy',
  NORMAL: 'normal',
  HARD: 'hard',
  EXTRA_HARD: 'extra-hard',
};

export const LevelLabel = {
  [LevelValue.EASY]: 'Стажер',
  [LevelValue.NORMAL]: 'Джуниор',
  [LevelValue.HARD]: 'Мидл',
  [LevelValue.EXTRA_HARD]: 'Сеньор',
};
