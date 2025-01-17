import ReportProblemOutlinedIcon from "@material-ui/icons/ReportProblemOutlined"
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined"
import { colors } from "theme/colors"
import { Severity } from "./alertTypes"
import { ReactElement } from "react"

export const severityConstants: Record<Severity, { color: string; icon: ReactElement }> = {
  warning: {
    color: colors.orange[7],
    icon: <ReportProblemOutlinedIcon fontSize="small" style={{ color: colors.orange[7] }} />,
  },
  error: {
    color: colors.red[7],
    icon: <ErrorOutlineOutlinedIcon fontSize="small" style={{ color: colors.red[7] }} />,
  },
}
