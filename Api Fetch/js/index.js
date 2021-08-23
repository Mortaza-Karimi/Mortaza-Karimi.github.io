const getData = () => {
  const res = fetch(
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    {
      method: "GET",
      headers: {
        Accept: "application/json; charset=utf-8",
        // "Content-Type": "application/json",
        "X-CMC_PRO_API_KEY": "fd2586d2-8594-4045-89c8-1bd4556c30d1",
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        // "Access-Control-Allow-Headers": "Content-Type",
        // "Access-Control-Allow-Credentials": "true",
      },
    }
  )
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
    })
    .catch((e) => console.log(e));
};
getData();
