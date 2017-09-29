// @flow

export const login = (username: string, password: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Resolve a mock user object
      resolve({
        id: 1,
        username: username,
        email: 'test@example.com'
      });
    }, 100 );
  });
}
