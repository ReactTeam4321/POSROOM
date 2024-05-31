import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Box, Button, Typography } from "@mui/material";

import ReportDropDown from "./ReportDropDown.jsx";

const ReportFilterBox = ({ toggle }) => {
    // const location = useLocation();
    // const currRoute = location.pathname;

    // const isReportByIdLoadingInventory = useSelector(
    //     (state) => state.stocksReports.reportByIdLoading
    // );
    // const isReportByIdLoadingAccounts = useSelector(
    //     (state) => state.accountsReports.reportByIdLoading
    // );
    // const isReportByIdLoadingPurchases = useSelector(
    //     (state) => state.purchasesReports.reportByIdLoading
    // );
    // const isReportByIdLoadingSales = useSelector(
    //     (state) => state.salesReports.reportByIdLoading
    // );
    // const isReportByIdLoadingCrm = useSelector(
    //     (state) => state.crmReports.reportByIdLoading
    // );
    // const isReportByIdLoadingPayroll = useSelector(
    //     (state) => state.payrollReports.reportByIdLoading
    // );

    // const selectedReport = useSelector(
    //     (state) => state.stocksReports.selectedReport
    // );
    // const selectedReportAcc = useSelector(
    //     (state) => state.accountsReports.selectedReport
    // );
    // const selectedReportPur = useSelector(
    //     (state) => state.purchasesReports.selectedReport
    // );
    // const selectedReportSales = useSelector(
    //     (state) => state.salesReports.selectedReport
    // );
    // const selectedReportCrm = useSelector(
    //     (state) => state.crmReports.selectedReport
    // );
    // const selectedReportPayroll = useSelector(
    //     (state) => state.payrollReports.selectedReport
    // );

    // const [reportToShow, setReportToShow] = useState("");
    // const [currPage, setCurrPage] = useState("");

    // useEffect(() => {
    //     if (currRoute == "/userDashboard/Accounts/Reports") {
    //         setReportToShow(selectedReportAcc);
    //         setCurrPage("Accounts Reports");
    //     } else if (currRoute == "/userDashboard/Inventory/Reports") {
    //         setReportToShow(selectedReport);
    //         setCurrPage("Inventory Reports");
    //     } else if (currRoute == "/userDashboard/Purchases/Reports") {
    //         setReportToShow(selectedReportPur);
    //         setCurrPage("Purchases Reports");
    //     } else if (currRoute == "/userDashboard/Sales/Reports") {
    //         setReportToShow(selectedReportSales);
    //         setCurrPage("Sales Reports");
    //     } else if (currRoute == "/userDashboard/CRM/Reports") {
    //         setReportToShow(selectedReportCrm);
    //         setCurrPage("CRM Reports");
    //     } else if (currRoute == "/userDashboard/Payroll/Reports") {
    //         setReportToShow(selectedReportPayroll);
    //         setCurrPage("Payroll Reports");
    //     }
    // }, [
    //     selectedReport,
    //     selectedReportAcc,
    //     selectedReportPur,
    //     selectedReportSales,
    //     selectedReportCrm,
    //     selectedReportPayroll,
    // ]);

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: { xs: "column", sm: "row" },
                paddingBlock: { xs: "1rem", md: "0.5rem" },
                margin: "1rem",
                fontFamily: "Roboto",
                backgroundColor: "white",
                borderRadius: "8px",
                minHeight: "50px",
                alignItems: "center",
                paddingInline: "1rem",
                gap: "1rem",
            }}
        >
            <Box
                sx={{
                    fontWeight: "600",
                    fontSize: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.2rem",
                    color: "rgba(36, 87, 197, 1)",
                }}
            >
                {"sales reports"}{" "}
                {true && (
                    <ArrowRightAltIcon
                        sx={{
                            display: {
                                xs: "none",
                                md: "block",
                                color: "rgba(36, 87, 197, 1)",
                            },
                        }}
                    />
                )}
                <Typography
                    sx={{
                        display: { xs: "none", md: "block" },
                        color: "black",
                        fontSize: "14px",
                        fontWeight: "600",
                    }}
                >
                    Sales report
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    flexWrap: "wrap",
                }}
            >
                <Box>
                    <ReportDropDown toggle={toggle} />
                </Box>
                <Box>
                    <Button
                        onClick={toggle}
                        disabled={
                           false
                        }
                        variant="contained"
                        sx={{
                            height: "26px",
                            width: "90px",
                            textTransform: "capitalize",
                            fontSize: "12px",
                            fontWeight: "400",
                        }}
                    >
                        Filter
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default ReportFilterBox;