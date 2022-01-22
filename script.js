var img1 = null
var imgcurr = null
var canvas = document.getElementById("canvas")

function showFile() {
  var file = document.getElementById("finput")
  img1 = new SimpleImage(file)
  imgcurr = new SimpleImage(file)
  img1.drawTo(canvas)
}

function showGray() {
  for (var pixel of imgcurr.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3
    pixel.setRed(avg)
    pixel.setGreen(avg)
    pixel.setBlue(avg)
  }  
  imgcurr.drawTo(canvas)
}

function showRainbow() {
  var width = imgcurr.getWidth()
  for (var pixel of imgcurr.values())
    if (pixel.getX() < width/3) {
      pixel.setRed(200)
    } else if (pixel.getX() < 2*(width/3)) {
      pixel.setGreen(200)
    } else {
      pixel.setBlue(200)
    }
  imgcurr.drawTo(canvas)
}

function showOld() {
  for (var pixel of imgcurr.values()) {
    var r1 = Math.floor(Math.random() * 80 - 40);
    var r2 = Math.floor(Math.random() * 80 - 40);
    var r3 = Math.floor(Math.random() * 80 - 40);
    pixel.setGreen(pixel.getGreen()  + r1)
    pixel.setRed(pixel.getRed()  + r2)
    pixel.setBlue(pixel.getGreen()  + r3)         
  }
  imgcurr.drawTo(canvas)
}

function showRedFilter() {
  for (var pixel of imgcurr.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3
    if (avg < 128) {
      pixel.setRed(2*avg)
      pixel.setGreen(0)
      pixel.setBlue(0)
    } else {
      pixel.setRed(255)
      pixel.setGreen(2*avg - 255)
      pixel.setBlue(2*avg - 255)
    }
  }
  imgcurr.drawTo(canvas)
}

function mathFilter() {
  var width = imgcurr.getWidth()
  var height = imgcurr.getHeight()
  for (var pixel of imgcurr.values()) {
    var x = pixel.getX()
    var y = pixel.getY()
    pixel.setRed(pixel.getRed() + 50*Math.sin((x + y)*10*2*Math.PI/(width + height)))
    pixel.setGreen(pixel.getGreen() + 50*Math.sin((x + y)*10*2*Math.PI/(width + height)))
    pixel.setBlue(pixel.getBlue() + 50*Math.sin((x + y)*10*2*Math.PI/(width + height)))
  }
  imgcurr.drawTo(canvas)
}