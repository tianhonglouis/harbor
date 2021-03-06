/**
 * For user management
 * 
 * @export
 * @class User
 */
export class User {
    user_id: number;
    username?: string;
    realname?: string;
    email?: string;
    password?: string;
    comment?: string;
    has_admin_role?: number;
    creation_time?: string;
}