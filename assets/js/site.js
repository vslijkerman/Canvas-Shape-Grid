$(document).ready(function() {
  var canvas = document.getElementById('myCanvas');
  var ctx = canvas.getContext('2d');

  // Construct a default dot.
  var Dot = function(x, y, color, radius) {
    if(color == null) {
      this.color = 'rgba(255,255,255,0.4)';
    } else {
      this.color = color;
    }
    if(radius == null) {
      this.radius = 4;
    } else {
      this.radius = radius;
    }
    this.x = (x + this.radius); // The arc's center is at the given x coord. This way the top left side is at the given coords instead of the arc-center.
    this.y = (y + this.radius); // The arc's center is at the given y coord. This way the top left side is at the given coords instead of the arc-center.
    this.draw = function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  };

  // Construct a default rectangle.
  var Rect = function(x, y, width, height, color, stroke) {
    this.x = x;
    this.y = y;
    if(width == null) {
      this.width = 8;
    } else {
      this.width = width;
    }
    if(height == null) {
      this.height = 8;
    } else {
      this.height = height;
    }
    if(color == null) {
      this.color = 'rgba(255,255,255,0.4)';
    } else {
      this.color = color;
    }
    this.draw = function() {
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
    }
  };

  // An array to keep all the dot objects in one place.
  var dots = [];
  // Variable used to temporarily store dot object.
  var dot;

  // An array to keep all the rectangle objects in one place.
  var rectangles = [];
  // Variable used to temporarily store rectangle object.
  var rectangle;

  // Place your objects below. Example:
  //
  // dot = new Dot(0, 0);
  // dots.push(dot);
  //
  // rectangle = new Rect(0, 0);
  // rectangles.push(rectangle);

  // Loop through the dots array and draw all the dots.
  for(i = 0; i < dots.length; i++) {
    dots[i].draw();
  }

  // Loop through the rectangles array and draw all the rectangles.
  for(i = 0; i < rectangles.length; i++) {
    rectangles[i].draw();
  }
});
