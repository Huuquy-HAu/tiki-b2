

const data = [
   { img: 'https://salt.tikicdn.com/cache/400x400/ts/product/77/e1/ea/36c51e524d468e3db84a916a474dd350.jpg.webp', name: 'Quần', id: 0, price: 32000, address: 100, contentScore: 'Xuất sắc' },
   { img: 'https://salt.tikicdn.com/cache/400x400/ts/product/12/ee/89/f32398e34bd8d42d9ac845ecbd6a3c1b.png.webp', name: 'Áo', id: 1, price: 32000, address: 100, contentScore: 'Xuất sắc' },
   { img: 'https://salt.tikicdn.com/cache/400x400/ts/product/e3/27/cd/3385fecbeef634f350079caab9dacb91.jpg.webp', name: 'Nước Hoa', id: 2, price: 32000, address: 'hết hàng', contentScore: 'Xuất sắc' },
   { img: 'https://salt.tikicdn.com/cache/400x400/ts/product/11/05/7e/7d3f154b703415d375c644d2cdf5f188.jpg.webp', name: 'Mũ', id: 3, price: 32000, address: 100, contentScore: 'Xuất sắc' },
   { img: 'https://cdn.vortexs.io/api/images/f382d6f0-42e4-4676-a7a9-ea4e256d37fd/1920/w/top-choice-giay-nike-air-force-1-low-all-white-w-315115-112.jpeg', name: 'Giày', id: 4, price: 32000, address: 100, contentScore: 'Xuất sắc' },
   { img: 'https://cdn.vortexs.io/api/images/f382d6f0-42e4-4676-a7a9-ea4e256d37fd/1920/w/top-choice-giay-nike-air-force-1-low-all-white-w-315115-112.jpeg', name: 'Giày', id: 4, price: 32000, address: 100, contentScore: 'Xuất sắc' },
   { img: 'https://cdn.vortexs.io/api/images/f382d6f0-42e4-4676-a7a9-ea4e256d37fd/1920/w/top-choice-giay-nike-air-force-1-low-all-white-w-315115-112.jpeg', name: 'Giày', id: 4, price: 32000, address: 100, contentScore: 'Xuất sắc' },
   { img: 'https://cdn.vortexs.io/api/images/f382d6f0-42e4-4676-a7a9-ea4e256d37fd/1920/w/top-choice-giay-nike-air-force-1-low-all-white-w-315115-112.jpeg', name: 'Giày', id: 4, price: 32000, address: 100, contentScore: 'Xuất sắc' },
   { img: 'https://cdn.vortexs.io/api/images/f382d6f0-42e4-4676-a7a9-ea4e256d37fd/1920/w/top-choice-giay-nike-air-force-1-low-all-white-w-315115-112.jpeg', name: 'Giày', id: 4, price: 32000, address: 100, contentScore: 'Xuất sắc' },
   { img: 'https://cdn.vortexs.io/api/images/f382d6f0-42e4-4676-a7a9-ea4e256d37fd/1920/w/top-choice-giay-nike-air-force-1-low-all-white-w-315115-112.jpeg', name: 'Giày', id: 4, price: 32000, address: 100, contentScore: 'Xuất sắc' },
   { img: 'https://cdn.vortexs.io/api/images/f382d6f0-42e4-4676-a7a9-ea4e256d37fd/1920/w/top-choice-giay-nike-air-force-1-low-all-white-w-315115-112.jpeg', name: 'Giày', id: 4, price: 32000, address: 100, contentScore: 'Xuất sắc' },
   { img: 'https://cdn.vortexs.io/api/images/f382d6f0-42e4-4676-a7a9-ea4e256d37fd/1920/w/top-choice-giay-nike-air-force-1-low-all-white-w-315115-112.jpeg', name: 'Giày', id: 4, price: 32000, address: 100, contentScore: 'Xuất sắc' },
   { img: 'https://cdn.vortexs.io/api/images/f382d6f0-42e4-4676-a7a9-ea4e256d37fd/1920/w/top-choice-giay-nike-air-force-1-low-all-white-w-315115-112.jpeg', name: 'Giày', id: 4, price: 32000, address: 100, contentScore: 'Xuất sắc' },
   { img: 'https://cdn.vortexs.io/api/images/f382d6f0-42e4-4676-a7a9-ea4e256d37fd/1920/w/top-choice-giay-nike-air-force-1-low-all-white-w-315115-112.jpeg', name: 'Giày', id: 4, price: 32000, address: 100, contentScore: 'Xuất sắc' },
   { img: 'https://cdn.vortexs.io/api/images/f382d6f0-42e4-4676-a7a9-ea4e256d37fd/1920/w/top-choice-giay-nike-air-force-1-low-all-white-w-315115-112.jpeg', name: 'Giày', id: 4, price: 32000, address: 100, contentScore: 'Xuất sắc' },
   { img: 'https://cdn.vortexs.io/api/images/f382d6f0-42e4-4676-a7a9-ea4e256d37fd/1920/w/top-choice-giay-nike-air-force-1-low-all-white-w-315115-112.jpeg', name: 'Giày', id: 4, price: 32000, address: 100, contentScore: 'Xuất sắc' },
   { img: 'https://cdn.vortexs.io/api/images/f382d6f0-42e4-4676-a7a9-ea4e256d37fd/1920/w/top-choice-giay-nike-air-force-1-low-all-white-w-315115-112.jpeg', name: 'Giày', id: 4, price: 32000, address: 100, contentScore: 'Xuất sắc' },
   { img: 'https://cdn.vortexs.io/api/images/f382d6f0-42e4-4676-a7a9-ea4e256d37fd/1920/w/top-choice-giay-nike-air-force-1-low-all-white-w-315115-112.jpeg', name: 'Giày', id: 4, price: 32000, address: 100, contentScore: 'Xuất sắc' },
   { img: 'https://cdn.vortexs.io/api/images/f382d6f0-42e4-4676-a7a9-ea4e256d37fd/1920/w/top-choice-giay-nike-air-force-1-low-all-white-w-315115-112.jpeg', name: 'Giày', id: 4, price: 32000, address: 100, contentScore: 'Xuất sắc' },
   { img: 'https://cdn.vortexs.io/api/images/f382d6f0-42e4-4676-a7a9-ea4e256d37fd/1920/w/top-choice-giay-nike-air-force-1-low-all-white-w-315115-112.jpeg', name: 'Giày', id: 4, price: 32000, address: 100, contentScore: 'Xuất sắc' },
]
export default data