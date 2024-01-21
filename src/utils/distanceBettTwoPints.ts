const degreesToRadians = (degrees: number): number =>{
  return degrees * (Math.PI / 180);
}

export const distanceKm = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ): number =>{
  const R = 6371; 
  const dLat = degreesToRadians(lat2 - lat1);
  const dLon = degreesToRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(degreesToRadians(lat1)) * Math.cos(degreesToRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // kilmetres

  return distance;
}