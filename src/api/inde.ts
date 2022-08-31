import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const yandexMapApi = createApi({
  reducerPath: 'yandexQuerry',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://search-maps.yandex.ru/v1/' }),
  endpoints: (builder) => ({
    getLocation: builder.query<any, string>({
      query: (location) => `?apikey=79a71370-eb19-42ba-8cec-768858a479d8&text=${location}&lang=en_US`,
    }),
  }),
})

export const { useGetLocationQuery } = yandexMapApi
