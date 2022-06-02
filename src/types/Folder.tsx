export interface Folder {
  readonly id: string;
  name: string;
  content: any;
  subFolders: Folder[];
  isOpened?: boolean | undefined;
}
