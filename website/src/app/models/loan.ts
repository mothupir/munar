export default interface Loan {
    id: string;
    owner: string;
    status: 'pending' | 'approved' | 'rejected';
    created: number;
    required: number;
    received: number;
    interest: number;
    duration: number;
    lenders: string[];
}