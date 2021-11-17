import { Request, Response, NextFunction } from "express"

const books: any[] = [
  {
    id: 1,
    title: "the art of war",
    author: "sun tzu",
  },
  {
    id: 2,
    title: "48 laws",
    author: "robert green",
  },
  {
    id: 3,
    title: "the black swan",
    author: "nassim nicholas taleb",
  },
]

interface Book {
  userId: Number
  id: Number
  title: String
  author: String
}

// get all posts
const getBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).send(books)
  } catch (error:any) {
    res.status(500).send({ error: error.message })
  }
}

// get single post by id
const getBook = async (req: Request, res: Response, next: NextFunction) => {
  // get the post id from the req
  let id: Number = Number(req.params.id)
  try {
    const book = books.find((book) => book.id === id)
    if (!book) {
      return res.status(404).send({})
    }
    res.status(200).send(book)
  } catch (error:any) {
    res.status(500).send({ error: error.message })
  }
}

// add a book
const addBook = async (req: Request, res: Response, next: NextFunction) => {
  // get the data from req.body
  const book: [Book] = {...req.body}
  
  try {
    books.push(book)
    res.status(200).send(book)
  } catch (error:any) {
    res.status(400).send({ error: error.message })
  }
}

// update a post
// const updateBook = async (req: Request, res: Response, next: NextFunction) => {
//   // get the post id from the req.params
//   let id: string = req.params.id;
//   // get the data from req.body
//   let title: string = req.body.title ?? null;
//   let body: string = req.body.body ?? null;
//   // update the post
//   let response: AxiosResponse = await axios.put(
//     `https://jsonplaceholder.typicode.com/posts/${id}`,
//     {
//       ...(title && { title }),
//       ...(body && { body }),
//     }
//   );
//   // return response
//   return res.status(200).json({
//     message: response.data,
//   });
// };

// delete a post
// const deleteBook = async (req: Request, res: Response, next: NextFunction) => {
//   // get the post id from req.params
//   let id: string = req.params.id;
//   // delete the post
//   let response: AxiosResponse = await axios.delete(
//     `https://jsonplaceholder.typicode.com/posts/${id}`
//   );
//   // return response
//   return res.status(200).json({
//     message: "post deleted successfully",
//   });
// };

export default {
  getBooks,
  getBook,
  addBook,
  // updateBook,
  // deleteBook,
}
