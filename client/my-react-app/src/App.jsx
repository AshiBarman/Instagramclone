// import React, { useState } from "react";
// import axios from "axios";
// import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = "https://xxqngirogevoajumsqlz.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4cW5naXJvZ2V2b2FqdW1zcWx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM2NDY3MzksImV4cCI6MjA3OTIyMjczOX0.AYJCS83Dd5GQ4Sj3d2Iv44mepiPVeyfNOY6TDQVhjbI";
// const supabase = createClient(supabaseUrl, supabaseKey);

// const App = () => {
//   const [Img, setImg] = useState(null);

//   const handleFileChange = (e) => {
//     setImg(e.target.files[0]);
//   };

//   async function save() {
//     if (!Img) {
//       alert("Please select an image first!");
//       return;
//     }
//     try {
//      const { data, error } = await supabase.storage
//   .from("insta")
//   .upload("insta_images/" + Img.name, Img, { upsert: true });

//       if (error) throw error;


//       const imgUrl = `${supabaseUrl}/storage/v1/object/public/insta/insta_images/${Img.name}`;
//       console.log("Image URL:", imgUrl);

//         axios.post("http://localhost:4000/upload",{imgUrl})
//       setImg(null);
//     } catch (err) {
//       console.error("❌ Upload failed:", err);
//       alert("Error uploading image. Check console for details.");
//     }
//   }

//   return (
//     <div className="bg-white min-h-screen flex flex-col items-center justify-center gap-4">
//       <input type="file" onChange={handleFileChange} className="border p-2 rounded" />
//       <button
//         onClick={save}
//         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//       >
//         Upload
//       </button>
//     </div>
//   );
// };

// export default App;
 
// // final int a=5;
// // a=50
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'
import MainPage from './MainPage'
import CreatePost from './CreatePost'   // ← NEW IMPORT
import Profile from './Profile'

const App = () => {
  return (
    <div>
      <Routes>

        {/* Default page should be login */}
        <Route path='/' element={<Login />} />

        {/* Signup page */}
        <Route path='/signup' element={<SignUp />} />

        {/* Main Instagram feed */}
        <Route path='/home' element={<MainPage />} />

        {/* ⭐ Create Post Page */}
        <Route path='/create' element={<CreatePost />} />
        <Route path='/profile' element={<Profile />} />


      </Routes>
    </div>
  )
}

export default App
