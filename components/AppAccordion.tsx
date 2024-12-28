import React from 'react'
import { AccordionItem } from "@nextui-org/accordion";

interface AppAccordionProps {
    content: string;
    leading: string;
    key: any;
    title: string;
}


const AppAccordion = ({ content, leading, key, title }: AppAccordionProps) => {
    return (
        <AccordionItem key={key} aria-label={`Accordion ${key}`} title={title}>
            <p>{content}</p>
        </AccordionItem>
    )
}

export default AppAccordion