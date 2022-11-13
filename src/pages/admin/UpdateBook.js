import React from 'react'

const UpdateBook = () => {

    
  return (
    <div className="px-[223px]">
    <h1 className={`${styles.heading3} mt-24 mb-[40px]`}>Add Book</h1>
    <form onSubmit={(e) => handleSubmit.mutate(e)}>
      <GlobalInput placeholder="Title" name="title" onChange={handleChange} />
      <div>
        <label htmlFor="date" className="font-avanir italic">
          Publication Date
        </label>
        <GlobalInput
          type="string"
          id="date"
          name="publication_date"
          onChange={handleChange}
          placeholder="Publication Date"
          custom="mt-2"
        />
      </div>
      <GlobalInput placeholder="Pages" name="pages" onChange={handleChange} />
      <GlobalInput placeholder="ISBN" name="ISBN" onChange={handleChange} />
      <GlobalInput placeholder="Price" name="price" onChange={handleChange} />
      <GlobalInput
        placeholder="Author"
        name="author"
        onChange={handleChange}
      />
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
        <span className="text-white pr-2">Add Book</span>
        <img src={Bookicon} alt="" />
      </button>
    </form>
  </div>
  )
}

export default UpdateBook