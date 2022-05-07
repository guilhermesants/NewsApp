

export type Category = {
    id: number,
    name: string;
    translatedName: string;
}

export const CategoryList: Category[] = [
    { id: 1, name: 'business', translatedName:'Negócios'},
    { id: 2, name: 'entertainment', translatedName:'Entretenimento'},
    { id: 3, name: 'general', translatedName:'Geral'},
    { id: 4, name: 'health', translatedName:'Saúde'},
    { id: 5, name: 'science', translatedName:'Ciência'},
    { id: 6, name: 'sports', translatedName:'Esporte'},
    { id: 7, name: 'technology', translatedName:'Tecnologia'}
]