export default async function (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition;
  }

  const findEl = async (hash, x = 0) => {
    return (
      document.querySelector(hash) ||
      new Promise((resolve) => {
        if (x > 50) {
          return resolve(document.querySelector("#app"));
        }
        setTimeout(() => {
          resolve(findEl(hash, ++x || 1));
        }, 100);
      })
    );
  };

  if (to.hash) {
    let element = await findEl(to.hash);
    if ("scrollBehavior" in document.documentElement.style) {
      return window.scrollTo({
        top: element.offsetTop - 65,
        behavior: "smooth",
      });
    } else {
      return window.scrollTo(0, element.offsetTop);
    }
  }

  return { x: 0, y: 0 };
}
