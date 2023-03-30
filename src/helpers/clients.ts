import { createApi } from 'unsplash-js';

export const getListOfPhotos= async() => {
  const unsplashApi = createApi({
    accessKey: import.meta.env.VITE_UNSPLASH_ACCESS_KEY,
    // fetch: nodeFetch.default as unknown as typeof fetch,
  });

  const photos = await unsplashApi.search.getPhotos({
    query: "coffee shop",
    page: 1,
    perPage: 40,
    // color: "green",
    // orientation: "portrait",
  });
  const unsplashPhotos=  photos.response?.results || [];
    return unsplashPhotos.map(({urls})=> urls["small"]);
}