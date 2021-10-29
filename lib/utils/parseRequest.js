module.exports = rawRequest => {
  //   split rawRequest into an array, divided by \r and a new line(\n), deconstruct the firstitem
  const newArr = rawRequest.split('\r\n');
  //   split first item from newArr into an array, divided by space, deconstruct the method and path.
  const [method, path] = newArr[0].split(' ');

  return method === 'POST'
    ? {
      method,
      path,
      body: newArr[newArr.length - 1]
    } 
    : {
      method,
      path,
    };
};
