import { IconButton, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

type ColorModeSwitcherProps = { justifySelf?: string };
export const ColorModeSwitcher = (props : ColorModeSwitcherProps) => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <IconButton
            size="md"
            fontSize="lg"
            aria-label={`Switch to ${colorMode === "light" ? "dark" : "light"} mode`}
            variant="ghost"
            color="current"
            marginLeft="2"
            onClick={toggleColorMode}
            icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
            {...props}
        />
    );
};
