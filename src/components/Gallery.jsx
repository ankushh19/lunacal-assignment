import {
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
  AiOutlinePlus,
} from "react-icons/ai";
import React, { useState, useRef } from "react";
import CardWrapper from "./CardWrapper";

function Gallery() {
  const [galleryImages, setGalleryImages] = useState([]);
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const nextImageHandler = () => {
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.scrollWidth;
      const clientWidth = scrollRef.current.clientWidth;
      const maxScroll = scrollWidth - clientWidth;
      const newPosition = Math.min(scrollPosition + clientWidth, maxScroll);
      scrollRef.current.scrollTo({ left: newPosition, behavior: "smooth" });
      setScrollPosition(newPosition);
    }
  };

  const prevImageHandler = () => {
    if (scrollRef.current) {
      const clientWidth = scrollRef.current.clientWidth;
      const newPosition = Math.max(scrollPosition - clientWidth, 0);
      scrollRef.current.scrollTo({ left: newPosition, behavior: "smooth" });
      setScrollPosition(newPosition);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setGalleryImages([...galleryImages, imageUrl]);
    }
  };

  const openFileDialog = () => {
    // Triggering a hidden file input click
    document.getElementById("fileInput").click();
  };

  return (
    <CardWrapper rightIcon={false}>
      <ul className="flex justify-between items-center">
        <li>
          <h2 className="select-none px-4 text-sm lg:text-md xl:px-8 py-2 xl:py-4 rounded-2xl bg-[#171717] text-white">
            Gallery
          </h2>
        </li>
        <li className="flex items-center gap-3">
          <button
            onClick={openFileDialog}
            className="rounded-full flex items-center gap-
            px-3 py-2 xl:px-6 xl:py-3 text-white
            shadow-[6px_6px_12px_1px_rgba(0,0,1),-4px_-4px_12px_0_rgba(255,255,255,0.5)]"
          >
            <AiOutlinePlus className="box-content" />
            <span className="uppercase lg:text-md text-xs">add image</span>
          </button>
          <button
            onClick={prevImageHandler}
            className="rounded-full p-2 xl:p-3 bg-[#272a2e] shadow-[5px_5px_12px_0_rgba(0,0,0,0.5),-0px_-0px_12px_10px_#3c4854]"
          >
            <AiOutlineArrowLeft className="text-[#6f787c] box-content" />
          </button>
          <button
            onClick={nextImageHandler}
            className="rounded-full p-2 xl:p-3 bg-[#272a2e] shadow-[5px_5px_12px_0_rgba(0,0,0,0.5),-0px_-0px_12px_10px_#3c4854]"
          >
            <AiOutlineArrowRight className="text-[#6f787c] box-content" />
          </button>
        </li>
      </ul>

      {/* Hidden input for file selection */}
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      <div
        ref={scrollRef}
        className="flex justify-between pt-12 gap-4 lg:gap-5 xl:gap-6 overflow-x-auto no-scrollbar"
      >
        {galleryImages.map((image, index) => (
          <img
            src={image}
            className="w-[30.5%] lg:w-[29%] xl:w-[30%] object-cover rounded-3xl cursor-pointer aspect-square flex-shrink-0"
            alt={`gallery image ${index + 1}`}
            key={index}
          />
        ))}
      </div>
    </CardWrapper>
  );
}

export default Gallery;
