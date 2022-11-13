import React, { useEffect } from "react";
import { BsPaperclip } from "react-icons/bs";
import { styles } from "../../style";
import { GlobalButton, GlobalInput } from "../../components";
import { API } from "../../config/api";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { UserContext } from "../../components/context/UserContext";

const EditProfile = () => {
  const [isloading, setIsloading] = React.useState(false);

  const navigate = useNavigate();

  const [preview, setPreview] = React.useState(null);

  const [state] = React.useContext(UserContext);
  const [form, setForm] = React.useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    address: "",
    image: "",
  });

  let { data: user, refetch } = useQuery("editProfCache", async () => {
    const response = await API.get(`/user/${state.user.id}`);
    return response.data.data;
  });

  React.useEffect(() => {
    if (user) {
      setPreview(user.image);
      setForm({
        ...form,
        fullName: user.fullName,
        email: user.email,
        password: user.password,
        gender: user.gender,
        phone: user.phone,
        address: user.address,
      });
    }
  }, [user]);

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
      formData.set("fullName", form.fullName);
      formData.set("email", form.email);
      formData.set("password", form.password);
      formData.set("phone", form.phone);
      formData.set("gender", form.gender);
      formData.set("address", form.address);

      formData.set("image", form.image[0], form.image[0].name);

      const response = await API.patch(`/user/${user.id}`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      refetch();
      setIsloading(false);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div className="px-[223px]">
      <h1 className={`${styles.heading3} mt-24 mb-[40px]`}>Edit Profile</h1>
      <form onSubmit={(e) => handleSubmit.mutate(e)}>
        <GlobalInput
          placeholder="Full Name"
          name="fullName"
          onChange={handleChange}
          value={form?.fullName}
        />
        <GlobalInput
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={form?.email}
        />
        <GlobalInput
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={form?.password}
        />
        <GlobalInput
          placeholder="Phone"
          name="phone"
          onChange={handleChange}
          value={form?.phone}
        />
        <select
          className="w-full border h-[50px] p-3 mb-[31px] rounded shadow"
          name="gender"
          onChange={handleChange}
        >
          <option>Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <GlobalInput
          placeholder="Address"
          onChange={handleChange}
          name="address"
          value={form?.address}
        />
        <label
          htmlFor="uploadimage"
          className="border w-[218px] h-[50px] flex items-center justify-center rounded"
        >
          Upload Image
          <BsPaperclip className="text-xl" />
        </label>
        <GlobalInput
          type="file"
          id="uploadimage"
          name="image"
          onChange={handleChange}
          hidden
        />
        <GlobalButton title="Save" custom="float-right w-[150px] h-[50px]" />
      </form>
    </div>
  );
};

export default EditProfile;
