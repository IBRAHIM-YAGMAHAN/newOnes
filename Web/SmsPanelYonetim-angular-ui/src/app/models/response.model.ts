export interface ResponseAPI<T> {
    data: T;
    success: boolean;
    message: string;
    recordCount: number;
}
