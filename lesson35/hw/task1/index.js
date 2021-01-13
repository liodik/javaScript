const user = '{"name":"John"}';

export const parseUser = stringJson => {
  try {
    return JSON.parse(stringJson);
  } catch (err) {
    return null;
  }
};

// console.log(parserUser(user));
