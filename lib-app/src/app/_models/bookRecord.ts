export class BookRecord {
  id: number;
  login: string;
  bookId: string;
  bookStatus: string;
  fromDate: Date;
  dueDateTime: Date;
  penalty: number;
  approved: boolean;
}
