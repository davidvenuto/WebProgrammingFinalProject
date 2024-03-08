import { reactive } from 'vue';
import { getUser } from "@/model/users";

export const store = reactive({
  users: getUser()
});

export function deleteUser(username: string) {
  const index = store.users.findIndex(user => user.username === username);
  if (index !== -1) {
    store.users.splice(index, 1);
  }
}

