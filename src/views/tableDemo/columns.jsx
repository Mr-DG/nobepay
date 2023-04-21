import { NButton } from "naive-ui"
export const columns = [
  {
    title: "姓名",
    key: "name"
  },
  {
    title: "角色",
    key: "role",
    render(row) {
      return <NButton>{row.role}</NButton>
    }
  },
]