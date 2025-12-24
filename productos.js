const productos = [

/* OLD MONEY (ROPA) — Tallas: S M L XL */
{
  id: 1,
  nombre: "Polo Tejido Premium",
  precio: 186.64,
  categoria: "old-money",
  coleccion: "nuevos",
  img: "https://old-money.com/cdn/shop/files/ribbed_16b.png?v=1757781960&width=960",
  imgsExtra: [
    "https://old-money.com/cdn/shop/files/ribbed_16b.png?v=1757781960",
    "https://old-money.com/cdn/shop/files/Image_Edit-OldMoney_1_5310ce2e-ed5f-4806-af94-7d76a1e5a61d.jpg?v=1756824936&width=960"
  ],
  descripcion: "Polo tejido premium estilo Old Money, ideal para ocasiones elegantes.",
  tallas: ["S", "M", "L", "XL"]
},
{
  id: 2,
  nombre: "Jersey Verbier con media cremallera",
  precio: 150.99,
  categoria: "old-money",
  coleccion: "destacados",
  img: "https://old-money.com/cdn/shop/files/3_711b7d8b-bf8b-4a84-b7fa-6f879ac7fe38.png?v=1732758631&width=960",
  imgsExtra: [
    "https://old-money.com/cdn/shop/files/3_711b7d8b-bf8b-4a84-b7fa-6f879ac7fe38.png",
    "https://old-money.com/cdn/shop/files/4_705fae78-6780-4dc9-ad7f-83de14b402ab.png?v=1732758631&width=960"
  ],
  descripcion: "Jersey elegante con media cremallera, diseño europeo clásico.",
  tallas: ["S", "M", "L", "XL"]
},
{
  id: 3,
  nombre: "Gstaad Fall Turtleneck",
  precio: 150.00,
  categoria: "old-money",
  coleccion: "promociones",
  img: "https://old-money.com/cdn/shop/files/16_93c589a6-0bd5-4267-97cd-e5b5745b9ec0.png?v=1732760089&width=960",
  imgsExtra: [
    "https://old-money.com/cdn/shop/files/16_93c589a6-0bd5-4267-97cd-e5b5745b9ec0.png",
    "https://old-money.com/cdn/shop/files/18_10737f50-ec02-426a-a513-ce9c5a474507.png?v=1736242315&width=960"
  ],
  descripcion: "Suéter cuello alto elegante, ideal para climas fríos.",
  tallas: ["S", "M", "L", "XL"]
},
{
  id: 4,
  nombre: "Pantalones chinos Porto",
  precio: 140.00,
  categoria: "old-money",
  coleccion: "nuevos",
  img: "https://old-money.com/cdn/shop/files/1_0509c4da-2a95-45dd-921c-17091177f9c9.jpg?v=1732878153&width=1280",
  imgsExtra: [
    "https://old-money.com/cdn/shop/files/1_0509c4da-2a95-45dd-921c-17091177f9c9.jpg",
    "https://old-money.com/cdn/shop/files/4_2b1f0143-70ae-49ee-b474-5746a659c90f.jpg?v=1732878154&width=960"
  ],
  descripcion: "Pantalón chino clásico, cómodo y elegante.",
  tallas: ["S", "M", "L", "XL"]
},
{
  id: 5,
  nombre: "Cannes Ribbed Cotton Polo",
  precio: 135.10,
  categoria: "old-money",
  coleccion: "destacados",
  img: "https://old-money.com/cdn/shop/files/2_68d77782-0457-4378-9735-127c55c57b10.png?v=1732956187&width=1280",
  imgsExtra: [
    "https://old-money.com/cdn/shop/files/2_68d77782-0457-4378-9735-127c55c57b10.png",
    "https://old-money.com/cdn/shop/files/4_883d6f62-369d-46a6-85f8-4173527ababb.png?v=1732956187&width=960"
  ],
  descripcion: "Polo de algodón ribeteado, fresco y elegante.",
  tallas: ["S", "M", "L", "XL"]
},
{
  id: 6,
  nombre: "Textured Knit Polo Sweater",
  precio: 141.99,
  categoria: "old-money",
  coleccion: "promociones",
  img: "https://old-money.com/cdn/shop/files/4_48d57670-7a54-437e-8327-068e9f4552b7.jpg?v=1757003783&width=960",
  imgsExtra: [
    "https://old-money.com/cdn/shop/files/4_48d57670-7a54-437e-8327-068e9f4552b7.jpg",
    "https://old-money.com/cdn/shop/files/3_0cfe20eb-b243-429e-b05c-6d2cec24f851.jpg?v=1757003783&width=960"
  ],
  descripcion: "Polo sweater texturizado con acabado premium.",
  tallas: ["S", "M", "L", "XL"]
},

/* URBANA (ROPA) */
{
  id: 7,
  nombre: "Camiseta Oversize Street Cult",
  precio: 180.99,
  categoria: "urbana",
  coleccion: "nuevos",
  img: "https://dynamobrand.co/cdn/shop/files/ECCODIC0202-9965.jpg?v=1765641723",
  imgsExtra: [
    "https://dynamobrand.co/cdn/shop/files/ECCODIC0202-9965.jpg?v=1765641723",
    "https://dynamobrand.co/cdn/shop/files/ECCODIC0202-9966_1.jpg?v=1765641723"
  ],
  descripcion: "Hoodie oversize urbano, cómodo y moderno.",
  tallas: ["S", "M", "L", "XL"]
},
{
  id: 8,
  nombre: "Jeans Baggy Street Grey",
  precio: 220.99,
  categoria: "urbana",
  coleccion: "destacados",
  img: "https://dynamobrand.co/cdn/shop/files/ECCODIC0201-9615.jpg?v=1765558399",
  imgsExtra: [
    "https://dynamobrand.co/cdn/shop/files/ECCODIC0201-9615.jpg?v=1765558399",
    "https://dynamobrand.co/cdn/shop/files/ECCODIC0201-9614.jpg?v=1765558399"
  ],
  descripcion: "Pantalón cargo resistente de estilo urbano.",
  tallas: ["S", "M", "L", "XL"]
},
{
  id: 9,
  nombre: "Hoodie Oversize White Mesh",
  precio: 180.10,
  categoria: "urbana",
  coleccion: "promociones",
  img: "https://dynamobrand.co/cdn/shop/files/ECCODIC0201-9659.jpg?v=1765559431",
  imgsExtra: [
    "https://fashionspark.com/cdn/shop/files/P-970809402-1_2048x2048.webp",
    "https://dynamobrand.co/cdn/shop/files/ECCODIC0201-9660.jpg?v=1765644122"
  ],
  descripcion: "Polera oversize negra con estampado moderno.",
  tallas: ["S", "M", "L", "XL"]
},
{
  id: 10,
  nombre: "Pantaloneta Relax Cortes Laterales",
  precio: 125.00,
  categoria: "urbana",
  coleccion: "nuevos",
  img: "https://dynamobrand.co/cdn/shop/files/NOV05DYN-83.jpg?v=1764627946",
  imgsExtra: [
    "https://dynamobrand.co/cdn/shop/files/NOV05DYN-83.jpg?v=1764627946",
    "https://dynamobrand.co/cdn/shop/files/NOV05DYN-81.jpg?v=1764627967"
  ],
  descripcion: "Chaqueta bomber urbana, resistente y estilizada.",
  tallas: ["S", "M", "L", "XL"]
},
{
  id: 11,
  nombre: "Camisilla Regular Sacred",
  precio: 130.90,
  categoria: "urbana",
  coleccion: "destacados",
  img: "https://dynamobrand.co/cdn/shop/files/NOV05DYN-125.jpg?v=1764637671",
  imgsExtra: [
    "https://dynamobrand.co/cdn/shop/files/NOV05DYN-125.jpg?v=1764637671",
    "https://dynamobrand.co/cdn/shop/files/NOV05DYN-126.jpg?v=1764637671"
  ],
  descripcion: "Jeans cargo gris con diseño moderno.",
  tallas: ["S", "M", "L", "XL"]
},
{
  id: 12,
  nombre: "Camiseta Oversize Furious",
  precio: 210.00,
  categoria: "urbana",
  coleccion: "promociones",
  img: "https://dynamobrand.co/cdn/shop/files/ECCODIC0202-9954.jpg?v=1765905815",
  imgsExtra: [
    "https://dynamobrand.co/cdn/shop/files/ECCODIC0202-9954.jpg?v=1765905815",
    "https://dynamobrand.co/cdn/shop/files/ECCODIC0202-9955.jpg?v=1765640934"
  ],
  descripcion: "Bermuda recta verde militar, cómoda y ligera.",
  tallas: ["S", "M", "L", "XL"]
},

/* ZAPATOS — Tallas Bolivia*/
{
  id: 13,
  nombre: "Tenis urbano Mora Urban para hombre",
  precio: 372.89,
  categoria: "zapatos",
  coleccion: "nuevos",
  img: "https://pakar.com/cdn/shop/files/129372-CF-03_1000x.jpg?v=1755656586",
  imgsExtra: [
    "https://pakar.com/cdn/shop/files/129372-CF-03_1000x.jpg?v=1755656586",
    "https://pakar.com/cdn/shop/files/129372-CF-12_1000x.jpg?v=1755656586"
  ],
  descripcion: "Tenis blanco moderno, cómodo y resistente.",
  tallas: ["38", "39", "40", "41", "42"]
},
{
  id: 14,
  nombre: "Tenis urbanos Mora Urban para hombre",
  precio: 470.00,
  categoria: "zapatos",
  coleccion: "destacados",
  img: "https://pakar.com/cdn/shop/files/133751-CF-03_2d08791e-9559-43e3-a11f-bf989667512e_1000x.jpg?v=1755647228",
  imgsExtra: [
    "https://pakar.com/cdn/shop/files/133751-CF-03_2d08791e-9559-43e3-a11f-bf989667512e_1000x.jpg?v=1755647228",
    "https://pakar.com/cdn/shop/files/133751-CF-12_552461a6-32d6-4c83-907d-5523b93fae58_1000x.jpg?v=1755647228"
  ],
  descripcion: "Pantufla cómoda y ligera para uso diario.",
  tallas: ["38", "39", "40", "41", "42"]
},
{
  id: 15,
  nombre: "Tenis urbano tipo Botín Rebound v6 Puma para hombre",
  precio: 450.30,
  categoria: "zapatos",
  coleccion: "promociones",
  img: "https://pakar.com/cdn/shop/files/126160-CF-03_b122073a-c75d-4acd-b773-a4b553fea7f9_1000x.jpg?v=1755652750",
  imgsExtra: [
    "https://pakar.com/cdn/shop/files/126160-CF-03_b122073a-c75d-4acd-b773-a4b553fea7f9_1000x.jpg?v=1755652750",
    "https://pakar.com/cdn/shop/files/126160-CF-12_1000x.jpg?v=1755652750"
  ],
  descripcion: "Mocasines de ante con estilo Old Money.",
  tallas: ["38", "39", "40", "41", "42"]
},
{
  id: 16,
  nombre: "Tenis urbano Reebok para hombre",
  precio: 356.20,
  categoria: "zapatos",
  coleccion: "nuevos",
  img: "https://pakar.com/cdn/shop/files/128191-CF-03_12a4a4c5-11ec-438c-885c-6b2b00447c41_1000x.jpg?v=1755652658",
  imgsExtra: [
    "https://pakar.com/cdn/shop/files/128191-CF-03_12a4a4c5-11ec-438c-885c-6b2b00447c41_1000x.jpg?v=1755652658",
    "https://pakar.com/cdn/shop/files/128191-CF-12_1000x.jpg?v=1755652657"
  ],
  descripcion: "Zapatilla deportiva verde, cómoda y resistente.",
  tallas: ["38", "39", "40", "41", "42"]
},
{
  id: 17,
  nombre: "Tenis Skech-Air Court Skechers para hombre",
  precio: 46.16,
  categoria: "zapatos",
  coleccion: "destacados",
  img: "https://pakar.com/cdn/shop/files/127359-CF-03_4563d6a5-df48-4588-9e97-ed3edcb0f530_1000x.jpg?v=1755652592",
  imgsExtra: [
    "https://pakar.com/cdn/shop/files/127359-CF-03_4563d6a5-df48-4588-9e97-ed3edcb0f530_1000x.jpg?v=1755652592",
    "https://pakar.com/cdn/shop/files/127359-CF-12_052cc8d9-e74f-45d6-bec4-f5d1daef74d2_1000x.jpg?v=1755652592"
  ],
  descripcion: "Tenis blanco urbano de estilo moderno.",
  tallas: ["38", "39", "40", "41", "42"]
},
{
  id: 18,
  nombre: "Tenis urbano Charly para hombre",
  precio: 410.00,
  categoria: "zapatos",
  coleccion: "promociones",
  img: "https://pakar.com/cdn/shop/files/129641-CF-03_210e43d6-ea01-4d80-a108-38ce576efd2b_1000x.jpg?v=1765320012",
  imgsExtra: [
    "https://pakar.com/cdn/shop/files/129641-CF-03_210e43d6-ea01-4d80-a108-38ce576efd2b_1000x.jpg?v=1765320012",
    "https://pakar.com/cdn/shop/files/129641-CF-12_6ae2d063-2a3e-43b8-95be-d739aac2fb5f_1000x.jpg?v=1755644904"
  ],
  descripcion: "Pantufla casual cómoda para el hogar.",
  tallas: ["38", "39", "40", "41", "42"]
},

/* ACCESORIOS — Talla Única */
{
  id: 19,
  nombre: "Anillo Cronos P950",
  precio: 86.52,
  categoria: "accesorios",
  coleccion: "nuevos",
  img: "https://menfashionbox.com/wp-content/uploads/2024/12/Cronos-P950-1.jpg",
  imgsExtra: [
    "https://menfashionbox.com/wp-content/uploads/2024/12/Cronos-P950-1.jpg",
    "https://menfashionbox.com/wp-content/uploads/2024/12/Cronos-P950-2.jpg"
  ],
  descripcion: "Anillo masculino elegante en plata P950.",
  tallas: ["Única"]
},
{
  id: 20,
  nombre: "Set Pulseras Micro Lomo y Lomo de Corvina",
  precio: 228.00,
  categoria: "accesorios",
  coleccion: "destacados",
  img: "https://menfashionbox.com/wp-content/uploads/2025/11/Pack-Pulseras-Micro-Lomo-y-Lomo-de-Corvina-1-1000x1000.jpg",
  imgsExtra: [
    "https://menfashionbox.com/wp-content/uploads/2025/11/Pack-Pulseras-Micro-Lomo-y-Lomo-de-Corvina-1-1000x1000.jpg",
    "https://menfashionbox.com/wp-content/uploads/2025/11/Pack-Pulseras-Micro-Lomo-y-Lomo-de-Corvina-2.jpg"
  ],
  descripcion: "Set de pulseras masculinas artesanales.",
  tallas: ["Única"]
},
{
  id: 21,
  nombre: "Set Franco (Collar + Pulsera)",
  precio: 123.00,
  categoria: "accesorios",
  coleccion: "promociones",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmARMyCo1NKCmTEsge6h86D5fg2N18McGqIA&s",
  imgsExtra: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmARMyCo1NKCmTEsge6h86D5fg2N18McGqIA&s",
    "https://m.media-amazon.com/images/I/71FFBXW95AL._AC_UY1000_.jpg"
  ],
  descripcion: "Set elegante de collar y pulsera.",
  tallas: ["Única"]
},
{
  id: 22,
  nombre: "Collar Figaro P950 - Men's Fashion Box",
  precio: 119.00,
  categoria: "accesorios",
  coleccion: "nuevos",
  img: "https://menfashionbox.com/wp-content/uploads/2025/08/Collar-Figaro-6MM-P950.jpg",
  imgsExtra: [
    "https://menfashionbox.com/wp-content/uploads/2025/08/Collar-Figaro-6MM-P950.jpg",
    "https://resources.claroshop.com/medios-plazavip/s2/71063/4963687/64cf156806fea-df4bad03-f143-4de9-8f59-1f6097d915d8-1600x1600.jpg"
  ],
  descripcion: "Collar de plata con doble malla, elegante y resistente.",
  tallas: ["Única"]
},
{
  id: 23,
  nombre: "Billetera para Hombre Lad con RFID Blocker Azul",
  precio: 142.53,
  categoria: "accesorios",
  coleccion: "destacados",
  img: "https://tottobo.vtexassets.com/arquivos/ids/408659/AC51IND943-2526B-ZN0_1.jpg?v=638972837625670000",
  imgsExtra: [
    "https://tottobo.vtexassets.com/arquivos/ids/408659/AC51IND943-2526B-ZN0_1.jpg",
    "https://tottobo.vtexassets.com/arquivos/ids/408661/AC51IND943-2526B-ZN0_3.jpg?v=638972837634400000"
  ],
  descripcion: "Billetera masculina con protección RFID.",
  tallas: ["Única"]
},
{
  id: 24,
  nombre: "COLLAR HORIZONTE HOMBRE",
  precio: 113.21,
  categoria: "accesorios",
  coleccion: "promociones",
  img: "https://ilariape.vtexassets.com/arquivos/ids/169902-1200-auto?v=638869817841000000",
  imgsExtra: [
    "https://ilariape.vtexassets.com/arquivos/ids/169902-1200-auto?v=638869817841000000",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKA4DraIJj1gKWy8Fx8tWLvqcMhwRRFAIlV683sVTd0A&s"
  ],
  descripcion: "Collar masculino elegante de diseño moderno.",
  tallas: ["Única"]
}

];
