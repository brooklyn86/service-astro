import layout from "./layoutReducer";
import todo from "@/components/partials/app/todo/store";
import email from "@/components/partials/app/email/store";
import chat from "@/components/partials/app/chat/store";
import project from "@/components/partials/app/projects/store";
import client from "@/components/partials/app/clients/store";
import category from "@/components/partials/app/categories/store";
import kanban from "@/components/partials/app/kanban/store";
import calendar from "@/components/partials/app/calender/store";
import auth from "@/components/partials/auth/store";

const rootReducer = {
  layout,
  todo,
  email,
  chat,
  project,
  client,
  category,
  kanban,
  calendar,
  auth,
};
export default rootReducer;
