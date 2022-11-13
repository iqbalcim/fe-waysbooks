import * as React from "react";
import { GlobalButton, GlobalInput } from "../../components";
import { styles } from "../../style";
import { Bookicon } from "../../assets";
import { BsPaperclip } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../../config/api";
import { useMutation, useQuery } from "react-query";

const UpdateBook = () => {
  const params = useParams();

  const navigate = useNavigate();

  const [form, setForm] = React.useState({
    title: "",
    publication_date: "",
    pages: "",
    ISBN: 0,
    price: 0,
    author: "",
    description: "",
    attachment: "",
    image: "",
  });

  const { data: book, refetch } = useQuery("bookUpdateCache", async () => {
    const response = await API.get(`/book/${params.id}`);
    return response.data.data;
  });

  React.useEffect(() => {
    if (book) {
      setForm({
        ...form,
        title: book.title,
        publication_date: book.publication_date,
        pages: book.pages,
        ISBN: book.ISBN,
        price: book.price,
        author: book.author,
        description: book.description,
        attachment: book.attachment,
        image: book.image,
      });
    }
  }, [book]);

  console.log(book);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.set("title", form.title);
      formData.set("publication_date", form.publication_date);
      formData.set("pages", form.pages);
      formData.set("ISBN", form.ISBN);
      formData.set("price", form.price);
      formData.set("author", form.author);
      formData.set("description", form.description);

      formData.set("attachment", form.attachment[0], form.attachment[0].name);

      formData.set("image", form.image[0], form.image[0].name);

      const response = await API.patch(`/book/${params.id}`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });

      console.log(response);
      navigate("/list-book");
      refetch();
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div className="px-[223px]">
      <h1 className={`${styles.heading3} mt-24 mb-[40px]`}>Update Book</h1>
      <form onSubmit={(e) => handleSubmit.mutate(e)}>
        <GlobalInput
          placeholder="Title"
          id="title"
          name="title"
          onChange={handleChange}
        />
        <div>
          <label htmlFor="date" className="font-avanir italic ">
            Publication Date
          </label>
          <GlobalInput
            type="string"
            id="date"
            name="publication_date"
            placeholder="Publication Date"
            onChange={handleChange}
          />
        </div>

        <GlobalInput placeholder="Pages" name="pages" onChange={handleChange} />

        <label htmlFor="isbn" className="font-avanir italic ">
          ISBN
        </label>
        <GlobalInput placeholder="ISBN" name="ISBN" onChange={handleChange} />

        <label htmlFor="date" className="font-avanir italic ">
          Price
        </label>
        <GlobalInput placeholder="Price" name="price" onChange={handleChange} />

        <label htmlFor="date" className="font-avanir italic ">
          Author
        </label>
        <GlobalInput
          placeholder="Author"
          name="author"
          onChange={handleChange}
        />

        <label htmlFor="date" className="font-avanir italic ">
          Description
        </label>
        <GlobalInput
          placeholder="About This Book"
          custom="h-[202px] pb-[150px]"
          name="description"
          onChange={handleChange}
        />
        <label
          htmlFor="thumbnail"
          className="border-2 w-[218px] h-[50px] flex items-center justify-center rounded mb-5"
        >
          Thumbnail Book
          <BsPaperclip className="text-xl" />
        </label>
        <GlobalInput
          type="file"
          id="thumbnail"
          name="image"
          onChange={handleChange}
          hidden
        />
        <label
          htmlFor="attachment"
          className="border-2 w-[218px] h-[50px] flex items-center justify-center rounded"
        >
          Attach Book File
          <BsPaperclip className="text-xl" />
        </label>
        <GlobalInput
          type="file"
          id="attachment"
          name="attachment"
          onChange={handleChange}
          hidden
        />
        <button className="bg-primary float-right flex items-center rounded justify-center w-[150px] h-[50px]">
          <span className="text-white pr-2">Update Book</span>
          <img src={Bookicon} alt="" />
        </button>
      </form>
    </div>
  );
};

export default UpdateBook;
