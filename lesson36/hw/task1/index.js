const func = userId => {
  return fetch(`https://api.github.com/users/${userId}`).then(res => res.json());
};

// const res = func('facebook');
// console.log(res);
export const getUsersBlogs = async (...users) => {
  try {
    const arrOfPromise = users.map(user => func(user));
    const res = await Promise.all(arrOfPromise);
    const blogList = res.map(el => el.blog);
    return blogList;
  } catch (err) {
    return err;
  }
};

getUsersBlogs('facebook', 'github', 'google').then(linkList => console.log(linkList));
