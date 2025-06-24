export type GetContentNodeQueryVariables = {
  slug: string;
  relations?: string;
};

export type GetContentNodesQueryVariables = {
  relations?: string;
  perPage?: number;
  page?: number;
  startsWith?: string;
  excludingSlugs?: string;
  withTag?: string;
  searchTerm?: string;
  filterQuery?: Record<string, unknown>;
  sortBy?: string;
};

export type GetConfigNodeQueryVariables = {
  relations?: string;
};
