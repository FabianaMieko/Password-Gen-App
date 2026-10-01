export interface PassOptions {
    length: number;
    upper: boolean;
    numbers: boolean;
    symbols: boolean;
}

export default function generatePass(options: PassOptions){
    let password:string = '';
    let characters:string = 'abcdefghijklmnopqrstuvwxyz';

    if(options.upper) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if(options.numbers) characters += '0123456789';
    if(options.symbols) characters += '!@#$%^&*()-_=+[]{};:,.<>?';

    for(let index = 0 ; index < options.length;index++){
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return password;
}
