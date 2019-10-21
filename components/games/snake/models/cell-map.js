import Cell from './cell'

function createCells(nRows, nCols, width, height) {
  const accum = [];
  const cellWidth = Math.floor(width / nCols)
  const cellHeigt = Math.floor(height / nRows)
  for (let row = 0; row < nRows; row++) {
    const cellY = cellHeigt * row;
    for (let col = 0; col < nCols; col++) {
      accum.push(new Cell({
        x: cellWidth * col,
        y: cellY,
        width: cellWidth,
        height: cellHeigt
      }))
    }
  }
  return accum;
}


export default class CellMap {
  constructor({ nRows, nCols, width, height }) {
    this.cells = createCells(nRows, nCols, width, height)
  }
  _setCellKind(idx, kind) {
    this.cells[idx].kind = kind;
  }
  snakeify(idx) {
    this._setCellKind(idx, 2)
  }
  normalify(idx) {
    this._setCellKind(idx, 1)
  }
  foodify(idx) {
    this._setCellKind(idx, 3)
  }
}