

export type Category = {
    id: number,
    name: string;
    translatedName: string;
    selected: boolean;
}

export let CategoryList: Category[] = [
    { id: 1, name: 'business', translatedName:'Negócios', selected: false},
    { id: 2, name: 'entertainment', translatedName:'Entretenimento', selected: false},
    { id: 3, name: 'general', translatedName:'Geral', selected: false},
    { id: 4, name: 'health', translatedName:'Saúde', selected: false},
    { id: 5, name: 'science', translatedName:'Ciência', selected: false},
    { id: 6, name: 'sports', translatedName:'Esporte', selected: false},
    { id: 7, name: 'technology', translatedName:'Tecnologia', selected: false}
]