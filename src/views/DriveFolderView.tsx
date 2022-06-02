import { useEffect, useState } from "react";
import FolderComponent from "../components/FolderComponent";
import api from "../services/api";
import { ContentRequest } from "../types/Content";
import { Folder } from "../types/Folder";

export default function DriveFolderView() {
  const id = "9a044cbf-5902-4d42-83bf-2aae0b1bb7a1";

  const [rootFolder, setRootFolder] = useState<Folder>();
  const [currentTab, setCurrentTab] = useState("add");

  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    return () => {
      api
        .get(`/folders/tree/${id}`)
        .then((res) => setRootFolder(res.data))
        .catch((err) => console.log(err));
    };
  }, []);

  const insertNewContent = (content: ContentRequest) => {
    api
      .post("/content", content)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  console.log(rootFolder);

  return (
    <div className='flex flex-row items-start mt-8'>
      <div className='w-1/3 rounded h-[100vh]'>
        {rootFolder && <FolderComponent folder={rootFolder} />}
      </div>
      <div className='flex flex-col w-2/3 mx-auto'>
        {/* ======================== TAB BUTTONS ======================== */}
        <div className='flex flex-row items-center justify-evenly'>
          <button
            onClick={() => setCurrentTab("dummy")}
            className='flex-1 px-4 py-2 bg-white hover:bg-blue-500 hover:text-white rounded-tl-lg'>
            Dummy
          </button>
          <button
            onClick={() => setCurrentTab("dummy")}
            className='flex-1 px-4 py-2 bg-white hover:bg-blue-500 hover:text-white '>
            Dummy
          </button>
          <button
            onClick={() => setCurrentTab("add")}
            className='flex-1 px-4 py-2 bg-white hover:bg-blue-500 hover:text-white rounded-tr-lg'>
            Add
          </button>
        </div>
        {/* ======================== UPLOAD SECTION ======================== */}
        <div className='bg-white h-[80vh] rounded-lg'>
          {currentTab === "add" && (
            <div className='flex flex-col px-8 pt-4'>
              <input
                type='file'
                className='py-2 rounded mt-4 hover cursor-pointer'
              />
              <input
                onChange={(e) => setDisplayName(e.target.value)}
                type='text'
                placeholder='filename'
                className='px-4 py-2 mt-4 border-b-2 border-white focus:border-blue-500 hover:border-blue-500 bg-blue-50 outline-none'
              />
              <input
                onClick={() =>
                  insertNewContent({
                    displayName,
                    folderId: id,
                    type: "LINK",
                  })
                }
                type='submit'
                value='Save'
                className='border bg-blue-600 text-white font-bold cursor-pointer px-4 py-2 rounded mt-4'
              />
            </div>
          )}
          {/* ======================== LOAD ALL FOLDER CONTENTS */}
          {rootFolder &&
            rootFolder?.content?.map((c) => (
              <a href={`http://localhost:8080/folder/${c.resourceLocation}`}>
                <div className='w-auto bg-gray-100 py-3 rounded mx-8 mt-8'>
                  <span className='text-left block pl-8 text-xl font-bold'>
                    {c.displayName}
                  </span>
                  <span className='text-left block pl-8 hover:text-blue-500'>
                    {c.resourceLocation}
                  </span>
                </div>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}
