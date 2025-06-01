export interface Bookmark {
    id?: number;
    list_id: number;
    user_id: number;
    title: string;
    href: string;
    description: string;
    created_at?: string;
    updated_at?: string;
    is_synced?: boolean;
}
