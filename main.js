"use strict";
// IF DAGI 10 TA MASALA
//1-MASALA
{
    function butunMusbatSon(num) {
        if (num > 0) {
            return num + 1;
        }
        else {
            return num;
        }
    }
    const inputNumber = 3;
    const result = butunMusbatSon(inputNumber);
    console.log(result);
}
//2-MASALA
{
    function MusbatSonniYangilash(son) {
        if (son > 0) {
            return son + 1;
        }
        else {
            return son - 2;
        }
    }
    const inputNumber = -3;
    const result = MusbatSonniYangilash(inputNumber);
    console.log(result);
}
//3-MASALA
{
    function sonniQaytaIshla(son) {
        if (son > 0) {
            return son + 1;
        }
        else if (son < 0) {
            return son - 2;
        }
        else {
            return 10;
        }
    }
    const inputNumber = 0;
    const result = sonniQaytaIshla(inputNumber);
    console.log(result);
}
//4-MASALA
{
    function musbatSonlarSoni(son1, son2, son3) {
        let count = 0;
        if (son1 > 0)
            count++;
        if (son2 > 0)
            count++;
        if (son3 > 0)
            count++;
        return count;
    }
    const result = musbatSonlarSoni(5, -2, 0);
    console.log("Musbat sonlar soni:", result);
}
//5-MASALA
{
    function musbatVaManfiySonlarSoni(a, b, c) {
        let musbatCount = 0;
        let manfiyCount = 0;
        if (a > 0)
            musbatCount++;
        if (a < 0)
            manfiyCount++;
        if (b > 0)
            musbatCount++;
        if (b < 0)
            manfiyCount++;
        if (c > 0)
            musbatCount++;
        if (c < 0)
            manfiyCount++;
        return { musbat: musbatCount, manfiy: manfiyCount };
    }
    const num1 = 4;
    const num2 = -1;
    const num3 = -6;
    const result = musbatVaManfiySonlarSoni(num1, num2, num3);
    console.log(`Musbat sonlar soni: ${result.musbat}`);
    console.log(`Manfiy sonlar soni: ${result.manfiy}`);
}
//6-MASALA
{
    function kattasiniAniqlash(son1, son2) {
        if (son1 > son2) {
            return son1;
        }
        else {
            return son2;
        }
    }
    const num1 = 5;
    const num2 = 8;
    const result = kattasiniAniqlash(num1, num2);
    console.log("Kattasi", result);
}
//7-MASALA
{
    function kichiginiAniqlash(son1, son2) {
        if (son1 < son2) {
            return `Birinchi son kichik: ${son1}`;
        }
        else if (son2 < son1) {
            return `Ikkinchi son kichik: ${son2}`;
        }
        else {
            return "Ikkala son teng.";
        }
    }
    const num1 = 7;
    const num2 = 3;
    const result = kichiginiAniqlash(num1, num2);
    console.log(result);
}
//8-MASALA
{
    function kattasiVaKichiginiAniqlash(son1, son2) {
        if (son1 > son2) {
            console.log("Kattaroq son:", son1);
            console.log("Kichikroq son:", son2);
        }
        else if (son2 > son1) {
            console.log("Kattaroq son:", son2);
            console.log("Kichikroq son:", son1);
        }
        else {
            console.log("Ikkala son teng:", son1);
        }
    }
    const num1 = 9;
    const num2 = 4;
    kattasiVaKichiginiAniqlash(num1, num2);
}
//9-MASALA
{
    function ozgartirishAgarKerak(a, b) {
        if (a > b) {
            let temp = a;
            a = b;
            b = temp;
        }
        console.log("A soni:", a);
        console.log("B soni:", b);
    }
    let a = 10.5;
    let b = 5.5;
    ozgartirishAgarKerak(a, b);
}
//10-MASALA
{
    function ozgartirishAgarKerak(a, b) {
        if (a !== b) {
            a = a + b;
            b = a;
        }
        else {
            a = 0;
            b = 0;
        }
        console.log("A soni:", a);
        console.log("B soni:", b);
    }
    let a = 5;
    let b = 8;
    ozgartirishAgarKerak(a, b);
}
//  BEGIN DAGI 10 TA MASALA
console.log("BEWGIN MASALA..........");
//1-MASALA
{
    function kvadratPerimetri(a) {
        return 4 * a;
    }
    const a = 6;
    const P = kvadratPerimetri(a);
    console.log("Kvadratning perimetri:", P);
}
//2-MASALA
{
    function kvadratYuzasi(a) {
        return a * a;
    }
    const a = 5;
    const S = kvadratYuzasi(a);
    console.log("Kvadratning yuzasi:", S);
}
//3-MASALA
{
    function togritortburchakYuzasi(a, b) {
        return a * b;
    }
    function togritortburchakPerimetri(a, b) {
        return 2 * (a + b);
    }
    const a = 7;
    const b = 4;
    const S = togritortburchakYuzasi(a, b);
    const P = togritortburchakPerimetri(a, b);
    console.log("Yuzasi (S):", S);
    console.log("Perimetri (P):", P);
}
//4-MASALA
{
    // buni chunmadim shuning uchun qila olmadim
}
//5-MASALA
{
    function kubHajmi(a) {
        return a ** 3;
    }
    function kubTolaSirti(a) {
        return 6 * a ** 2;
    }
    const a = 5;
    const V = kubHajmi(a);
    const S = kubTolaSirti(a);
    console.log("Kubning hajmi (V):", V);
    console.log("Kubning to‘la sirti (S):", S);
}
//6-MASALA
{
    function parallelepipedHajmi(a, b, c) {
        return a * b * c;
    }
    function parallelepipedTolaSirti(a, b, c) {
        return 2 * (a * b + b * c + a * c);
    }
    const a = 3;
    const b = 4;
    const c = 5;
    const V = parallelepipedHajmi(a, b, c);
    const S = parallelepipedTolaSirti(a, b, c);
    console.log("Parallelepipedning hajmi (V):", V);
    console.log("Parallelepipedning to‘la sirti (S):", S);
}
//  BOOLEAN DAGI 10 TA MASALA
console.log("BOOLEAN MASALA............");
//1-MASALA
{
    function musbatmiYokiManfiy(a) {
        if (a > 0) {
            console.log("Jumla rost: A soni musbat.");
        }
        else {
            console.log("Jumla noto'g'ri: A soni musbat emas.");
        }
    }
    const a = -9;
    musbatmiYokiManfiy(a);
}
//2-MASALA
{
    function toqmiYokiJuftmi(a) {
        if (a % 2 !== 0) {
            console.log("Jumla rost: A soni toq son.");
        }
        else {
            console.log("Jumla noto'g'ri: A soni toq son emas.");
        }
    }
    const a = 9;
    toqmiYokiJuftmi(a);
}
//3-MASALA
{
    function juftmiYokiToqmi(a) {
        if (a % 2 === 0) {
            console.log("Jumla rost: A soni juft son.");
        }
        else {
            console.log("Jumla noto'g'ri: A soni juft son emas.");
        }
    }
    const a = 9;
    juftmiYokiToqmi(a);
}
//4-MASALA
{
    function jumlaRostmiYokiYoq(a, b) {
        if (a > 2 && b <= 3) {
            console.log("Jumla rost: A > 2 va B <= 3.");
        }
        else {
            console.log("Jumla noto'g'ri: A > 2 va B <= 3 emas.");
        }
    }
    const a = 5;
    const b = 2;
    jumlaRostmiYokiYoq(a, b);
}
//5-MASALA
{
    function jumlaRostmiTekshir(a, b) {
        if (a >= 0 || b < -2) {
            console.log("Jumla rost: A >= 0 yoki B < -2.");
        }
        else {
            console.log("Jumla noto'g'ri: A >= 0 yoki B < -2 emas.");
        }
    }
    const a = -1;
    const b = -3;
    jumlaRostmiTekshir(a, b);
}
