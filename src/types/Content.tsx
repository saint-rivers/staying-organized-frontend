export interface Content {
  id: string;
  folderId: string;
  displayName: string;
  resourceLocation: string;
  type: string;
  createdAt: Date;
  lastUpdated: Date;
}

export interface ContentRequest {
  folderId: string;
  displayName: string;
  type: string;
}
