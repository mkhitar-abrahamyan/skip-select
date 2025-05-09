import axios from 'axios';

export const getSkipsByLocationApi = (postcode) =>
  axios
    .get(
      `${
        import.meta.env.VITE_API_BASE_URL
      }api/skips/by-location?postcode=${postcode}`,
      {
        params: {},
        headers: {},
      },
    )
    .then((response) => {
      if (response.data) {
        return response.data;
      } else {
        return 0;
      }
    });
