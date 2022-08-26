import React from 'react'
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api'

import { MapSkeleton } from './styles'

const GMap: React.FC = () => {
  const googleMapsApiKey
    : string = process.env.REACT_APP_GOOGLE_MAPS_API_KEY!
  const center = { lat: 45.523064, lng: -122.676483 }
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey
  })

  if (!isLoaded) return <MapSkeleton variant="rounded" />

  return (
    <GoogleMap
      center={center}
      zoom={10}
      mapContainerStyle={{
        width: '552px',
        height: '200px',
        borderRadius: '6px',
      }}
    >
      <Marker position={center} />
    </GoogleMap>
  )
}

export default React.memo(GMap)
