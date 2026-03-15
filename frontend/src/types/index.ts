export type UserRole = 'superadmin' | 'admin' | 'editor' | 'viewer';
export type ContentStatus = 'draft' | 'published' | 'archived';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  is_active: boolean;
  created_at: string;
  last_login?: string;
}

export interface Content {
  id: string;
  title: string;
  slug: string;
  body: string;
  status: ContentStatus;
  author_id: string;
  author_name?: string;
  author_email?: string;
  created_at: string;
  updated_at: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface LoginResponse extends AuthTokens {
  user: Pick<User, 'id' | 'email' | 'name' | 'role'>;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

export interface ApiError {
  error: string;
}
