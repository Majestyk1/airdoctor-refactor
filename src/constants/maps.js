export const mapLocations = {
  sanAntonio: { lat: 29.4241, lng: -98.4936 },
  austin: { lat: 30.2672, lng: -97.7431 },
  center: { lat: 29.845, lng: -98.118 } // Center between the two cities
}

export const mapConfig = {
  zoom: 8,
  mapTypeId: 'roadmap',
  streetViewControl: false,
  fullscreenControl: false,
  mapTypeControl: false,
  styles: [
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{ color: '#3b82f6' }]
    },
    {
      featureType: 'landscape',
      elementType: 'geometry',
      stylers: [{ color: '#f3f4f6' }]
    }
  ]
} 