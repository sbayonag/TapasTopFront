export interface RepositoryLinks {
  prev: { href: string } | undefined,
  first: { href: string } | undefined,
  self: { href: string },
  next: { href: string } | undefined,
  last: { href: string } | undefined,
  profile: { href: string },
  search: { href: string },
}

export interface Page {
  size: number;
  totalElements: number;
  totalPages: number;
  number: number
}

