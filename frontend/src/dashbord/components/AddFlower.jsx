import { useState } from "react";
//import { Button, Label, TextInput } from "flowbite-react";
import axios from "axios";

const AddFlower = () => {
  const [formData, setFormData] = useState({
    discount: "",
    flowerTitle: "",
    imageURL: "",
    price: "",
  });

  const api = "http://localhost:8000/api/flowers";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(api, formData);

      if (response.status === 200) {
        alert("Flower uploaded successfully!");
        setFormData({
          discount: "",
          flowerTitle: "",
          imageURL: "",
          price: "",
        });
      } else {
        throw new Error("Failed to upload flower");
      }
    } catch (error) {
      console.error("Error:", error.message);
      alert("Failed to upload flower. Please try again.");
    }
  };

  return (
    // <form onSubmit={handleFormSubmit} className="flex max-w-md flex-col gap-4">
    //   <div>
    //     <div className="mb-2 block">
    //       <Label htmlFor="discount" value="Enter Discount" />
    //     </div>
    //     <TextInput
    //       id="discount"
    //       name="discount"
    //       type="number"
    //       placeholder="Enter Discount"
    //       value={formData.discount}
    //       onChange={handleInputChange}
    //       required
    //       shadow
    //     />
    //   </div>
    //   <div>
    //     <div className="mb-2 block">
    //       <Label htmlFor="flowerTitle" value="Enter Flower Name" />
    //     </div>
    //     <TextInput
    //       id="flowerTitle"
    //       name="flowerTitle"
    //       type="text"
    //       placeholder="Enter Flower Name"
    //       value={formData.flowerTitle}
    //       onChange={handleInputChange}
    //       required
    //       shadow
    //     />
    //   </div>
    //   <div>
    //     <div className="mb-2 block">
    //       <Label htmlFor="imageURL" value="Enter Flower Image Link" />
    //     </div>
    //     <TextInput
    //       id="imageURL"
    //       name="imageURL"
    //       type="text"
    //       placeholder="Enter Flower Image Link"
    //       value={formData.imageURL}
    //       onChange={handleInputChange}
    //       required
    //       shadow
    //     />
    //   </div>
    //   <div>
    //     <div className="mb-2 block">
    //       <Label htmlFor="price" value="Enter Price" />
    //     </div>
    //     <TextInput
    //       id="price"
    //       name="price"
    //       type="number"
    //       placeholder="Enter Price"
    //       value={formData.price}
    //       onChange={handleInputChange}
    //       required
    //       shadow
    //     />
    //   </div>

    //   <Button type="submit">Upload Flower</Button>

    // </form>

    <section className="contact pt-32" id="contact">
      <h1 className="heading">
        <span> Add </span> Flower
      </h1>

      <div className="row">
        <form onSubmit={handleFormSubmit}>
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter Price"
            value={formData.price}
            onChange={handleInputChange}
            required
            className="box"
          />
          <input
            id="discount"
            name="discount"
            type="number"
            placeholder="Enter Discount"
            value={formData.discount}
            onChange={handleInputChange}
            required
            className="box"
          />
          <input
            id="imageURL"
            name="imageURL"
            type="text"
            placeholder="Enter Flower Image Link"
            value={formData.imageURL}
            onChange={handleInputChange}
            required
            className="box"
          />
          <input
            id="flowerTitle"
            name="flowerTitle"
            type="text"
            placeholder="Enter Flower Name"
            value={formData.flowerTitle}
            onChange={handleInputChange}
            required
            className="box"
          />

          <input type="submit" value="Add Flower" className="btn" />
        </form>
      </div>
    </section>
  );
};

export default AddFlower;
