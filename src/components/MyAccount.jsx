import { useEffect, useState } from "react";
import ProfileImg from "../img/avatar.png";
import axios from "../utils/axios";
import { Box, TextField } from "@mui/material";
import { Sidebar } from "./Navbar/Sidebar";
export const MyAccount = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imageURL, setImageURL] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    // validateField(name, value);
  }

  const handleImageChange = async (e) => {
    try {
      const file = e.target.files[0];
      if (!file) {
        console.error("No file selected");
        return;
      }

      const formData = new FormData();
      formData.append("image", file);

      setLoading(true);
      const response = await axios.put("/api/profile/upload-image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setImageURL(response.data.imgURL);
      setLoading(false);
    } catch (error) {
      console.error("Error uploading image:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("/api/profile");
        setUser(response?.data?.User);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      <Sidebar />
      <div className="bg-white rounded grid grid-cols-2">
        <div className="d-flex flex-col flex-wrap content-around justify-between items-end">
          <img
            src={`http://localhost:8080/uploads/${user.img_url}`}
            className="img-thumbnail d-block m-auto w-[400px] h-[400px] rounded"
            alt="profileImg"
            onError={(e) => {
              e.target.src = ProfileImg; // Replace with a placeholder image
              e.target.onerror = null; // Prevent infinite loop
            }}
          />
          <input
            class="block w-2/5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="file_input"
            type="file"
            onChange={handleImageChange}
            accept="image/*" // Add this attribute to specify accepted file types
          />

          <button
            disabled={loading}
            type="submit"
            className="w-1/5 bg-slate-600 hover:bg-slate-800 border-slate-600 hover:border-slate-800 text-sm border-4 text-white py-1 px-2 mt-3 float-right rounded"
          >
            Update DP
          </button>
        </div>
        <div>
          <span>We are sharing your data from our server...</span>
          <form className="m-10 p-6">
            <div className="grid grid-cols-2 gap-4">
              <TextField
                label="First Name"
                type="text"
                name="first_name"
                value={user.first_name}
                onChange={(e) => handleChange(e)}
                defaultValue="Hello World"
                variant="standard"
              />

              <TextField
                label="Last Name"
                type="text"
                name="last_name"
                value={user.last_name}
                onChange={(e) => handleChange(e)}
                variant="standard"
                defaultValue="Hello World"
              />

              <TextField
                label="Password"
                type="text"
                name="Password"
                value={user.password}
                onChange={(e) => handleChange(e)}
                variant="filled"
                defaultValue="Hello World"
                disabled
              />

              <TextField
                label="Email"
                type="email"
                name="Email"
                value={user.email}
                onChange={(e) => handleChange(e)}
                variant="standard"
                defaultValue="Hello World"
              />

              <TextField
                label="Contact Number"
                type="number"
                name="contact_number"
                value={user.contact_number}
                onChange={(e) => handleChange(e)}
                variant="standard"
                defaultValue="123"
              />

              <TextField
                label="Address"
                type="text"
                name="Address"
                value={user.address}
                onChange={(e) => handleChange(e)}
                variant="standard"
                defaultValue="Hello World"
              />
            </div>
            <button
              disabled={loading}
              type="submit"
              className="w-1/3 bg-slate-600 hover:bg-slate-800 border-slate-600 hover:border-slate-800 text-sm border-4 text-white py-1 px-2 mt-8 float-right rounded"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

// import { useEffect, useState } from "react";
// import ProfileImg from "../img/avatar.png";
// import axios from "../utils/axios";
// import { Box, TextField } from "@mui/material";
// import { Sidebar } from "./Navbar/Sidebar";

// export const MyAccount = () => {
//   const [user, setUser] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [imageURL, setImageURL] = useState("");

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await axios.get("/api/profile");
//         setUser(response?.data?.User);
//       } catch (error) {
//         console.error("Error fetching user:", error);
//       }
//     };

//     fetchUser();
//   }, []);

//   const handleImageChange = async (e) => {
//     try {
//       const formData = new FormData();
//       formData.append("image", e.target.files[0]);

//       setLoading(true);
//       const response = await axios.patch("/api/upload-image", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       setImageURL(response.data.imgURL);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error uploading image:", error);
//       setLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       await axios.patch("/api/profile/img-url", { img_url: imageURL });
//       setLoading(false);
//       // Optionally, you can fetch the user again to get the updated details
//     } catch (error) {
//       console.error("Error updating user image:", error);
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Sidebar />
//       <div className="bg-white rounded grid grid-cols-2">
//         <img
//           src={imageURL || ProfileImg}
//           className="rounded img-thumbnail d-block"
//           alt="profileImg"
//         />
//         <div>
//           <span>We are sharing your data from our server...</span>
//           <form className="m-10 p-6" onSubmit={handleSubmit}>
//             <div className="grid grid-cols-2 gap-4">
//               <TextField
//                 label="First Name"
//                 type="text"
//                 name="first_name"
//                 value={user.first_name}
//                 onChange={(e) => handleChange(e)}
//                 variant="standard"
//               />
//               {/* Other input fields */}
//               <input
//                 type="file"
//                 onChange={handleImageChange}
//                 accept="image/*"
//               />
//             </div>
//             <button
//               disabled={loading}
//               type="submit"
//               className="w-1/3 bg-slate-600 hover:bg-slate-800 border-slate-600 hover:border-slate-800 text-sm border-4 text-white py-1 px-2 mt-8 float-right rounded"
//             >
//               Update
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };
