import { format } from 'date-fns';

export class Format {

    public static formatDate(date: string) {
        return format(new Date(date), 'dd/MM/yy')
    }
    
}