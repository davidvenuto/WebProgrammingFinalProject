import { reactive } from 'vue';
import { getUsers, type User } from "@/model/users";

export const store = reactive({
  users: getUsers()
});

export function deleteUser(username: string) {
  const index = store.users.findIndex(user => user.username === username);
  if (index !== -1) {
    store.users.splice(index, 1);
  }
}

export function addUser(user: User) {
  store.users.push(user);
}
