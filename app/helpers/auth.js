export default function auth() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "Ezra Raez",
        avatar: "https://avatars1.githubusercontent.com/u/12765592?v=3&s=300",
        uid: "ezraez"
      });
    }, 2000);
  });
}
