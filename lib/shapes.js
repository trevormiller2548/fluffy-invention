// The constructor is utilized in the shape class to define shape
class Shape {
    constructor() {
      this.color = "";
    }
    // The shape's class then takes in the setColor function
    setColor(colorVar) {
      this.color = colorVar;
    }
  }
  
  // the properties in shape class will be inherted in the triangle class
  class Triangle extends Shape {
    render() {
      // Color input is returned in polygon 
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  // same properties inherited in square class
  class Square extends Shape {
    render() {
      // polygon has color input retured
      return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
  }
  
  // Same properties inherited in circle class
  class Circle extends Shape {
    render() {
      // Returns polygon with color input
      return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
  }
  
  // exports the classes to be used in index.js
  module.exports = { Triangle, Square, Circle };