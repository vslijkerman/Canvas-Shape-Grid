$(document).ready(function() {
  var canvas = document.getElementById('myCanvas');
  var ctx = canvas.getContext('2d');

  // Construct a default dot.
  var Dot = function(x, y, color, radius) {
    if(color == null) {
      this.color = 'rgba(255,255,255,0.2)';
    } else {
      this.color = color;
    }
    if(radius == null) {
      this.radius = 24;
    } else {
      this.radius = radius;
    }
    this.x = (x + this.radius); // The dot's center is by default at the given x coord. This way the top left side is at the given coords instead of the arc-center.
    this.y = (y + this.radius); // The dot's center is by default at the given y coord. This way the top left side is at the given coords instead of the arc-center.
    this.draw = function() {
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.restore();
    }
  };

  // Construct a default rectangle.
  var Rect = function(x, y, width, height, color, stroke) {
    this.x = x;
    this.y = y;
    if(width == null) {
      this.width = 48;
    } else {
      this.width = width;
    }
    if(height == null) {
      this.height = 48;
    } else {
      this.height = height;
    }
    if(color == null) {
      this.color = 'rgba(255,255,255,0.2)';
    } else {
      this.color = color;
    }
    this.draw = function() {
      ctx.save();
      ctx.beginPath();
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.strokeStyle = 'white';
      if(stroke == null) {
        return;
      } else {
        ctx.lineWidth = stroke;
        ctx.stroke();
      }
      ctx.restore();
    }
  };

  // An array to keep all the dot objects in one place.
  var shapes = [];
  // Variable used to temporarily store dot object.
  var shape;

  // Place your objects below. Example:
  //
  // shape = new Dot(0, 0);
  // shapes.push(shape);
  //
  // or...
  //
  // shape = new Rect(0, 0);
  // shapes.push(shape);

  // Loop through the shapes array and draw all the shapes.
  for(i = 0; i < shapes.length; i++) {
    shapes[i].draw();
  }
});
