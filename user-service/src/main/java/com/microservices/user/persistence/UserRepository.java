package com.microservices.user.persistence;

import com.microservices.user.persistence.model.Role;
import com.microservices.user.persistence.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

  List<User> findByRoleAndFirstName(Role role, String firstName);
  List<User> findByRoleAndLastName(Role role, String lastName);
  List<User> findByRoleAndFirstNameAndLastName(Role role, String firstName, String lastName);
  List<User> findByEmail(String email);
  List<User> findByRole(Role role);
  User findByLogin(String login);

}
