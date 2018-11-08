select * from book_record;

insert into book_record (id, book_id, book_status, due_date, from_date, login, penalty, approved)
  values (2, '1', 'NEW',  parsedatetime('17-09-2018 18:47:52.69', 'dd-MM-yyyy hh:mm:ss.SS'),
  parsedatetime('01-01-2018 18:47:52.69', 'dd-MM-yyyy hh:mm:ss.SS'),'reader',  0, false );
