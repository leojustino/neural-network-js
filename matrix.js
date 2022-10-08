class Matrix {
    constructor(rows, cols) {
        this.cols = cols
        this.rows = rows

        this.matrix = new Array(rows)

        for (let row = 0; row < rows; row++) {
            this.matrix[row] = new Array(cols)

            for (let col = 0; col < cols; col++)
                this.matrix[row][col] = Math.floor(Math.random() * 10)
        }
    }

    rand() {
        for (let row = 0; row < this.rows; row++)
            for (let col = 0; col < this.cols; col++)
                this.matrix[row][col] = Math.random()

        return this
    }
    print() {
        console.table(this.matrix)

        return this
    }
    sum(matrix) {
        for (let row = 0; row < this.rows; row++)
            for (let col = 0; col < this.cols; col++)
                this.matrix[row][col] += matrix.matrix[row][col]

        return this
    }
    apply_function(func) {
        for (let row = 0; row < this.rows; row++)
            for (let col = 0; col < this.cols; col++)
                this.matrix[row][col] = func(this.matrix[row][col])

        return this

    }
    static fromArray(array) {
        const matrix = new Matrix(array.length, 1)

        for (let row = 0; row < matrix.rows; row++)
            matrix.matrix[row][0] = array[row]

        return matrix
    }
    static sum(a, b) {
        const sum_matrix = new Matrix(a.rows, a.cols)

        for (let row = 0; row < a.rows; row++)
            for (let col = 0; col < a.cols; col++)
                sum_matrix.matrix[row][col] = a.matrix[row][col] + b.matrix[row][col]

        return sum_matrix
    }

    static product(a, b) {
        const product_matrix = new Matrix(a.rows, b.cols)

        for (let row = 0; row < product_matrix.rows; row++)
            for (let col = 0; col < product_matrix.cols; col++) {
                product_matrix.matrix[row][col] = 0

                for (let i = 0; i < a.cols; i++)
                    product_matrix.matrix[row][col] += a.matrix[row][i] * b.matrix[i][col]
            }

        return product_matrix
    }

}