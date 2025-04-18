// =============================================
// Preset Patterns
// =============================================
const patterns = {
  glider: { 
    name: "Glider", 
    description: "Travels diagonally", 
    cells: [[0, 1], [1, 2], [2, 0], [2, 1], [2, 2]] 
  },
  blinker: { 
    name: "Blinker", 
    description: "Oscillates period 2", 
    cells: [[0, 1], [1, 1], [2, 1]] 
  },
  toad: { 
    name: "Toad", 
    description: "Oscillates period 2", 
    cells: [[1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1]] 
  },
  beacon: { 
    name: "Beacon", 
    description: "Oscillates period 2", 
    cells: [[0, 0], [1, 0], [0, 1], [3, 2], [2, 3], [3, 3]] 
  },
  pulsar: { 
    name: "Pulsar", 
    description: "Oscillates period 3", 
    cells: [
      [2, 0], [3, 0], [4, 0], [8, 0], [9, 0], [10, 0],
      [0, 2], [5, 2], [7, 2], [12, 2],
      [0, 3], [5, 3], [7, 3], [12, 3],
      [0, 4], [5, 4], [7, 4], [12, 4],
      [2, 5], [3, 5], [4, 5], [8, 5], [9, 5], [10, 5],
      [2, 7], [3, 7], [4, 7], [8, 7], [9, 7], [10, 7],
      [0, 8], [5, 8], [7, 8], [12, 8],
      [0, 9], [5, 9], [7, 9], [12, 9],
      [0, 10], [5, 10], [7, 10], [12, 10],
      [2, 12], [3, 12], [4, 12], [8, 12], [9, 12], [10, 12]
    ] 
  },
  lwss: { 
    name: "LWSS", 
    description: "Light Weight Space Ship", 
    cells: [[0, 0], [3, 0], [4, 1], [0, 2], [4, 2], [1, 3], [2, 3], [3, 3], [4, 3]] 
  },
  mwss: { 
    name: "MWSS", 
    description: "Medium Weight Space Ship", 
    cells: [[0,0],[4,0],[5,1],[0,2],[5,2],[1,3],[2,3],[3,3],[4,3],[5,3]]
  },
  hwss: { 
    name: "HWSS", 
    description: "Heavy Weight Space Ship", 
    cells: [[0,0],[5,0],[6,1],[0,2],[6,2],[1,3],[2,3],[3,3],[4,3],[5,3],[6,3]]
  },
  gosperGliderGun: { 
    name: "Glider Gun", 
    description: "Generates Gliders", 
    cells: [
      [24, 0], [22, 1], [24, 1], [12, 2], [13, 2], [20, 2], [21, 2], [34, 2], [35, 2], 
      [11, 3], [15, 3], [20, 3], [21, 3], [34, 3], [35, 3], [0, 4], [1, 4], [10, 4], 
      [16, 4], [20, 4], [21, 4], [0, 5], [1, 5], [10, 5], [14, 5], [16, 5], [17, 5], 
      [22, 5], [24, 5], [10, 6], [16, 6], [24, 6], [11, 7], [15, 7], [12, 8], [13, 8]
    ] 
  },
  rpentomino: { 
    name: "R-Pentomino", 
    description: "Methuselah (lasts long)", 
    cells: [[1, 0], [2, 0], [0, 1], [1, 1], [1, 2]] 
  },
  diehard: { 
    name: "Diehard", 
    description: "Vanishes after 130 gens", 
    cells: [[6, 0], [0, 1], [1, 1], [1, 2], [5, 2], [6, 2], [7, 2]] 
  },
  acorn: { 
    name: "Acorn", 
    description: "Methuselah (lasts long)", 
    cells: [[1, 0], [3, 1], [0, 2], [1, 2], [4, 2], [5, 2], [6, 2]] 
  }
};
