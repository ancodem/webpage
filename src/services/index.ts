import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const yandexMapApi = createApi({
  reducerPath: 'yandexQuerry',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://search-maps.yandex.ru/v1/' }),
  endpoints: (builder) => ({
    getLocation: builder.query<any, string>({
      query: (location) =>
        `?text=${location}
          &lang=en_US
          &apikey=${process.env.REACT_APP_YANDEX_API_KEY}`,
    }),
  }),
})

export const { useGetLocationQuery } = yandexMapApi
