export abstract class BaseModel<T> {
    abstract create(data: Partial<T>): Promise<T>;
    abstract find(id: number): Promise<T>;
    abstract findAll(criteria?: Partial<T>): Promise<T[]>;
    abstract update(id: number, data: Partial<T>): Promise<T>;
    abstract delete(id: number): Promise<void>;
}
