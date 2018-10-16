insert into user (id, login, role, first_name, last_name, email, is_blocked)
  values(1, 'admin', 'ADMIN', 'Admin', 'Admin', 'admin@admin.com', false);

insert into user (id, login, role, first_name, last_name, email, is_blocked)
  values(2, 'reader', 'READER', 'reader', 'reader', 'reader@reader.com', false);

insert into book(id, title, author, edition, publication_date_time)
values(1, 'Title', 'Author', 'Edition', parsedatetime('17-09-2018 18:47:52.69', 'dd-MM-yyyy hh:mm:ss.SS'));

insert into book_order(id, user_id, book_id, order_status)
  values (1, 1, 1, 'NEW')
