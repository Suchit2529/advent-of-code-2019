const input = [106001, 131342, 51187, 87791, 68636, 109091, 111888, 98012, 90713, 54284, 143884, 121856, 117199, 77883, 132628, 123828, 56939, 50447, 77110, 103272, 148181, 59323, 98249, 110065, 144277, 108204, 92138, 54449, 108098, 119292, 65720, 136053, 116987, 78305, 143302, 145067, 106633, 90519, 58970, 57090, 77334, 55929, 95983, 139236, 62634, 89275, 113296, 59530, 114159, 98407, 120607, 84394, 91151, 135965, 56157, 114073, 95274, 75259, 60582, 136361, 54771, 53286, 70491, 131915, 114306, 120749, 117462, 86194, 112412, 140705, 72377, 113646, 145304, 60811, 127560, 78769, 99205, 127236, 136099, 69166, 141727, 115973, 100845, 90494, 62209, 85841, 116591, 78406, 140341, 139849, 55119, 64092, 58439, 52273, 51742, 57258, 95120, 138764, 106361, 82104]

const getFuelReq = mass => Math.floor(mass / 3) - 2

const q1 = input.reduce((acc, curr) => acc + getFuelReq(curr), 0)
console.log(q1)

const getTotalFuelReq = (acc, fuel) => {
  const metaFuel = getFuelReq(fuel)
  return metaFuel <= 0 ? acc : getTotalFuelReq(acc + metaFuel, metaFuel)
}

const q2 = input.reduce((acc, curr) => acc + getTotalFuelReq(0, curr), 0)
console.log(q2)