import DoneIcon from "@mui/icons-material/Done";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";


// import alterRoutesConfig from "../../config/routesConfig";
// import {
//     setReportFilters,
//     setUpdatedRoutesConfig,
// } from "../../Redux/Slices/filterSlice";
// import {
//     fetchAccReports,
//     setAccReportData,
//     setSelectedAccReport,
// } from "../../Redux/Slices/reports/accountsReportsSlice";
// import {
//     fetchCrmReports,
//     setCrmReportData,
//     setSelectedCrmReport,
// } from "../../Redux/Slices/reports/crmReportsSlice";
// import {
//     fetchPayrollReports,
//     setPayrollReportData,
//     setSelectedPayrollReport,
// } from "../../Redux/Slices/reports/payrollReportsSlice";
// import {
//     fetchPurReports,
//     setPurReportData,
//     setSelectedPurReport,
// } from "../../Redux/Slices/reports/purchasesReportsSlice";
// import {
//     fetchSalesReports,
//     setSalesReportData,
//     setSelectedSalesReport,
// } from "../../Redux/Slices/reports/salesReportsSlice";
// import {
//     fetchReports,
//     setReportData,
//     setSelectedReport,
// } from "../../Redux/Slices/reports/stocksReportsSlice";
// import CircularLoader from "../CommonComponents/CircularLoader";

const ReportDropDownOption = ({ report, isSelected, onClickHandler }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Box
            sx={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
                backgroundColor: isSelected
                    ? "rgba(40, 145, 250,0.16)"
                    : isHovered
                    ? "rgba(40, 145, 250,0.1)"
                    : "rgba(40, 145, 250,0.0)",
                "&:hover": {
                    backgroundColor: "rgba(40, 145, 250,0.1)",
                },
                marginBlock: "1px",
                padding: "2px 3px",
                height: "25px",
                lineHeight: "0",
                borderRadius: "3px",
                fontFamily: "Poppins",
            }}
            onClick={onClickHandler}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isSelected || isHovered ? (
                <DoneIcon
                    sx={{
                        fontSize: "10px",
                        color: "rgb(40, 145, 250)",
                    }}
                />
            ) : (
                <Box sx={{ width: "10px" }}></Box>
            )}
            <Typography
                sx={{
                    fontSize: "10px",
                    fontFamily: "Poppins",
                    fontWeight: "600",
                }}
            >
                {report && report.Name}
            </Typography>
        </Box>
    );
};

function ReportDropDown({ toggle }) {
   


    // const stocksReports = useSelector((state) => state.stocksReports);
    // const accountsReports = useSelector((state) => state.accountsReports);
    // const purchasesReports = useSelector((state) => state.purchasesReports);
    // const salesReports = useSelector((state) => state.salesReports);
    // const crmReports = useSelector((state) => state.crmReports);
    // const payrollReports = useSelector((state) => state.payrollReports);

    // const stocksReportList = stocksReports.reports;
    // const accountsReportList = accountsReports.reportList;
    // const purchasesReportList = purchasesReports.reportList;
    // const salesReportList = salesReports.reportList;
    // const crmReportList = crmReports.reportList;
    // const payrollReportList = payrollReports.reportList;

    // Declare variables to store data
    let reports = [];
    let reportsLoading = false;
    let requiredParamsData = [];
    let selectedReport = null;
    let isReportByIdLoading = false;

    // Extract data based on current route

    // if (currentRoute === "/userDashboard/Inventory/Reports") {
    //     reports = stocksReports.reports;
    //     reportsLoading = stocksReports.reportListLoading;
    //     requiredParamsData = stocksReports.requiredParams;
    //     selectedReport = stocksReports.selectedReport;
    //     isReportByIdLoading = stocksReports.reportByIdLoading;
    // } else if (currentRoute === "/userDashboard/Accounts/Reports") {
    //     reports = accountsReports.reportList;
    //     reportsLoading = accountsReports.reportListLoading;
    //     requiredParamsData = accountsReports.requiredParams;
    //     selectedReport = accountsReports.selectedReport;
    //     isReportByIdLoading = accountsReports.reportByIdLoading;
    // } else if (currentRoute === "/userDashboard/Purchases/Reports") {
    //     reports = purchasesReports.reportList;
    //     reportsLoading = purchasesReports.reportListLoading;
    //     requiredParamsData = purchasesReports.requiredParams;
    //     selectedReport = purchasesReports.selectedReport;
    //     isReportByIdLoading = purchasesReports.reportByIdLoading;
    // } else if (currentRoute === "/userDashboard/Sales/Reports") {
    //     reports = salesReports.reportList;
    //     reportsLoading = salesReports.reportListLoading;
    //     requiredParamsData = salesReports.requiredParams;
    //     selectedReport = salesReports.selectedReport;
    //     isReportByIdLoading = salesReports.reportByIdLoading;
    // } else if (currentRoute === "/userDashboard/CRM/Reports") {
    //     reports = crmReports.reportList;
    //     reportsLoading = crmReports.reportListLoading;
    //     requiredParamsData = crmReports.requiredParams;
    //     selectedReport = crmReports.selectedReport;
    //     isReportByIdLoading = crmReports.reportByIdLoading;
    // } else if (currentRoute === "/userDashboard/Payroll/Reports") {
    //     reports = payrollReports.reportList;
    //     reportsLoading = payrollReports.reportListLoading;
    //     requiredParamsData = payrollReports.requiredParams;
    //     selectedReport = payrollReports.selectedReport;
    //     isReportByIdLoading = payrollReports.reportByIdLoading;
    // }

    // const dispatch = useDispatch();

    const [isFilterDropDownClicked, setIsFilterDropDownClicked] =
        useState(false);

    // const handleReportSelect = (report) => {
    //     if (currentRoute === "/userDashboard/Inventory/Reports") {
    //         dispatch(setSelectedReport(report));
    //         dispatch(setReportFilters([]));
    //         dispatch(setReportData([]));
    //         toggle();
    //         // dispatch(setAddedFilters([]));
    //     } else if (currentRoute === "/userDashboard/Accounts/Reports") {
    //         dispatch(setSelectedAccReport(report));
    //         dispatch(setReportFilters([]));
    //         dispatch(setAccReportData([]));
    //         toggle();
    //         // dispatch(setAddedFilters([]));
    //     } else if (currentRoute === "/userDashboard/Purchases/Reports") {
    //         dispatch(setSelectedPurReport(report));
    //         dispatch(setReportFilters([]));
    //         dispatch(setPurReportData([]));
    //         toggle();
    //         // dispatch(setAddedFilters([]));
    //     } else if (currentRoute === "/userDashboard/Sales/Reports") {
    //         dispatch(setSelectedSalesReport(report));
    //         dispatch(setReportFilters([]));
    //         dispatch(setSalesReportData([]));
    //         toggle();
    //         // dispatch(setAddedFilters([]));
    //     } else if (currentRoute === "/userDashboard/CRM/Reports") {
    //         dispatch(setSelectedCrmReport(report));
    //         dispatch(setReportFilters([]));
    //         dispatch(setCrmReportData([]));
    //         toggle();
    //         // dispatch(setAddedFilters([]));
    //     } else if (currentRoute === "/userDashboard/Payroll/Reports") {
    //         dispatch(setSelectedPayrollReport(report));
    //         dispatch(setReportFilters([]));
    //         dispatch(setPayrollReportData([]));
    //         toggle();
    //         // dispatch(setAddedFilters([]));
    //     }
    //     setIsFilterDropDownClicked(false);
    // };

    // useEffect(() => {
    //     const updatedRoutesConfig = alterRoutesConfig(
    //         currentRoute,
    //         requiredParamsData.length > 0 ? requiredParamsData : []
    //     );

    //     // dispatch(setUpdatedRoutesConfig([updatedRoutesConfig]));

    //     if (currentRoute === "/userDashboard/Inventory/Reports") {
    //         dispatch(setUpdatedRoutesConfig([updatedRoutesConfig]));
    //     } else if (currentRoute === "/userDashboard/Accounts/Reports") {
    //         dispatch(setUpdatedRoutesConfig([updatedRoutesConfig]));
    //     } else if (currentRoute === "/userDashboard/Purchases/Reports") {
    //         dispatch(setUpdatedRoutesConfig([updatedRoutesConfig]));
    //     } else if (currentRoute === "/userDashboard/Sales/Reports") {
    //         dispatch(setUpdatedRoutesConfig([updatedRoutesConfig]));
    //     } else if (currentRoute === "/userDashboard/CRM/Reports") {
    //         dispatch(setUpdatedRoutesConfig([updatedRoutesConfig]));
    //     } else if (currentRoute === "/userDashboard/Payroll/Reports") {
    //         dispatch(setUpdatedRoutesConfig([updatedRoutesConfig]));
    //     }

    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [requiredParamsData, currentRoute]);

    // useEffect(() => {
    //     //fetch the report list when component mounts
    //     if (
    //         currentRoute === "/userDashboard/Inventory/Reports" &&
    //         !stocksReportList.length
    //     ) {
    //         dispatch(fetchReports());
    //     } else if (
    //         currentRoute === "/userDashboard/Accounts/Reports" &&
    //         !accountsReportList.length
    //     ) {
    //         dispatch(fetchAccReports());
    //     } else if (
    //         currentRoute === "/userDashboard/Purchases/Reports" &&
    //         !purchasesReportList.length
    //     ) {
    //         dispatch(fetchPurReports());
    //     } else if (
    //         currentRoute === "/userDashboard/Sales/Reports" &&
    //         !salesReportList.length
    //     ) {
    //         dispatch(fetchSalesReports());
    //     } else if (
    //         currentRoute === "/userDashboard/CRM/Reports" &&
    //         !crmReportList.length
    //     ) {
    //         dispatch(fetchCrmReports());
    //     } else if (
    //         currentRoute === "/userDashboard/Payroll/Reports" &&
    //         !payrollReportList.length
    //     ) {
    //         dispatch(fetchPayrollReports());
    //     }
    // }, [currentRoute]);
    return (
        <Button
            disabled={isReportByIdLoading}
            sx={{
                position: "relative",
                fontFamily: "poppins",
                textTransform: "none",
                color: "#151D48",
                display: "flex",
                alignItems: "center",
                width: { xs: "250px", sm: "268px", md: "300px" },
                height: "40px",
                marginLeft: "0rem",
                backgroundColor: "rgb(232,235,239,1)",
                padding: "2px 6px",
                justifyContent: "space-between",
                borderRadius: "2px",
                cursor: "pointer",
                boxShadow: "0 1px 5px rgba(0, 0, 0, 0.05)",
                "&:hover": {
                    boxShadow: "0 1px 5px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "#dce1e6",
                },
                transition: "all ease 0.2s",
            }}
            // onClick={() => setIsFilterDropDownClicked(!isFilterDropDownClicked)}
            onMouseEnter={() => setIsFilterDropDownClicked(true)}
            onMouseLeave={() => setIsFilterDropDownClicked(false)}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    fontWeight: "600",
                    fontSize: { xs: "12px", md: "12px", lg: "12px" },
                }}
            >
                {reportsLoading ? (
                    <CircularLoader />
                ) : selectedReport && selectedReport.Name ? (
                    selectedReport.Name
                ) : (
                    "Select Report"
                )}
            </Box>
            <Box
                sx={{
                    marginTop: "6px",
                    transform: isFilterDropDownClicked
                        ? "translate(-50%, -25%) rotate(180deg)"
                        : "translate(-50%, 2%) rotate(0deg)",
                    transition: "transform 0.2s ease-in-out",
                }}
            >
                <KeyboardArrowDownIcon
                    className="dropDown"
                    style={{
                        fontSize: "22px",
                        fontWeight: "10px",
                        opacity: "45%",
                        transition: "all ease 0.2s",
                    }}
                />
            </Box>
            {isFilterDropDownClicked && (
                <Box
                    sx={{
                        position: "absolute",
                        top: "100%",
                        left: "0",
                        width: "100%",
                        boxShadow: "0 1px 10px rgba(0, 0, 0, 0.3)",
                        borderRadius: "3px",
                        backgroundColor: "white",
                        zIndex: "10",
                    }}
                >
                    <Box sx={{ padding: "2px " }}>
                        <Box
                            sx={{
                                display: "flex",
                                gap: "5px",
                                alignItems: "center",
                                margin: "2px",
                                padding: "2px 3px",
                                height: "25px",
                                borderRadius: "3px",
                                justifyContent: "center",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "11px",
                                    fontWeight: "800",
                                    fontFamily: "Poppins",
                                    opacity: "50%",
                                }}
                            >
                                Select Report
                            </Typography>
                        </Box>
                        {reports &&
                            reports.map((report) => (
                                <ReportDropDownOption
                                    key={report.Id}
                                    report={report}
                                    isSelected={
                                        selectedReport &&
                                        selectedReport.Id === report.Id
                                    }
                                    // onClickHandler={() =>
                                    //     handleReportSelect(report)
                                    // }
                                />
                            ))}
                    </Box>
                </Box>
            )}
        </Button>
    );
}

export default ReportDropDown;