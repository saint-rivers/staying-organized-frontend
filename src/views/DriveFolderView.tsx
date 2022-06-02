import { useEffect, useState } from "react";
import FolderComponent from "../components/FolderComponent";
import api from "../services/api";
import { Folder } from "../types/Folder";

export default function DriveFolderView() {
  const id = "9a044cbf-5902-4d42-83bf-2aae0b1bb7a1";

  const [rootFolder, setRootFolder] = useState<Folder>();

  useEffect(() => {
    return () => {
      api
        .get(`/folders/root/${id}`)
        .then((res) => setRootFolder(res.data))
        .catch((err) => console.log(err));
    };
  }, []);

  console.log(rootFolder);

  return (
    <div className='w-1/2 mx-auto'>
      {rootFolder && <FolderComponent folder={rootFolder} />}
    </div>
  );
}
