// IF DAGI 5 TA MASALA

//1-MASALA
// {
//   function butunMusbatSon(num: number): number {
//     if (num > 0) {
//       return num + 1;
//     } else {
//       return num;
//     }
//   }

//   const inputNumber: number = 3;
//   const result = butunMusbatSon(inputNumber);

//   console.log(result);
// }

//2-MASALA
// {
//   function MusbatSonniYangilash(son: number): number {
//     if (son > 0) {
//       return son + 1;
//     } else {
//       return son - 2;
//     }
//   }

//   const inputNumber: number = -3;
//   const result = MusbatSonniYangilash(inputNumber);

//   console.log(result);
// }

//3-MASALA
// {
//   function sonniQaytaIshla(son: number): number {
//     if (son > 0) {
//       return son + 1;
//     } else if (son < 0) {
//       return son - 2;
//     } else {
//       return 10;
//     }
//   }

//   const inputNumber: number = 0;
//   const result = sonniQaytaIshla(inputNumber);

//   console.log(result);
// }

//4-MASALA
// {
//   function musbatSonlarSoni(son1: number, son2: number, son3: number): number {
//     let count: number = 0;

//     if (son1 > 0) count++;
//     if (son2 > 0) count++;
//     if (son3 > 0) count++;

//     return count;
//   }

//   const result = musbatSonlarSoni(5, -2, 0);
//   console.log("Musbat sonlar soni:", result);
// }

//5-MASALA
// {
//   function musbatVaManfiySonlarSoni(
//     a: number,
//     b: number,
//     c: number
//   ): { musbat: number; manfiy: number } {
//     let musbatCount = 0;
//     let manfiyCount = 0;

//     if (a > 0) musbatCount++;
//     if (a < 0) manfiyCount++;

//     if (b > 0) musbatCount++;
//     if (b < 0) manfiyCount++;

//     if (c > 0) musbatCount++;
//     if (c < 0) manfiyCount++;

//     return { musbat: musbatCount, manfiy: manfiyCount };
//   }

//   const num1 = 4;
//   const num2 = -1;
//   const num3 = -6;

//   const result = musbatVaManfiySonlarSoni(num1, num2, num3);
//   console.log(`Musbat sonlar soni: ${result.musbat}`);
//   console.log(`Manfiy sonlar soni: ${result.manfiy}`);
// }

//  BEGIN DAGI 12 TA MASALA
console.log("BEWGIN MASALA..........");

//1-MASALA
{
  function kvadratPerimetri(a: number): number {
    return 4 * a;
  }

  const a = 6;
  const P = kvadratPerimetri(a);

  console.log("Kvadratning perimetri:", P);
}

//2-MASALA
{
  function kvadratYuzasi(a: number): number {
    return a * a;
  }

  const a = 5;
  const S = kvadratYuzasi(a);

  console.log("Kvadratning yuzasi:", S);
}

//3-MASALA
{
  function togritortburchakYuzasi(a: number, b: number): number {
    return a * b;
  }

  function togritortburchakPerimetri(a: number, b: number): number {
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
  function circleLength(diameter: number): number {
    const pi = 3.14;
    const length = pi * diameter;
    return length;
  }

  const d = 10;
  console.log(`Aylananing uzunligi: ${circleLength(d)}`); // 31.4
}

//5-MASALA
{
  function kubHajmi(a: number): number {
    return a ** 3;
  }

  function kubTolaSirti(a: number): number {
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
  function parallelepipedHajmiVaSirti(
    a: number,
    b: number,
    c: number
  ): { hajmi: number; sirti: number } {
    const hajmi = a * b * c;
    const sirti = 2 * (a * b + b * c + a * c);

    return {
      hajmi,
      sirti,
    };
  }

  const a = 3,
    b = 4,
    c = 5;
  const natija = parallelepipedHajmiVaSirti(a, b, c);
  console.log(`Parallelepipedning hajmi (V): ${natija.hajmi}`);
  console.log(`Parallelepipedning to'la sirti (S): ${natija.sirti}`);
}

//7-MASALA
{
  function doiraUzunligiVaYuzasi(R: number): {
    uzunligi: number;
    yuzasi: number;
  } {
    const pi = 3.14;
    const uzunligi = 2 * pi * R;
    const yuzasi = pi * R * R;

    return {
      uzunligi,
      yuzasi,
    };
  }

  const R = 5;
  const natija = doiraUzunligiVaYuzasi(R);
  console.log(`Doiraning uzunligi (L): ${natija.uzunligi}`);
  console.log(`Doiraning yuzasi (S): ${natija.yuzasi}`);
}

//8-MASALA
{
  function ikkitaSonOrtaArifmetigi(a: number, b: number): number {
    return (a + b) / 2;
  }

  const a = 8;
  const b = 12;
  const natija = ikkitaSonOrtaArifmetigi(a, b);
  console.log(`Ikkita sonning o‘rta arifmetigi: ${natija}`);
}

//9-MASALA
{
  function ikkitaSonOrtaGeometrigi(a: number, b: number): number {
    if (a < 0 || b < 0) {
      throw new Error("Ikkita son ham manfiy bo‘lmagan bo‘lishi kerak.");
    }
    return Math.sqrt(a * b);
  }

  const a = 9;
  const b = 16;
  const natija = ikkitaSonOrtaGeometrigi(a, b);
  console.log(`Ikkita sonning o‘rta geometrigi: ${natija}`);
}

//10-MASALA
{
  function nolgaTengBolmaganSonlarNatijalari(
    a: number,
    b: number
  ): {
    yigindi: number;
    kopaytma: number;
    kvadratiA: number;
    kvadratiB: number;
  } {
    if (a === 0 || b === 0) {
      throw new Error("Ikkala son ham nolga teng bo‘lmasligi kerak.");
    }

    const yigindi = a + b;
    const kopaytma = a * b;
    const kvadratiA = a * a;
    const kvadratiB = b * b;

    return { yigindi, kopaytma, kvadratiA, kvadratiB };
  }

  const a = 7;
  const b = 3;
  const natija = nolgaTengBolmaganSonlarNatijalari(a, b);
  console.log(`Yig‘indi: ${natija.yigindi}`);
  console.log(`Ko‘paytma: ${natija.kopaytma}`);
  console.log(`Kvadrati (a²): ${natija.kvadratiA}`);
  console.log(`Kvadrati (b²): ${natija.kvadratiB}`);
}

//11-MASALA
{
  function nolgaTengBolmaganSonlarNatijalari(
    a: number,
    b: number
  ): {
    yigindi: number;
    kopaytma: number;
    modulA: number;
    modulB: number;
  } {
    if (a === 0 || b === 0) {
      throw new Error("Ikkala son ham nolga teng bo‘lmasligi kerak.");
    }

    const yigindi = a + b;
    const kopaytma = a * b;
    const modulA = Math.abs(a);
    const modulB = Math.abs(b);

    return { yigindi, kopaytma, modulA, modulB };
  }

  const a = -8;
  const b = 5;
  const natija = nolgaTengBolmaganSonlarNatijalari(a, b);
  console.log(`Yig‘indi: ${natija.yigindi}`);
  console.log(`Ko‘paytma: ${natija.kopaytma}`);
  console.log(`Modul(a): ${natija.modulA}`);
  console.log(`Modul(b): ${natija.modulB}`);
}

//12-MASALA
{
  function togriUchburchakGipotenuzaVaPerimetr(
    a: number,
    b: number
  ): { gipotenuza: number; perimetr: number } {
    if (a <= 0 || b <= 0) {
      throw new Error("Katetlar musbat bo‘lishi kerak.");
    }
    const gipotenuza = Math.sqrt(a * a + b * b);
    const perimetr = a + b + gipotenuza;
    return { gipotenuza, perimetr };
  }

  const a = 3;
  const b = 4;
  const natija = togriUchburchakGipotenuzaVaPerimetr(a, b);
  console.log(`Gipotenuza (c): ${natija.gipotenuza}`);
  console.log(`Perimetr (P): ${natija.perimetr}`);
}

//  BOOLEAN DAGI 5 TA MASALA
console.log("BOOLEAN MASALA............");

//1-MASALA
{
  function musbatmiYokiManfiy(a: number): void {
    if (a > 0) {
      console.log("Jumla rost: A soni musbat.");
    } else {
      console.log("Jumla noto'g'ri: A soni musbat emas.");
    }
  }

  const a = -9;

  musbatmiYokiManfiy(a);
}

//2-MASALA
{
  function toqmiYokiJuftmi(a: number): void {
    if (a % 2 !== 0) {
      console.log("Jumla rost: A soni toq son.");
    } else {
      console.log("Jumla noto'g'ri: A soni toq son emas.");
    }
  }

  const a = 9;

  toqmiYokiJuftmi(a);
}

//3-MASALA
{
  function juftmiYokiToqmi(a: number): void {
    if (a % 2 === 0) {
      console.log("Jumla rost: A soni juft son.");
    } else {
      console.log("Jumla noto'g'ri: A soni juft son emas.");
    }
  }

  const a = 9;

  juftmiYokiToqmi(a);
}

//4-MASALA
{
  function jumlaRostmiYokiYoq(a: number, b: number): void {
    if (a > 2 && b <= 3) {
      console.log("Jumla rost: A > 2 va B <= 3.");
    } else {
      console.log("Jumla noto'g'ri: A > 2 va B <= 3 emas.");
    }
  }

  const a = 5;
  const b = 2;

  jumlaRostmiYokiYoq(a, b);
}

//5-MASALA
{
  function jumlaRostmiTekshir(a: number, b: number): void {
    if (a >= 0 || b < -2) {
      console.log("Jumla rost: A >= 0 yoki B < -2.");
    } else {
      console.log("Jumla noto'g'ri: A >= 0 yoki B < -2 emas.");
    }
  }

  const a = -1;
  const b = -3;

  jumlaRostmiTekshir(a, b);
}
