const fs = require('fs');
const path = './src/data/centros.json';
const centros = JSON.parse(fs.readFileSync(path, 'utf8'));

async function reverseGeocode() {
  for (let i = 0; i < centros.length; i++) {
    const c = centros[i];
    if (c.address) continue; // Skip if already has address

    try {
      console.log(`Geocoding ${c.name}...`);
      const url = `https://nominatim.openstreetmap.org/reverse?lat=${c.lat}&lon=${c.lng}&format=json`;
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'LujanDeCuyoHealthMap/1.0'
        }
      });
      const data = await res.json();
      
      let address = '';
      if (data && data.address) {
        const a = data.address;
        const street = a.road || '';
        const number = a.house_number || '';
        const suburb = a.suburb || a.village || a.town || a.city || '';
        
        if (street) {
          address = `${street} ${number}`.trim();
          if (suburb) address += `, ${suburb}`;
        } else {
          address = data.display_name.split(',').slice(0, 2).join(',');
        }
      }
      
      c.address = address || 'Dirección no disponible';
    } catch (e) {
      console.error(e);
      c.address = 'Dirección no disponible';
    }
    
    // Respect Nominatim rate limit (1 req/sec)
    await new Promise(r => setTimeout(r, 1100));
  }
  
  fs.writeFileSync(path, JSON.stringify(centros, null, 2), 'utf8');
  console.log('Done geocoding.');
}

reverseGeocode();
