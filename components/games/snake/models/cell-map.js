import Cell from './cell'

function createCells(nRows, nCols, width, height) {
  const accum = [];
  const cellWidth = Math.floor(width / nCols)
  const cellHeigt = Math.floor(height / nRows)
  for (let row = 0; row < nRows; row++) {
    const cellY = cellHeigt * row;
    const rowAccum = []
    for (let col = 0; col < nCols; col++) {
      rowAccum.push(new Cell({
        x: cellWidth * col,
        y: cellY,
        width: cellWidth,
        height: cellHeigt
      }))
    }
    accum.push(rowAccum)
  }
  return accum;
}


export default class CellMap {
  constructor({ nRows, nCols, width, height }) {
    this.cells = createCells(nRows, nCols, width, height)
  }
}