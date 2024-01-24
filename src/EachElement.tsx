'use client';
import { Children, useEffect, useState } from "react";

interface EachElementProps {
    render: (item: any, index: number) => React.ReactNode,
    of: any[]
}
export const EachElement = ({ render, of }: EachElementProps) => Children.toArray(of.map((item, index) => render(item, index)));