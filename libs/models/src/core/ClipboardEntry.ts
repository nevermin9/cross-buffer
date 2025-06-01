export interface ClipboardEntry {
    id?: number;
    user_id: number;
    content?: string; // if type is text
    type: "text" | "image";
    file_name?: string; // if type is image
    file_size?: number; // if type is image
    mime_type?: string; // if type is image
    created_at?: string;
    updated_at?: string;
    is_synced?: boolean;
}
