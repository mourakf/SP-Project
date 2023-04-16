import bookSchema from "../Models/Book.js"

class BookController {

    static async getAllBooks(req, res) {
        try {
            bookSchema.find()
                .exec((err, books) => {
                    if (err) {
                        res.status(400).send(err).end()
                    }
                    res.status(200).json(books).end()

                })

        } catch (err) {
            res.status(400).end()
        }
    }

    static async getBookByAuthor(req, res) {
        const author = req.query
        bookSchema.find(author).exec((err, result) => {
                if (err) {
                    res.status(400).send(err)
                }
                res.status(200).json(result)
            }

        )

    }

    static async getBookById(req, res, id) {

        try {
            const id = req.params.id
            bookSchema.findById(id)
                .exec((err, books) => {
                    if (err || !books) {
                        res.status(400).send({
                            message: `Id do livro não localizado.`
                        })
                    } else {
                        res.status(200).send(books);
                    }
                })

        } catch (err) {
            res.status(500).end()


        }
    }

    static async registerBook(req, res) {
        try {

            const book = new bookSchema(req.body)
            book.save((err, book) => {
                if (err) {
                    res.status(400).send({
                        message: `${err.message}`
                    }).end()
                }
                res.status(201).json(book).end()
            })

        } catch (error) {
            res.status(500).end()
        }

    }



    static async getBookByGenre(req, res) {
        const genre = req.query
        bookSchema.find(genre).exec((err, result) => {
                if (err) {
                    res.status(400).send(err)
                }
                res.status(200).json(result)
            }

        )

    }
}


export default BookController