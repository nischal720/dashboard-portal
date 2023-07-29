import { nanoid } from "nanoid";

import Dashboard from "../page/Dashboard/Dashboard"; // Replace this import with the actual path to your Dashboard component
import Citizen from "../page/citizen/Citizen";

const routes = [
  {
    path: "/",
    id: nanoid(),
    component: Dashboard,
  },
  {
    path: "citizen",
    id: nanoid(),
    component: Citizen,
  },

];
export { routes };
