import { Dashboard, GroupRounded } from "@mui/icons-material/";
export const menus = [
  {
    name: "Dashboard",
    icon: <Dashboard style={{ color: "#fcfcfc" }} />,
    path: "/",
    subMenus: [],
  },
  {
    name: "Citizen",
    icon: <GroupRounded style={{ color: "#fcfcfc" }} />,
    path: "citizen",
    subMenus: [],
  },
  {
    name: "Staff Details",
    icon: (
      <div
        style={{
          border: "1px #fcfcfc solid",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          padding: "2px",
        }}
      >
        <GroupRounded style={{ color: "#fcfcfc" }} />
      </div>
    ),
    subMenus: [
      {
        name: "Staff",
        icon: "",
        path: "staff",
        subMenus: [],
      },
      {
        name: "Staff Attendance",
        icon: "",
        path: "staffAttendance",
        subMenus: [],
      },
    ],
  },
];
