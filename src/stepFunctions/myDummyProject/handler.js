module.exports.run = async (event) => {
  console.log("Dummy function invoked !!", event);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from the dummy Step Function task" }),
  };
};
