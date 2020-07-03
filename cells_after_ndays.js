var prisonAfterNDays = function(cells, N) {
    let cellsCopy = cells.slice()
    let iter = 2 * cells.length - 2
    N = N % iter === 0 ? iter : N % iter
    while (N-- > 0) {
        for (let i = 0; i < cells.length; i++) {
            cellsCopy[i] = (cells[i-1] === cells[i+1]) ? 1 : 0
        }
        cells = cellsopy.slice()
    }
    return cells;
};