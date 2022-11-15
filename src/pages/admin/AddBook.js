import React from "react";
import { BsPaperclip } from "react-icons/bs";
import { styles } from "../../style";
import { GlobalInput, GlobalButton } from "../../components";
import { Bookicon } from "../../assets";
import { API } from "../../config/api";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const navigate = useNavigate();

  const [preview, setPreview] = React.useState(null);

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

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    if (e.target.type === "file") {
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
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

      const response = await API.post(`/book`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      navigate("/list-book");
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div className="px-[223px]">
      <h1 className={`${styles.heading3} mt-24 mb-[40px]`}>Add Book</h1>
      <form onSubmit={(e) => handleSubmit.mutate(e)}>
        <div>
          <label htmlFor="title" font-avanir italic>
            Tilte
          </label>
          <GlobalInput
            id="title"
            name="title"
            onChange={handleChange}
            custom="mt-2"
          />
        </div>
        <div>
          <label htmlFor="date" className="font-avanir italic">
            Publication Date
          </label>
          <GlobalInput
            type="date"
            id="date"
            name="publication_date"
            onChange={handleChange}
            custom="mt-2"
          />
        </div>
        <div>
          <label htmlFor="pages" className="font-avanir italic">
            Pages
          </label>
          <GlobalInput
            id="pages"
            name="pages"
            onChange={handleChange}
            custom="mt-2"
          />
        </div>
        <div>
          <label htmlFor="isbn" className="font-avanir italic">
            ISBN
          </label>
          <GlobalInput
            id="isbn"
            name="ISBN"
            onChange={handleChange}
            custom="mt-2"
          />
        </div>
        <div>
          <label htmlFor="price" className="font-avanir italic">
            Price
          </label>
          <GlobalInput name="price" onChange={handleChange} custom="mt-2" />
        </div>
        <div>
          <label htmlFor="author" className="font-avanir italic">
            Author
          </label>
          <GlobalInput name="author" onChange={handleChange} custom="mt-2" />
        </div>
        <div>
          <label htmlFor="description" className="font-avanir italic">
            About This Book
          </label>
          <textarea
            name=""
            id=""
            rows="10"
            className="w-full h-[200px] border border-[#E5E5E5] rounded-lg p-4 shadow mt-2"
          ></textarea>
        </div>
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
          <span className="text-white pr-2">Add Book</span>
          <img src={Bookicon} alt="" />
        </button>
      </form>
    </div>
  );
};

export default AddBook;
