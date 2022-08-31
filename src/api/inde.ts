import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const yandexMapApi = createApi({
  reducerPath: 'yandexQuerry',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://search-maps.yandex.ru/v1/' }),
  endpoints: (builder) => ({
    getLocation: builder.query<any, string>({
      query: (location) => `?apikey=ваш API-ключ&text=${location}&lang=en_US`,
    }),
  }),
})

export const { useGetLocationQuery } = yandexMapApi
