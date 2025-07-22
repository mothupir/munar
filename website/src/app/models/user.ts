export interface User {
    id: string;
    type: 'system' | 'company' | 'client';
    username: string;
}

export interface Client extends User {

}

export interface SystemAdmin extends User {
    
}

export interface CompanyAdmin extends User {

}