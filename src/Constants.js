export const TODO = "Todo";
export const IN_PROGRESS = "In Progress";
export const COMPLETED = "Completed";

export const allStatuses = [TODO, IN_PROGRESS, COMPLETED]
export const statusToBackgroundClr= {
    [TODO]: "var(--todo-status-clr)",
    [IN_PROGRESS]:"var(--inprogress-status-clr)",
    [COMPLETED]: "var(--completed-status-clr)"
}
