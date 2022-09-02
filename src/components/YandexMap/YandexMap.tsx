import React, { useEffect, useMemo } from 'react'
import ymaps from 'ymaps'

import { useGetLocationQuery } from 'services'
import { useAppSelector } from 'hooks'
import { MapContainer } from './YandexMap.styles'


export const YandexMap: React.FC = () => {
  const { location } = useAppSelector(state => state.main)
  const { data, error, isLoading } = useGetLocationQuery(location)

  const center = [48.8866527839977, 2.34310679732974]

  const script = useMemo(() => document.createElement('script'), [])
  script.src = `https://api-maps.yandex.ru/2.1/?apikey=${process.env.REACT_APP_YANDEX_API_KEY}&lang=en_US`
  script.type = 'text/javascript'
  script.async = true

  useEffect(() => {
    script.onload = () => {
      ymaps
        .load()
        .then((maps: any) => {
          const map = new maps.Map('yandexmap', {
            center,
            zoom: 10,
          })
          map.controls.remove('geolocationControl') // удаляем геолокацию
          map.controls.remove('searchControl') // удаляем поиск
          map.controls.remove('trafficControl') // удаляем контроль трафика
          map.controls.remove('typeSelector') // удаляем тип
          map.controls.remove('fullscreenControl') // удаляем кнопку перехода в полноэкранный режим
          map.controls.remove('zoomControl') // удаляем контрол зуммирования
          map.controls.remove('rulerControl') // удаляем контрол правил
          map.behaviors.disable(['scrollZoom']) // отключаем скролл карты (опционально)
        })
        .catch((err: any) => console.log('Failed to load Yandex Maps', err))
    }
    const root = document.getElementById('map')
    root!.appendChild(script)
    return () => { root!.removeChild(script) }
  }, [])

  return <MapContainer id="yandexmap" />
}
