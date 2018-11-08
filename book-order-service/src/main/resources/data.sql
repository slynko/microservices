select * from book_order;

insert into book_order(id, login, book_id, order_status, due_date)
  values (1, 'rader', '1', 'NEW', parsedatetime('01-01-2018 18:47:52.69', 'dd-MM-yyyy hh:mm:ss.SS'))
