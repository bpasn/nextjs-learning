import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

interface SelectBoxProps {
    name?: string;
}

const SelectBox = ({
    name
}: SelectBoxProps) => {
    return (
        <Select name={name}>
            <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
            </SelectContent>
        </Select>
    )
}

export default SelectBox