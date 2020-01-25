import Cell from './cell'

function createCells(nRows, nCols, width, height) {
  const accum = []
  const cellWidth = Math.floor(width / nCols)
  const cellHeight = Math.floor(height / nRows)
  for (let row = 0; row < nRows; row++) {
    const cellY = cellHeight * row
    for (let col = 0; col < nCols; col++) {
      accum.push(new Cell({
        x: cellWidth * col,
        y: cellY,
        width: cellWidth,
        height: cellHeight
      }))
    }
  }
  return accum
}


export default class CellMap {
  constructor({ nRows, nCols, width, height }) {
    this.cells = createCells(nRows, nCols, width, height)
  }

  getCell(index) {
    return this.cells[index]
  }
}