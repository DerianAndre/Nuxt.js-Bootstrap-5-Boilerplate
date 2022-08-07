import * as bootsrtap from "bootstrap";

export default ({ app }, inject) => {
  inject('bootstrap', bootsrtap);
  //  This will allow us to use the bootstrap object
  //
  //  Example:
  //  const scrollSpy = new this.$bootstrap.ScrollSpy(document.body, {
  //    target: '#scrollspy'
  //  });
}