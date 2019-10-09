exports.handler = async (event, context) => {
  const mockCased = event.queryStringParameters.string
    .split("")
    .map((c, i) => {
      return i % 2 === 0 ? c.toLowerCase() : c.toUpperCase();
    })
    .join("");

  return {
    statusCode: 200,
    body: `${mockCased}`
  };
};
