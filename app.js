
const elements = [
  {
    number: 1,
    symbol: "H",
    name: "هیدروژن",
    mass: "1.008",
    configuration: "1s¹",
    shells: 1,
    protons: 1,
    neutrons: 0,
    state: "گاز",
    group: 1,period: 1,
  },
  {
    number: 2,
    symbol: "He",
    name: "هلیم",
    mass: "4.0026",
    configuration: "1s²",
    shells: 1,
    protons: 2,
    neutrons: 2,
    state: "گاز",
    group: 18, period: 1
  },
  {
    number: 3,
    symbol: "Li",
    name: "لیتیم",
    mass: "6.94",
    configuration: "1s² 2s¹",
    shells: 2,
    protons: 3,
    neutrons: 4,
    state: "جامد",
    group: 1, period: 2
  },
  {
    number: 4,
    symbol: "Be",
    name: "بریلیم",
    mass: "9.0122",
    configuration: "1s² 2s²",
    shells: 2,
    protons: 4,
    neutrons: 5,
    state: "جامد",
    group: 2, period: 2
  },
  {
    number: 5,
    symbol: "B",
    name: "بور",
    mass: "10.81",
    configuration: "1s² 2s² 2p¹",
    shells: 2,
    protons: 5,
    neutrons: 6,
    state: "جامد",
    group: 13, period: 2
  },
  {
    number: 6,
    symbol: "C",
    name: "کربن",
    mass: "12.011",
    configuration: "1s² 2s² 2p²",
    shells: 2,
    protons: 6,
    neutrons: 6,
    state: "جامد",
    group: 14, period: 2
  },
  {
    number: 7,
    symbol: "N",
    name: "نیتروژن",
    mass: "14.007",
    configuration: "1s² 2s² 2p³",
    shells: 2,
    protons: 7,
    neutrons: 7,
    state: "گاز",
    group: 15, period: 2
  },
  {
    number: 8,
    symbol: "O",
    name: "اکسیژن",
    mass: "15.999",
    configuration: "1s² 2s² 2p⁴",
    shells: 2,
    protons: 8,
    neutrons: 8,
    state: "گاز",
    	group: 16, period: 2
  },
{
  number: 9,
  symbol: "F",
  name: "فلوئور",
  mass: "18.998",
  configuration: "1s² 2s² 2p⁵",
  shells: "2, 7",
  protons: 9,
  neutrons: 10,
  state: "گاز",
  group: 17,
  period: 2,
},
{
  number: 10,
  symbol: "Ne",
  name: "نئون",
  mass: "20.180",
  configuration: "1s² 2s² 2p⁶",
  shells: "2, 8",
  protons: 10,
  neutrons: 10,
  state: "گاز",
  group: 18,
  period: 2,
},
{
  number: 11,
  symbol: "Na",
  name: "سدیم",
  mass: "22.990",
  configuration: "1s² 2s² 2p⁶ 3s¹",
  shells: "2, 8, 1",
  protons: 11,
  neutrons: 12,
  state: "جامد",
  group: 1,
  period: 3,
},
{
  number: 12,
  symbol: "Mg",
  name: "منیزیم",
  mass: "24.305",
  configuration: "1s² 2s² 2p⁶ 3s²",
  shells: "2, 8, 2",
  protons: 12,
  neutrons: 12,
  state: "جامد",
  group: 2,
  period: 3,
},
{
  number: 13,
  symbol: "Al",
  name: "آلومینیوم",
  mass: "26.982",
  configuration: "1s² 2s² 2p⁶ 3s² 3p¹",
  shells: "2, 8, 3",
  protons: 13,
  neutrons: 14,
  state: "جامد",
  group: 13,
  period: 3,
},
{
  number: 14,
  symbol: "Si",
  name: "سیلیسیم",
  mass: "28.085",
  configuration: "1s² 2s² 2p⁶ 3s² 3p²",
  shells: "2, 8, 4",
  protons: 14,
  neutrons: 14,
  state: "جامد",
  group: 14,
  period: 3,
},
{
  number: 15,
  symbol: "P",
  name: "فسفر",
  mass: "30.974",
  configuration: "1s² 2s² 2p⁶ 3s² 3p³",
  shells: "2, 8, 5",
  protons: 15,
  neutrons: 16,
  state: "جامد",
  group: 15,
  period: 3,
},
{
  number: 16,
  symbol: "S",
  name: "گوگرد",
  mass: "32.06",
  configuration: "1s² 2s² 2p⁶ 3s² 3p⁴",
  shells: "2, 8, 6",
  protons: 16,
  neutrons: 16,
  state: "جامد",
  group: 16,
  period: 3,
},
{
  number: 17,
  symbol: "Cl",
  name: "کلر",
  mass: "35.45",
  configuration: "1s² 2s² 2p⁶ 3s² 3p⁵",
  shells: "2, 8, 7",
  protons: 17,
  neutrons: 18,
  state: "گاز",
  group: 17,
  period: 3,
},
{
  number: 18,
  symbol: "Ar",
  name: "آرگون",
  mass: "39.948",
  configuration: "1s² 2s² 2p⁶ 3s² 3p⁶",
  shells: "2, 8, 8",
  protons: 18,
  neutrons: 22,
  state: "گاز",
  group: 18,
  period: 3,
},

{
  number: 19,
  symbol: "K",
  name: "پتاسیم",
  mass: "39.098",
  configuration: "[Ar] 4s¹",
  shells: "2, 8, 8, 1",
  protons: 19,
  neutrons: 20,
  state: "جامد",
  group: 1,
  period: 4,
},
{
  number: 20,
  symbol: "Ca",
  name: "کلسیم",
  mass: "40.078",
  configuration: "[Ar] 4s²",
  shells: "2, 8, 8, 2",
  protons: 20,
  neutrons: 20,
  state: "جامد",
  group: 2,
  period: 4,
},
{
  number: 21,
  symbol: "Sc",
  name: "اسکاندیم",
  mass: "44.956",
  configuration: "[Ar] 3d¹ 4s²",
  shells: "2, 8, 9, 2",
  protons: 21,
  neutrons: 24,
  state: "جامد",
  group: 3,
  period: 4,
},
{
  number: 22,
  symbol: "Ti",
  name: "تیتانیم",
  mass: "47.867",
  configuration: "[Ar] 3d² 4s²",
  shells: "2, 8, 10, 2",
  protons: 22,
  neutrons: 26,
  state: "جامد",
  group: 4,
  period: 4,
},
{
  number: 23,
  symbol: "V",
  name: "وانادیم",
  mass: "50.942",
  configuration: "[Ar] 3d³ 4s²",
  shells: "2, 8, 11, 2",
  protons: 23,
  neutrons: 28,
  state: "جامد",
  group: 5,
  period: 4,
},
{
  number: 24,
  symbol: "Cr",
  name: "کروم",
  mass: "51.996",
  configuration: "[Ar] 3d⁵ 4s¹",
  shells: "2, 8, 13, 1",
  protons: 24,
  neutrons: 28,
  state: "جامد",
  group: 6,
  period: 4,
},
{
  number: 25,
  symbol: "Mn",
  name: "منگنز",
  mass: "54.938",
  configuration: "[Ar] 3d⁵ 4s²",
  shells: "2, 8, 13, 2",
  protons: 25,
  neutrons: 30,
  state: "جامد",
  group: 7,
  period: 4,
},
{
  number: 26,
  symbol: "Fe",
  name: "آهن",
  mass: "55.845",
  configuration: "[Ar] 3d⁶ 4s²",
  shells: "2, 8, 14, 2",
  protons: 26,
  neutrons: 30,
  state: "جامد",
  group: 8,
  period: 4,
},
{
  number: 27,
  symbol: "Co",
  name: "کبالت",
  mass: "58.933",
  configuration: "[Ar] 3d⁷ 4s²",
  shells: "2, 8, 15, 2",
  protons: 27,
  neutrons: 32,
  state: "جامد",
  group: 9,
  period: 4,
},
{
  number: 28,
  symbol: "Ni",
  name: "نیکل",
  mass: "58.693",
  configuration: "[Ar] 3d⁸ 4s²",
  shells: "2, 8, 16, 2",
  protons: 28,
  neutrons: 31,
  state: "جامد",
  group: 10,
  period: 4,
},
{
  number: 29,
  symbol: "Cu",
  name: "مس",
  mass: "63.546",
  configuration: "[Ar] 3d¹⁰ 4s¹",
  shells: "2, 8, 18, 1",
  protons: 29,
  neutrons: 35,
  state: "جامد",
  group: 11,
  period: 4,
},
{
  number: 30,
  symbol: "Zn",
  name: "روی",
  mass: "65.38",
  configuration: "[Ar] 3d¹⁰ 4s²",
  shells: "2, 8, 18, 2",
  protons: 30,
  neutrons: 35,
  state: "جامد",
  group: 12,
  period: 4,
},
{
  number: 31,
  symbol: "Ga",
  name: "گالیم",
  mass: "69.723",
  configuration: "[Ar] 3d¹⁰ 4s² 4p¹",
  shells: "2, 8, 18, 3",
  protons: 31,
  neutrons: 39,
  state: "جامد",
  group: 13,
  period: 4,
},
{
  number: 32,
  symbol: "Ge",
  name: "ژرمانیم",
  mass: "72.630",
  configuration: "[Ar] 3d¹⁰ 4s² 4p²",
  shells: "2, 8, 18, 4",
  protons: 32,
  neutrons: 41,
  state: "جامد",
  group: 14,
  period: 4,
},
{
  number: 33,
  symbol: "As",
  name: "آرسنیک",
  mass: "74.922",
  configuration: "[Ar] 3d¹⁰ 4s² 4p³",
  shells: "2, 8, 18, 5",
  protons: 33,
  neutrons: 42,
  state: "جامد",
  group: 15,
  period: 4,
},
{
  number: 34,
  symbol: "Se",
  name: "سلنیوم",
  mass: "78.971",
  configuration: "[Ar] 3d¹⁰ 4s² 4p⁴",
  shells: "2, 8, 18, 6",
  protons: 34,
  neutrons: 45,
  state: "جامد",
  group: 16,
  period: 4,
},
{
  number: 35,
  symbol: "Br",
  name: "برم",
  mass: "79.904",
  configuration: "[Ar] 3d¹⁰ 4s² 4p⁵",
  shells: "2, 8, 18, 7",
  protons: 35,
  neutrons: 45,
  state: "مایع",
  group: 17,
  period: 4,
},
{
  number: 36,
  symbol: "Kr",
  name: "کریپتون",
  mass: "83.798",
  configuration: "[Ar] 3d¹⁰ 4s² 4p⁶",
  shells: "2, 8, 18, 8",
  protons: 36,
  neutrons: 48,
  state: "گاز",
  group: 18,
  period: 4,
},

{
  number: 37,
  symbol: "Rb",
  name: "روبیدیم",
  mass: "85.468",
  configuration: "[Kr] 5s¹",
  shells: "2, 8, 18, 8, 1",
  protons: 37,
  neutrons: 48,
  state: "جامد",
  group: 1,
  period: 5,
},
{
  number: 38,
  symbol: "Sr",
  name: "استرانسیم",
  mass: "87.62",
  configuration: "[Kr] 5s²",
  shells: "2, 8, 18, 8, 2",
  protons: 38,
  neutrons: 50,
  state: "جامد",
  group: 2,
  period: 5,
},
{
  number: 39,
  symbol: "Y",
  name: "ایتریم",
  mass: "88.906",
  configuration: "[Kr] 4d¹ 5s²",
  shells: "2, 8, 18, 9, 2",
  protons: 39,
  neutrons: 50,
  state: "جامد",
  group: 3,
  period: 5,
},
{
  number: 40,
  symbol: "Zr",
  name: "زیرکونیم",
  mass: "91.224",
  configuration: "[Kr] 4d² 5s²",
  shells: "2, 8, 18, 10, 2",
  protons: 40,
  neutrons: 51,
  state: "جامد",
  group: 4,
  period: 5,
},
{
  number: 41,
  symbol: "Nb",
  name: "نیوبیم",
  mass: "92.906",
  configuration: "[Kr] 4d⁴ 5s¹",
  shells: "2, 8, 18, 12, 1",
  protons: 41,
  neutrons: 52,
  state: "جامد",
  group: 5,
  period: 5,
},
{
  number: 42,
  symbol: "Mo",
  name: "مولیبدن",
  mass: "95.95",
  configuration: "[Kr] 4d⁵ 5s¹",
  shells: "2, 8, 18, 13, 1",
  protons: 42,
  neutrons: 54,
  state: "جامد",
  group: 6,
  period: 5,
},
{
  number: 43,
  symbol: "Tc",
  name: "تکنسیم",
  mass: "(98)",
  configuration: "[Kr] 4d⁵ 5s²",
  shells: "2, 8, 18, 13, 2",
  protons: 43,
  neutrons: 55,
  state: "جامد",
  group: 7,
  period: 5,
},
{
  number: 44,
  symbol: "Ru",
  name: "روتنیم",
  mass: "101.07",
  configuration: "[Kr] 4d⁷ 5s¹",
  shells: "2, 8, 18, 15, 1",
  protons: 44,
  neutrons: 57,
  state: "جامد",
  group: 8,
  period: 5,
},
{
  number: 45,
  symbol: "Rh",
  name: "رودیم",
  mass: "102.906",
  configuration: "[Kr] 4d⁸ 5s¹",
  shells: "2, 8, 18, 16, 1",
  protons: 45,
  neutrons: 58,
  state: "جامد",
  group: 9,
  period: 5,
},
{
  number: 46,
  symbol: "Pd",
  name: "پالادیم",
  mass: "106.42",
  configuration: "[Kr] 4d¹⁰",
  shells: "2, 8, 18, 18",
  protons: 46,
  neutrons: 60,
  state: "جامد",
  group: 10,
  period: 5,
},
{
  number: 47,
  symbol: "Ag",
  name: "نقره",
  mass: "107.868",
  configuration: "[Kr] 4d¹⁰ 5s¹",
  shells: "2, 8, 18, 18, 1",
  protons: 47,
  neutrons: 61,
  state: "جامد",
  group: 11,
  period: 5,
},
{
  number: 48,
  symbol: "Cd",
  name: "کادمیم",
  mass: "112.414",
  configuration: "[Kr] 4d¹⁰ 5s²",
  shells: "2, 8, 18, 18, 2",
  protons: 48,
  neutrons: 64,
  state: "جامد",
  group: 12,
  period: 5,
},
{
  number: 49,
  symbol: "In",
  name: "ایندیم",
  mass: "114.818",
  configuration: "[Kr] 4d¹⁰ 5s² 5p¹",
  shells: "2, 8, 18, 18, 3",
  protons: 49,
  neutrons: 66,
  state: "جامد",
  group: 13,
  period: 5,
},
{
  number: 50,
  symbol: "Sn",
  name: "قلع",
  mass: "118.710",
  configuration: "[Kr] 4d¹⁰ 5s² 5p²",
  shells: "2, 8, 18, 18, 4",
  protons: 50,
  neutrons: 69,
  state: "جامد",
  group: 14,
  period: 5,
},
{
  number: 51,
  symbol: "Sb",
  name: "آنتیموان",
  mass: "121.760",
  configuration: "[Kr] 4d¹⁰ 5s² 5p³",
  shells: "2, 8, 18, 18, 5",
  protons: 51,
  neutrons: 71,
  state: "جامد",
  group: 15,
  period: 5,
},
{
  number: 52,
  symbol: "Te",
  name: "تلوریم",
  mass: "127.60",
  configuration: "[Kr] 4d¹⁰ 5s² 5p⁴",
  shells: "2, 8, 18, 18, 6",
  protons: 52,
  neutrons: 76,
  state: "جامد",
  group: 16,
  period: 5,
},
{
  number: 53,
  symbol: "I",
  name: "ید",
  mass: "126.904",
  configuration: "[Kr] 4d¹⁰ 5s² 5p⁵",
  shells: "2, 8, 18, 18, 7",
  protons: 53,
  neutrons: 74,
  state: "جامد",
  group: 17,
  period: 5,
},
{
  number: 54,
  symbol: "Xe",
  name: "زنون",
  mass: "131.293",
  configuration: "[Kr] 4d¹⁰ 5s² 5p⁶",
  shells: "2, 8, 18, 18, 8",
  protons: 54,
  neutrons: 77,
  state: "گاز",
  group: 18,
  period: 5,
},
{
  number: 55,
  symbol: "Cs",
  name: "سزیم",
  mass: 132.905,
  configuration: "[Xe] 6s¹",
  shells: "2, 8, 18, 18, 8, 1",
  protons: 55,
  neutrons: 78,
  state: "جامد",
  group: 1,
  period: 6
},
{
  number: 56,
  symbol: "Ba",
  name: "باریم",
  mass: 137.327,
  configuration: "[Xe] 6s²",
  shells: "2, 8, 18, 18, 8, 2",
  protons: 56,
  neutrons: 81,
  state: "جامد",
  group: 2,
  period: 6
},
{
  number: 57,
  symbol: "La",
  name: "لانتان",
  mass: 138.905,
  configuration: "[Xe] 5d¹ 6s²",
  shells: "2, 8, 18, 18, 9, 2",
  protons: 57,
  neutrons: 82,
  state: "جامد",
  group: 3,
  period: 6,
  displayRow: 8,
},
{
  number: 58,
  symbol: "Ce",
  name: "سریم",
  mass: 140.116,
  configuration: "[Xe] 4f¹ 5d¹ 6s²",
  shells: "2, 8, 18, 19, 9, 2",
  protons: 58,
  neutrons: 82,
  state: "جامد",
  group: 4,
  period: 6,
  displayRow: 8,
},
{
  number: 59,
  symbol: "Pr",
  name: "پرازئودیمیم",
  mass: 140.908,
  configuration: "[Xe] 4f³ 6s²",
  shells: "2, 8, 18, 21, 8, 2",
  protons: 59,
  neutrons: 82,
  state: "جامد",
  group: 5,
  period: 6,
  displayRow: 8,
},
{
  number: 60,
  symbol: "Nd",
  name: "نئودیمیم",
  mass: 144.242,
  configuration: "[Xe] 4f⁴ 6s²",
  shells: "2, 8, 18, 22, 8, 2",
  protons: 60,
  neutrons: 84,
  state: "جامد",
  group: 6,
  period: 6,
  displayRow: 8,
},
{
  number: 61,
  symbol: "Pm",
  name: "پرومتیم",
  mass: 145,
  configuration: "[Xe] 4f⁵ 6s²",
  shells: "2, 8, 18, 23, 8, 2",
  protons: 61,
  neutrons: 84,
  state: "جامد",
  group: 7,
  period: 6,
  displayRow: 8,
},
{
  number: 62,
  symbol: "Sm",
  name: "ساماریم",
  mass: 150.36,
  configuration: "[Xe] 4f⁶ 6s²",
  shells: "2, 8, 18, 24, 8, 2",
  protons: 62,
  neutrons: 88,
  state: "جامد",
  group: 8,
  period: 6,
  displayRow: 8,
},
{
  number: 63,
  symbol: "Eu",
  name: "یوروپیم",
  mass: 151.964,
  configuration: "[Xe] 4f⁷ 6s²",
  shells: "2, 8, 18, 25, 8, 2",
  protons: 63,
  neutrons: 89,
  state: "جامد",
  group: 9,
  period: 6,
  displayRow: 8,
},
{
  number: 64,
  symbol: "Gd",
  name: "گادولینیم",
  mass: 157.25,
  configuration: "[Xe] 4f⁷ 5d¹ 6s²",
  shells: "2, 8, 18, 25, 9, 2",
  protons: 64,
  neutrons: 93,
  state: "جامد",
  group: 10,
  period: 6,
  displayRow: 8,
},
{
  number: 65,
  symbol: "Tb",
  name: "تربیم",
  mass: 158.925,
  configuration: "[Xe] 4f⁹ 6s²",
  shells: "2, 8, 18, 27, 8, 2",
  protons: 65,
  neutrons: 94,
  state: "جامد",
  group: 11,
  period: 6,
  displayRow: 8,
},
{
  number: 66,
  symbol: "Dy",
  name: "دیسپروزیم",
  mass: 162.5,
  configuration: "[Xe] 4f¹⁰ 6s²",
  shells: "2, 8, 18, 28, 8, 2",
  protons: 66,
  neutrons: 97,
  state: "جامد",
  group: 12,
  period: 6,
  displayRow: 8,
},
{
  number: 67,
  symbol: "Ho",
  name: "هولمیم",
  mass: 164.93,
  configuration: "[Xe] 4f¹¹ 6s²",
  shells: "2, 8, 18, 29, 8, 2",
  protons: 67,
  neutrons: 98,
  state: "جامد",
  group: 13,
  period: 6,
  displayRow: 8,
},
{
  number: 68,
  symbol: "Er",
  name: "اربیم",
  mass: 167.259,
  configuration: "[Xe] 4f¹² 6s²",
  shells: "2, 8, 18, 30, 8, 2",
  protons: 68,
  neutrons: 99,
  state: "جامد",
  group: 14,
  period: 6,
  displayRow: 8,
},
{
  number: 69,
  symbol: "Tm",
  name: "تولیم",
  mass: 168.934,
  configuration: "[Xe] 4f¹³ 6s²",
  shells: "2, 8, 18, 31, 8, 2",
  protons: 69,
  neutrons: 100,
  state: "جامد",
  group: 15,
  period: 6,
  displayRow: 8,
},
{
  number: 70,
  symbol: "Yb",
  name: "ایتربیم",
  mass: 173.045,
  configuration: "[Xe] 4f¹⁴ 6s²",
  shells: "2, 8, 18, 32, 8, 2",
  protons: 70,
  neutrons: 103,
  state: "جامد",
  group: 16,
  period: 6,
  displayRow: 8,
},
{
  number: 71,
  symbol: "Lu",
  name: "لوتتیم",
  mass: 174.967,
  configuration: "[Xe] 4f¹⁴ 5d¹ 6s²",
  shells: "2, 8, 18, 32, 9, 2",
  protons: 71,
  neutrons: 104,
  state: "جامد",
  group: 17,
  period: 6,
  displayRow: 8,
},
{
  number: 72,
  symbol: "Hf",
  name: "هافنیم",
  mass: 178.49,
  configuration: "[Xe] 4f14 5d2 6s2",
  shells: [2, 8, 18, 32, 10, 2],
  protons: 72,
  neutrons: 106,
  state: "جامد",
  group: 4,
  period: 6,
},
{
  number: 73,
  symbol: "Ta",
  name: "تانتالوم",
  mass: 180.95,
  configuration: "[Xe] 4f14 5d3 6s2",
  shells: [2, 8, 18, 32, 11, 2],
  protons: 73,
  neutrons: 108,
  state: "جامد",
  group: 5,
  period: 6,
},
{
  number: 74,
  symbol: "W",
  name: "تنگستن",
  mass: 183.84,
  configuration: "[Xe] 4f14 5d4 6s2",
  shells: [2, 8, 18, 32, 12, 2],
  protons: 74,
  neutrons: 110,
  state: "جامد",
  group: 6,
  period: 6,
},
{
  number: 75,
  symbol: "Re",
  name: "رنیوم",
  mass: 186.21,
  configuration: "[Xe] 4f14 5d5 6s2",
  shells: [2, 8, 18, 32, 13, 2],
  protons: 75,
  neutrons: 111,
  state: "جامد",
  group: 7,
  period: 6,
},
{
  number: 76,
  symbol: "Os",
  name: "اسمیم",
  mass: 190.23,
  configuration: "[Xe] 4f14 5d6 6s2",
  shells: [2, 8, 18, 32, 14, 2],
  protons: 76,
  neutrons: 114,
  state: "جامد",
  group: 8,
  period: 6,
},
{
  number: 77,
  symbol: "Ir",
  name: "ایریدیم",
  mass: 192.22,
  configuration: "[Xe] 4f14 5d7 6s2",
  shells: [2, 8, 18, 32, 15, 2],
  protons: 77,
  neutrons: 115,
  state: "جامد",
  group: 9,
  period: 6,
},
{
  number: 78,
  symbol: "Pt",
  name: "پلاتین",
  mass: 195.08,
  configuration: "[Xe] 4f14 5d9 6s1",
  shells: [2, 8, 18, 32, 17, 1],
  protons: 78,
  neutrons: 117,
  state: "جامد",
  group: 10,
  period: 6,
},
{
  number: 79,
  symbol: "Au",
  name: "طلا",
  mass: 196.97,
  configuration: "[Xe] 4f14 5d10 6s1",
  shells: [2, 8, 18, 32, 18, 1],
  protons: 79,
  neutrons: 118,
  state: "جامد",
  group: 11,
  period: 6,
},
{
  number: 80,
  symbol: "Hg",
  name: "جیوه",
  mass: 200.59,
  configuration: "[Xe] 4f14 5d10 6s2",
  shells: [2, 8, 18, 32, 18, 2],
  protons: 80,
  neutrons: 121,
  state: "مایع",
  group: 12,
  period: 6,
},
{
  number: 81,
  symbol: "Tl",
  name: "تالیم",
  mass: 204.38,
  configuration: "[Xe] 4f14 5d10 6s2 6p1",
  shells: [2, 8, 18, 32, 18, 3],
  protons: 81,
  neutrons: 123,
  state: "جامد",
  group: 13,
  period: 6,
},
{
  number: 82,
  symbol: "Pb",
  name: "سرب",
  mass: 207.2,
  configuration: "[Xe] 4f14 5d10 6s2 6p2",
  shells: [2, 8, 18, 32, 18, 4],
  protons: 82,
  neutrons: 125,
  state: "جامد",
  group: 14,
  period: 6,
},
{
  number: 83,
  symbol: "Bi",
  name: "بیسموت",
  mass: 208.98,
  configuration: "[Xe] 4f14 5d10 6s2 6p3",
  shells: [2, 8, 18, 32, 18, 5],
  protons: 83,
  neutrons: 126,
  state: "جامد",
  group: 15,
  period: 6,
},
{
  number: 84,
  symbol: "Po",
  name: "پولونیم",
  mass: 209,
  configuration: "[Xe] 4f14 5d10 6s2 6p4",
  shells: [2, 8, 18, 32, 18, 6],
  protons: 84,
  neutrons: 125,
  state: "جامد",
  group: 16,
  period: 6,
},
{
  number: 85,
  symbol: "At",
  name: "استاتین",
  mass: 210,
  configuration: "[Xe] 4f14 5d10 6s2 6p5",
  shells: [2, 8, 18, 32, 18, 7],
  protons: 85,
  neutrons: 125,
  state: "جامد",
  group: 17,
  period: 6,
},
{
  number: 86,
  symbol: "Rn",
  name: "رادون",
  mass: 222,
  configuration: "[Xe] 4f14 5d10 6s2 6p6",
  shells: [2, 8, 18, 32, 18, 8],
  protons: 86,
  neutrons: 136,
  state: "گاز",
  group: 18,
  period: 6,
},
{
  number: 87,
  symbol: "Fr",
  name: "فرانسیم",
  mass: 223,
  configuration: "[Rn] 7s1",
  shells: [2, 8, 18, 32, 18, 8, 1],
  protons: 87,
  neutrons: 136,
  state: "جامد",
  group: 1,
  period: 7,
},
{
  number: 88,
  symbol: "Ra",
  name: "رادیم",
  mass: 226,
  configuration: "[Rn] 7s2",
  shells: [2, 8, 18, 32, 18, 8, 2],
  protons: 88,
  neutrons: 138,
  state: "جامد",
  group: 2,
  period: 7,
},
{
  number: 89,
  symbol: "Ac",
  name: "اکتینیم",
  mass: 227,
  configuration: "[Rn] 6d1 7s2",
  shells: [2, 8, 18, 32, 18, 9, 2],
  protons: 89,
  neutrons: 138,
  state: "جامد",
  group: 3,
  period: 7,
  displayRow: 9,
},
{
  number: 90,
  symbol: "Th",
  name: "توریم",
  mass: 232.04,
  configuration: "[Rn] 6d2 7s2",
  shells: [2, 8, 18, 32, 18, 10, 2],
  protons: 90,
  neutrons: 142,
  state: "جامد",
  group: 4,
  period: 7,
  displayRow: 9,
},
{
  number: 91,
  symbol: "Pa",
  name: "پروتاکتینیم",
  mass: 231.04,
  configuration: "[Rn] 5f2 6d1 7s2",
  shells: [2, 8, 18, 32, 20, 9, 2],
  protons: 91,
  neutrons: 140,
  state: "جامد",
  group: 5,
  period: 7,
  displayRow: 9,
},
{
  number: 92,
  symbol: "U",
  name: "اورانیوم",
  mass: 238.03,
  configuration: "[Rn] 5f3 6d1 7s2",
  shells: [2, 8, 18, 32, 21, 9, 2],
  protons: 92,
  neutrons: 146,
  state: "جامد",
  group: 6,
  period: 7,
  displayRow: 9,
},
{
  number: 93,
  symbol: "Np",
  name: "نپتونیم",
  mass: 237,
  configuration: "[Rn] 5f4 6d1 7s2",
  shells: [2, 8, 18, 32, 22, 9, 2],
  protons: 93,
  neutrons: 144,
  state: "جامد",
  group: 7,
  period: 7,
  displayRow: 9,
},
{
  number: 94,
  symbol: "Pu",
  name: "پلوتونیم",
  mass: 244,
  configuration: "[Rn] 5f6 7s2",
  shells: [2, 8, 18, 32, 24, 8, 2],
  protons: 94,
  neutrons: 150,
  state: "جامد",
  group: 8,
  period: 7,
  displayRow: 9,
},
{
  number: 95,
  symbol: "Am",
  name: "آمریکیم",
  mass: 243,
  configuration: "[Rn] 5f7 7s2",
  shells: [2, 8, 18, 32, 25, 8, 2],
  protons: 95,
  neutrons: 148,
  state: "جامد",
  group: 9,
  period: 7,
  displayRow: 9,
},
{
  number: 96,
  symbol: "Cm",
  name: "کوریوم",
  mass: 247,
  configuration: "[Rn] 5f7 6d1 7s2",
  shells: [2, 8, 18, 32, 25, 9, 2],
  protons: 96,
  neutrons: 151,
  state: "جامد",
  group: 10,
  period: 7,
  displayRow: 9,
},
{
  number: 97,
  symbol: "Bk",
  name: "برکلیم",
  mass: 247,
  configuration: "[Rn] 5f9 7s2",
  shells: [2, 8, 18, 32, 27, 8, 2],
  protons: 97,
  neutrons: 150,
  state: "جامد",
  group: 11,
  period: 7,
  displayRow: 9,
},
{
  number: 98,
  symbol: "Cf",
  name: "کالیفرنیم",
  mass: 251,
  configuration: "[Rn] 5f10 7s2",
  shells: [2, 8, 18, 32, 28, 8, 2],
  protons: 98,
  neutrons: 153,
  state: "جامد",
  group: 12,
  period: 7,
  displayRow: 9,
},
{
  number: 99,
  symbol: "Es",
  name: "اینشتینیم",
  mass: 252,
  configuration: "[Rn] 5f11 7s2",
  shells: [2, 8, 18, 32, 29, 8, 2],
  protons: 99,
  neutrons: 153,
  state: "جامد",
  group: 13,
  period: 7,
  displayRow: 9,
},
{
  number: 100,
  symbol: "Fm",
  name: "فرمیم",
  mass: 257,
  configuration: "[Rn] 5f12 7s2",
  shells: [2, 8, 18, 32, 30, 8, 2],
  protons: 100,
  neutrons: 157,
  state: "جامد",
  group: 14,
  period: 7,
  displayRow: 9,
},
{
  number: 101,
  symbol: "Md",
  name: "مندلیفیم",
  mass: 258,
  configuration: "[Rn] 5f13 7s2",
  shells: [2, 8, 18, 32, 31, 8, 2],
  protons: 101,
  neutrons: 157,
  state: "جامد",
  group: 15,
  period: 7,
  displayRow: 9,
},
{
  number: 102,
  symbol: "No",
  name: "نوبلیم",
  mass: 259,
  configuration: "[Rn] 5f14 7s2",
  shells: [2, 8, 18, 32, 32, 8, 2],
  protons: 102,
  neutrons: 157,
  state: "جامد",
  group: 16,
  period: 7,
  displayRow: 9,
},
{
  number: 103,
  symbol: "Lr",
  name: "لورنسیم",
  mass: 266,
  configuration: "[Rn] 5f14 7s2 7p1",
  shells: [2, 8, 18, 32, 32, 8, 3],
  protons: 103,
  neutrons: 163,
  state: "جامد",
  group: 17,
  period: 7,
  displayRow: 9,
},
{
  number: 104,
  symbol: "Rf",
  name: "رادرفوردیم",
  mass: 267,
  configuration: "[Rn] 5f14 6d2 7s2",
  shells: [2, 8, 18, 32, 32, 10, 2],
  protons: 104,
  neutrons: 163,
  state: "جامد",
  group: 4,
  period: 7,
},
{
  number: 105,
  symbol: "Db",
  name: "دوبنیم",
  mass: 268,
  configuration: "[Rn] 5f14 6d3 7s2",
  shells: [2, 8, 18, 32, 32, 11, 2],
  protons: 105,
  neutrons: 163,
  state: "جامد",
  group: 5,
  period: 7,
},
{
  number: 106,
  symbol: "Sg",
  name: "سیبورگیم",
  mass: 269,
  configuration: "[Rn] 5f14 6d4 7s2",
  shells: [2, 8, 18, 32, 32, 12, 2],
  protons: 106,
  neutrons: 163,
  state: "جامد",
  group: 6,
  period: 7,
},
{
  number: 107,
  symbol: "Bh",
  name: "بوهریم",
  mass: 270,
  configuration: "[Rn] 5f14 6d5 7s2",
  shells: [2, 8, 18, 32, 32, 13, 2],
  protons: 107,
  neutrons: 163,
  state: "جامد",
  group: 7,
  period: 7,
},
{
  number: 108,
  symbol: "Hs",
  name: "هاسیم",
  mass: 277,
  configuration: "[Rn] 5f14 6d6 7s2",
  shells: [2, 8, 18, 32, 32, 14, 2],
  protons: 108,
  neutrons: 169,
  state: "جامد",
  group: 8,
  period: 7,
},
{
  number: 109,
  symbol: "Mt",
  name: "مایتنریم",
  mass: 278,
  configuration: "[Rn] 5f14 6d7 7s2",
  shells: [2, 8, 18, 32, 32, 15, 2],
  protons: 109,
  neutrons: 169,
  state: "نامشخص",
  group: 9,
  period: 7,
},
{
  number: 110,
  symbol: "Ds",
  name: "دارمشتاتیم",
  mass: 281,
  configuration: "[Rn] 5f14 6d8 7s2",
  shells: [2, 8, 18, 32, 32, 16, 2],
  protons: 110,
  neutrons: 171,
  state: "نامشخص",
  group: 10,
  period: 7,
},
{
  number: 111,
  symbol: "Rg",
  name: "رونتگنیم",
  mass: 282,
  configuration: "[Rn] 5f14 6d9 7s2",
  shells: [2, 8, 18, 32, 32, 17, 2],
  protons: 111,
  neutrons: 171,
  state: "نامشخص",
  group: 11,
  period: 7,
},
{
  number: 112,
  symbol: "Cn",
  name: "کوپرنیسیم",
  mass: 285,
  configuration: "[Rn] 5f14 6d10 7s2",
  shells: [2, 8, 18, 32, 32, 18, 2],
  protons: 112,
  neutrons: 173,
  state: "نامشخص",
  group: 12,
  period: 7,
},
{
  number: 113,
  symbol: "Nh",
  name: "نیهونیم",
  mass: 286,
  configuration: "[Rn] 5f14 6d10 7s2 7p1",
  shells: [2, 8, 18, 32, 32, 18, 3],
  protons: 113,
  neutrons: 173,
  state: "نامشخص",
  group: 13,
  period: 7,
},
{
  number: 114,
  symbol: "Fl",
  name: "فلروویم",
  mass: 289,
  configuration: "[Rn] 5f14 6d10 7s2 7p2",
  shells: [2, 8, 18, 32, 32, 18, 4],
  protons: 114,
  neutrons: 175,
  state: "نامشخص",
  group: 14,
  period: 7,
},
{
  number: 115,
  symbol: "Mc",
  name: "مسکوویم",
  mass: 290,
  configuration: "[Rn] 5f14 6d10 7s2 7p3",
  shells: [2, 8, 18, 32, 32, 18, 5],
  protons: 115,
  neutrons: 175,
  state: "نامشخص",
  group: 15,
  period: 7,
},
{
  number: 116,
  symbol: "Lv",
  name: "لیورموریم",
  mass: 293,
  configuration: "[Rn] 5f14 6d10 7s2 7p4",
  shells: [2, 8, 18, 32, 32, 18, 6],
  protons: 116,
  neutrons: 177,
  state: "نامشخص",
  group: 16,
  period: 7,
},
{
  number: 117,
  symbol: "Ts",
  name: "تنسین",
  mass: 294,
  configuration: "[Rn] 5f14 6d10 7s2 7p5",
  shells: [2, 8, 18, 32, 32, 18, 7],
  protons: 117,
  neutrons: 177,
  state: "نامشخص",
  group: 17,
  period: 7,
},
{
  number: 118,
  symbol: "Og",
  name: "اوگانسون",
  mass: 294,
  configuration: "[Rn] 5f14 6d10 7s2 7p6",
  shells: [2, 8, 18, 32, 32, 18, 8],
  protons: 118,
  neutrons: 176,
  state: "نامشخص",
  group: 18,
  period: 7,
},
];

const container = document.getElementById("elements");
const details = document.getElementById("details");
const search = document.getElementById("search");


function getElementCategory(element) {
  const n = element.number;

  // فلزات قلیایی
  if ([3, 11, 19, 37, 55, 87].includes(n)) return "alkali";

  // فلزات قلیایی خاکی
  if ([4, 12, 20, 38, 56, 88].includes(n)) return "alkaline";

  // فلزات واسطه
  if (
    (n >= 21 && n <= 30) ||
    (n >= 39 && n <= 48) ||
    (n >= 72 && n <= 80) ||
    (n >= 104 && n <= 112)
  ) return "transition";

  // فلزات پس‌واسطه
  if ([13, 31, 49, 50, 81, 82, 83, 84, 113, 114, 115, 116].includes(n)) {
    return "post-transition";
  }

  // شبه‌فلزها
  if ([5, 14, 32, 33, 51, 52].includes(n)) return "metalloid";

  // نافلزها
  if ([1, 6, 7, 8, 15, 16, 34].includes(n)) return "nonmetal";

  // هالوژن‌ها
  if ([9, 17, 35, 53, 85, 117].includes(n)) return "halogen";

  // گازهای نجیب
  if ([2, 10, 18, 36, 54, 86, 118].includes(n)) return "noble-gas";

  // لانتانیدها
  if (n >= 57 && n <= 71) return "lanthanide";

  // اکتینیدها
  if (n >= 89 && n <= 103) return "actinide";

   return "other";
}
function getElectronsPerShell(configuration) {
  const nobleGasCores = {
    "[He]": "1s²",
    "[Ne]": "1s² 2s² 2p⁶",
    "[Ar]": "1s² 2s² 2p⁶ 3s² 3p⁶",
    "[Kr]": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶",
    "[Xe]": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶",
    "[Rn]": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶"
  };

  for (const gas in nobleGasCores) {
    configuration = configuration.replace(gas, nobleGasCores[gas]);
  }

  const shells = {};

  const parts = configuration.match(/\d+[spdf][⁰¹²³⁴⁵⁶⁷⁸⁹]+/g);

  if (!parts) return [];

  const superscripts = {
    "⁰": 0, "¹": 1, "²": 2, "³": 3,
    "⁴": 4, "⁵": 5, "⁶": 6,
    "⁷": 7, "⁸": 8, "⁹": 9
  };

   parts.forEach(part => {
    const match = part.match(/^(\d+)[spdf]([⁰¹²³⁴⁵⁶⁷⁸⁹]+)$/);

    if (match) {
      const shellNumber = Number(match[1]);

      const electronCount = Number(
        [...match[2]].map(char => superscripts[char]).join("")
      );

      shells[shellNumber] = (shells[shellNumber] || 0) + electronCount;
    }
  });

  return Object.values(shells);
}
function showElements(list) {
  container.innerHTML = "";

  list.forEach(element => {
    const card = document.createElement("div");

    card.className = "element";
    card.classList.add(getElementCategory(element));

    card.style.gridColumn = element.group;
    card.style.gridRow = element.displayRow
      ? Number(element.displayRow)
      : Number(element.period);

    if (element.number >= 57 && element.number <= 71) {
      card.style.gridRow = 8;
    }

    if (element.number >= 89 && element.number <= 103) {
      card.style.gridRow = 9;
    }

    card.innerHTML = `
      <small>${element.number}</small>
      <strong>${element.symbol}</strong>
      <small>${element.name}</small>
    `;

    card.addEventListener("click", () => {
      showDetails(element);
    });

    container.appendChild(card);
  });
}

function showDetails(element) {
  const electrons = getElectronsPerShell(element.configuration);
  console.log(element.symbol, electrons);

  const shellColors = [
    "#38bdf8",
    "#a78bfa",
    "#34d399",
    "#fbbf24",
    "#fb7185",
    "#f97316",
    "#e879f9"
  ];

  const center = 170;
  const radii = [30, 50, 70, 90, 110, 130, 150];

  let bohrHTML = `
    <div class="bohr-container">
      <svg viewBox="0 0 340 340" class="bohr-model">
  `;

  electrons.forEach((count, index) => {
    const radius = radii[index];
    const color = shellColors[index];

    bohrHTML += `
      <circle cx="${center}" cy="${center}" r="${radius}"
        fill="none" stroke="${color}" stroke-width="1.5" opacity="0.7"/>
    `;

    for (let i = 0; i < count; i++) {
      const angle = (2 * Math.PI * i / count) - Math.PI / 2;
      const x = center + radius * Math.cos(angle);
      const y = center + radius * Math.sin(angle);

      bohrHTML += `
    <circle cx="${x}" cy="${y}" r="4"
          fill="${color}" stroke="#ffffff" stroke-width="0.7">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 ${center} ${center}"
            to="360 ${center} ${center}"
            dur="${4 + index * 1.5}s"
            repeatCount="indefinite"/>
        </circle>
      `;
    }
  });

  bohrHTML += `
      ${Array.from({ length: element.protons }, (_, i) => {
  const angle = i * 2.399;
  const radius = 0.8 * Math.sqrt(i);
  const x = center + radius * Math.cos(angle);
  const y = center + radius * Math.sin(angle);

  return `
    <circle cx="${x}" cy="${y}" r="2"
      fill="#ef4444" stroke="white" stroke-width="0.5"/>
  `;
}).join("")}

${Array.from({ length: element.neutrons }, (_, i) => {
  const angle = i * 2.399 + 1;
  const radius = 0.8 * Math.sqrt(i);
  const x = center + radius * Math.cos(angle);
  const y = center + radius * Math.sin(angle);

  return `
    <circle cx="${x}" cy="${y}" r="2"
      fill="#94a3b8" stroke="white" stroke-width="0.5"/>
  `;
}).join("")}
      <text x="${center}" y="${center + 4}" text-anchor="middle"
        fill="white" font-size="10">هسته</text>
      </svg>
    </div>
  `;

  details.innerHTML = `
    <h2>${element.name} (${element.symbol})</h2>

    <div class="bohr-section">
      <h3>مدل اتمی بور</h3>
      ${bohrHTML}
      <p>توزیع الکترون‌ها: ${electrons.join(" - ")}</p>
      <div class="bohr-legend">
  <span><i class="proton-dot"></i> پروتون</span>
  <span><i class="neutron-dot"></i> نوترون</span>
  <span><i class="electron-dot"></i> الکترون</span>
</div>
</div>
<div class="quantum-section">
  <h3>مدل کوانتومی اتم</h3>
  <div class="quantum-model" id="quantum-model">
  </div>
  <p>نمایش اوربیتال‌های الکترونی</p>
</div>

    <p>عدد اتمی: ${element.number}</p>
    <p>جرم اتمی: ${element.mass}</p>
    <p>آرایش الکترونی: ${element.configuration}</p>
    <p>تعداد لایه‌ها: ${element.shells}</p>
    <p>تعداد پروتون‌ها: ${element.protons}</p>
    <p>حالت فیزیکی: ${element.state}</p>
        <p>تعداد نوترون‌ها: ${element.neutrons}</p>
  `;

  const quantumModel = document.getElementById("quantum-model");
if (quantumModel) {
  const nobleGasCores = {
  "[He]": "1s²",
  "[Ne]": "1s² 2s² 2p⁶",
  "[Ar]": "1s² 2s² 2p⁶ 3s² 3p⁶",
  "[Kr]": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶",
  "[Xe]": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶",
  "[Rn]": "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶"
};

let configuration = element.configuration;

for (const gas in nobleGasCores) {
  configuration = configuration.replace(gas, nobleGasCores[gas]);
}

const orbitals = configuration.match(/\d+[spdf][⁰¹²³⁴⁵⁶⁷⁸⁹]+/g) || [];

  quantumModel.innerHTML = orbitals.map(orbital => {
    const type = orbital.match(/[spdf]/)[0];
    const shell = orbital.match(/\d+/)[0];
    const count = orbital.match(/[⁰¹²³⁴⁵⁶⁷⁸⁹]+/)[0];

    return `
      <div class="orbital-item">
        <div class="orbital ${type}-orbital">
          <span>${type}</span>
        </div>
        <p>${shell}${type}${count}</p>
      </div>
    `;
  }).join("");
}
}
showElements(elements);
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js")
      .then(() => {
        console.log("برنامه آماده اجرای آفلاین است");
      })
      .catch(error => {
        console.log("خطا در ثبت Service Worker:", error);
      });
  });
}
window.addEventListener("load", () => {
  setTimeout(() => {
    const splash = document.getElementById("splash-screen");

    if (splash) {
      splash.style.transition = "opacity 0.8s ease";
      splash.style.opacity = "0";

      setTimeout(() => {
        splash.remove();
      }, 800);
    }
  }, 2500);
});
