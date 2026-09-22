const fs = require('fs');

async function parse() {
  const res = await fetch('https://www.google.com/maps/d/kml?mid=1tFDDOe8sAZwnwMJhdnLG7XO1zH_xO_8&forcekml=1');
  const data = await res.text();

  const placemarkRegex = /<Placemark>([\s\S]*?)<\/Placemark>/g;
  let match;
  const results = [];

  while ((match = placemarkRegex.exec(data)) !== null) {
    const content = match[1];
    
    const nameMatch = content.match(/<name>(?:<!\[CDATA\[)?(.*?)(?:\]\]>)?<\/name>/);
    const name = nameMatch ? nameMatch[1].trim() : '';

    if (content.includes('<LineString>')) continue;

    const coordMatch = content.match(/<coordinates>\s*(.*?)\s*<\/coordinates>/s);
    if (!coordMatch) continue;
    
    const coords = coordMatch[1].trim().split(',');
    const lng = parseFloat(coords[0]);
    const lat = parseFloat(coords[1]);

    const descMatch = content.match(/<description>(?:<!\[CDATA\[)?(.*?)(?:\]\]>)?<\/description>/);
    const description = descMatch ? descMatch[1].trim() : '';

    let type = 'Centro de Salud';
    if (name.toLowerCase().includes('posta') || description.toLowerCase().includes('posta')) {
      type = 'Posta Sanitaria';
    } else if (name.toLowerCase().includes('hospital')) {
      type = 'Hospital';
    }

    results.push({
      name,
      type,
      description,
      lat,
      lng
    });
  }

  fs.writeFileSync('public/centros.json', JSON.stringify(results, null, 2), 'utf8');
  console.log(`Parsed ${results.length} locations`);
}

parse();
