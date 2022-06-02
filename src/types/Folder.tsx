import { Content } from "./Content";

export interface Folder {
  readonly id: string;
  name: string;
  subFolders: Folder[];
  content?: Content[];
  isOpened?: boolean | undefined;
}
