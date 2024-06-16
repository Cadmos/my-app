import React, {ChangeEvent, useState} from "react";
import CharacterTypeMap from "../../types/CharacterTypeMap";
import CharacterType from "../../types/CharacterType";
import styles from "./ChakraSelect.module.css";

import {
    Box,
    IconButton,
    Select,
    SimpleGrid,
    useColorMode,
    Text, chakra, shouldForwardProp
} from "@chakra-ui/react";

import { MdArrowDropDown } from "react-icons/md";


type ChakraSelectProps = {
    options: string[];
    colorScheme?: string;
};

const ChakraSelect = (props : ChakraSelectProps) => {
    
    const [selectedValue, setSelectedValue] = useState<keyof typeof CharacterType | null>(null);
    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>): void => {
        const value = event.target.value as keyof typeof CharacterType;
        setSelectedValue(value);
    };
    return (
                <Select
                    icon={<MdArrowDropDown/>}
                    variant="filled"
                    placeholder="Themed filled select"
                    colorScheme={props.colorScheme || "teal"}
                    value={selectedValue ? CharacterTypeMap[selectedValue] : ""}
                    onChange={handleSelectChange}
                    color="black"
                    className={styles.ChakraSelect}
                >
                    {
                        props.options.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))
                    }
                </Select>
    );
};

export default ChakraSelect;