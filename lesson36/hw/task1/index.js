const func = userId => {
  try {
    return fetch(`https://api.github.com/users/${userId}`).then(res => res.json());
  } catch (e) {
    console.log(e);
  }
};

// const res = func('facebook');
// console.log(res);
export const getUsersBlogs = async (...users) => {
  const arrOfPromise = users.map(user => func(user));
  const res = await Promise.all(arrOfPromise);
  const blogList = res.map(el => el.blog);
  return blogList;
};

// getUsersBlogs('facebook', 'github', 'google').then(linkList => console.log(linkList));
