import { Folder } from "../types/Folder";
import { useState } from "react";
import {
  BsFolderFill,
  BsFolder,
  BsFillFileEarmarkFill,
} from "react-icons/bs";

interface FolderProp {
  folder: Folder;
}

export default function FolderComponent({ folder }: FolderProp) {
  const [isShowingSubFolders, setIsShowingSubFolders] = useState(true);
  const [hasSubFolders, setHasSubFolders] = useState(
    folder?.subFolders?.length > 0
  );

  return (
    <div>
      {/* Render the folder */}

      <div className='flex flex-col items-start'>
        <div className='flex flex-col items-start '>
          <div className='flex flex-row items-center px-4 py-[2px] mt-1'>
            <div className='mr-2'>
              {folder?.content &&
                folder.content.map((content) => (
                  <div className='flex flex-row items-center bg-white py-2 pr-4 rounded overflow-hidden'>
                    <div className='mr-4'>|</div>
                    <div className='mr-2'>
                      <BsFillFileEarmarkFill />
                    </div>
                    <a
                      href={`http://localhost:8080/folder/${content.resourceLocation}`}
                      className='font-bold text-xl hover:underline hover:text-blue-500'>
                      {content.displayName}
                    </a>
                  </div>
                ))}
            </div>
          </div>
          <div className='flex flex-row items-center px-4 py-[2px] mt-1 '>
            <div className='mr-4'>|</div>
            <div className='mr-2'>
              {isShowingSubFolders && hasSubFolders ? (
                <BsFolder />
              ) : (
                <BsFolderFill />
              )}
            </div>
            <button
              className='font-bold text-xl hover:text-blue-500'
              onClick={() => setIsShowingSubFolders(!isShowingSubFolders)}>
              {folder?.name}
            </button>
          </div>
        </div>
      </div>

      {/* 
        If there are subfolders in this folder 
        Do a recursive component call
        */}
      {folder?.subFolders && hasSubFolders && (
        <div className='ml-4 '>
          {isShowingSubFolders &&
            folder?.subFolders.map((f: Folder) => (
              <>
                <FolderComponent folder={f} />
              </>
            ))}
        </div>
      )}
    </div>
  );
}
