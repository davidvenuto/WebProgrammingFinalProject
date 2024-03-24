import { reactive } from 'vue';
import { getUsers } from "@/model/users";

export const store = reactive({
  users: getUsers()
});
