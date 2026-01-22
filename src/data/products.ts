// src/data/products.ts
import paslanmazCelik from "../assets/images/paslanmaz_celik.png";
import sogukIsTakimCelikleri from "../assets/images/SogukIsTakimCelikleri.jpeg";
import sicakIsTakimCelikleri from "../assets/images/SicakIsTakimCelikleri.jpeg";
import yuksekHizTakimCelikleri from "../assets/images/YuksekHizCelikleri.jpeg";
import nitrasyonCelikleri from "../assets/images/NitrasyonCelikleri.jpeg"
import celikGeneral from "../assets/images/celikGeneral.png"
import CuAl10Fe3Mn2 from "../assets/images/CuAl10Fe3Mn2.jpeg";
import CuAl10Ni5Fe4 from "../assets/images/CuAl10Ni5Fe4.jpeg";
import CuAl14Fe4Mn2 from "../assets/images/CuAl14Fe4Mn2.jpeg";
import CuSn10 from "../assets/images/CuSn10.jpeg";
import CuSn12 from "../assets/images/CuSn12.jpeg";
import CuSn12Ni from "../assets/images/CuSn12Ni.jpeg";  
import s_2344 from "../assets/images/2344.jpeg";
import s_2343_ESR from "../assets/images/2343ESR.jpeg";  
import s_2367 from "../assets/images/2367.jpeg";  
import s_2714QT from "../assets/images/2714QT.jpeg";  
import s_2379 from "../assets/images/2379.jpeg";  
import s_2360 from "../assets/images/2360.jpeg";  
import s_2767 from "../assets/images/2767.jpeg";  
import s_3343 from "../assets/images/3343.jpeg";
import s_3243 from "../assets/images/3243.jpeg";
import s_8550 from "../assets/images/8550.jpeg";
import s_8519 from "../assets/images/8519.jpeg";
import titaniumAlasim from "../assets/images/TitanyumAlasimlari.jpeg";  
import tiGrade2 from "../assets/images/tiGrade2.png";  
import tiGrade5 from "../assets/images/tiGrade5.png"; 
import tiGrade9 from "../assets/images/tiGrade9.png";
import cuCrZr2 from "../assets/images/cuCrZr_2.jpeg";
import cuCo2Be from "../assets/images/CuCo2Be.jpeg";
import cuCoNiBe from "../assets/images/CuCoNiBe.jpeg";
import cuNi2SiCr from "../assets/images/CuNi2SiCr.jpeg";
import nikelAlasimlar from "../assets/images/nikel_alasimlari.jpeg";
import inconel625 from "../assets/images/inconel_625.jpeg";
import inconel718 from "../assets/images/inconel_718.jpeg";
import p_1_4057 from "../assets/images/paslanmaz_4057.jpeg";
import p_1_4112 from "../assets/images/paslanmaz_4112.jpeg";
import p_1_4542 from "../assets/images/paslanmaz_1_4542.jpeg";
import p_1_4545 from "../assets/images/paslanmaz_1_4545.jpeg";
import p_1_4534 from "../assets/images/paslanmaz_1_4534.jpeg";
import cuBe2 from "../assets/images/CuBe2.jpeg";
import s_2358 from "../assets/images/s_2358.jpeg";
/* ----------------------------------------------
   TABLO BÖLÜMLERİ (DynamicTable için)
---------------------------------------------- */

export const CuCrZr_Table = [
  {
    title: "Kimyasal Bileşimi",
    columns: ["Cr", "Zr", "Diğer", "Cu"],
    values: ["0.5 - 1.2", "0.03 - 0.3", "Max 0.2", "Kalan"],
  },
  {
    title: "Mekanik Özellikleri",
    columns: ["Sertlik", "Çekme Dayanımı", "Akma Dayanımı", "Uzama L=5D", "Elastisite Modülü"],
    values: ["135–170 HB", "400–500 N/mm²", "320–410 N/mm²", "%18", "122 GPa"],
  },
  {
    title: "Fiziksel Özellikleri",
    columns: ["Elektrik İletkenliği", "Isıl Genleşme Katsayısı", "Isı İletkenliği (20°C)", "Yoğunluk"],
    values: ["45 MS/m", "17 1/K*10⁻⁶", "320 W/mK", "8.9 g/cm³"],
  },
];

export const CuNi2SiCr_Table = [
  {
    title: "Kimyasal Bileşimi",
    columns: ["Cr", "Si", "Ni", "Diğer", "Cu"],
    values: ["0.3 - 0.5", "0.6 - 0.8", "2.4 - 2.8","Max 0.40", "Kalan"],
  },
  {
    title: "Mekanik Özellikleri",
    columns: ["Sertlik", "Çekme Dayanımı", "Akma Dayanımı", "Uzama L=5D", "Elastisite Modülü 20°C"],
    values: ["190–230 HB", "600–800 N/mm²", "500–600 N/mm²", "%10-15", "140 GPa"],
  },
  {
    title: "Fiziksel Özellikleri",
    columns: ["Elektrik İletkenliği", "Isıl Genleşme Katsayısı", "Isı İletkenliği (20°C)", "Yoğunluk"],
    values: ["22-27 MS/m", "17 1/K*10⁻⁶", "190-230 W/mK", "8.8 g/cm³"],
  },
];

export const CuCo2Be_Table = [
  {
    title: "Kimyasal Bileşimi",
    columns: ["Be", "Co", "Diğer", "Cu"],
    values: ["0.4 - 0.7", "2.0 - 2.8", "Max 0.50", "Kalan"],
  },
  {
    title: "Mekanik Özellikleri",
    columns: ["Sertlik", "Çekme Dayanımı", "Akma Dayanımı", "Uzama L=5D", "Elastisite Modülü 20°C"],
    values: ["230–260 HB", "700–900 N/mm²", "600–700 N/mm²", "%10-15", "130 GPa"],
  },
  {
    title: "Fiziksel Özellikleri",
    columns: ["Elektrik İletkenliği", "Isıl Genleşme Katsayısı", "Isı İletkenliği (20°C)", "Yoğunluk"],
    values: ["25-30 MS/m", "17 1/K*10⁻⁶", "200-230 W/mK", "8.75 g/cm³"],
  },
];

export const CuCoNiBe_Table = [
  {
    title: "Kimyasal Bileşimi",
    columns: ["Be", "Ni","Co", "Diğer", "Cu"],
    values: ["0.4 - 0.7", "0.8 - 0.13","0.8 - 1.3", "Max 0.50", "Kalan"],
  },
  {
    title: "Mekanik Özellikleri",
    columns: ["Sertlik", "Çekme Dayanımı", "Akma Dayanımı", "Uzama L=5D", "Elastisite Modülü 20°C"],
    values: ["230–260 HB", "700–900 N/mm²", "600–700 N/mm²", "%10-15", "130 GPa"],
  },
  {
    title: "Fiziksel Özellikleri",
    columns: ["Elektrik İletkenliği", "Isıl Genleşme Katsayısı", "Isı İletkenliği (20°C)", "Yoğunluk"],
    values: ["25-30 MS/m", "17 1/K*10⁻⁶", "200-230 W/mK", "8.75 g/cm³"],
  },
];

export const CuBe2_Table = [
  {
    title: "Kimyasal Bileşimi",
    columns: ["Be", "Co + Ni", "Diğer", "Cu"],
    values: ["1.8 - 2.1", "Max 0.5", "Max 0.50", "Kalan"],
  },
  {
    title: "Mekanik Özellikleri",
    columns: ["Sertlik", "Çekme Dayanımı", "Akma Dayanımı", "Uzama L=5D", "Elastisite Modülü 20°C"],
    values: ["340-390 HB", "1100–1300 N/mm²", "900-1100 N/mm²", "%4-9", "128 GPa"],
  },
  {
    title: "Fiziksel Özellikleri",
    columns: ["Elektrik İletkenliği", "Isıl Genleşme Katsayısı", "Isı İletkenliği (20°C)", "Yoğunluk"],
    values: ["15 MS/m", "17.5 1/K*10⁻⁶", "106 W/mK", "8.3 g/cm³"],
  },
];

export const randomTable = [
  {
    title: "Kimyasal Bileşimi",
    columns: ["A", "B", "C"],
    values: ["%12", "%0.3", "Kalan"],
  },
  {
    title: "Mekanik Özellikleri",
    columns: ["Sertlik", "Dayanım", "Uzama"],
    values: ["120 HB", "350 N/mm²", "%10"],
  },
];

export const s_1_2379 = [
  {
    title: "Kimyasal Bileşimi",
    columns: ["C", "Cr", "Mo", "V"],
    values: ["1,55", "12", "0,80", "0,90"],
  },
  {
     
    columns: ["Kullanım Sertliği"],
    values: ["54 - 60 HRC"],
  }
];


export const s_1_2358 = [
  {
    title: "Kimyasal Bileşimi",
    columns: ["C", "Cr", "Mo", "V"],
    values: ["0,60", "4,50", "0,50", "0,20"],
  },
  {
     
     columns: ["Kullanım Sertliği"],
    values: ["58 - 60 HRC"],
  }
];

export const s_1_2360 = [
  {
    title: "Kimyasal Bileşimi",
    columns: ["C", "Si", "Mn", "Cr", "Mo", "V"],
    values: ["0,47", "0,80", "0,40", "7,55", "1,40", "1,35"],
  },
  {
     
     columns: ["Kullanım Sertliği"],
    values: ["52 - 60 HRC"],
  }
];

export const s_1_2767 = [
  {
    title: "Kimyasal Bileşimi",
    columns: ["C", "Cr", "Mo", "Ni"],
    values: ["0,45", "1,40", "0,30", "4,10"],
  },
  {
     
     columns: ["Kullanım Sertliği"],
    values: ["52 - 54 HRC"],
  }
];

export const s_1_2344 = [
  {
    title: "Kimyasal Bileşimi",
    columns: ["C", "Cr", "Mo", "V"],
    values: ["0,40", "5,30", "1,40", "1,00"],
  },
  {
     
     columns: ["Kullanım Sertliği"],
    values: ["46 - 54 HRC"],
  }
];

export const s_1_2343_ESR = [
  {
    title: "Kimyasal Bileşimi",
    columns: ["C", "Si","Cr", "Mo", "V"],
    values: ["0,37", "1,0", "5,30", "1,30", "0,40"],
  },
  {
     
     columns: ["Kullanım Sertliği"],
    values: ["46 - 54 HRC"],
  }
];

export const s_1_2367 = [
  {
    title: "Kimyasal Bileşimi",
    columns: ["C", "Cr", "Mo", "V"],
    values: ["0,38", "5,00", "3,00", "0,50"],
  },
  {
     
     columns: ["Kullanım Sertliği"],
    values: ["46 - 54 HRC"],
  }
];

export const s_1_2714_QT = [
  {
    title: "Kimyasal Bileşimi",
    columns: ["C", "Cr", "Mo", "Ni", "V"],
    values: ["0,55", "1,10", "0,50", "1,70", "0,10"],
  },
  {
     
     columns: ["Kullanım Sertliği"],
    values: ["38 - 44 HRC"],
  }
];

export const s_1_3343 = [
  {
    title: "Kimyasal Bileşimi",
    columns: ["C", "Cr", "Mo", "V", "W"],
    values: ["0,90", "4,10", "5,00", "1,90", "6,40"],
  },
  {
     
     columns: ["Kullanım Sertliği"],
    values: ["60 - 64 HRC"],
  }
];

export const s_1_3243 = [
  {
    title: "Kimyasal Bileşimi",
    columns: ["C", "Cr", "Mo", "V", "W", "Co"],
    values: ["0,92", "4,10", "5,00", "1,90", "6,40", "4,80"],
  },
  {
     
     columns: ["Kullanım Sertliği"],
    values: ["60 - 64 HRC"],
  }
];

export const s_1_4057 = [
  {
    title: "Kimyasal Bileşimi",
    columns: ["C", "Cr", "Ni"],
    values: ["0,17", "16,50", "2,00"],
  },
  {
     
     columns: ["Kullanım Sertliği"],
    values: ["30 - 46 HRC"],
  }
];

export const s_1_4542 = [
  {
    title: "Kimyasal Bileşimi",
    columns: ["C", "Mn", "Si", "P", "S", "Cr", "Cu", "Nb", "Mo", "Ni"],
    values: ["Max 0,07", "1,00", "Max 1,00", "Max 0,03", "Max 0,03", "15 - 17,5", "3-5", "Max 0,45", "Max 0,60", "3-5"],
  },
  {
     
     columns: ["Kullanım Sertliği"],
    values: ["28 - 48 HRC"],
  }
];

export const s_1_4112 = [
  {
    title: "Kimyasal Bileşimi",
    columns: ["C", "Cr", "Mo", "V"],
    values: ["0,90", "18,00", "1,10", "0,10"],
  },
  {
     
     columns: ["Kullanım Sertliği"],
    values: ["54 - 60 HRC"],
  }
];

export const s_1_4545 = [
  {
    title: "Kimyasal Bileşimi",
    columns: ["C", "Mn", "Si", "P", "S", "Cr", "Cu", "Nb", "Mo", "Ni"],
    values: ["Max 0,07", "1,00", "0,50", "Max 0,0025", "Max 0,005", "15 - 15,5", "3-3,5", "0,15 - 0,45", "Max 0,50", "4,3-5"],
  },
  {
     
     columns: ["Kullanım Sertliği"],
    values: ["35 - 42 HRC"],
  }
];

export const s_1_4534 = [
  {
    title: "Kimyasal Bileşimi",
    columns: ["C", "Mn", "Si", "P", "Al", "Cr", "Ni","Mo"],
    values: ["Max 0,05", "Max 0,01", "Max 0,10", "Max 0,01", "0,90 - 1,35", "12,25-13,25", "7,5-8,5", "2 - 2,25"],
  },
  {
     
     columns: ["Kullanım Sertliği"],
    values: ["Max 43 HRC"],
  }
];


export const s_1_8550 = [
  {
    title: "Kimyasal Bileşimi",
    columns: ["C", "Cr", "Mo", "Ni", "Al"],
    values: ["0,34", "1,70", "0,20", "1,00", "1,00"],
  },
  {
     
     columns: ["Kullanım Sertliği"],
    values: ["27 - 33 HRC"],
  }
];

export const s_1_8519 = [
  {
    title: "Kimyasal Bileşimi",
    columns: ["C", "Cr", "Mo", "V"],
    values: ["0,31", "2,50", "0,20", "0,15"],
  },
  {
     
     columns: ["Kullanım Sertliği"],
    values: ["27 - 33 HRC"],
  }
];

export const s_1_CuAl10Fe3Mn = [
    {
    title: "Kimyasal Bileşimi",
    columns: ["Al", "Fe", "Mn", "Diğer", "Cu"],
    values: ["9 - 11", "2.5 - 3.5", "1", "1", "Kalan"],
  },
  {
    title: "Mekanik Özellikleri",
    columns: ["Sertlik", "Çekme Dayanımı", "Akma Dayanımı", "Uzama L=5D", "Elastisite Modülü 20°C","Basma Dayanımı"],
    values: ["140-180 HB", "500–650 N/mm²", "180-280 N/mm²", "%12-16", "117 kN/mm²", "980-1050 N/mm²"],
  },
  {
    title: "Fiziksel Özellikleri",
    columns: ["Elektrik İletkenliği", "Isıl Genleşme Katsayısı", "Isı İletkenliği (20°C)", "Yoğunluk"],
    values: ["7 MS/m", "16.2 1/K", "63 W/mK", "7.45 g/cm³"],
  },
];

export const s_1_CuAl10Ni5Fe4 = [
    {
    title: "Kimyasal Bileşimi",
    columns: ["Al", "Fe", "Ni", "Mn", "Diğer", "Cu"],
    values: ["8,5 - 11,5", "3 - 5", "4 - 6", "Max 1", "Max 0,5", "Kalan"],
  },
  {
    title: "Mekanik Özellikleri",
    columns: ["Sertlik", "Çekme Dayanımı", "Akma Dayanımı", "Uzama L=5D", "Elastisite Modülü 20°C","Basma Dayanımı"],
    values: ["170-220 HB", "650 - 800 N/mm²", "270-400 N/mm²", "%10-16", "124 GPa", "1200 N/mm²"],
  },
  {
    title: "Fiziksel Özellikleri",
    columns: ["Elektrik İletkenliği", "Isıl Genleşme Katsayısı", "Isı İletkenliği (20°C)", "Yoğunluk"],
    values: ["5 MS/m", "16 1/K*10⁻⁶", "42 W/mK", "7.45 g/cm³"],
  },
];

export const s_1_CuAl14Fe4Mn2 = [
    {
    title: "Kimyasal Bileşimi",
    columns: ["Al", "Fe", "Mn", "Diğer", "Cu"],
    values: ["13,6 - 14", "4,5 - 5,2", "2 - 2,5", "Max 1", "Kalan"],
  },
  {
    title: "Mekanik Özellikleri",
    columns: ["Sertlik", "Çekme Dayanımı", "Akma Dayanımı", "Uzama L=5D", "Elastisite Modülü 20°C","Basma Dayanımı"],
    values: ["350-380 HB", "600 - 750 N/mm²", "500-600 N/mm²", "%0-1", "120 GPa", "1580 N/mm²"],
  },
  {
    title: "Fiziksel Özellikleri",
    columns: ["Elektrik İletkenliği", "Isıl Genleşme Katsayısı", "Isı İletkenliği (20°C)", "Yoğunluk"],
    values: ["4,5 MS/m", "15 1/K*10⁻⁶", "50 W/mK", "7.25 g/cm³"],
  },
];

export const s_1_CuSn10 = [
    {
    title: "Kimyasal Bileşimi",
    columns: ["Cu", "Sn", "Zn", "Pb", "Ni", "P"],
    values: ["88 - 90", "9 - 11", "Max 0.5", "Max 1", "Max 2" ,"Max 0.2"],
  },
  {
    title: "Mekanik Özellikleri",
    columns: ["Sertlik", "Çekme Dayanımı MPa", "Akma Dayanımı MPa", "Uzama L=5D", "Elastisite Modülü 20°C","Basma Dayanımı"],
    values: ["80 HB", "280", "160 - 170", "%10"],
  },
  {
    title: "Fiziksel Özellikleri",
    columns: ["Elektrik İletkenliği", "Termal Genleşme", "Termal İletkenlik", "Yoğunluk"],
    values: ["7", "18.5 1/K*10⁻⁶", "59 W/mK", "8.78 g/cm³"],
  },
];

export const s_1_CuSn12 = [
    {
    title: "Kimyasal Bileşimi",
    columns: ["Cu", "Sn", "Zn", "Pb", "Ni", "P"],
    values: ["84 - 88.5", "11 - 13", "Max 1", "Max 1", "Max 2" ,"Max 0.4"],
  },
  {
    title: "Mekanik Özellikleri",
    columns: ["Sertlik", "Çekme Dayanımı MPa", "Akma Dayanımı MPa", "Uzama L=5D", "Elastisite Modülü 20°C","Basma Dayanımı"],
    values: ["90 HB", "280 - 300", "150", "%5-6"],
  },
  {
    title: "Fiziksel Özellikleri",
    columns: ["Elektrik İletkenliği", "Termal Genleşme", "Termal İletkenlik", "Yoğunluk"],
    values: ["6.2", "18.5 1/K*10⁻⁶", "54 W/mK", "8.6 g/cm³"],
  },
];

export const s_1_CuSn12Ni = [
    {
    title: "Kimyasal Bileşimi",
    columns: ["Cu", "Sn", "Zn", "Pb", "Ni", "P"],
    values: ["84 - 87", "11 - 13", "Max 0.4", "Max 0.3", "1.5 - 2.5" ,"Max 0.2"],
  },
  {
    title: "Mekanik Özellikleri",
    columns: ["Sertlik", "Çekme Dayanımı MPa", "Akma Dayanımı MPa", "Uzama L=5D", "Elastisite Modülü 20°C","Basma Dayanımı"],
    values: ["90 - 100 HB", "300", "170 - 180", "%8-10"],
  },
  {
    title: "Fiziksel Özellikleri",
    columns: ["Elektrik İletkenliği", "Termal Genleşme", "Termal İletkenlik", "Yoğunluk"],
    values: ["6.2", "18.5 1/K*10⁻⁶", "54 W/mK", "8.6 g/cm³"],
  },
];

export const ti_grade_2 = [
    {
    title: "Kimyasal Bileşimi",
    columns: ["Ti", "O (Oksijen)", "Fe", "C", "N", "H"],
    values: ["%98.9", "~%0.25-0.30", "~%0.10", "≤ %0.08", "≤ %0.03" ,"≤ %0.015"],
  },
  {
    title: "Mekanik Özellikleri",
    columns: ["Sertlik", "Çekme Dayanımı MPa", "Akma Dayanımı MPa", "Elastisite Modülü 20°C", "Uzama L=5D", "Yoğunluk"],
    values: ["HB 150 (yaklaşık)", "~ 345-450 MPa", "~ 275-380 MPa", "~ 103-105 GPa", "~ %20-30", "4.51 g/cm³"],
  }
];

export const ti_grade_5 = [
    {
    title: "Kimyasal Bileşimi",
    columns: ["Al", "V", "Fe", "O", "C", "N", "H", "Ti"],
    values: ["%5.5 - 6.75", "3.5 - 4.5", "≤ 0.30", "≤ 0.20", "≤ 0.08", "≤ %0.05", "≤ 0.015", "Kalan"],
  },
  {
    title: "Mekanik Özellikleri",
    columns: ["Rockwell C Sertlik (HRC)", "Çekme Dayanımı MPa", "Akma Dayanımı MPa", "Elastisite Modülü 20°C", "Uzama L=5D", "Yoğunluk", "Brinell Sertlik (HB)"],
    values: ["≈ 34 - 38 HRC", "895 - 960", "825 - 880 MPa", "~ 113 - 115 GPa", "%10 - 15", "4.43 g/cm³", "≈ 330 - 360 HB"],
  }
];

export const ti_grade_9 = [
    {
    title: "Kimyasal Bileşimi",
    columns: ["Al", "V", "Fe", "O", "C", "N", "H", "Ti"],
    values: ["%2.5 - 3.5", "2.0 - 3.0", "≤ 0.30", "≤ 0.15", "≤ 0.08", "≤ %0.03", "≤ 0.015", "Kalan"],
  },
  {
    title: "Mekanik Özellikleri",
    columns: ["Çekme Dayanımı MPa", "Akma Dayanımı MPa", "Elastisite Modülü 20°C", "Uzama L=5D", "Yoğunluk", "Brinell Sertlik (HB)"],
    values: ["620 - 690 MPa", "480 - 550 MPa", "~ 105 - 110 GPa", "%10 - 15", "4.48 g/cm³", "≈ 200 - 230 HB"],
  }
];

export const inconel_625 = [
    {
    title: "Kimyasal Bileşimi",
    columns: ["Ni", "Cr", "Mo", "Nb", "Fe", "C", "Mn", "Si", "Ti,Al"],
    values: ["%58", "%20-23", "%8 - 10", "%3.15 - 4.15", "≤ 5", "≤ 0,10", "≤ 0,50", "≤ 0,50", "≤ 0,40"],
  },
  {
    title: "Mekanik Özellikleri",
    columns: ["Çekme Dayanımı MPa", "Akma Dayanımı MPa", "Elastisite Modülü 20°C", "Uzama L=5D", "Yoğunluk", "Brinell Sertlik (HB)"],
    values: ["830 - 930 MPa", "415 - 480 MPa", "~ 205 GPa", "%30 - 40", "8.44 g/cm³", "≈ 200 - 240 HB"],
  }
];

export const inconel_718 = [
    {
    title: "Kimyasal Bileşimi",
    columns: ["Ni", "Cr", "Fe", "Nb + Ta", "Mo", "Ti", "Al", "C", "Mn", "Si", "Co","Cu", "B", "S, P, N, H"],
    values: ["%50-55", "%17-21", "≤19", "4.75 - 5.5", "2.8-3.3 ", "0.65-1.15", "0.2-0.8", "≤ 0,08", "≤ 0,35", "≤ 0,35", "≤ 1.0", "≤ 0,3", "≤ 0,006","iz miktarda"],
  },
  {
    title: "Mekanik Özellikleri",
    columns: ["Çekme Dayanımı MPa", "Akma Dayanımı MPa", "Elastisite Modülü 20°C", "Uzama L=5D", "Yoğunluk", "Brinell Sertlik (HB)"],
    values: ["1240 - 1380 MPa", "1030 - 1100 MPa", "~ 205 GPa", "%12 - 16", "8.19 g/cm³", "360 - 410 HB"],
  }
];
/* ----------------------------------------------
   PRODUCT INTERFACE
---------------------------------------------- */

export interface Product {
  name: string;
  slug: string;
  imageSrc: string;
  mainDesc?: string;
  description?: string;
  tableData?: any[];
  subTitle?: string;
  toUse?: any[];
  advantages?: string;
  disadvantages?: string;
  baseMaterial?: string;
  subProducts?: Product[]; // 🔥 recursive yapı
}

/* ----------------------------------------------
   TAM & GÜNCEL PRODUCTS ARRAY (3 seviyeli)
---------------------------------------------- */

export const products: Product[] = [
    {
      name: "Takım Çelikleri",
      slug: "takim-celikleri",
      imageSrc: celikGeneral,
      mainDesc: "Takım çeliği, genellikle yüksek mukavemet, sertlik, aşınma direnci ve dayanıklılık gibi özelliklere sahip olan özel bir çelik türüdür. Bu yüzden takım çelikleri, özellikle kesme, delme, şekillendirme, dövme gibi çeşitli endüstriyel alanlarda kullanılır. Takım çelikleri, işleme sırasında yüksek sıcaklıklara ve aşındırıcı koşullara maruz kaldıklarında bile dayanıklılıklarını koruyabilen özel bir sertlik ve tokluk kombinasyonuna sahiptirler. Bu çeliklerin özellikleri, kullanıldıkları uygulamalara ve ihtiyaçlarına bağlı olarak değişir. Bu nedenle, doğru takım çeliğinin seçimi, belirli bir işlemin veya ürünün gereksinimlerine uygun olacak şekilde yapılmalıdır.",
      description: "Yüksek hızlı çelikler (HSS), Sıcak iş çelikleri, Soğuk iş çelikleri, Dövme çelikler, Kalıp çelikler",
      subProducts: [
        {
          name: "Soğuk İş Takım Çelikleri",
          slug: "soguk-is-takim-celikleri",
          imageSrc: sogukIsTakimCelikleri,
          description: "Genel olarak 200°C’nin altındaki sıcaklıklarda çalışan iş parçalarının, talaşlı ve talaşsız şekil verme işlemlerinde (kesme, bükme, form verme vb.) kullanılır. Karbon miktarı %0,30 – %2,10 arasında değişen, alaşım elementi olarak da karbür oluşturucu Krom, Vanadyum, Molibden ve wolframın yanı sıra Nikel ve Mangan da bulunduran takım çeliklerine Soğuk İş Takım Çeliği denir.",
          subProducts: [
            {
              name: "1.2379",
              slug: "1-2379",
              imageSrc: s_2379,
              description: "%12 krom içeren ledeburik bir çeliktir.  Malzeme özellikleri bakımından yüksek aşınma dayanımı ve yüksek tokluğa sahip olduğundan, kesme ve ezme için çok uygundur. Tokluğu 2080'e göre daha iyi olduğundan, 2080'in kullanıldığı heryerde kullanılabilir. Nitrasyon veya tenifer yapılarak kullanılabilir. İkincil sertleşebilme özelliğinden dolayı PVD/CVD kaplamaya da uygundur ve yüzeyin ilave nitrürlenmesi ve kaplanması kolaylıkla mümkündür. Abrazif ve adhezif aşınmaya karşı yüksek dirençlidir. İyi mekanik özellikleri nedeniyle 1.2379 birçok farklı uygulamada kullanılabilir.",
              tableData: s_1_2379,
              toUse: ["Kesme ve Form Verme Kalıplarında", "Derin Çekme Kalıplarında","Aşındırıcı Özelliğe sahip Plastiklerin Kalıplarında", "Ovalama Makaraları ve Taraklarında", "Profil ve Boru Makaralarında", "Zımbalarda", "Plastik Kırma Bıçaklarında", "Yonga Bıçaklarında", "Giyotin Makas Bıçaklarında", "Dilme Bıçaklarda"],
              subTitle: "X153CrMoV12",
            },
            {
              name: "1.2358",
              slug: "1-2358",
              imageSrc: s_2358,
              description: "Yüksek sertleştirme kapasitesi, çekirdeğine kadar sertleşebilme özelliği ve yüksek tokluğa sahiptir. Kaynaklanabilir olması, bazı uygumalar için avantaj sağlamaktadır. Mükemmel yüzeysel sertleşebilme özelliği dolayısıyla, kesme lokmalarında, zımbalarda, çok parçalı kalıplarda ve sıvama kalıplarında tercih edilir. Özellikle otomotiv kaporta kalıpları gibi büyük kalıplarda form verme amacıyla kullanılmaktadır.",
              tableData: s_1_2358,
              toUse: ["Yüksek Tokluk Gerektiren Soğuk İş Uygulamalarında", "Otomotiv Form Verme Kalıplarında", "Plastik Enjeksiyon Kalıplarında", "Kalın Sac Kesme Zımba ve Matrislerinde"],
              subTitle: "60CrMoV18-5",
            },
            {
              name: "1.2360",
              slug: "1-2360",
              imageSrc: s_2360,
              description: "Östenitik soğuk iş takım çeliğidir. Çok yüksek tokluğa sahiptir, yüksek sertliklerde dahi çok yüksek tokluk değeri vermektedir.",
              tableData: s_1_2360,
              toUse: ["Demir Çelik Endüstrisinde Sıcak ve Soğuk Uygulamalarda Kullanılan Makas Bıçaklarında", "Hurda Makas Bıçaklarında", "Plastik Kırma Bıçaklarında", "Ağaç Endüstrisinde Ağaç Yongalama ve Doğrama Bıçaklarında", "Kağıt Kesme ve Dilme Bıçaklarında", "Kalınlığı 5-15 mm Arasında Olan Çeliklerin Boy Kesme Takımlarında", "Kesme ve Delme Kalıplarında"],
              subTitle: "X48CrMoV8-1-1",
            },
            {
              name: "1.2767",
              slug: "1-2767",
              imageSrc: s_2767,
              description: "Yüksek tokluğa sahip, nikel alaşımlı darbe çeliğidir. Sertleştirilebilirliği ve Parlatılabilirliği de yüksektir.",
              tableData: s_1_2767,
              toUse: ["Kalın Sacların Kesme ve Form verme Kalıplarında", "Hurda Makas Bıçaklarında", "Çatal Kaşık Kalıplarında", "Plastik Enjeksiyon Kalıplarında", "Darphane Kalıplarında"],
              subTitle: "45NiCrMo16"
            },
          ],
        },

        {
          name: "Sıcak İş Takım Çelikleri",
          slug: "sicak-is-takim-celikleri",
          imageSrc: sicakIsTakimCelikleri,
          description: "Genel olarak yüksek sıcaklıklarda (200°C ve üzeri) çalışan takımlarda kullanılan, yüksek sıcaklıklarda sertliğini ve diğer mekanik özelliklerini koruyabilen; Krom, Nikel, Molibden, Tungsten, Vanadyum ve Kobalt gibi alaşım elementleri içeren çeliklere Sıcak İş Takım Çelikleri denir. Sıcak iş takım çelikleri genellikle demir ve demir dışı metallerin dövülerek şekillendirilmesinde ve hafif metallerin ekstrüzyonunda kullanılır. Sıcak iş takım çeliklerinin sahip olduğu en önemli özellik yüksek sıcaklıklarda mekanik özelliklerini koruyabilmesidir. Özellikle dövme prosesinde takımlar çok yüksek sıcaklıklara (1000°C – 1100°C) maruz kalmaktadır. Bu nedenle buralarda kullanılacak çeliklerin mekanik özelliklerinin artırmak için düzgün homojen yapıya sahip ve minimum düzeyde inklüzyon içeren ESR yöntemiyle üretilmiş çelikler tercih edilmektedir.",
          subProducts: [
            {
              name: "1.2344",
              slug: "1_2344",
              imageSrc: s_2344,
              description: "Yüksek sıcaklıklarda mekanik özelliklerini ve dolayısıyla aşınma dayanımını yitirmeyen sıcak iş çeliğidir. Çok iyi bir ısıl kararlılığı ve tokluğu vardır. Sınırlı olarak soğutma mümkündür, Nitrasyon için uygundur.",
              tableData: s_1_2344,
              toUse: ["Ekstrüzyon Takımlarında", "Alüminyum Enjeksiyon Kalıplarında", "Dövme Kalıplarında", "Sıcak Kesme Bıçaklarında", "Darbe Dayanımı Yüksek Olması Sebebiyle Gerektiğinde Kalıp Sac Kesme Kalıplarında", "Plastik Enjeksiyon Kalıplarında"],
              subTitle: "X40CrMoV5-1",
            },
            {
              name: "1.2343 ESR",
              slug: "1_2343_ESR",
              imageSrc: s_2343_ESR,
              description: "Isıl iletkenliği 1.2344’e göre daha iyi olan, çok ince taneli bir mikro yapısı olan, yüksek tokluğa sahip sıcak iş takım çeliğidir. Yüksek sıcaklığa dayanıklı olması genel özellikleridir. Sınırlı olarak su ile soğutulabilir. ESR (elektro cüruf altı ergitme işlemi) yöntemi ile üretildiği için yüksek tokluğa sahiptir. Yüzeysel çatlaklar daha geç oluşmaya başlar. Isıl İletkenliği ve Tokluğu 2344'e Göre Daha İyi Olduğundan, Özellikle Büyük Alüminyum Enjeksiyon Kalıplarında ve Büyük Çaplı Ekstrüzyon Kalıplarında Daha Çok Tercih Edilir",
              tableData: s_1_2343_ESR,
              toUse: ["Alüminyum Enjeksiyon Kalıplarında", "Dövme Kalıplarında", "Sıcak Kesme Bıçaklarında", "Plastik Enjeksiyon Kalıplarında"],
              subTitle: "X37CrMoV5-1",
            },
            {
              name: "1.2367",
              slug: "1_2367",
              imageSrc: s_2367,
              description: "Yüksek sıcaklıklardaki mekanik özellikleri 2343 ve 2344’ten daha iyidir. Örneğin bakır ve pirinç ekstrüzyon kalıplarında diğerlerine göre daha uzun ömürlü bir çalışma süresi sağlar. EFS ve ESR yöntemiyle de üretilir.",
              tableData: s_1_2367,
              toUse: ["Metal Enjeksiyon Kalıplarında", "Dövme Kalıplarında Çekirdek olarak", "Metal Enjeksiyon Kalıplarında Core Pin olarak"],
              subTitle: "X38CrMoV5-3",
            },
            {
              name: "1.2714 QT",
              slug: "1_2714_QT",
              imageSrc: s_2714QT,
              description: "Nikel alaşımlı, mükemmel tokluğu ve çekirdeğine kadar sertleşebilme özelliği olan kalıp çeliğidir. Orta ve büyük ölçekli dövme kalıplarında standart malzemedir. Hem sertleştirilmiş, hem de yumuşak tavlı olarak bulunabilir.",
              tableData: s_1_2714_QT,
              toUse:["Sıcak Dövme Kalıplarında Çekirdekte", "Sıcak Dövme Kalıplarında Kalıp Hamilinde", "Alüminyum Ekstrüzyon Takımlarında Bolster ve Dayama Bloğu", "Sıcak Makas Ağızlarında"],
              subTitle: "55NiCrMoV7",
            },
          ],
        },

        {
          name: "Yüksek Hız Çelikleri",
          slug: "yuksek-hiz-celikleri",
          imageSrc: yuksekHizTakimCelikleri,
          description: "Yüksek hız takım çelikleri, yüksek hızda kesim yapabilme kapasitesine sahip takım malzemesi olarak tanımlanır. Bu çeliklerin en büyük özelliği yüksek sıcaklıklarda aşınma dayanımını korumasıdır. Yüksek hız takım çelikleri genellikler diğer takımların işlenmesinde kesici takım olarak kullanılır. Çalışma sıcaklığı yaklaşık olarak 400 – 600 °C arasında değişmektedir. Bu çeliklerin yüksek sıcaklıklara karşı dayanımlarının iyi olmasının yanı sıra sertlik, aşınma ve darbe direnci gibi özellikleri de oldukça yüksektir. Yüksek hız takım çelikleri alaşım elementi olarak yüksek miktarlarda Krom, Vanadyum, Molibden, Tungsten, Kobalt gibi elementleri çeşitli kombinasyonlarda içerir. Yüksek sıcaklıklarda mekanik özelliklerini koruması bu karbür yapıcı elementler sayesinde gerçekleşmektedir.",
          subProducts: [
            {
              name: "1.3343",
              slug: "1_3343",
              imageSrc: s_3343,
              description: "Geniş bir kullanım alanına sahip yüksek hız çeliğidir. Yüksek sıcaklıklarda mekanik özelliklerini korur ve yüksek aşınma dayanımı vardır. Tel erozyonda kesim işlemine, kaynak, PVD ve CVD kaplamaya uygundur.",
              tableData: s_1_3343,
              toUse:[
                  "Freze Bıçakları",
                  "Kılavuzlar",
                  "Raybalar",
                  "Helisel Matkaplar",
                  "Havşa Matkapları",
                  "Daire Testereler",
                  "Boşaltma Tığları",
                  "Dar Belli Kesiciler",
                  "Ahşap İşlemeye Uygun Frezeler",
                  "Planya Bıçakları gibi Çeşitli Kesimi Takımlarda",
                  "Soğuk Şekil Vermeyi Sağlayan Civata",
                  "Somut İmalatında kullanılan Matris",
                  "Zımba ve Şişirici olarak",
                  "Soğuk Ekstrüzyon Zımba ve Kalıplarında"
              ],
              subTitle: "EN HS6-5-2C AISI M2",
            },
            {
              name: "1.3243",
              slug: "1_3243",
              imageSrc: s_3243,
              description: "Yapısında %5 Kobalt elementi ihtiva eden yüksek hız çeliğidir. Yüksek sıcaklıklarda sertliğini muhafaza edebilme özelliğine sahiptir. %5 kobalt içermesi nedeniyle yüksek devirli kesme işlemlerinde 1.3343’ün yerine özellikle tercih edilir. İçinde bulundurduğu kobalt sayesinde ısınsa da sertliğinin düşmemesini sağlar.Tel erozyonda kesim işlemine, kaynak, PVD ve CVD kaplamaya uygundur.",
              tableData: s_1_3243,
              toUse:["Yüksek Verim İstenen Bütün Frezelerde", "Yüksek Gerilmelere Maruz Kalan Matkaplarda", "Makas Bıçaklarında", "Profil Kesici Bıçaklarda", "Yüksek Mukavemetli Malzemelerin İşlenmesinde", "Broşlarda", "Azdırmalarda"],
              subTitle: "EN HS10-4-3-10 AISI M45",
            }
          ],
        },
      ],
    },
  {
    name: "Paslanmaz Çelikler",
    slug: "paslanmaz-celikler",
    imageSrc: paslanmazCelik,
    subProducts: [
        {
          name: "1.4057",
          slug: "1_4057",
          imageSrc: p_1_4057,
          tableData: s_1_4057,
          toUse: ["Civata ve Somun Yapımında", "Pervane Şaftlarında", "Pompa Şaftlarında", "Mikser Çubuklarında", "Marin Teçhizatlarında", "Laboratuvar Ekipmanlarında"],
          description: "Hem Krom hem de Nikel içeren bir paslanmaz çelik kalitesidir. Isıl işlemle birlikte kopmaya karşı direnci çok yüksek hale getirilebilen bir paslanmaz çelik türüdür. Isıyı iyi iletir ve polisaj için uygun bir malzemedir. Sıcak ortamda bile iyi bir yüzey yapısına sahiptir. Oldukça iyi bir korozyon direnci olan bu malzemeye, korozyon direnci bakımından AISI 304 kalite paslanmaz malzemeye benzemektedir. Mekanik özellikleri oldukça kuvvetli olan 1.4057 ısıl işlemle ön sertleştirilmesi yapıldığı için oldukça yüksek bir mekanik dirence sahiptir. Bu malzemenin dövülerek şekillendirilmesi tavsiye edilmez ancak gereken durumlarda dövülebilir. Kaynak yapılabilirlik özelliği ortalama düzeydedir, yoğun kaynak olan bir ortamda dahi kullanılabilir. Bu malzemenin kaynağı esnasında en dikkat edilmesi gereken nokta, kaynak yapılacak diğer yüzeyin nasıl bir malzeme olduğudur. Örneğin AISI 431 ile 304 kalite paslanmaz kaynak yapılarak birleştirileceği zaman, daha dikkatli ve özenli olmak gerekmektedir. Ön sertleştirilmesi yapıldığı ve sert bir yüzeye (30 - 35HRC arası) sahip olduğu için işlenebilirliği diğer malzemelere göre biraz daha zordur. Doğru işleme uçlarıyla işlendiğinde işlemeyle ilgili herhangi bir sıkıntı yaşanmamaktadır.",
          subTitle: "X17CrNi16-2 AISI 431"
        },
         {
          name: "1.4112",
          slug: "1_4112",
          imageSrc: p_1_4112,
          tableData: s_1_4112,
          toUse: ["Paslanmaz Olması Gereken Bıçak ve Kesme Takımlarında", "Plastik İmalatında Vida ve Kafa olarak", "Enjeksiyon Kalıplarının Nozullarında", "Gıda Sanayisinde Kullanılan Bıçak ve Makine Parçalarında, Kesme Uygulamalarında","Jiletler, Cerrahi Aletler, Diş Hekimliği Aletleri gibi Kesme Aletleri Üretiminde"],
          description: "Sertleşme kabiliyeti ve aşınma dayanımı yüksek olan martensitik bir paslanmaz çeliktir. Oksidasyona ve korozyona karşı iyi bir direnç sağlar. Yüksek sıcaklıkta kullanıma uygun olduğu için, yüksek sıcaklıkta çalışan ekipmanlarda da kullanılır. Kolay işlenebilirlik özellikleri nedeniyle CNC işleme, frezeleme ve diğer mekanik işleme işlemleri için de uygun bir malzemedir. Manyetiktir.",
          subTitle: "X90CrMoV18 AISI 440B"
        },
         {
          name: "1.4542(17-4 PH)",
          slug: "1_4542",
          imageSrc: p_1_4542,
          tableData: s_1_4542,
          toUse: ["Havacılık, Uzay, Petrol ve Gaz Endüstrisi gibi Yüksek Performans Gerektiren Endüstrilerde","Jet Motorları", "Hidrolik Silindirlerde","Pompa ve Vana Şaftlarında", "Denizaltıların ve Gemilerin Deniz Suyuna Maruz Kalan Parçalarda","Kimyasal Tesislerde","Mutfak Aletlerinde"],
          description: "Giderek artan bir şekilde kullanılan marajing çeliğidir. Hem östenitik paslanmazlar ölçüsünde korozyon dayanımı gösterir hem de martensitik paslanmazlar gibi ısıl işlem yoluyla ileri derecede mekanik direnç kazanma özelliğini kendilerinde barındırırlar. Yüksek mukavemet ve korozyon direnci özellikleri nedeniyle genellikle endüstriyel uygulamalarda kullanılan bir malzemedir. Yüksek mukavemeti ve kolay işlenebilirliği nedeniyle tercih edilir. Dövme, döküm, çekme, soğuk şekillendirme ve diğer işleme işlemleri için uygundur. Ayrıca sıcaklık değişimlerine karşı dayanıklıdır ve ısıya dayanıklı özellikleri sayesinde yüksek sıcaklıkta çalışan parçalar için ideal bir malzemedir. Manyetiktir.",
          subTitle: "X5CrNiCuNb16-4 AISI 630"
        },
         {
          name: "1.4545(15-5 PH)",
          slug: "1_4545",
          imageSrc: p_1_4545,
          tableData: s_1_4545,
          toUse: ["Jet Motorları, Gaz Türbinleri ve Reaktörler Gibi Yüksek Sıcaklıklarda Çalışan Parçalarda", "Denizcilik, Gemi Yapımı, Su Arıtma Tesisleri ve Petrol Platformlarında", "Kimya Endüstrisinde", "Petro-Kimya Endüstrisinde", "Gıda Endüstrisinde"],
          description: "Yüksek mukavemetlidir ve ASTM A564 standardı tarafından belirlenen bir sınıfta yer alır. 15-5 PH paslanmaz malzeme, 17-4 PH malzemeye oranla hem daha iyi mekanik, hem de daha saf bir yapıya sahiptir. Manyetiktir. Yüksek sıcaklıklara dayanıklıdır ve sünekliği yüksektir. Deniz suyuna karşı dayanıklıdır.",
          subTitle: "X5CrNiCuNb15-5"
        },
        {
          name: "1.4534(PH 13-8 Mo)",
          slug: "1_4534",
          imageSrc: p_1_4534,
          tableData: s_1_4534,
          toUse: ["Savunma Sanayi", "Havacılık Bileşenleri", "Nükleer Endüstriler", "Petro-Kimya Sektörü"],
          description: "Tamamen havacılık için üretilmiş özel bir paslanmaz çeliktir. 13-8 Mo korozyon dayanımı bakımından 17-4 PH ve 15-5 PH malzemelerden daha dayanıklıdır. Manyetiktir.",
          subTitle: "X3CrNiMoAl13-8-2"
        },
      ],
  },

  {
    name: "Nitrasyon Çelikleri",
    slug: "nitrasyon-celikleri",
    imageSrc: nitrasyonCelikleri,
    subProducts: [
        {
          name: "1.8550",
          slug: "1_8550",
          imageSrc: s_8550,
          tableData: s_1_8550,
          toUse: ["Kaynak Gerektirmeyen Vida, Rotil, Silindir, Piston, Dişli , Extruder ve Segman İmalatında","Plastik Enjeksiyon Makinelerinin Vida ve Kovan Parçalarında","Dişlilerde","Makine Parçalarında"],
          description: "Yüksek korozyon, sıcaklık, aşınma ve yorulma direnci gerektiren kullanım alanlarında çalışmak üzere tasarlanmıştır. Nitrasyondan sonra en az 950 HV yüzey sertliğinin elde edilebildiği, Krom, Alüminyum, Nikel ve Molibden alaşımlı en genel amaçlı kullanılan bir nitrasyon çeliğidir.",
          subTitle: "34CrAlNi7"
        },
         {
          name: "1.8519",
          slug: "1_8519",
          imageSrc: s_8519,
          tableData: s_1_8519,
          toUse: ["Yüksek Sıcaklıkta Çalışan, Yüksek Basınçlı Buhar Kazanları, Türbinler, Jeneratörler, Isı Esanjörleri ve Diğer Enerji Santrali Ekipmanlarında", "Yüksek Sıcaklıkta Çalışan Motor Parçaları, Jantlar, Dişli Kutuları, Rulmanlar ve Diğer Aşınma Direnci Gerekentiren Parçaların Üretiminde"],
          description: "Nitrasyondan sonra en az 800 HV yüzey sertliğinin elde edilebildiği; Krom, Molibden ve Vanadyum alaşımlı bir nitrasyon çeliğidir. Yüksek sıcaklık dayanımı ve korozyon direnci nedeniyle özellikle enerji, petrokimya ve çelik endüstrisi gibi yüksek sıcaklıkta çalışılan uygulamalarda sıklıkla kullanılan bir malzemedir.",
          subTitle: "31CrMoV9"  
        }
      ],
  },

  {
    name: "Alüminyum Bronzları",
    slug: "aluminyum-bronzlari",
    mainDesc: "Alüminyum bronz, bakır ve alüminyumun birleşiminden oluşan bir alaşımdır. Genellikle bakırın yüksek oranda olduğu ve alüminyumun belirli bir oranda eklenerek alaşımın özelliklerinin iyileştirildiği bir malzemedir. Alüminyum bronzun öne çıkan özellikleri şunlardır:",
    imageSrc: CuAl10Fe3Mn2,
    subProducts: [
        {
          name: "CuAl10Fe3Mn",
          slug: "1_CuAl10Fe3Mn",
          imageSrc: CuAl10Fe3Mn2,
          tableData: s_1_CuAl10Fe3Mn,
          toUse: ["Yataklar", "Dişliler", "Sonsuz Dişli Çarklar", "Valf Yatakları ve Kılavuzları", "Kızaklar", "Saplamalar"],
          description: 'CuAl10Fe3Mn, yüksek dayanım ve aşınma direnci gerektiren uygulamalar için geliştirilmiş, demir (Fe) ve mangan (Mn) ile alaşımlandırılmış bir alüminyum bronz türüdür. Mekanik mukavemeti ve korozyon direnci sayesinde ağır hizmet koşullarında güvenle tercih edilir. \n \n Alüminyum içeriği sayesinde deniz suyu, nemli ortamlar ve birçok kimyasal etkiye karşı yüksek direnç gösterir. Fe ve Mn katkıları ise malzemenin yük taşıma kapasitesini, darbe dayanımını ve aşınma performansını önemli ölçüde artırır.',
          subTitle: "UNS C62400"
        },
        {
          name: "CuAl10Ni5Fe4",
          slug: "1_CuAl10Ni5Fe4",
          imageSrc: CuAl10Ni5Fe4,
          tableData: s_1_CuAl10Ni5Fe4,
          toUse: ["Yataklar", "Dişliler", "Sonsuz Dişli Çarklar", "Bükme ve Düzeltme Takımları (Kaşık ve Malafalar)", "Aşınma Dayanımlı Makine Parçaları", "Uçak İniş Takımları Dişli Malzemesi"],
          description: 'CuAl10Ni5Fe4, nikel (Ni) ve demir (Fe) ile alaşımlandırılmış, yüksek mukavemetli bir alüminyum bronz türüdür. Özellikle zorlu çalışma koşullarında, yüksek yük ve aşınmanın söz konusu olduğu uygulamalarda güvenle tercih edilir. \n \n Nikel katkısı sayesinde malzeme, deniz suyu, tuzlu ortamlar ve kimyasal etkilere karşı çok yüksek korozyon direnci gösterir. Demir ilavesi ise mekanik dayanımı ve sertliği artırarak, uzun ömürlü ve güvenilir bir performans sunar. \n \n CuAl10Ni5Fe4; yüksek sıcaklık, basınç ve sürtünmenin birlikte bulunduğu sistemlerde şekil stabilitesini koruyan, ağır hizmet tipi uygulamalara uygun bir bronz alaşımdır.',
          subTitle: "UNS C63000"
        },
        {
          name: "CuAl14Fe4Mn2",
          slug: "1_CuAl14Fe4Mn2",
          imageSrc: CuAl14Fe4Mn2,
          tableData: s_1_CuAl14Fe4Mn2,
          toUse: ["Paslanmaz Sacların Derin Sıvama Kalıplarında", "Boru Bükme Kalıplarında Malafalar", "Boru ve Form Makaraları", "Aşınma Dayanımlı Makine Parçaları", "Boru İmalatında Kaynak Makaraları"],
          description: 'CuAl14Fe4Mn2 yüksek performanslı bir alüminyum bronz alaşımıdır. Yüksek mekanik dayanımı, sertliği ve aşınma direnci sayesinde ağır hizmet tipi endüstriyel uygulamalarda yaygın olarak tercih edilir. \n \n Bu alaşım, çelikle temas halinde çalışabilme kabiliyeti ve yüksek yük altında deformasyona karşı dirençli yapısı ile öne çıkar. Aynı zamanda bronz alaşımlarının doğal avantajı olan iyi sürtünme özelliklerini koruyarak yüksek stabilite ve güvenilir performans sağlar.',
          subTitle: "UNS C95900"
        },
    ],
  },
  {
    name: "Kalay Bronzları",
    slug: "kalay-bronzlari",
    imageSrc: CuSn12Ni,
    subProducts: [
        {
          name: "CuSn10",
          slug: "1_CuSn10",
          imageSrc: CuSn10,
          tableData: s_1_CuSn10,
          toUse: ["Pompa", "Türbin Pervaneleri", "Ağır Yük", "Düşük Dönme Hızında Çalışan Yataklar", "Sonsuz ve Salyangoz Vida", "Sonsuz Dişli ve Kaymalı Yataklar"],
          description: 'CuSn10, yaklaşık %10 kalay (Sn) içeriğine sahip, yüksek mukavemet ve çok iyi aşınma direnci sunan klasik bir kalay bronz alaşımıdır. \n \n İyi işlenebilirliği ve stabil yapısı ile orta ve yüksek yük altında çalışan mekanik sistemler için ideal bir çözümdür.'
        },
        {
          name: "CuSn12",
          slug: "1_CuSn12",
          imageSrc: CuSn12,
          tableData: s_1_CuSn12,
          toUse: ["Deniz Suyuna ve Aşınmaya Karşı Dayanıklı Sonsuz Vida ve Dişliler", "Düşük Hız ve Ağır Yük Altında Çalışan Yataklar"],
          description: 'CuSn12, yaklaşık %12 kalay (Sn) içeriğine sahip, yüksek sertlik ve aşınma direnci ile öne çıkan bir kalay bronz alaşımıdır. CuSn10’a kıyasla daha yüksek mukavemet sunarak, ağır çalışma koşullarında güvenilir performans sağlar. \n \n Yüksek yük altında dahi iyi kayma ve sürtünme özelliklerini korur. Korozyona dayanıklı yapısı sayesinde nemli, yağlı ve genel endüstriyel ortamlarda uzun servis ömrü sunar. Mekanik stabilitesi, boyutsal hassasiyet gerektiren uygulamalar için önemli bir avantajdır. \n \n CuSn12, dayanıklılığı ve aşınma performansı ile orta ve yüksek yük altında çalışan mekanik sistemler için ideal bir çözümdür.',
         },
        {
          name: "CuSn12Ni",
          slug: "1_CuSn12Ni",
          imageSrc: CuSn12Ni,
          tableData: s_1_CuSn12Ni,
          toUse: ["Asansör Dişlileri", "Asansör Somunları", "Senkronize Bilezikler", "Boru Şeklinde Yataklar", "Yük Altındaki Hareketli Somunlar"],
          description:'CuSn12Ni, yaklaşık %12 kalay (Sn) ve nikel (Ni) içeriğine sahip, yüksek mukavemet, aşınma direnci ve geliştirilmiş korozyon performansı sunan bir kalay bronz alaşımıdır. \n \n CuSn12’ye kıyasla daha yüksek yorulma dayanımı ve daha iyi darbe performansı sunar. Aynı zamanda nemli ve agresif ortamlarda korozyona karşı daha dirençli olup, stabil yapısı sayesinde uzun süreli ve güvenilir kullanım sağlar. \n \n CuSn12Ni; yüksek yük altında çalışan, dayanıklılık ve süreklilik gerektiren mekanik ve endüstriyel uygulamalar için uygun bir çözümdür.'
        },
    ],
  },

  {
    name: "CuCrZr",
    slug: "cucrzr",
    imageSrc: cuCrZr2,
    description: 'CuCrZr, bakıra krom (Cr) ve zirkonyum (Zr) ilavesiyle elde edilen, yüksek iletkenlik ve yüksek mekanik dayanımı bir arada sunan sert bakır alaşımıdır. \n \n Özellikle elektrik ve ısı iletiminin kritik olduğu, aynı zamanda mekanik mukavemet gerektiren uygulamalarda tercih edilir.',
    tableData: CuCrZr_Table,
    toUse: ["Direnç Kaynak Elektotları", "Dikiş Kaynak Diskleri", "Sürekli Döküm Kalıpları (demir ve demir dışı malzemeler için)", "AC Motorlar için Rotor Barlar ve Ringler", "Elektronik Devreler Nükleer Fizik Uygulamaları", "Vakum Elektronik Devre Uygulamaları", "EDM Uygulamaları"],
    subTitle: "DIN 2,1293 ASTM C18150 EN CW106C RWMA CLASS II"
  },

  {
    name: "CuNi2SiCr",
    slug: "cuni2sicr",
    imageSrc: cuNi2SiCr,
    description: 'CuNi2SiCr, bakıra nikel (Ni), silikon (Si) ve krom (Cr) ilavesiyle elde edilen, yüksek mekanik dayanım ile iyi elektrik iletkenliğini bir arada sunan sert bakır alaşımıdır. \n \n Özellikle tekrarlı mekanik yükler, sürtünme ve sıcaklık değişimlerinin etkili olduğu uygulamalarda boyutsal kararlılığı ile öne çıkar.',
    tableData: CuNi2SiCr_Table,
    toUse: ["Punta Kaynak Elektrotları", "Dikiş Kaynak Diskleri", "Projeksiyon ve Alın Kaynağı Elektrotları", "Paslanmaz Çeliğin Kaynağında", "Pirinç ve Bronz Kokil Döküm Kalıpları", "Plastik Enjeksiyon Kalıp Parçaları", "Alüminyum Enjeksiyon Döküm Makinalarının Pistonları", "Elektrot Tutucuları ve Dikiş Kaynağı Şaftları"],
    subTitle: "DIN 2.0855 ASTM C18000 EN CW111C RWMA CLASS III",
  },

  {
    name: "CuCo2Be",
    slug: "cuco2be",
    imageSrc: cuCo2Be,
    description: 'CuCo2Be, bakıra kobalt (Co) ve berilyum (Be) ilavesiyle elde edilen, çok yüksek mekanik dayanım ve iyi elektrik iletkenliği sunan sert bakır alaşımıdır.  \n \n Bu alaşım, bakır alaşımları arasında en yüksek sertlik ve mukavemet değerlerinden birine ulaşabilirken, aynı zamanda iyi seviyede elektrik ve ısı iletkenliğini korur. Yüksek sıcaklık, basınç ve tekrarlı yükler altında şekil stabilitesini uzun süre muhafaza eder.',
    tableData: CuCo2Be_Table,
    toUse: ["Paslanmaz Çelik, Monel ve Nikel Alaşımlarının Punta Kaynak Elektrotlarında", "Plastik Enjeksiyon Kalıplarında Kalıbın tümü veya geçme olarak", "Plastik Şişirme Kalıplarında Soğutma Çekirdekleri ve diğer parçalarda", "Plastik Ambalajında Dikiş Başları olarak", "Bakır, Pirinç, Bronz gibi Alaşımların Dökümünde", "Kokil Kalıp olarak", "Çelik Hasır Makinelerinin Elektrotlarında"],
    subTitle: "DIN 2.1285 ASTM C17500 EN CW104C RWMA CLASS III",
  },

  {
    name: "CuCoNiBe",
    slug: "cuconi-be",
    imageSrc: cuCoNiBe,
    description: 'CuCoNiBe, bakıra kobalt (Co), nikel (Ni) ve berilyum (Be) ilavesiyle elde edilen, çok yüksek mekanik dayanım ile iyi elektrik ve ısı iletkenliğini bir arada sunan gelişmiş bir sert bakır alaşımıdır.  \n \n Bu alaşım, özellikle yüksek basınç, aşınma ve tekrarlı mekanik yüklerin bulunduğu ortamlarda form stabilitesini uzun süre korur. Nikel ve kobalt katkıları, malzemenin yorulma dayanımını ve termal stabilitesini artırırken, berilyum ilavesi yüksek sertlik ve mukavemet sağlar.',
    tableData: CuCoNiBe_Table,
    toUse: ["Punta Kaynak Elektrotları", "Dikiş Kaynak Diskleri", "Projeksiyon ve Alın Kaynağı Elektrotları", "Paslanmaz Çeliğin Kaynağında", "Pirinç ve Bronz Kokil Döküm Kalıpları", "Plastik Enjeksiyon Kalıp Parçaları", "Alüminyum Enjeksiyon Döküm Makinalarının Pistonları", "Elektrot Tutucuları ve Dikiş Kaynağı Şaftları"],
    subTitle: "DIN 2.1285 ASTM C17540 EN CW103C RWMA CLASS III",
  },

  {
    name: "CuBe2",
    slug: "cube2",
    imageSrc: cuBe2,
    description: "CuBe2, bakıra berilyum (Be) ilavesiyle elde edilen, çok yüksek mekanik dayanım, sertlik ve elastikiyet sunan sert bakır alaşımıdır. \n \n Bu alaşım, çelik benzeri mukavemet değerlerine ulaşabilirken, aynı zamanda iyi elektrik ve ısı iletkenliğini korur. Yüksek aşınma, yorulma ve darbe direnci sayesinde uzun çalışma ömrü sunar. Boyutsal stabilitesi, hassas tolerans gerektiren uygulamalarda önemli bir avantaj sağlar. \n \n CuBe2, kıvılcım çıkarmayan ve manyetik olmayan yapısı ile güvenlik ve hassasiyet gerektiren ortamlarda da güvenle kullanılabilir.",
    tableData: CuBe2_Table,
    toUse: ["Plastik Kalıplarında Hızlı Soğuması Gereken Bölgelerde Geçme olarak", "Plastik Şişelerinde Taban Pleytleri, Boğaz Ringleri olarak", "Sıcak Yolluk Sistemleri için Nozullar", "Alın Kaynağı Elektrotları (Jant Kapağı, Zincir Kaynağı)", "Manyetik olmadığı ve kıvılcım çıkarmadığı için güvenlik gereçlerinde"],
    subTitle: "DIN 2.1247 ASTM C17200 EN CW101C RWMA CLASS IV",
  },
  {
    name: "Titanyum Alaşımlar",
    slug: "titanyum-alasimlar",
    imageSrc: titaniumAlasim,
    subProducts: [
        {
          name: "Ti Grade 2",
          slug: "ti_grade_2",
          imageSrc: tiGrade2,
          tableData: ti_grade_2,
          description: "Ticari saflıkta titanyum (Commercially Pure Titanium - CP Titanium) sınıflarından biridir ve endüstride en çok kullanılan düşük alaşımlı/düşük katkılı titanyum malzemelerden sayılır. Dayanım, süneklik ve korozyon direnci arasında çok iyi bir denge sunduğu için “işlenebilirliği en kolay titanyum sınıfı” olarak da bilinir.",
          toUse: ["Ti Grade 2, yüksek korozyon direnci isteyen ama çok yüksek dayanım gerektirmeyen ortamlarda tercih edilir", "Sanayi ve Kimya: Isı değiştiriciler, Boru ve boru demetleri, Reaktör kapları, Klor-alkali endüstrisi ekipmanları, Deniz suyu sistemleri", "Tıp: Dental vidalar,Cerrahi implantlar (yük taşımayan bölgeler), Tıbbi cihaz ve alet parçaları ", "Havacılık: Alçak yük taşıyan yapısal parçalar, Hidrolik sistemlerde bağlantı elemanları", "Enerji ve Denizcilik: Tuzdan arındırma tesisleri, Offshore konstrüksiyonları, Gemilerde ısı eşanjörleri ve pompalar" ],
          advantages: 'Mükemmel korozyon direnci: Özellikle deniz suyu, klorür ortamları, oksitleyici asitler. \n İyi süneklik ve şekillendirilebilirlik: CP titanyum sınıfları içinde işlenmesi nispeten kolaydır. \n Kaynaklanabilirlik iyi: Argon korumasıyla yüksek kaliteli kaynak yapılabilir.\n Biyouyumlu: Tıbbi uygulamalarda kullanılabilir. Termal yalıtkanlığı düşük, manyetik değildir.',
          disadvantages: "Dayanımı alaşımlı titanyumlara (ör. Ti-6Al-4V) göre düşüktür. \n Talaşlı imalatta yine de çeliğe göre zordur (yüksek sürtünme, ısı birikimi).\n Maliyeti, çeliğe ve paslanmaz çeliğe göre daha yüksektir.",
        },
        {
          name: "Ti Grade 5",
          slug: "ti_grade_5",
          imageSrc: tiGrade5,
          tableData: ti_grade_5,
          description: "Teknik adıyla Ti-6Al-4V, dünyada en yaygın kullanılan titanyum alaşımıdır. Yüksek dayanım, iyi yorulma direnci, mükemmel korozyon dayanımı ve nispeten düşük ağırlık gibi özellikleri bir arada sunması nedeniyle havacılık, savunma, tıp ve endüstride standart hâline gelmiştir.",
          toUse: ["Havacılık - Uzay: Türbin kanatları, Gövde parçaları, İniş takımları, Hidrolik sistem bileşenleri", "Tıp: Kalça/diz protezleri, Dental implantlar, Omurga vidaları ve plaklar, Cerrahi aletler", "Otomotiv ve Savunma: Yüksek performanslı motor parçaları, Zırh sistemi bileşenleri", "Endüstri: Yüksek sıcaklıkta çalışan parçalar, Yüksek basınçlı ekipmanlar, Spor ekipmanları (bisiklet, yarış parçaları)"],
          advantages: "Yüksek spesifik dayanım (dayanım/ağırlık oranı çok yüksektir). \n Yorulma dayanımı yüksektir. \n Korozyon direnci mükemmeldir (özellikle deniz suyu, klorür ortamları). \n Biyouyumludur → tıp uygulamalarında yaygındır. \n Geniş sıcaklık aralığında (-50 °C → 400 °C) kararlı mekanik özellikler.",
          disadvantages: "Grade 2’ye göre daha zor işlenir / talaş kaldırma zordur. \n Kaynak işlemleri kontrollü ortam gerektirir (argon koruması). \n  Maliyet yüksektir.",
        },
        {
          name: "Ti Grade 9",
          slug: "ti_grade_9",
          imageSrc: tiGrade9,
          tableData: ti_grade_9,
          description: "Teknik adıyla Ti-3Al-2.5V, bir alfa-beta titanyum alaşımıdır ve özellikle boru, tüp, bisiklet kadroları, havacılık hidrolik boruları gibi hafif ama dayanıklı uygulamalarda çok yaygın kullanılır. Sağlamlık ve şekillendirilebilirlik arasında çok iyi bir denge sunar ve çoğu zaman “soğuk şekillendirmeye en uygun titanyum alaşımı” olarak bilinir.",
          toUse: ["Havacılık: Hidrolik sistem boruları, Yapısal hafif boru elemanları, Yakıt ve hava boru hatları", "Bisiklet Endüstrisi: Premium titanyum bisiklet kadroları, Performans tutan boru setleri (Grade 9, Ti bisikletlerde en çok tercih edilen alaşımdır.)", "Tıp: Cerrahi alet boruları, Düşük yük taşıyan implant elemanları", "Endüstri ve Enerji: Isı eşanjörü boruları, Kimyasal proses boruları, Spor ekipmanları, denizcilik parçaları"],
          advantages: "Grade 5’e göre daha kolay şekillenir → boru ve tüp üretiminde ideal. \n Yüksek korozyon direnci (deniz suyu, klorür ortamları). \n Hafif ve güçlü (özgül dayanım yüksektir). Kaynaklanabilirliği Grade 5’e göre daha iyidir. \n Çok iyi yorulma dayanımı.",
          disadvantages: "Dayanımı Grade 5 kadar yüksek değildir. \n Yüksek sıcaklık dayanımı sınırlıdır (~300 °C üstü önerilmez). \n Maliyet Grade 2’ye göre daha yüksektir."
        },
    ],
  },
    {
    name: "Nikel Alaşımlar",
    slug: "nikel-alasimlar",
    imageSrc: nikelAlasimlar,
    subProducts: [
        {
          name: "Inconel 625",
          slug: "inconel_625",
          imageSrc: inconel625,
          tableData: inconel_625,
          description: "Ni-Cr-Mo-Nb esaslı bir süperalaşımdır. En büyük avantajı: Çok geniş ortam yelpazesinde (asit, baz, tuzlu su, oksitleyici ortamlarda) üstün korozyon direnci, Kaynaklanabilirliği; Inconel serisinde kaynak konusunda en iyi alaşımlardan biridir.",
          toUse: ["Kimya ve Petrokimya: Asit reaktörleri, Isı eşanjörleri, Deney ekipmanları, Klor-alkali tesisleri", "Denizcilik: Deniz suyu pompaları, Borular ve ısı eşanjör tüpleri, Deniz yapıları (offshore)", "Havacılık - Uzay: Egzoz sistemleri, Jet motor bileşenleri, Yanma odası parçaları", "Enerji: Gaz türbinleri, Nükleer reaktör boruları", "Petrol & Gaz: Asidik kuyular (H₂S, CO₂), Yüksek basınçlı borulama sistemleri"],
          baseMaterial: `Yüksek sıcaklık dayanımı: 600-1000 °C arası kararlı. Creep (sürünme) dayanımı yüksektir. \n Eşsiz korozyon direnci: Sülfürik, fosforik, nitrik asitler, Deniz suyu, Klorür çatlak korozyonu, Oksitleyici & indirgeme ortamları, Yüksek sıcaklık oksidasyonu Hepsine karşı mükemmel dirence sahiptir.\n Kaynaklanabilirlik: Inconel 625, Inconel serisinde kaynaklanması en kolay alaşımdır. Kaynak sonrası çatlama riski düşüktür.\n İşlenebilirlik: Süperalaşım olduğu için çeliğe göre zordur, ama 718 kadar aşınma yapıcı değildir.`,
          
        },
        {
          name: "Inconel 718",
          slug: "inconel_718",
          imageSrc: inconel718,
          tableData: inconel_718,
          description: "Yüksek mukavemetli, nikel-temelli bir süperalaşımdır ve özellikle yüksek sıcaklıkta dayanım, sürünme direnci (creep) ve yorulma dayanımı ile öne çıkar. Aynı zamanda korozyon ve oksidasyona karşı çok dirençlidir, bu yüzden havacılık, uzay, enerji ve nükleer endüstrilerde kritik parçalar için yaygın olarak kullanılır.",
          toUse: ["Havacılık & Uzay: Jet motoru diskleri, rotorlar, Türbin kanatları, Egzoz sistemleri, Hava çerçeve bileşenleri", "Enerji & Nükleer: Buhar türbinleri, Nükleer reaktör parçaları, Gaz türbinleri","Petrol & Gaz: Yüksek sıcaklık ve basınçlı borulama, Reaktör ve valf parçaları"],         
          baseMaterial: 'Yüksek sıcaklık mukavemeti: Çözelti + yaşlandırma ile sertleştirilmiş durumdayken çok yüksek UTS ve YS değerleri. 650 °C’ye kadar sürünme ve yorulma direnci yüksek.\n Korozyon ve oksidasyon direnci: Klorür, sülfürlü ve oksitleyici ortamlar. Deniz suyu ve yüksek sıcaklık oksidasyonu için uygundur. \n Kaynaklanabilirlik: Özel ön-isıl işlem ve post-weld yaşlandırma ile kaynak yapılabilir. Çatlamaya karşı dirençlidir, fakat Inconel 625 kadar kolay değildir.',
        }
    ],
  },

];
