window.onload = function () {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  const cw = (canvas.width = window.innerWidth)
  const ch = (canvas.height = window.innerHeight)
  let dots_arr = []
  let n = 100

  class Dots {
    constructor(x, y, vx, vy) {
      // 接受粒子点的坐标与方向速度量
      this.x = x
      this.y = y
      this.vx = vx
      this.vy = vy
      // 随机粒子大小
      this.size = Math.ceil(Math.random() * 3 + 2)
      this.ctx = {}
    }

    draw() {
      ctx.save()
      ctx.beginPath()
      ctx.fillStyle = '#fa6f5b'
      ctx.arc(this.x - this.size / 2, this.y - this.size / 2, this.size, 0, Math.PI * 2, false)
      ctx.closePath()
      ctx.fill()
      ctx.restore()
    }

    update() {
      this.vx = (this.x < canvas.width && this.x > 0) ? this.vx : (-this.vx)
      this.vy = (this.y < canvas.height && this.y > 0) ? this.vy : (-this.vy)

      this.x += this.vx * 1
      this.y += this.vy * 1
      this.draw()
    }

    run() {
      this.draw()
    }
  }

  for (let i = 0; i < n; i++) {
    const x = Math.ceil(Math.random() * canvas.width)
    const y = Math.ceil(Math.random() * canvas.height)
    const vx = Math.ceil((Math.random() - 0.5) * 3)
    const vy = Math.ceil((Math.random() - 0.5) * 3)
    const a = new Dots(x, y, vx, vy)
    // a.run()
    dots_arr.push(a)
  }

  function run() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = '#000000'
    ctx.fillRect(0, 0, cw, ch)
    for (let i = 0; i < dots_arr.length; i++) {
      dots_arr[i].update()
    }
    window.requestAnimFrame(run)
  }

  run()
}
