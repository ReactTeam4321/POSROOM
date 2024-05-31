import { Box, Typography } from "@mui/material";


import ReportTable from "../../Components/ReportTables/ReportTables";
import FilterBar from '../../Components/ReportTables/FilterBar'
function StocksReports() {
    const reportFilters = [
        {
            "field": "as_of_date",
            "value": "2024-05-03",
            "mandatory": "true"
        },
        {
            "field": "from_loc_id",
            "value": "001",
            "mandatory": "true"
        },
        {
            "field": "to_loc_id",
            "value": "001",
            "mandatory": true
        }
    ]
    
    const selectedReport ={
        "Id": "inv-001",
        "Name": "Stock Availability by Group"
    }
    
    const updatedRoutesConfig = [
        {
            "/userDashboard/Inventory": [],
            "/userDashboard/Purchases": [],
            "/userDashboard/Accounts": [],
            "/userDashboard/Sales": [],
            "/userDashboard/CRM": [],
            "/userDashboard/Payroll": [],
            "/userDashboard/Inventory/Reports": [
                {
                    "field_name": "as_of_date",
                    "field_value": "2024-05-03",
                    "mandatory_field": "true"
                },
                {
                    "field_name": "from_loc_id",
                    "field_value": "001",
                    "mandatory_field": "true"
                },
                {
                    "field_name": "to_loc_id",
                    "field_value": "006",
                    "mandatory_field": "true"
                }
            ],
            "/userDashboard/Accounts/Reports": [],
            "/userDashboard/Purchases/Reports": [],
            "/userDashboard/Sales/Reports": [],
            "/userDashboard/CRM/Reports": [],
            "/userDashboard/Payroll/Reports": []
        }
    ]

    const renderDefaultFilters = () => {
        if (
            reportFilters.length === 0 &&
            selectedReport &&
            updatedRoutesConfig
        ) {
            const routeConfig =
                updatedRoutesConfig[0] &&
                updatedRoutesConfig[0]["/userDashboard/Inventory/Reports"];

            if (routeConfig) {
                if (Array.isArray(routeConfig)) {
                    return routeConfig.map((filter, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: "flex",
                                gap: "0.2rem",
                                backgroundColor: "white",
                                padding: "0.3rem 0.8rem",
                                borderRadius: "20px",
                                border: "1px solid rgba(36, 87, 197, 0.2)",
                            }}
                        >
                            <Typography fontWeight="bold" fontSize="14px">
                                {filter}:
                            </Typography>{" "}
                            <Typography
                                sx={{
                                    fontWeight: "400",
                                    fontSize: "14px",
                                }}
                            >
                                {/* Provide default values based on the filter */}
                                {getDefaultFilterValue(filter)}
                            </Typography>
                        </Box>
                    ));
                }
            }
        }
        return null; // Return null if no default filters are found or if condition is false
    };

    const getDefaultFilterValue = (filter) => {
        switch (filter) {
            case "company_code":
                return "All";
            case "loc_id":
                return "001";
            case "asdate":
                return getCurrentDate();
            case "from_date":
                return "1900-01-01";
            case "to_date":
                return getCurrentDate();
            default:
                return "";
        }
    };

    const getCurrentDate = () => {
        const currentDate = new Date();
        return `${currentDate.getFullYear()}-${
            currentDate.getMonth() + 1
        }-${currentDate.getDate()}`;
    };

    return (
        <>
            <div style={{ backgroundColor: "#FAFBFC" }}>
            <FilterBar/>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        fontSize: "14px",
                        padding: "1rem 1.5rem",
                        fontWeight: "600",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            gap: "1rem",
                            justifyContent: "start",
                            flexWrap: "wrap",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            sx={{
                                fontFamily: "Roboto",
                                color: "rgba(36, 87, 197, 1)",
                                fontWeight: "400",
                            }}
                        >
                            <i>Applied Filters :</i>
                        </Box>
                        {/* If reportFilters length is 0, render default filters */}
                        {reportFilters.length === 0 && renderDefaultFilters()}
                        {/* Map through filters array and render JSX for each filter */}
                        {reportFilters &&
                            reportFilters.map((filter, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: "flex",
                                        gap: "0.2rem",
                                        backgroundColor: "white",
                                        padding: "0.3rem 0.8rem",
                                        borderRadius: "20px",
                                        border: "1px solid rgba(36, 87, 197, 0.2)",
                                    }}
                                >
                                    {filter.field === "date_from" ? (
                                        <Box
                                            sx={{
                                                display: "flex",
                                                gap: "0.2rem",
                                            }}
                                        >
                                            <Typography
                                                fontWeight="bold"
                                                fontSize="14px"
                                            >
                                                Date From:
                                            </Typography>{" "}
                                            <Typography
                                                sx={{
                                                    fontWeight: "400",
                                                    fontSize: "14px",
                                                }}
                                            >
                                                {filter.value}
                                            </Typography>
                                        </Box>
                                    ) : filter.field === "date_to" ? (
                                        <Box
                                            sx={{
                                                display: "flex",
                                                gap: "0.2rem",
                                            }}
                                        >
                                            <Typography
                                                fontWeight="bold"
                                                fontSize="14px"
                                            >
                                                Date to:
                                            </Typography>{" "}
                                            <Typography
                                                sx={{
                                                    fontWeight: "400",
                                                    fontSize: "14px",
                                                }}
                                            >
                                                {filter.value}
                                            </Typography>
                                        </Box>
                                    ) : (
                                        <Box
                                            sx={{
                                                display: "flex",
                                                gap: "0.2rem",
                                            }}
                                        >
                                            <Typography
                                                fontWeight="bold"
                                                fontSize="14px"
                                            >
                                                {filter.field}
                                                :
                                            </Typography>{" "}
                                            <Typography
                                                sx={{
                                                    fontWeight: "400",
                                                    fontSize: "14px",
                                                }}
                                            >
                                                {filter.value}
                                            </Typography>
                                        </Box>
                                    )}
                                </Box>
                            ))}
                    </Box>
                </Box>

                <Box sx={{ margin: "0 auto" }}>
                    <ReportTable />
                </Box>
            </div>
        </>
    );
}

export default StocksReports;