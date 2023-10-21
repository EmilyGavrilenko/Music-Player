// import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";

export default function PrimaryButton({
    children,
    variant,
    startIcon,
    disabled,
    onClick,
    loading
}) {
    let sx = {};
    let baseSx = {};

    if (variant === "primary") {
        sx = {
            "backgroundColor": "#8315f9",
            "&.Mui-disabled": {
                backgroundColor: "#8315f9" // Light grey background color
            }
        };
    } else if (variant === "secondary") {
        sx = {
            "color": "#8315f9",
            "borderColor": "#8315f9",
            "backgroundColor": "white",
            "&:hover": {
                backgroundColor: "#8315f9",
                color: "white"
            }
        };
    } else if (disabled) {
        sx = {
            "&.Mui-disabled": {
                color: "#A9A9A9", // Grey text color
                borderColor: "#DCDCDC", // Light grey border color
                backgroundColor: "#F5F5F5" // Light grey background color
            }
        };
    }

    return (
        <LoadingButton
            component="label"
            variant="contained"
            startIcon={startIcon}
            sx={[baseSx, sx]}
            disabled={disabled}
            onClick={onClick}
            loading={loading}
        >
            {children}
        </LoadingButton>
    );
}
