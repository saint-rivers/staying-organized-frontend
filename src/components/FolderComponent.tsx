import { Folder } from "../types/Folder";
import { useState } from "react";

interface FolderProp {
  folder: Folder;
}

export default function FolderComponent({ folder }: FolderProp) {
  const [isShowingSubFolders, setIsShowingSubFolders] = useState(false);

  return (
    <>
      {/* Render the folder */}
      <div className='flex flex-row bg-white hover:text-blue-500 rounded p-4 w-40 my-2 hover:cursor-pointer'>
        <button
          className='font-bold text-xl'
          onClick={() => setIsShowingSubFolders(!isShowingSubFolders)}>
          {folder?.name}
        </button>
      </div>

      {/* 
        If there are subfolders in this folder 
        Do a recursive component call
        */}
      {folder?.subFolders && folder?.subFolders?.length > 0 && (
        <div className='ml-8'>
          {isShowingSubFolders &&
            folder?.subFolders.map((f: Folder) => (
              <FolderComponent folder={f} />
            ))}
        </div>
      )}
    </>
  );
}
