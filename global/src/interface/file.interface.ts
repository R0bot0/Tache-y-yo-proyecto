export interface File {
  id: number;
  name: string;
  originalName: string;
  category: string;
  path: string;
  extension: string;
  size: number;
  createdAt: Date;
  updatedAt: Date;
  userCreatedBy: User;
  userUpdatedBy: User;
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}
