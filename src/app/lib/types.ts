export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
};

export type Colors = {
    name?: string;
    class?: string;
    selectedClass?: string 
};

export type Sizes = { 
    name?: string; 
    inStock?: boolean; 
};


export type Product = {
    id: number;
    imageSrc: string
    name: string;
    price: number;
    discount?: number;
    qty?: number | undefined;
    rating: number;
    reviewCount: number;
    description?: string;
    detail?: string;
    categoryId?: number;
    categoryName?: string;
    stock?: number;
    colors?: Colors[];
    sizes?: Sizes[];
};