class Component {
  constructor(selector, options = {}) {
    this.selector = selector;
    this.options = options;
  }
  
  get $origin() { return typeof this.selector === 'string' ? $(this.selector) : this.selector; }
}
module.exports = Component;